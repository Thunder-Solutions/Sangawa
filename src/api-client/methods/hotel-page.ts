import { Result, safeTry } from '@/utilities/utilities';
import { ContentSet } from '../api-client';

/**
 * Response is mocked for now. Should be easy enough to swap for a CMS response later.
 *
 * To generate a new ID, run `node` in the terminal, then run `crypto.randomUUID()`.
 */
export const fetchHotelPageContent = async (): Promise<Result<ContentSet>> => {
	return safeTry<any>(() => {
		return {
			meta: [
				{
					id: '601cec66-3cea-493f-9e5f-92ac33dae522',
					content: {
						page: 'hotel',
						title: 'Sangawa Project | Hotel',
					},
				},
			],
			pageContent: [
				{
					id: '2b1dee42-bd37-40f5-86f8-2b99d420c76f',
					content: {
						component: 'Section',
						prop__backdropUrl: 'Tekko-Japanese-Anime-Convention-Dealers-Room.jpg',
					},
					childContent: [
						{
							id: '30f2409c-149b-4049-8178-e82676931ec9',
							content: {
								component: 'Text',
								prop__text: 'This is the Hotel page',
							},
						},
					],
				},
			],
		};
	});
};
