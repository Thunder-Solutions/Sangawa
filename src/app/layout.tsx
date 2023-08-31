import { apiClient } from '@/api-client/api-client';
import './global.css';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { GlobalProvider } from '@/api-client/context';

const response = await apiClient.fetchGlobalContent();
const [globalError, global = {}] = response;
if (globalError) {
	const _error = globalError instanceof Error ? globalError : new Error('Global content could not be found.');
	console.error(_error);
}

const font = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Sangawa Project',
	description: 'The Japanese pop culture convention for adults',
};

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body className={font.className}>
				<GlobalProvider value={global}>{children}</GlobalProvider>
			</body>
		</html>
	);
};

export default RootLayout;
