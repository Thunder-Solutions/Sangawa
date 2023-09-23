import Head from 'next/head';
import { apiClient } from '@/api-client/api-client';
import { PageContent } from '@/components/cmsComponent';
import { getTypedContent } from '@/utilities/utilities';
import { Page, CMSComponent } from '@/components/clientComponents';

const [eventsPageError, eventsPage = {}] = await apiClient.fetchEventsPageContent();
if (eventsPageError) {
	const _error =
		eventsPageError instanceof Error ? eventsPageError : new Error('Events page content could not be found.');
	console.error(_error);
}

const Events = () => {
	const meta = eventsPage.meta[0];
	const pageContent = getTypedContent<PageContent>(eventsPage.pageContent);
	return (
		<Page>
			<Head>
				<title>{meta.content.title}</title>
			</Head>
			{pageContent.map(({ id, content, ...props }) => (
				<CMSComponent key={id} content={content} {...props} />
			))}
		</Page>
	);
};

export default Events;
