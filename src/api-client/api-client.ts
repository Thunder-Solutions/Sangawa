import { UUID } from 'crypto';
import { fetchGlobalContent } from './global';
import { fetchHomePageContent } from './home-page';

export type Content<T = { [key: string]: string }> = {
	id?: UUID;
	content: T;
	childContent?: Content[];
};

export type ContentSet = {
	[key: string]: Content[];
};

/**
 * Async methods to request content from an API.
 */
export const apiClient = {
	fetchGlobalContent,
	fetchHomePageContent,
};
