import { PropsWithChildren, createContext } from 'react';
import MenuBar from './menuBar';
import { ContentSet, getContent } from '@/api-client/api-client';
import Footer from './footer';
import { Scope, css } from 'react-shadow-scope';

const global = getContent('global');
export const GlobalContent = createContext<ContentSet>(global);

const stylesheet = css`
.page {
	display: grid;
	grid-template-rows: auto minmax(0, 1fr) auto;
	min-height: 100vh;
}
`;

export type PageProps = PropsWithChildren;

const Page = ({ children }: PageProps) => {
	return (
		<GlobalContent.Provider value={global}>
			<Scope stylesheet={stylesheet}>
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
