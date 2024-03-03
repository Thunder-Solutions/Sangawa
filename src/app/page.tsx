import { DEFAULT_CONTENT_SET, apiClient } from '@/api-client/api-client';
import { PageContent } from '@/components/cmsComponent';
import { getTypedContent } from '@/utilities/utilities';
import { ParallaxProvider, Splash, Page, CMSComponent } from '@/components/clientComponents';
import { Metadata } from 'next';

const [homePageError, homePage = DEFAULT_CONTENT_SET] = await apiClient.fetchHomePageContent();
if (homePageError) {
	const _error = homePageError instanceof Error ? homePageError : new Error('Home page content could not be found.');
	console.error(_error);
}

export const metadata: Metadata = homePage.meta;

const Home = () => {
	const pageContent = getTypedContent<PageContent>(homePage.pageContent);
	return (
		<ParallaxProvider>
			<Splash />
			<Page>
				{pageContent.map(({ id, content, ...props }) => (
					<CMSComponent key={id} content={content} {...props} />
				))}
			</Page>
		</ParallaxProvider>
	);
};

export default Home;
