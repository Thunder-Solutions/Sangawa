import { Result, safeTry } from '@/utilities/utilities';

export type ContentSet = {
	[collection: string]: {
		[key: string]: string,
	}[],
};

// this represents our content for now. Should be easy enough to swap in a CMS later, with this setup.
const global: ContentSet = {
	title: [
		{ text: 'Sangawa Project' },
	],
	nav: [
		{ text: 'Home', href: '/' },
		{ text: 'About', href: '/about' },
		{ text: 'Guests', href: '/guests' },
		{ text: 'Events', href: '/events' },
	],
	register: [
		{ text: 'REGISTER', href: '/registration' },
	],
	twitter: [
		{ text: 'Twitter', href: 'https://twitter.com/sangawaproject' },
	],
	facebook: [
		{ text: 'Facebook', href: 'https://facebook.com/sangawaproject' },
	],
};

export const fetchGlobalContent = async (): Promise<Result<ContentSet>> => {
	return safeTry(() => {
		return global ?? {};
	});
};

const cache: {
	content: null | { [set: string]: ContentSet },
} = {
	content: null,
};

const document = typeof window !== 'undefined' ? window.document : null;

export const getContent = (collection: string): ContentSet => {
	if (cache.content === null) {
		const globalJSON = document?.querySelector('#GlobalContent')?.textContent;
		cache.content = JSON.parse(globalJSON ?? '{}');
	}
	return cache.content?.[collection] ?? {};
};
