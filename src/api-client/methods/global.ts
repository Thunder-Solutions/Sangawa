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
				{ id: '94be213a-141c-476a-96ad-4783708209e9', content: { text: 'Guests', href: '/guests' } },
				{ id: 'cd51d2ee-2809-466e-905f-248f7b8717c5', content: { text: 'Events', href: '/events' } },
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
