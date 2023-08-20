import { Content } from '@/api-client/api-client';

export type TypedObject<T> = { [key: PropertyKey]: T };
export type UnknownObj = TypedObject<unknown>;

export type Result<T> = [Error | undefined, T | undefined];

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
	};
	if (typeof fn === 'function') {
		try {
			result = fn();
		} catch (err) {
			handleErr(err);
		}
		return [error, result];
	} else if (fn instanceof Promise) {
		return new Promise((resolve) => {
			fn.then(val => {
				result = val;
			}).catch((err) => {
				handleErr(err);
			}).finally(() => {
				resolve([error, result]);
			});
		});
	}
	error = new Error(`safeTry() expects a function or promise, but got ${fn}`);
	return [error, result];
};

export const getTypedContent = <T extends {}>(
	content: Content[] | undefined,
): Content<T>[] => {
	if (typeof content === 'undefined') {
		return [{ content: {} }] as Content<T>[];
	}
	return content as Content<T>[];
};
