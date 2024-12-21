import { apiClient } from '@/api-client/api-client';
import './global.css';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { GlobalProvider } from '@/api-client/context';
import { NavigationProvider } from '@/components/navigation';

const response = await apiClient.fetchGlobalContent();
const [globalError, global = {}] = response;
if (globalError) {
	const _error = globalError instanceof Error ? globalError : new Error('Global content could not be found.');
	console.error(_error);
}

export const metadata: Metadata = {
	title: 'Sangawa Project',
	description: 'The Japanese pop culture convention for adults',
};

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					/* @ts-ignore */
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<GlobalProvider value={global}>
					<NavigationProvider>{children}</NavigationProvider>
				</GlobalProvider>
			</body>
		</html>
	);
};

export default RootLayout;
