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
			meta: {
				title: 'Sangawa Project | Guests',
			},
			pageContent: [
				{
					id: 'f07adbb1-5095-419e-b800-64f9ea221f4a',
					content: {
						component: 'Section',
						prop__backdropUrl: 'Tekko-Japanese-Anime-Convention-Dealers-Room.jpg',
					},
					childContent: [
						{
							id: '6c630392-a3ba-49e4-bc7a-954b0f7696f7',
							content: {
								component: 'FeaturedContent',
								prop__imgSrc: '/images/guests/abii_candii_2025.jpg',
								prop__heading: 'Abii Candii',
								prop__description:
									'Abii Candii is a content creator who enjoys cosplay,photography, and set design. They live by the thought that anything is possible. Be yourself and create an environment where you can truly be yourself. That is what they try to do with their art and set design.',
							},
						},
						{
							id: '8c6b3f85-07f8-4431-9138-4f290c428a0c',
							content: {
								component: 'Image',
								prop__src: '/images/guests/CandiiLand/cl1.jpg',
							},
						},
						{
							id: '3dd9c1a6-6fcb-47a0-9e08-e8de1457a18a',
							content: {
								component: 'Image',
								prop__src: '/images/guests/CandiiLand/cl2.jpg',
							},
						},
						{
							id: '3dd9c1a6-6fcb-47a0-9e08-e8de1457a18a',
							content: {
								component: 'Image',
								prop__src: '/images/guests/CandiiLand/cl3.jpg',
							},
						},
						{
							id: '4cf8199b-f043-4e4b-bee5-7b4a6ad04b9e',
							content: {
								component: 'FeaturedContent',
								prop__imgSrc: '/images/guests/matt_shipman_2025.jpg',
								prop__heading: 'Matt Shipman',
								prop__description:
									"Matt Shipman is a Voice Actor, ADR Writer, ADR Engineer, and all-around nerd-guy. He is best known for voicing Reki Kyan in SK8 The Infinity, Chrome in Dr. Stone, Rin Itoshi in Blue Lock, Floch in Attack on Titan, Inasa Yoarashi/Sen Kaibara in My Hero Academia, Hajime in Arifureta: From Commonplace to World’s Strongest, Gokudera in the Katekyo Hitman REBORN! Discotek Release, and Toma in Hell's Paradise. Additionally, he can be heard in DARLING in the FRANXX as Hiro, Ultraman Z as Ultraman Z, Yu-Gi-Oh! ARC-V as Shay, One Piece as Cavendish, Akudama Drive as Cutthroat, GOSICK as Kazuya Kujo, A Certain Scientific Railgun T as Gunha, Black Clover as Alecdora, and many other anime. Matt writes scripts for English dubs (Dr. Stone, Spy x Family, New Game!!, Ultraman Z), and occasionally assistant directs (Akudama Drive, Kemono Jihen, How Heavy are the Dumbells you Lift?). He co-owns Kocha Sound alongside Brittany Lauda. Matt plays Street Fighter, loves tokusatsu, watches seasonal anime, plays card games, and loves to talk about all things nerdy.",
							},
						},
						{
							id: '380fc87e-dd7e-4799-889b-81fb98a563a0',
							content: {
								component: 'Image',
								prop__src: '/images/guests/matt_shipman_price_list.jpg',
							},
						},
						{
							id: 'ebe99392-7c09-4fb6-99a5-1636b17d6d6a',
							content: {
								component: 'FeaturedContent',
								prop__imgSrc: '/images/guests/brittany_lauda_2025.jpg',
								prop__heading: 'Brittany Lauda',
								prop__description: `Pronouns: Any pronouns (They/She/He)

Best Known Credits - in order: Chiori (Genshin Impact), F.F./Foo Fighters (Jojo\'s Bizarre Adventure: Stone Ocean), Tsuna Sawada (REBORN!), Young Law (One Piece), Riko (Made in Abyss), Yuzuriha Ogawa (Dr. Stone), Kid Chi Chi (Dragon Ball Kakarot), Satoko Hojo (Higurashi GOU/SOTSU), Doctor (Akudama Drive), Cow Girl (Goblin Slayer), Ichigo (DARLING in the FRANXX), Saki Saki (Girlfriend, Girlfriend), Osakabehime (Fate/Grand Order), Cowgirl (Goblin Slayer)

Brittany Lauda is a voice actor & ADR director best known for playing Chiori in Genshin Impact, F.F./Foo Fighters in Jojo\'s Bizarre Adventure: Stone Ocean, Tsuna in the Katekyo Hitman REBORN! Discotek Release, Yuzuriha in Dr. Stone, Riko in Made in Abyss, Kid Chi-Chi in Dragon Ball Z Kakarot, Satoko in Higurashi GOU/SOTSU, Saki in Girlfriend Girlfriend, Osakabehime and Liz in Fate/Grand Order, Ichigo in DARLING in the FRANXX, Mai in Nichijou, Cow Girl in Goblin Slayer, Lessar in A Certain Magical Index, Kenya in That Time I Got Reincarnated As A Slime, Doctor in Akudama Drive and Young Law in One Piece (to name a few out of hundreds!). You can also catch their voice in Pokémon XY & Evolutions, Rainbow High, Pinkfong, My Hero Academia, Nikke, LiveALive, Gal Guardians, Genshin Impact, Disgaea 6 & 7, Huniepop, Oshi no Ko, SpyxFamily, Smite, and more. As an ADR Director, some of their favorites include: Katekyo Hitman REBORN!, Akudama Drive, Kemono Jihen, The Flying Phantom Ship, Hensuki, and Legend of the Galactic Heroes. They have also been working as a producer/CD at Okratron5000 on the Ultraman and Dragon Ball franchises. Brittany also co-owns a studio, Kocha Sound, with their husband Matt Shipman. Outside of work, Brittany enjoys playing with her Shiba Inu named Raven, video games, Katekyo Hitman Reborn!, and\ big Kirby plushies. Follow their twitter @BrittanyLaudaVO for shenanigans

Website: [Brittany Lauda](https://brittanylauda.com/)`,
							},
						},
						{
							id: 'd189496c-70b6-47ce-ba0c-ef334b2fcd3c',
							content: {
								component: 'Image',
								prop__src: '/images/guests/brittany_lauda_price_list.jpg',
							},
						},
						{
							id: '92280b77-c6cd-479b-8878-e46d31b39da5',
							content: {
								component: 'FeaturedContent',
								prop__imgSrc: '/images/guests/houndorable_1.jpg',
								prop__heading: 'Houndorable',
								prop__description:
									'Joining us once again to judge the Casual Costume Contest is Sav Hound aka. Houndorable! Houndorable is a shapeshifting cosplayer and also a shapeshifting VTuber! She has been creating costumes and cosplay related content for close to a decade while attending a wide variety of conventions across the Midwest.On stream you can find her playing games, styling wigs, or working on props for her cosplays. She aims to spread body positivity and encourage others to not be afraid to show their true forms. Sav especially loves anime and video games with her favorite facet of cosplay creation being wigwork.',
							},
						},
						{
							id: '1108b358-e7fa-4cdc-9da5-a0d42c761e6c',
							content: {
								component: 'Image',
								prop__src: '/images/guests/houndorable_2.jpg',
							},
						},
						{
							id: '8ffa881d-aef8-4063-8ea4-18671ded2e37',
							content: {
								component: 'FeaturedContent',
								prop__imgSrc: '/images/guests/rakumaroo.png',
								prop__heading: 'Rakumaroo',
								prop__description:
									`Pronouns: she/her
									Rakumaroo performed at a convention for the first time in 2016. After winning a Judge's Award, she continued to build her skills by competing at more conventions. She has earned Judge's Awards, First Place, and Best in Show prizes since then and has coached a handful of cosplayers on performance tips and tricks. After years of competing, she decided to make a change to further her cosplay career and become a guest performer. Since 2022, she has performed Tekko's Masquerade Half-time Show with musical parodies and is excited to share more with Sangawa!`,
							},
						},
						{
							id: 'f146de04-6942-4dc8-9b5d-6058f0670705',
							content: {
								component: 'Image',
								prop__src: '/images/guests/rakumaroo2.jpg',
							},
						},
						{
							id: '841eba7d-d566-4b92-b1b6-289502170c3f',
							content: {
								component: 'FeaturedContent',
								prop__imgSrc: '/images/guests/nancy_kepner_2025.jpg',
								prop__heading: 'Nancy Kepner',
								prop__description:
									'Nancy Kepner returns, equipped with her guitar and hilariously clever lyrics! You can also find her all year round on her YouTube channel  HeartfeltHumor delighting viewers with original compositions, live performances, and the occasional music video. Welcome back, Nancy!',
							},
						},
						{
							id: '9053fa61-188b-41d1-80a3-4785e7dec912',
							content: {
								component: 'FeaturedContent',
								prop__imgSrc: '/images/guests/charles_dunbar_2025.jpg',
								prop__heading: 'Charles Dunbar',
								prop__description:
									'Charles Dunbar is a graduate of Hunter College, CUNY, where he received a BA in Religion and Anthropology and an MA in Cultural Anthropology. His thesis, Pilgrimage, Pageantry and Fan Communities, was published in 2011 and focused on anime convention participation, including spending habits, cosplay, demographics, communal behavior and convention culture.',
							},
						},
					],
				},
			],
		};
	});
};
