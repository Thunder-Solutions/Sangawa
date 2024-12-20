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
							id: '2882424d-85d0-430b-8524-71925cfac946',
							content: {
								component: 'Image',
								prop__src: '/images/guests/matt_shipman_2025.jpg',
								prop__alt: 'Picture of Matt Shipman',
							},
						},
						{
							id: '13756f23-45f8-4ce3-978b-d80a0d1dc966',
							content: {
								component: 'Text',
								prop__text:
									'Matt Shipman is a Voice Actor, ADR Writer, ADR Engineer, and all-around nerd-guy. He is best known for voicing Reki Kyan in SK8 The Infinity, Chrome in Dr. Stone, Rin Itoshi in Blue Lock, Floch in Attack on Titan, Inasa Yoarashi/Sen Kaibara in My Hero Academia, Hajime in Arifureta: From Commonplace to World’s Strongest, Gokudera in the Katekyo Hitman REBORN! Discotek Release, and Toma in Hell’s Paradise. Additionally, he can be heard in DARLING in the FRANXX as Hiro, Ultraman Z as Ultraman Z, Yu-Gi-Oh! ARC-V as Shay, One Piece as Cavendish, Akudama Drive as Cutthroat, GOSICK as Kazuya Kujo, A Certain Scientific Railgun T as Gunha, Black Clover as Alecdora, and many other anime. Matt writes scripts for English dubs (Dr. Stone, Spy x Family, New Game!!, Ultraman Z), and occasionally assistant directs (Akudama Drive, Kemono Jihen, How Heavy are the Dumbells you Lift?). He co-owns Kocha Sound alongside Brittany Lauda. Matt plays Street Fighter, loves tokusatsu, watches seasonal anime, plays card games, and loves to talk about all things nerdy.',
							},
						},
						{
							id: '18f5ac04-8ecc-484c-b16e-8959646010e8',
							content: {
								component: 'Image',
								prop__src: '/images/guests/brittany_lauda_2025.jpg',
								prop__alt: 'Picture of Brittany Lauda',
							},
						},
						{
							id: '156a6210-f40d-4534-9a7b-9bccabb68ec2',
							content: {
								component: 'Text',
								prop__text:
									'Pronouns: Any pronouns (They/She/He)',
							},
						},
						{
							id: '68309103-d3fe-40eb-aa34-fe9735b7ce36',
							content: {
								component: 'Text',
								prop__text:
									'Best Known Credits – in order: Chiori (Genshin Impact), F.F./Foo Fighters (Jojo’s Bizarre Adventure: Stone Ocean), Tsuna Sawada (REBORN!), Young Law (One Piece), Riko (Made in Abyss), Yuzuriha Ogawa (Dr. Stone), Kid Chi Chi (Dragon Ball Kakarot), Satoko Hojo (Higurashi GOU/SOTSU), Doctor (Akudama Drive), Cow Girl (Goblin Slayer), Ichigo (DARLING in the FRANXX), Saki Saki (Girlfriend, Girlfriend), Osakabehime (Fate/Grand Order), Cowgirl (Goblin Slayer)',
							}
						},
						{
							id: '652e3904-b5d9-4a9b-86a3-75eb079616d9',
							content: {
								component: 'Text',
								prop__text:
									'Brittany Lauda is a voice actor & ADR director best known for playing Chiori in Genshin Impact, F.F./Foo Fighters in Jojo’s Bizarre Adventure: Stone Ocean, Tsuna in the Katekyo Hitman REBORN! Discotek Release, Yuzuriha in Dr. Stone, Riko in Made in Abyss, Kid Chi-Chi in Dragon Ball Z Kakarot, Satoko in Higurashi GOU/SOTSU, Saki in Girlfriend Girlfriend, Osakabehime and Liz in Fate/Grand Order, Ichigo in DARLING in the FRANXX, Mai in Nichijou, Cow Girl in Goblin Slayer, Lessar in A Certain Magical Index, Kenya in That Time I Got Reincarnated As A Slime, Doctor in Akudama Drive and Young Law in One Piece (to name a few out of hundreds!). You can also catch their voice in Pokémon XY & Evolutions, Rainbow High, Pinkfong, My Hero Academia, Nikke, LiveALive, Gal Guardians, Genshin Impact, Disgaea 6 & 7, Huniepop, Oshi no Ko, SpyxFamily, Smite, and more. As an ADR Director, some of their favorites include: Katekyo Hitman REBORN!, Akudama Drive, Kemono Jihen, The Flying Phantom Ship, Hensuki, and Legend of the Galactic Heroes. They have also been working as a producer/CD at Okratron5000 on the Ultraman and Dragon Ball franchises. Brittany also co-owns a studio, Kocha Sound, with their husband Matt Shipman. Outside of work, Brittany enjoys playing with her Shiba Inu named Raven, video games, Katekyo Hitman Reborn!, and\ big Kirby plushies. Follow their twitter @BrittanyLaudaVO for shenanigans',
							}
						},
						{
							id: 'c17d8baf-00fc-44a4-9ecc-a685989134a9',
							content: {
								component: 'Text',
								prop__text:
									'Website: https://brittanylauda.com/',
							}
						},
						{
							id: 'cbed1708-ac8b-466e-8658-eac11ca97792',
							content: {
								component: 'Image',
								prop__src: '/images/guests/nancy_kepner_2025.png',
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
							id: 'f8a5e6d3-2b7c-4e9d-9e4f-1a3b2c4d5e6f',
							content: {
								component: 'Image',
								prop__src: '/images/guests/charles_dunbar_2025.png',
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
					],
				},
			],
		};
	});
};
