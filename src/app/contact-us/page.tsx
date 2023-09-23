import Head from 'next/head';
import { apiClient } from '@/api-client/api-client';
import { PageContent } from '@/components/cmsComponent';
import { getTypedContent } from '@/utilities/utilities';
import { Page, CMSComponent } from '@/components/clientComponents';

const [contactPageError, contactPage = {}] = await apiClient.fetchContactPageContent();
if (contactPageError) {
	const _error =
		contactPageError instanceof Error ? contactPageError : new Error('Contact page content could not be found.');
	console.error(_error);
}

const Contact = () => {
	const meta = contactPage.meta[0];
	const pageContent = getTypedContent<PageContent>(contactPage.pageContent);
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

export default Contact;
