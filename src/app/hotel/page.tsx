import { apiClient } from '@/api-client/api-client';
import { PageContent } from '@/components/cmsComponent';
import { getTypedContent } from '@/utilities/utilities';
import { Page, CMSComponent } from '@/components/clientComponents';
import { Metadata } from 'next';

const [hotelPageError, hotelPage = {}] = await apiClient.fetchHotelPageContent();
if (hotelPageError) {
	const _error = hotelPageError instanceof Error ? hotelPageError : new Error('Hotel page content could not be found.');
	console.error(_error);
}

export const metadata: Metadata = hotelPage.meta[0].content;

const Hotel = () => {
	const pageContent = getTypedContent<PageContent>(hotelPage.pageContent);
	return (
		<Page>
			{pageContent.map(({ id, content, ...props }) => (
				<CMSComponent key={id} content={content} {...props} />
			))}
		</Page>
	);
};

export default Hotel;
