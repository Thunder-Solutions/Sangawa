import { Result, safeTry } from '@/utilities/utilities';

export type ContentSet = {
	[collection: string]: {
		[key: string]: string,
	}[],
};

type ContentMap = { [set: string]: ContentSet };

// this represents our content for now. Should be easy enough to swap in a CMS later, with this setup.
const contentMap: ContentMap = {
	global: {
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
	},
};

export const fetchGlobalContent = async (): Promise<Result<ContentMap>> => {
	return safeTry(() => {
		return contentMap ?? {};
	});
};

const cache: {
	content: null | ContentMap,
} = {
	content: null,
};

const document = typeof window !== 'undefined' ? window.document : null;

export const getContent = (collection: string): ContentSet => {
	if (cache.content === null) {
		const globalJSON = document?.querySelector('#GlobalContent')?.textContent;
		console.log(globalJSON);
		cache.content = JSON.parse(globalJSON ?? '{}');
	}
	return cache.content?.[collection] ?? {};
};
