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
			meta: {
				title: 'Sangawa Project | Guests',
			},
			pageContent: [
				{
					id: 'f07adbb1-5095-419e-b800-64f9ea221f4a',
					content: {
						component: 'Section',
						prop__backdropUrl: 'Tekko-Japanese-Anime-Convention-Dealers-Room.jpg',
					},
					childContent: [
						{
							id: 'cbed1708-ac8b-466e-8658-eac11ca97792',
							content: {
								component: 'Image',
								prop__src: '/images/guests/nancy_kepner_2025.png',
								prop__alt: 'Picture of Nancy Kepner',
							},
						},
						{
							id: 'dde7b21c-14d0-4aab-85c3-ee7df10f7eff',
							content: {
								component: 'Text',
								prop__text:
									'Nancy Kepner returns, equipped with her guitar and hilariously clever lyrics! You can also find her all year round on her YouTube channel  HeartfeltHumor delighting viewers with original compositions, live performances, and the occasional music video. Welcome back, Nancy!',
							},
						},
						{
							id: 'f8a5e6d3-2b7c-4e9d-9e4f-1a3b2c4d5e6f',
							content: {
								component: 'Image',
								prop__src: '/images/guests/charles_dunbar_2025.png',
								prop__alt: 'Picture of Charles Dunbar',
							},
						},
						{
							id: '5b47f36c-eca4-45e8-b57a-14ae368823b0',
							content: {
								component: 'Text',
								prop__text:
									'Charles Dunbar is a graduate of Hunter College, CUNY, where he received a BA in Religion and Anthropology and an MA in Cultural Anthropology. His thesis, Pilgrimage, Pageantry and Fan Communities, was published in 2011 and focused on anime convention participation, including spending habits, cosplay, demographics, communal behavior and convention culture.',
							},
						},
					],
				},
			],
		};
	});
};
