import { Result, safeTry } from '@/utilities/utilities';
import { ContentSet } from '../api-client';

/**
 * Response is mocked for now. Should be easy enough to swap for a CMS response later.
 *
 * To generate a new ID, run `node` in the terminal, then run `crypto.randomUUID()`.
 */
export const fetchSchedulePageContent = async (): Promise<Result<ContentSet>> => {
	return safeTry<any>(() => {
		return {
			meta: {
				title: 'Sangawa Project | Schedule',
			},
			pageContent: [
				{
					id: '2ae8eab1-fe01-4ba6-8d98-a9f89372de8e',
					content: {
						component: 'Section',
						prop__backdropUrl: 'Tekko-Japanese-Anime-Convention-Dealers-Room.jpg',
					},
					childContent: [
						{
							id: '304e14d1-b90f-4f5a-a1ed-bda96e15ade6',
							content: {
								component: 'Text',
								prop__text: 'This is the Schedule page',
							},
						},
					],
				},
			],
		};
	});
};
