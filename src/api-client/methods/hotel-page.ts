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
			meta: {
				title: 'Sangawa Project | Hotel',
			},
			pageContent: [
				{
					id: '2b1dee42-bd37-40f5-86f8-2b99d420c76f',
					content: {
						component: 'Section',
						prop__backdropUrl: 'Tekko-Japanese-Anime-Convention-Dealers-Room.jpg',
					},
					childContent: [
						{
							id: 'd33888ba-5de0-4bf5-a886-535c77beb01c',
							content: {
								component: 'InfoLayout',
							},
							childContent: [
								{
									id: '30f2409c-149b-4049-8178-e82676931ec9',
									content: {
										component: 'Info',
										prop__heading: 'Doubletree Hotel',
									},
									childContent: [
										{
											id: 'd9203aa9-3871-4591-af46-550d2c113f19',
											content: {
												component: 'Text',
												prop__text:
													'Book your stay at the [Doubletree Hotel](https://maps.app.goo.gl/SNE8rC5gJqXiCbLT8) in downtown Pittsburgh!\n\n## [Book Now!](https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=PITDTDT&groupCode=CDTSGW&arrivaldate=2024-02-08&departuredate=2024-02-11&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT)',
											},
										},
									],
								},
							],
						},
					],
				},
			],
		};
	});
};
