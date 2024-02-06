import { Result, safeTry } from '@/utilities/utilities';
import { ContentSet } from '../api-client';

/**
 * Response is mocked for now. Should be easy enough to swap for a CMS response later.
 *
 * To generate a new ID, run `node` in the terminal, then run `crypto.randomUUID()`.
 */
export const fetchGlobalContent = async (): Promise<Result<ContentSet>> => {
	return safeTry(() => {
		return {
			title: [{ id: 'bbdba644-9f04-44b3-bac7-4a84d4577e64', content: { text: 'Sangawa Project' } }],
			nav: [
				{ id: '81a73e65-4cbc-42e1-b73a-14ee1a6f6188', content: { text: 'Home', href: '/' } },
				{
					id: 'cd51d2ee-2809-466e-905f-248f7b8717c5',
					content: { text: "What's Happening", href: '#events' },
					childContent: [
						{ id: '52d81da9-5324-4a99-857a-eef263d99345', content: { text: 'Events', href: '/events' } },
						{ id: '94be213a-141c-476a-96ad-4783708209e9', content: { text: 'Guests', href: '/guests' } },
						{ id: '4722e7f0-3160-4c80-aba4-00f4ba885b2c', content: { text: 'Schedule', href: '/schedule' } },
					],
				},
				{
					id: '48bf8456-ba1f-4917-b594-bbbc99346eed',
					content: { text: 'About', href: '#about' },
					childContent: [
						{ id: '52d81da9-5324-4a99-857a-eef263d99345', content: { text: 'Contact Us', href: '/contact-us' } },
						{ id: '4722e7f0-3160-4c80-aba4-00f4ba885b2c', content: { text: 'Media & Press', href: '/press' } },
						{
							id: '9bb12ac3-592d-477c-8ded-2aef0930dac2',
							content: { text: 'Hotel Reservations', href: '/hotel' },
						},
						{ id: 'f02e442e-b6ae-47c8-a04e-ad2e86fdf0b1', content: { text: 'Rules', href: '/rules' } },
					],
				},
			],
			sitemap: [
				{
					id: '2ad9f305-b522-4783-a73e-69a14bd9c613',
					content: { text: 'Sangawa Project', href: '/' },
					childContent: [
						{ id: '72c116cb-2a92-41db-97a0-f4d21cd48569', content: { text: 'Guests', href: '/guests' } },
						{ id: '989f0b0e-3acf-4378-b546-59f8334b30f9', content: { text: 'Register', href: '/registration' } },
					],
				},
				{
					id: '348e7269-b414-4d1e-882e-cca00b8711c5',
					content: { text: 'About', href: '/about' },
					childContent: [
						{ id: '5682c0de-feb6-4912-9686-8b8598a2dbf9', content: { text: 'Rules', href: '/rules' } },
						{ id: 'c6d011ca-0f1e-4146-8754-a5e9a0e4acde', content: { text: 'Media & Press', href: '/press' } },
						{ id: 'acf04974-6aa2-4524-9977-6494af2a2eda', content: { text: 'Contact Us', href: '/contact-us' } },
						{
							id: 'baab2975-e334-4cc4-807b-2153f4a66ea5',
							content: { text: 'Hotel Reservations', href: '/hotel' },
						},
					],
				},
				{
					id: 'ca2f0e43-cb9d-42f9-97ad-0f5ec5ec3a13',
					content: { text: 'Events', href: '/events' },
					childContent: [
						{
							id: '9fd46d9c-f853-48f6-9cf0-7191948ea932',
							content: { text: 'Taste of Japan', href: '/events#tasteofjapan' },
						},
						{
							id: '4ef49202-f09c-4f73-bff9-100804dcae06',
							content: { text: 'Sangawa Social', href: '/events#sangawasocial' },
						},
						{
							id: '8d8e97af-a4dd-4b39-afc6-a30f71213d89',
							content: { text: 'Video Games', href: '/events#videogames' },
						},
						{
							id: '182ddbe3-9312-4fdf-80bb-8ce6cdd2aef9',
							content: { text: 'Tabletop Room', href: '/events#tabletoproom' },
						},
					],
				},
			],
			register: [{ id: '3dc3891a-8179-4616-a8b9-43e9084ef5bf', content: { text: 'REGISTER', href: '/registration' } }],
			twitter: [
				{
					id: 'dc9faad1-5708-4844-a6bb-cc7b46e4e10b',
					content: { text: 'Twitter', href: 'https://twitter.com/sangawaproject' },
				},
			],
			facebook: [
				{
					id: 'b4166fa5-c4c2-40bf-8e30-36df09dea1a4',
					content: { text: 'Facebook', href: 'https://facebook.com/sangawaproject' },
				},
			],
		};
	});
};
