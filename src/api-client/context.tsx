'use client';

import { ReactNode, createContext } from 'react';
import { ContentSet, DEFAULT_CONTENT_SET } from './api-client';

export const GlobalContext = createContext<ContentSet>(DEFAULT_CONTENT_SET);

export const GlobalProvider = ({ value, children }: { value: any; children: ReactNode }) => {
	return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
