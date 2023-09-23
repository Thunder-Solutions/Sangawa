import { fetchGuestsPageContent } from './methods/guests-page';
import { fetchHomePageContent } from './methods/home-page';
import { fetchGlobalContent } from './global';
import { UUID } from 'crypto';

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
	fetchGuestsPageContent,
};
