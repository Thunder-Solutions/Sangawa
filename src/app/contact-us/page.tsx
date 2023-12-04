import { apiClient } from '@/api-client/api-client';
import { PageContent } from '@/components/cmsComponent';
import { getTypedContent } from '@/utilities/utilities';
import { Page, CMSComponent } from '@/components/clientComponents';
import { Metadata } from 'next';

const [contactPageError, contactPage = {}] = await apiClient.fetchContactPageContent();
if (contactPageError) {
	const _error =
		contactPageError instanceof Error ? contactPageError : new Error('Contact page content could not be found.');
	console.error(_error);
}

export const metadata: Metadata = contactPage.meta[0].content;

const Contact = () => {
	const pageContent = getTypedContent<PageContent>(contactPage.pageContent);
	return (
		<Page>
			{pageContent.map(({ id, content, ...props }) => (
				<CMSComponent key={id} content={content} {...props} />
			))}
		</Page>
	);
};

export default Contact;
