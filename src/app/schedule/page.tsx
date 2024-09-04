import { Metadata } from 'next';
import { DEFAULT_CONTENT_SET, apiClient } from '@/api-client/api-client';
import { PageContent } from '@/components/cmsComponent';
import { getTypedContent } from '@/utilities/utilities';
import { Page, CMSComponent } from '@/components/clientComponents';

const [schedulePageError, schedulePage = DEFAULT_CONTENT_SET] = await apiClient.fetchSchedulePageContent();
if (schedulePageError) {
	const _error =
		schedulePageError instanceof Error ? schedulePageError : new Error('Schedule page content could not be found.');
	console.error(_error);
}
export const metadata: Metadata = schedulePage.meta;

const Schedule = () => {
	const pageContent = getTypedContent<PageContent>(schedulePage.pageContent);
	return (
		<Page>
			<a href="https://www.eventeny.com/events/embed/?ev=13316&type=schedule">Open Schedule on Eventeny</a>
			<br />
			<embed src="https://www.eventeny.com/events/embed/?ev=13316&type=schedule" width="100%" height="100%" />
			{pageContent.map(({ id, content, ...props }) => (
				<CMSComponent key={id} content={content} {...props} />
			))}
		</Page>
	);
};

export default Schedule;
