'use client';

import { ReactNode, createContext } from 'react';
import { ContentSet } from './api-client';

export const GlobalContext = createContext<ContentSet>({});

export const GlobalProvider = ({ value, children }: { value: any; children: ReactNode }) => {
	return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
