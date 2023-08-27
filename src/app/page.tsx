'use client';

import Head from 'next/head';
import Page, { GlobalContent } from '@/components/page';
import Section from '@/components/section';
import { useContext } from 'react';
import { getTypedContent } from '@/utilities/utilities';
import { ParallaxProvider } from 'react-scroll-parallax';
import Splash from '@/components/splash';

type PageContent = {
	page: string;
	title: string;
	backdrop: string;
};

const Home = () => {
	const global = useContext(GlobalContent);
	const pages = getTypedContent<PageContent>(global.page);
	const homePage = pages.find(({ content }) => content.page === 'home');
	return (
		<ParallaxProvider>
			<Splash />
			<Page>
				<Head>
					<title>{homePage?.content.title}</title>
				</Head>
				<Section backdropUrl={homePage?.content.backdrop} heading="Section Title">
					{'(placeholder content)'}
				</Section>
			</Page>
		</ParallaxProvider>
	);
};

export default Home;
