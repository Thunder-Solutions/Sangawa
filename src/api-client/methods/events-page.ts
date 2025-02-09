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
			meta: {
				title: 'Sangawa Project | Events',
			},
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

* Saturday multi hour access lets you enjoy without missing any convention content.

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
						{
							id: '98e68154-1200-4332-a680-322e07b5150c',
							content: {
								component: 'Image',
								prop__src: '/images/events/Casual_Cosplay_Contest.png',
								prop__alt: 'Casual Cosplay Contest?',
							},
						},
						{
							id: '4f8ae60d-6d14-4473-ae23-00a172c355dc',
							content: {
								component: 'Text',
								prop__text: `
Sangawa's **Casual Cosplay Contest** Returns! Did you handcraft a wearable work of art? Gather
a cosplay coordinate from your closet? Any costume with user creativity is encouraged to enter!

Rules:

1) All entrants must have a valid Sangawa Project badge. Sangawa Project staff and guests are not permitted to compete.

2) Costumes may be from any source including original characters. Reference images are encouraged, but not required.

3) All costumes must display creativity from the entrant. This means pieces are either hand crafted, modified, or individually gathered items (‘closet’ cosplay.)
Costumes purchased as a set or fully commissioned costumes are not permitted to enter. Costumes that have previously won awards are also ineligible.
Judging is done based on the cosplay only, physically looking like or acting like the character are not considered criteria.

4) Group entries of up to four people are permitted. All members must either be from the same media or linked by a common theme. 
Prize distribution is up to the group, additional prizes will not be given. Only one sign up form per group. The person who submits 
the sign up form is responsible for communicating with the group. 

5) Pre-con sign ups will be taken on Eventeny. Additional time slots will be available at con. All entrants must check in 
between 1-2 PM at the Hall Cosplay room to receive their judging times.

6) Judging will be on Saturday afternoon in the Hall Cosplay room. Interviews will be held from 2-5pm. 
Please arrive no more than five minutes earlier than your assigned time for judging. Staff will check 
you in at the door and send you in when it’s your turn. 
Entrants will have a maximum of 4 minutes to talk about their costume with our judges.

7) Awards will be given for Best Crafted to a cosplay with mostly handcrafted parts, and Most Creative to the best use of 
mostly found items. Any other awards will be based on user turn out at the judges’ discretion. Awards earned here do not 
count towards your craftsmanship ranking at Tekko.

8) Winners will be announced at the Variety Show on Saturday night at 10 PM in Main Events, and posted on Sangawa Project’s 
social media. If unable to attend, winners can pick up their certificates at Registration until it closes on Sunday. 
Prizes will not be mailed.

For any questions, please email cosplay@teamtekko.us
								`,
							},
						},
						{
							id: '78e67154-1200-4332-a680-322e07b5150c',
							content: {
								component: 'Image',
								prop__src: '/images/events/Photosets_02.jpg',
								prop__alt: 'Candiiland Photoset',
							},
						},
						{
							id: '7f8ae6pd-6d14-4473-ae23-00a172c355dc',
							content: {
								component: 'Text',
								prop__text: `
Sangawa Project is pleased to welcome the photosets of CANDIILAND! Created by guest Abii Candii, these magical backdrops are free to use for the duration of the event. 
										`,
							},
						},
					],
				},
			],
		};
	});
};
