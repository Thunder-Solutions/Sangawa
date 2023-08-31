import Head from 'next/head';
import { apiClient } from '@/api-client/api-client';
import { PageContent } from '@/components/cmsComponent';
import { getTypedContent } from '@/utilities/utilities';
import { ParallaxProvider, Splash, Page, CMSComponent } from '@/components/clientComponents';

const [homePageError, homePage = {}] = await apiClient.fetchHomePageContent();
if (homePageError) {
	const _error = homePageError instanceof Error ? homePageError : new Error('Home page content could not be found.');
	console.error(_error);
}

const Home = () => {
	const meta = homePage.meta[0];
	const pageContent = getTypedContent<PageContent>(homePage.pageContent);
	console.log(pageContent);
	return (
		<ParallaxProvider>
			<Splash />
			<Page>
				<Head>
					<title>{meta.content.title}</title>
				</Head>
				{pageContent.map(({ id, content, ...props }) => (
					<CMSComponent key={id} content={content} {...props} />
				))}
			</Page>
		</ParallaxProvider>
	);
};

export default Home;
