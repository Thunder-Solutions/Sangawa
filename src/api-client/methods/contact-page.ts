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
						title: 'Sangawa Project | Contact Us',
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
								prop__text:
									"If you have a general question about Sangawa Project please don't hesitate to reach out. For specific questions, please email the relevant department.",
							},
						},
						{
							id: 'f32fb87c-995b-49e0-a676-1a284569d323',
							content: {
								component: 'InfoLayout',
							},
							childContent: [
								{
									id: '730d8a6e-a07c-4475-a904-601135a1364e',
									content: {
										component: 'Info',
										prop__heading: 'General Contact',
									},
									childContent: [
										{
											id: '7271073c-874e-4b79-91dc-501cc4c323f2',
											content: {
												component: 'Text',
												prop__text:
													'## Pittsburgh Japanese Culture Society\n\nPhone: 866-767-9708\n\nFax: 724-287-6899\n\n[board@pittjcs.org](mailto:board@pittjcs.org)',
											},
										},
									],
								},
								{
									id: 'f5261942-7cbc-40c4-aeb6-1eb96f3a2586',
									content: {
										component: 'Info',
										prop__heading: 'Department List',
									},
									childContent: [
										{
											id: 'ba652a8b-ec5f-4cd4-b003-94bb4c5d869d',
											content: {
												component: 'Text',
												prop__text:
													'Game Room: [gameroom@pittjcs.org](mailto:gameroom@pittjcs.org)\n\nGuidebook: [guidebook@pittjcs.org](mailto:guidebook@pittjcs.org)\n\nHarassment Helpline: [hro@pittjcs.org](mailto:hro@pittjcs.org)\n\nMarketing: [marketing@pittjcs.org](mailto:marketing@pittjcs.org)\n\nPanels: [panels@pittjcs.org](mailto:panels@pittjcs.org)\n\nPress: [press@pittjcs.org](mailto:press@pittjcs.org)\n\nPublic Relations: [r@pittjcs.org](mailto:r@pittjcs.org)\n\nOperations: [ops@pittjcs.org](mailto:ops@pittjcs.org)\n\nRegistration: [registration@pittjcs.org](mailto:registration@pittjcs.org)\n\nRPG/CCG: [rpgccg@pittjcs.org](mailto:rpgccg@pittjcs.org)\n\nSecurity: [security@pittjcs.org](mailto:security@pittjcs.org)\n\nVendors: [vendors@pittjcs.org](mailto:vendors@pittjcs.org)',
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
