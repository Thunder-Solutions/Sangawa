import { fetchSchedulePageContent } from './methods/schedule-page';
import { fetchRulesPageContent } from './methods/rules-page';
import { fetchHotelPageContent } from './methods/hotel-page';
import { fetchPressPageContent } from './methods/press-page';
import { fetchContactPageContent } from './methods/contact-page';
import { fetchRegistrationPageContent } from './methods/registration-page';
import { fetchEventsPageContent } from './methods/events-page';
import { fetchGuestsPageContent } from './methods/guests-page';
import { fetchHomePageContent } from './methods/home-page';
import { fetchGlobalContent } from './methods/global';
import { UUID } from 'crypto';

export type Content<T = { [key: string]: string }> = {
	id?: UUID;
	content: T;
	childContent?: Content[];
};

export type ContentSet = {
	[key: string]: Content[];
};

/**
 * Async methods to request content from an API.
 */
export const apiClient = {
	fetchGlobalContent,
	fetchHomePageContent,
	fetchGuestsPageContent,
	fetchEventsPageContent,
	fetchRegistrationPageContent,
	fetchContactPageContent,
	fetchPressPageContent,
	fetchHotelPageContent,
	fetchRulesPageContent,
	fetchSchedulePageContent,
};
