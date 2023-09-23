import Head from 'next/head';
import { apiClient } from '@/api-client/api-client';
import { PageContent } from '@/components/cmsComponent';
import { getTypedContent } from '@/utilities/utilities';
import { Page, CMSComponent } from '@/components/clientComponents';

const [rulesPageError, rulesPage = {}] = await apiClient.fetchRulesPageContent();
if (rulesPageError) {
	const _error =
		rulesPageError instanceof Error ? rulesPageError : new Error('Rules page content could not be found.');
	console.error(_error);
}

const Rules = () => {
	const meta = rulesPage.meta[0];
	const pageContent = getTypedContent<PageContent>(rulesPage.pageContent);
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

export default Rules;
