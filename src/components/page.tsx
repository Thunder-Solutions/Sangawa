import { PropsWithChildren, createContext } from 'react';
import MenuBar from './menuBar';
import { ContentSet, getContent } from '@/api-client/api-client';

const global = getContent('global');
export const GlobalContent = createContext<ContentSet>(global);

export type PageProps = PropsWithChildren;

const Page = ({ children }: PageProps) => {
	return (
		<GlobalContent.Provider value={global}>
			<MenuBar />
			{children}
		</GlobalContent.Provider>
	);
};

export default Page;
