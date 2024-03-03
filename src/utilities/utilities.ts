import { Content } from '@/api-client/api-client';
import { UUID } from 'crypto';

export type TypedObject<T> = { [key: PropertyKey]: T };
export type UnknownObj = TypedObject<unknown>;

export type Result<T> = [Error, undefined] | [undefined, T];

export const safeTry = <T>(fn: Promise<T> | (() => T)): Result<T> | Promise<Result<T>> => {
	let error: Error | undefined;
	let result: T | undefined;
	const handleErr = (err: unknown) => {
		if (err instanceof Error) {
			error = err;
		} else if (typeof err === 'string') {
			error = new Error(err);
		} else {
			console.error(err);
			error = new Error('Something went wrong.');
		}
		return error;
	};
	if (typeof fn === 'function') {
		try {
			return [undefined, fn()];
		} catch (err) {
			return [handleErr(err), undefined];
		}
	} else if (fn instanceof Promise) {
		return new Promise((resolve) => {
			fn.then((val) => {
				result = val;
			})
				.catch((err) => {
					handleErr(err);
				})
				.finally(() => {
					if (result) resolve([undefined, result]);
					const err = error ?? new Error('Failed to get result.');
					resolve([err, undefined]);
				});
		});
	}
	error = new Error(`safeTry() expects a function or promise, but got ${fn}`);
	return [error, undefined];
};

export const getTypedContent = <T extends {}>(content: Content[] | undefined): Content<T>[] => {
	if (typeof content === 'undefined') {
		return [{ content: {} }] as Content<T>[];
	}
	return content as Content<T>[];
};

type RawContent = {
	id: UUID;
	content: { [prop: string]: string };
	childIds: UUID[];
};

type RawResponse = {
	meta: {
		title: string;
	};
	content: {
		id: UUID;
		content: RawContent;
		childIds: UUID[];
	}[];
	topLevelIds: UUID[];
};

type ProcessedResponse = {
	meta: {
		title: string;
	};
	pageContent: Content[];
};

export const nestFlatResponse = (response: RawResponse): ProcessedResponse => {
	const { content, topLevelIds } = response;
	const contentMap = content.reduce(
		(acc, { id, content, childIds }) => {
			acc[id] = { id, content, childIds };
			return acc;
		},
		{} as Record<UUID, { id: UUID; content: RawContent; childIds: UUID[] }>,
	);
	const nest = (id: UUID): Content => {
		const { content, childIds } = contentMap[id];
		return {
			id: content.id,
			content: content.content,
			childContent: childIds.map(nest),
		};
	};
	return {
		meta: response.meta,
		pageContent: topLevelIds.map(nest),
	};
};
