import Head from 'next/head';
import { apiClient } from '@/api-client/api-client';
import { PageContent } from '@/components/cmsComponent';
import { getTypedContent } from '@/utilities/utilities';
import { Page, CMSComponent } from '@/components/clientComponents';

const [guestsPageError, guestsPage = {}] = await apiClient.fetchGuestsPageContent();
if (guestsPageError) {
	const _error =
		guestsPageError instanceof Error ? guestsPageError : new Error('Guests page content could not be found.');
	console.error(_error);
}

const Guests = () => {
	const meta = guestsPage.meta[0];
	const pageContent = getTypedContent<PageContent>(guestsPage.pageContent);
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

export default Guests;
