import { Result, safeTry } from '@/utilities/utilities';
import { ContentSet } from '../api-client';

/**
 * Response is mocked for now. Should be easy enough to swap for a CMS response later.
 *
 * To generate a new ID, run `node` in the terminal, then run `crypto.randomUUID()`.
 */
export const fetchPressPageContent = async (): Promise<Result<ContentSet>> => {
	return safeTry<any>(() => {
		return {
			meta: [
				{
					id: '31407674-67a7-4289-aaed-f9cba229a9dc',
					content: {
						page: 'press',
						title: 'Sangawa Project | Press',
					},
				},
			],
			pageContent: [
				{
					id: '2da3c91a-b388-4332-80f6-96a09000500d',
					content: {
						component: 'Section',
						prop__backdropUrl: 'Tekko-Japanese-Anime-Convention-Dealers-Room.jpg',
					},
					childContent: [
						{
							id: '26f768d2-3a89-42ef-b2d8-2b8effc8cb2a',
							content: {
								component: 'Text',
								prop__text: 'Press pass applications are not yet open, check back soon!',
							},
						},
					],
				},
			],
		};
	});
};
