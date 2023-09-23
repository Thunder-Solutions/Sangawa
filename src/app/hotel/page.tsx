import Head from 'next/head';
import { apiClient } from '@/api-client/api-client';
import { PageContent } from '@/components/cmsComponent';
import { getTypedContent } from '@/utilities/utilities';
import { Page, CMSComponent } from '@/components/clientComponents';

const [hotelPageError, hotelPage = {}] = await apiClient.fetchHotelPageContent();
if (hotelPageError) {
	const _error =
		hotelPageError instanceof Error ? hotelPageError : new Error('Hotel page content could not be found.');
	console.error(_error);
}

const Hotel = () => {
	const meta = hotelPage.meta[0];
	const pageContent = getTypedContent<PageContent>(hotelPage.pageContent);
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

export default Hotel;
