import { Result, safeTry } from '@/utilities/utilities';
import { ContentSet } from '../api-client';

/**
 * Response is mocked for now. Should be easy enough to swap for a CMS response later.
 *
 * To generate a new ID, run `node` in the terminal, then run `crypto.randomUUID()`.
 */
export const fetchContactPageContent = async (): Promise<Result<ContentSet>> => {
	return safeTry<any>(() => {
		return {
			meta: [
				{
					id: 'ebe897c3-7819-4857-a5be-03c7e6c20fbd',
					content: {
						page: 'contact',
						title: 'Sangawa Project | Contact',
					},
				},
			],
			pageContent: [
				{
					id: '87d9c951-07ac-4b2f-8e9c-3dcb59759aa2',
					content: {
						component: 'Section',
						prop__backdropUrl: 'Tekko-Japanese-Anime-Convention-Dealers-Room.jpg',
					},
					childContent: [
						{
							id: 'aac51910-06f6-411e-ad15-082aafab6970',
							content: {
								component: 'Text',
								prop__text: 'This is the Contact page',
							},
						},
					],
				},
			],
		};
	});
};
