import { DEFAULT_CONTENT_SET, apiClient } from '@/api-client/api-client';
import { PageContent } from '@/components/cmsComponent';
import { getTypedContent } from '@/utilities/utilities';
import { Page, CMSComponent } from '@/components/clientComponents';
import { Metadata } from 'next';

const [registrationPageError, registrationPage = DEFAULT_CONTENT_SET] = await apiClient.fetchRegistrationPageContent();
if (registrationPageError) {
	const _error =
		registrationPageError instanceof Error
			? registrationPageError
			: new Error('Registration page content could not be found.');
	console.error(_error);
}

export const metadata: Metadata = registrationPage.meta;

const Registration = () => {
	const pageContent = getTypedContent<PageContent>(registrationPage.pageContent);
	return (
		<Page>
			{pageContent.map(({ id, content, ...props }) => (
				<CMSComponent key={id} content={content} {...props} />
			))}
		</Page>
	);
};

export default Registration;
