import { Result, safeTry } from '@/utilities/utilities';
import { ContentSet } from '../api-client';

/**
 * Response is mocked for now. Should be easy enough to swap for a CMS response later.
 *
 * To generate a new ID, run `node` in the terminal, then run `crypto.randomUUID()`.
 */
export const fetchHomePageContent = async (): Promise<Result<ContentSet>> => {
	return safeTry<any>(() => {
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
							id: '0aa5d08b-c281-47d6-bc15-5b3b9746e166',
							content: {
								component: 'Text',
								prop__text:
									'The Sangawa Project, presented by the Pittsburgh Japanese Culture Society, is an 18+ convention in which fans can gather together to discuss their favorite anime, both new and old, challenge themselves in our retro gaming room, show off their best cosplay, attend awesome panels and just relax in a more mature environment. Additionally, Sangawa provides unique content such as the Taste of Japan which allows attendees (over the age of 21) to sample a variety of Japanese libations, including Saké, Shōchū and cultural beers!',
							},
						},
						{
							id: 'f7296397-b4f3-4983-8ca5-337951afdd21',
							content: { component: 'CtaLayout' },
							childContent: [
								{
									id: 'edb0588c-de56-4b5b-82a8-951e800686d3',
									content: {
										component: 'CtaLink',
										prop__icon: 'ticket',
										prop__href: '/registration',
									},
									childContent: [
										{
											id: 'b03636b7-88fb-4bcb-8b9d-52641b07d8a9',
											content: { __text: 'Register Now!' },
										},
									],
								},
								{
									id: 'b6621967-fcaf-45fc-8f3e-e36cbe39a07f',
									content: {
										component: 'CtaLink',
										prop__icon: 'bed',
										prop__href: '/hotel',
									},
									childContent: [
										{
											id: 'eef89c7f-f948-4ce0-b9d3-7454bf1768a4',
											content: { __text: 'Book a Room!' },
										},
									],
								},
								{
									id: '8cee3990-f21d-4d82-ab2f-e4555465dde0',
									content: {
										component: 'CtaLink',
										prop__icon: 'footsteps',
										prop__href: '/events',
									},
									childContent: [
										{
											id: 'ea8c3d15-cec6-4844-9d2a-e063b41c1554',
											content: { __text: 'Explore Sangawa!' },
										},
									],
								},
							],
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
										prop__heading: 'Hours',
									},
									childContent: [
										{
											id: '7271073c-874e-4b79-91dc-501cc4c323f2',
											content: {
												component: 'Text',
												prop__text: `## Friday
12 PM (panels) 1 PM - 1 AM

## Saturday
11 AM - 1 AM

## Sunday
11 AM - 4 PM`,
											},
										},
									],
								},
								{
									id: 'f5261942-7cbc-40c4-aeb6-1eb96f3a2586',
									content: {
										component: 'Info',
										prop__heading: 'Location',
									},
									childContent: [
										{
											id: '7271073c-874e-4b79-91dc-501cc4c323f2',
											content: {
												component: 'Text',
												prop__text: `One Bigelow Sq, Pittsburgh, PA 15219

---

Sangawa will be held in the Doubletree Hotel in Downtown Pittsburgh on February 9th&ndash;11th, 2024.`,
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
