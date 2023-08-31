import { PropsWithChildren } from 'react';
import MenuBar from './menuBar';
import Footer from './footer';
import { Scope, useCSS } from 'react-shadow-scope';
import { theme } from '@/utilities/theme';

export const PAGE_TAG = 'sg-page';

export type PageProps = PropsWithChildren;

const Page = ({ children }: PageProps) => {
	const css = useCSS();
	const stylesheet = css`
		.page {
			display: grid;
			grid-template-rows: auto minmax(0, 1fr) auto;
			min-height: 100vh;
		}
	`;
	return (
		<Scope tag={PAGE_TAG} stylesheets={[theme, stylesheet]}>
			<div className="page">
				<MenuBar />
				<main>{children}</main>
				<Footer />
			</div>
		</Scope>
	);
};

export default Page;
