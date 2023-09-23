import Head from 'next/head';
import { apiClient } from '@/api-client/api-client';
import { PageContent } from '@/components/cmsComponent';
import { getTypedContent } from '@/utilities/utilities';
import { Page, CMSComponent } from '@/components/clientComponents';

const [pressPageError, pressPage = {}] = await apiClient.fetchPressPageContent();
if (pressPageError) {
	const _error =
		pressPageError instanceof Error ? pressPageError : new Error('Press page content could not be found.');
	console.error(_error);
}

const Press = () => {
	const meta = pressPage.meta[0];
	const pageContent = getTypedContent<PageContent>(pressPage.pageContent);
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

export default Press;
