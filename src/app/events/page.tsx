import { apiClient } from '@/api-client/api-client';
import { PageContent } from '@/components/cmsComponent';
import { getTypedContent } from '@/utilities/utilities';
import { Page, CMSComponent } from '@/components/clientComponents';
import { Metadata } from 'next';

const [eventsPageError, eventsPage = {}] = await apiClient.fetchEventsPageContent();
if (eventsPageError) {
	const _error =
		eventsPageError instanceof Error ? eventsPageError : new Error('Events page content could not be found.');
	console.error(_error);
}

export const metadata: Metadata = eventsPage.meta[0].content;

const Events = () => {
	const pageContent = getTypedContent<PageContent>(eventsPage.pageContent);
	return (
		<Page>
			{pageContent.map(({ id, content, ...props }) => (
				<CMSComponent key={id} content={content} {...props} />
			))}
		</Page>
	);
};

export default Events;
