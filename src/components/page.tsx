import { PropsWithChildren, createContext } from 'react';
import MenuBar from './menuBar';
import { ContentSet, getContent } from '@/api-client/api-client';
import Footer from './footer';
import { Scope, useCSS } from 'react-shadow-scope';
import { theme } from '@/utilities/theme';

const global = getContent('global');
export const GlobalContent = createContext<ContentSet>(global);

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
		<GlobalContent.Provider value={global}>
			<Scope stylesheets={[theme, stylesheet]}>
				<div className="page">
					<MenuBar />
					<main>
						{children}
					</main>
					<Footer />
				</div>
			</Scope>
		</GlobalContent.Provider>
	);
};

export default Page;
