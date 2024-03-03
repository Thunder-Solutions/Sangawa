import { DEFAULT_CONTENT_SET, apiClient } from '@/api-client/api-client';
import { PageContent } from '@/components/cmsComponent';
import { getTypedContent } from '@/utilities/utilities';
import { Page, CMSComponent } from '@/components/clientComponents';
import { Metadata } from 'next';

const [guestsPageError, guestsPage = DEFAULT_CONTENT_SET] = await apiClient.fetchGuestsPageContent();
if (guestsPageError) {
	const _error =
		guestsPageError instanceof Error ? guestsPageError : new Error('Guests page content could not be found.');
	console.error(_error);
}

export const metadata: Metadata = guestsPage.meta;

const Guests = () => {
	const pageContent = getTypedContent<PageContent>(guestsPage.pageContent);
	return (
		<Page>
			{pageContent.map(({ id, content, ...props }) => (
				<CMSComponent key={id} content={content} {...props} />
			))}
		</Page>
	);
};

export default Guests;
