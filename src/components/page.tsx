import { PropsWithChildren, useContext } from 'react';
import MenuBar from './menuBar';
import Footer from './footer';
import { Scope, useCSS } from 'react-shadow-scope';
import { theme } from '@/utilities/theme';
import { NavigationContext } from './navigation';

export const PAGE_TAG = 'sg-page';

export type PageProps = PropsWithChildren;

const key = Symbol();

const Page = ({ children }: PageProps) => {
	const { loading } = useContext(NavigationContext);
	const css = useCSS(key);
	const stylesheet = css`
		.page {
			display: grid;
			grid-template-rows: auto minmax(0, 1fr) auto;
			min-height: 100vh;
		}
		.transition {
			display: block;
			position: fixed;
			inset: 0;
			width: 100vw;
			height: 100vh;
			pointer-events: none;
			z-index: 100;
			background-color: white;
			opacity: 0;
			transition: opacity 0.3s;
		}
		.transition.loading {
			pointer-events: initial;
			opacity: 1;
		}
	`;
	return (
		<Scope tag={PAGE_TAG} stylesheets={[theme, stylesheet]}>
			<div className={`transition ${loading ? 'loading' : ''}`}></div>
			<div className="page">
				<MenuBar />
				<main>{children}</main>
				<Footer />
			</div>
		</Scope>
	);
};

export default Page;
