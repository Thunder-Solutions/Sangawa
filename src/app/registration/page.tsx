import Head from 'next/head';
import { apiClient } from '@/api-client/api-client';
import { PageContent } from '@/components/cmsComponent';
import { getTypedContent } from '@/utilities/utilities';
import { Page, CMSComponent } from '@/components/clientComponents';

const [registrationPageError, registrationPage = {}] = await apiClient.fetchRegistrationPageContent();
if (registrationPageError) {
	const _error =
		registrationPageError instanceof Error ? registrationPageError : new Error('Registration page content could not be found.');
	console.error(_error);
}

const Registration = () => {
	const meta = registrationPage.meta[0];
	const pageContent = getTypedContent<PageContent>(registrationPage.pageContent);
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

export default Registration;
