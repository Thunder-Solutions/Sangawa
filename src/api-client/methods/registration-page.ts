import { Result, safeTry } from '@/utilities/utilities';
import { ContentSet } from '../api-client';

/**
 * Response is mocked for now. Should be easy enough to swap for a CMS response later.
 *
 * To generate a new ID, run `node` in the terminal, then run `crypto.randomUUID()`.
 */
export const fetchRegistrationPageContent = async (): Promise<Result<ContentSet>> => {
	return safeTry<any>(() => {
		return {
			meta: [
				{
					id: 'e5b8896f-abfa-4c9d-9686-d619ccef5111',
					content: {
						page: 'registration',
						title: 'Sangawa Project | Registration',
					},
				},
			],
			pageContent: [
				{
					id: 'dd7e817a-385d-4e87-9eff-ad97d12536c4',
					content: {
						component: 'Section',
						prop__backdropUrl: 'Tekko-Japanese-Anime-Convention-Dealers-Room.jpg',
					},
					childContent: [
						{
							id: 'afa09d7b-57f8-4535-966e-4ae3c5897156',
							content: {
								component: 'Text',
								prop__text: `Our Genin (general admission) badge is $65, with optional upgrades available, including:
- Chūnin upgrade for + $15
- Jōnin upgrade for + $45
- Kage upgrade for + $60

To purchase your badge, please visit our [Eventeny page](https://www.eventeny.com/events/ticket/?id=7388).`,
							},
						},
					],
				},
			],
		};
	});
};
