import { Result, safeTry } from '@/utilities/utilities';
import { ContentSet } from './api-client';

/**
 * Response is mocked for now. Should be easy enough to swap for a CMS response later.
 *
 * To generate a new ID, run `node` in the terminal, then run `crypto.randomUUID()`.
 */
export const fetchHomePageContent = async (): Promise<Result<ContentSet>> => {
	return safeTry(() => {
		return {
			meta: [
				{
					id: '98fcc94a-d8e9-4c7f-b400-19a3faffc09d',
					content: {
						page: 'home',
						title: 'Sangawa Project',
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
							id: 'c8eb4522-d8e2-427a-9a57-bcd657fe7345',
							content: { component: 'CtaLayout' },
							childContent: [
								{
									id: 'edb0588c-de56-4b5b-82a8-951e800686d3',
									content: {
										component: 'CtaLink',
										prop__icon: 'ticket',
										prop__href: '/register',
									},
									childContent: [
										{
											id: 'b03636b7-88fb-4bcb-8b9d-52641b07d8a9',
											content: { component: '__text', __text: 'Register Now!' },
										},
									],
								},
								{
									id: 'b6621967-fcaf-45fc-8f3e-e36cbe39a07f',
									content: {
										component: 'CtaLink',
										prop__icon: 'bed',
										prop__href: '/hotels',
									},
									childContent: [
										{
											id: 'eef89c7f-f948-4ce0-b9d3-7454bf1768a4',
											content: { component: '__text', __text: 'Book a Room!' },
										},
									],
								},
								{
									id: '8cee3990-f21d-4d82-ab2f-e4555465dde0',
									content: {
										component: 'CtaLink',
										prop__icon: 'footsteps',
										prop__href: '/explore',
									},
									childContent: [
										{
											id: 'ea8c3d15-cec6-4844-9d2a-e063b41c1554',
											content: { component: '__text', __text: 'Explore Sangawa!' },
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