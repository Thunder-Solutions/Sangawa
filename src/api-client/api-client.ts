import { Result, safeTry } from '@/utilities/utilities';

type ContentSet = {
	[collection: string]: {
		[key: string]: string,
	}[],
};

type ContentMap = { [family: string]: ContentSet };

// this represents our content for now. Should be easy enough to swap in a CMS later, with this setup.
const contentMap: ContentMap = {
	menuBar: {
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

export const getContent = async (collection: keyof typeof contentMap): Promise<Result<ContentSet>> => {
	return safeTry(() => {
		return contentMap[collection] ?? [];
	});
};
