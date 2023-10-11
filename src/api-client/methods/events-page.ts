import { Result, safeTry } from '@/utilities/utilities';
import { ContentSet } from '../api-client';

/**
 * Response is mocked for now. Should be easy enough to swap for a CMS response later.
 *
 * To generate a new ID, run `node` in the terminal, then run `crypto.randomUUID()`.
 */
export const fetchEventsPageContent = async (): Promise<Result<ContentSet>> => {
	return safeTry<any>(() => {
		return {
			meta: [
				{
					id: '0b2019f3-4011-4b63-816e-6edaeb045558',
					content: {
						page: 'events',
						title: 'Sangawa Project | Events',
					},
				},
			],
			pageContent: [
				{
					id: '5b39097c-6c66-475c-b058-23cfa530858d',
					content: {
						component: 'Section',
						prop__backdropUrl: 'Tekko-Japanese-Anime-Convention-Dealers-Room.jpg',
					},
					childContent: [
						{
							id: 'e5b7ba0a-202b-4b1f-b725-956f20c9f28e',
							content: {
								component: 'Text',
								prop__text: 'Events to be announced soon, stay tuned!',
							},
						},
					],
				},
			],
		};
	});
};
