import { apiClient } from '@/api-client/api-client';
import { PageContent } from '@/components/cmsComponent';
import { getTypedContent } from '@/utilities/utilities';
import { Page, CMSComponent } from '@/components/clientComponents';
import { Metadata } from 'next';

const [rulesPageError, rulesPage = {}] = await apiClient.fetchRulesPageContent();
if (rulesPageError) {
	const _error = rulesPageError instanceof Error ? rulesPageError : new Error('Rules page content could not be found.');
	console.error(_error);
}

export const metadata: Metadata = rulesPage.meta[0].content;

const Rules = () => {
	const pageContent = getTypedContent<PageContent>(rulesPage.pageContent);
	return (
		<Page>
			{pageContent.map(({ id, content, ...props }) => (
				<CMSComponent key={id} content={content} {...props} />
			))}
		</Page>
	);
};

export default Rules;
