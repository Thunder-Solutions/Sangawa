'use client';

import Head from 'next/head';
import Page, { GlobalContent } from '@/components/page';
import Section from '@/components/section';
import { useContext } from 'react';
import { getTypedContent } from '@/utilities/utilities';
import { ParallaxProvider } from 'react-scroll-parallax';
import Splash from '@/components/splash';
import CtaLayout from '@/components/ctaLayout';
import CtaLink from '@/components/ctaLink';

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
					<CtaLayout>
						<CtaLink icon="ticket" href="/register">
							Register Now!
						</CtaLink>
						<CtaLink icon="bed" href="/hotels">
							Book a Room!
						</CtaLink>
						<CtaLink icon="footsteps" href="/explore">
							Explore Sangawa
						</CtaLink>
					</CtaLayout>
				</Section>
			</Page>
		</ParallaxProvider>
	);
};

export default Home;
