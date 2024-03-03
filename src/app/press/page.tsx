import { DEFAULT_CONTENT_SET, apiClient } from '@/api-client/api-client';
import { PageContent } from '@/components/cmsComponent';
import { getTypedContent } from '@/utilities/utilities';
import { Page, CMSComponent } from '@/components/clientComponents';
import { Metadata } from 'next';

const [pressPageError, pressPage = DEFAULT_CONTENT_SET] = await apiClient.fetchPressPageContent();
if (pressPageError) {
	const _error = pressPageError instanceof Error ? pressPageError : new Error('Press page content could not be found.');
	console.error(_error);
}

export const metadata: Metadata = pressPage.meta;

const Press = () => {
	const pageContent = getTypedContent<PageContent>(pressPage.pageContent);
	return (
		<Page>
			{pageContent.map(({ id, content, ...props }) => (
				<CMSComponent key={id} content={content} {...props} />
			))}
		</Page>
	);
};

export default Press;
