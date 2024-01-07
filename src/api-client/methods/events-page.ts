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
							id: 'fac3352b-7380-4b26-aadf-b05eac75cab2',
							content: {
								component: 'Image',
								prop__src: '/images/events/taste.png',
								prop__alt: 'Taste of Japan - Explained',
							},
						},
						{
							id: '0d935233-ff0f-4244-b2ac-3ccf7c828b49',
							content: {
								component: 'Text',
								prop__text: `
Attention all anime enthusiasts aged **21 and above**!

The exclusive Taste of Japan room is making its return at Sangawa Project!

This event is available only to **Jōnin & Kage** badge Upgrades. 

Dive into the Taste of Japan experience:

* Indulge in a selection of Japanese sake, whiskey, soju, and more

* Learn information on each drink while you enjoy it!

* Saturday muli hour access lets you enjoy without missing any convention content.

**Limited to 100 lucky attendees**, so grab your tickets swiftly!
Hurry, secure your spot for this exclusive tasting extravaganza! Don't miss out on this unique opportunity at Sangawa Project!
Stay tuned for updates on this year's beverage selections! Let's elevate your anime experience with a Taste of Japan!`,
							},
						},
						{
							id: 'ff304603-1b77-4e87-9e03-0e8a8837e025',
							content: {
								component: 'Image',
								prop__src: '/images/events/social_tldr.png',
								prop__alt: 'Social - What is it?',
							},
						},
						{
							id: '5ab81d46-4300-4374-848c-99cf43bebfd2',
							content: {
								component: 'Text',
								prop__text: `
Kick off your Sangawa weekend in style at **The Sangawa Social!**

Join us on **Friday Feb 9th** for a night of:
								
* Mingling with old and new friends
								
* Themed libations that set the tone for an epic weekend
								
* Try Mystic Mixtures' famed Health Potion cocktail!
								
* Exclusive to Chūnin & Kage upgrade holders
								
* Showcase your 2024 Sangawa Tumbler in style
								
This is your chance to start the fun early! Don't miss out!`,
							},
						},
					],
				},
			],
		};
	});
};
