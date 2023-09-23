import { Result, safeTry } from '@/utilities/utilities';
import { ContentSet } from '../api-client';

/**
 * Response is mocked for now. Should be easy enough to swap for a CMS response later.
 *
 * To generate a new ID, run `node` in the terminal, then run `crypto.randomUUID()`.
 */
export const fetchRulesPageContent = async (): Promise<Result<ContentSet>> => {
	return safeTry<any>(() => {
		return {
			meta: [
				{
					id: 'd044e1c1-f7fc-41a7-8365-241f759b0be2',
					content: {
						page: 'rules',
						title: 'Sangawa Project | Rules',
					},
				},
			],
			pageContent: [
				{
					id: '4cd47d8d-dfa0-4c4c-9c97-757786576386',
					content: {
						component: 'Section',
						prop__backdropUrl: 'Tekko-Japanese-Anime-Convention-Dealers-Room.jpg',
					},
					childContent: [
						{
							id: '1831d0c0-74e3-4d26-af97-fb1c6cfe4a84',
							content: {
								component: 'Text',
								prop__text: 'This is the Rules page',
							},
						},
					],
				},
			],
		};
	});
};
