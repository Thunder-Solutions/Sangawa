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
			meta: [
				{
					id: '90f5d068-dd9e-44fe-ac5a-51a95f0398bb',
					content: {
						page: 'guests',
						title: 'Sangawa Project | Guests',
					},
				},
			],
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
								prop__src: '/images/guests/nancy_kepner.jpg',
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
							id: '496ea3c9-2296-441b-917d-6cc23ec7a5a8',
							content: {
								component: 'Image',
								prop__src: '/images/guests/abii_candii.png',
								prop__alt: 'Picture of Abii Candii',
							},
						},
						{
							id: '4a15f9f6-047a-4c37-b51b-ee60ba3312aa',
							content: {
								component: 'Text',
								prop__text:
									'Abii Candii is  a content creator who enjoys cosplay,photography, and set design. They live by the thought that anything is possible. Be yourself and create an environment where you can truly be yourself. That is what they try to do with their art and set design.',
							},
						},
						{
							id: 'f8a5e6d3-2b7c-4e9d-9e4f-1a3b2c4d5e6f',
							content: {
								component: 'Image',
								prop__src: '/images/guests/charles_dunbar.jpg',
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
						{
							id: '2ac0e659-69b4-4251-b050-4d36aa881df8',
							content: {
								component: 'Image',
								prop__src: '/images/guests/chris_hackney.png',
								prop__alt: 'Picture of Chris Hackney',
							},
						},
						{
							id: 'bda83c0a-55bc-45f1-8d82-75565df85f43',
							content: {
								component: 'Text',
								prop__text:
									'@ChrisHackneyGGK is an American voice actor currently residing in Los Angeles, CA. Originally from Florida, Chris found his way to acting when in college for music. While looking for more outlets for artistic expression, he discovered an entire new world of creativity in acting. Several years of training and a cross-country move later, Chris has found his life and passion in voiceover. Chris can be heard in various forms including commercials, video games, anime, and animation. Currently, he is most known for titles such as Fire Emblem: Three Houses (Dimitri), Fire Emblem Echoes: Shadows of Valentia (Boey), Hunter x Hunter, Mega Man 11, K Project, Valkyria Chronicles 4, and Gundam SEED. Chris is always looking forward to the next exciting opportunity he can lend his passion to.',
							},
						},
						{
							id: 'b2e2e2e2-9b0e-4b0e-8b0e-2b0e2b0e2b0e',
							content: {
								component: 'Image',
								prop__src: '/images/guests/houndorable.png',
								prop__alt: 'Picture of Houndorable Cosplay',
							},
						},
						{
							id: '231670df-9e06-43a9-bc76-e496cd03a290',
							content: {
								component: 'Text',
								prop__text:
									'Sav Hound, aka Houndorable Cosplay is a veteran cosplayer turned VTuber! She has been creating costumes and cosplay-related content for nearly a decade while attending various conventions across the Midwest. In April of 2023 she began streaming on Twitch with a new 2D form as the sus shape shifting HOUNDEMON VTuber known as the Ars Goetia Marchosias. On stream you can find her playing games, styling wigs, or working on props for her cosplays. She aims to spread body positivity and encourage others to not be afraid to show their true forms.',
							},
						},
						{
							id: '4c898a86-f6da-424d-808a-f18f9f7f8cdd',
							content: {
								component: 'Image',
								prop__src: '/images/guests/jessica_calvello.png',
								prop__alt: 'Picture of Jessica Calvello',
							},
						},
						{
							id: '622532d4-18e1-43e4-81cb-25ff2971e00e',
							content: {
								component: 'Text',
								prop__text:
									"Jessica Calvello began her work in the anime industry with ADVfilms (now Sentai Filmworks), with her first show being 3 BIG LINES in the TV Series Evangelion. Some of Jessica’s voice work in recent years includes: Life Lessons with Uramichi Oniisan (Utano Tadano), Attack on Titan (Hange Zoe), Call of the Night (Anko Uguisu), One Piece (Mother Caramel), Girls und Panzer (Saori), and a number of animated projects from famed comic strip Cyanide & Happiness (explosm.net) including: Charlene in The Stockholms, the twisted Grandma in the game Freakpocalypse, Lucy in Master Dater, and numerous animated shorts. Jessica also played Rip Van Winkle in Hellsing Ultimate Abridged (TeamFourStar) and has voiced hundreds of characters and creatures from the super popular MMORPG Wizard 101 game (also on mobile!). Some of Jessica's earlier work includes iconic titles such as Excel Saga (Excel Excel, [V1-3]), Yuri (Dirty Pair), Dragonhalf (Mink), Pokemon (Kay the Raichu Trainer) and New Cutey Honey in which she was personally cast by Go Nagai to play the lead role, Honey Kisaragi for the English dub. She also reprised her role as Honey in Cutie Honey Universe and the more recent Re. Cutie Honey.@JessicaCalvello Twitter, Facebook, Instagram",
							},
						},
					],
				},
			],
		};
	});
};
