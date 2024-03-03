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

1) All costumes must display creativity from the entrant. 
This means pieces are either hand crafted, modified, or individually gathered items 
('closet' cosplay.) No costumes purchased as a set or fully commissioned costumes are permitted to enter.

2) Group entries of up to four people are permitted. All members must either be from the same media or linked by a common theme. Prize distribution is up to the group,
additional prizes will not be given. Only one sign up form per group. The person who
submits the sign up form is responsible for communicating with the group.

3) Sign ups will be taken starting at 1 PM at Tabletop 2 and continue until full. Judging will begin at 1:30 PM at the same location. Please return no more than five minutes earlier
than your assigned time for judging. Staff will check you in at the door and send you in
when it’s your turn. Entrants will have a maximum of 4 minutes to talk about their
costume with our judges.

4) Awards will be given for Best Crafted to a cosplay with mostly handcrafted parts, and Most Creative to the best use of mostly found items. Judging is done based on the
cosplay only, physically looking like or acting like the character are not considered
criteria. Any other awards will be based on user turn out at the judges’ discretion.
Awards earned here do not count towards your craftsmanship ranking at Tekko.

5) Winners will be announced at the Sangawa Parlor at 6PM in the Event Room and
posted on Sangawa Project’s social media. If unable to attend, winners can pick up their
certificates at Registration until it closes on Sunday. Prizes will not be mailed.

6) All entrants must have a valid Sangawa Project badge. Sangawa Project staff and
guests are not permitted to compete.

7) Want to participate in Iron Cosplay as well? Sign ups will be taken at the same place
starting at 1:30 until 2:30 PM! For more information, check out the Iron Cosplay rules!
	
For any questions, please email cosplay@teamtekko.us
								`,
							},
						},
						{
							id: '78e68154-1200-4332-a680-322e07b5150c',
							content: {
								component: 'Image',
								prop__src: '/images/events/iron_cosplay.png',
								prop__alt: 'Iron Cosplay',
							},
						},
						{
							id: '7f8ae60d-6d14-4473-ae23-00a172c355dc',
							content: {
								component: 'Text',
								prop__text: `
Join us for a fast-paced creative adventure, where you get to speed-build costumes, and maybe sabotage your friends a little bit along the way!  The audience will be split into teams to help their Cosplay Champions create the ultimate costume and win the competition! Champions will have to use scrap cosplay materials and their imagination to make a kick-ass costume before the time runs out. If you're not a creative type, never fear! Audience participation will be paramount in helping your team win this event.  Compete in mini-games in order to sabotage other teams, or to help your team receive items that will help them build their costume! All sorts of entertainment, inventiveness, and mischief will be had! Don't miss out on this outrageous event!

Sign-ups will begin at 1 PM Saturday in Tabletop 2 and if space is left, 10 AM before the event in Main! Teams consist of four champions, so you can grab three friends or maybe you can make three new ones!
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
