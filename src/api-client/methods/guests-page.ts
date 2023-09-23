import { Result, safeTry } from '@/utilities/utilities';
import { ContentSet } from '../api-client';

/**
 * Response is mocked for now. Should be easy enough to swap for a CMS response later.
 *
 * To generate a new ID, run `node` in the terminal, then run `crypto.randomUUID()`.
 */
export const fetchGuestsPageContent = async (): Promise<Result<ContentSet>> => {
	return safeTry<any>(() => {
		return {
			meta: [
				{
					id: '98fcc94a-d8e9-4c7f-b400-19a3faffc09d',
					content: {
						page: 'guests',
						title: 'Sangawa Project | Guests',
					},
				},
			],
			pageContent: [
				{
					id: 'c8eb4522-d8e2-427a-9a57-bcd657fe7345',
					content: {
						component: 'Section',
						prop__backdropUrl: 'Tekko-Japanese-Anime-Convention-Dealers-Room.jpg',
					},
					childContent: [
						{
							id: '0aa5d08b-c281-47d6-bc15-5b3b9746e166',
							content: {
								component: 'Text',
								prop__text: 'This is the guests page',
							},
						},
					],
				},
			],
		};
	});
};
