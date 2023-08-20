import { Result, safeTry } from '@/utilities/utilities';

export type Content<T = { [key: string]: string }> = {
	content: T,
	children?: Content[],
};

export type ContentSet = {
	[key: string]: Content[],
};

// this represents our content for now. Should be easy enough to swap in a CMS later, with this setup.
const global: ContentSet = {
	title: [
		{ content: { text: 'Sangawa Project' } },
	],
	nav: [
		{ content: { text: 'Home', href: '/' } },
		{
			content: { text: 'About', href: '#about' },
			children: [
				{ content: { text: 'Contact Us', href: '/contact-us' } },
				{ content: { text: 'Media & Press', href: '/press' } },
				{ content: { text: 'Hotel Reservations', href: '/hotel-reservations' } },
				{ content: { text: 'Rules', href: '/rules' } },
			],
		},
		{ content: { text: 'Guests', href: '/guests' } },
		{ content: { text: 'Events', href: '/events' } },
	],
	register: [
		{ content: { text: 'REGISTER', href: '/registration' } },
	],
	twitter: [
		{ content: { text: 'Twitter', href: 'https://twitter.com/sangawaproject' } },
	],
	facebook: [
		{ content: { text: 'Facebook', href: 'https://facebook.com/sangawaproject' } },
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
		cache.content = JSON.parse(globalJSON ?? JSON.stringify({ global }));
	}
	return cache.content?.[collection] ?? global;
};
