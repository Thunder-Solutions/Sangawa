import './global.css';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { fetchGlobalContent } from '@/api-client/api-client';

const [error, global] = await fetchGlobalContent();

if (error || !global) {
	const _error = error instanceof Error
		? error
		: new Error('Content could not be found.');
	console.error(_error);
};

const font = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Sangawa Project',
	description: 'The Japanese pop culture convention for adults',
};

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<head>
				<link rel='icon' href='/favicon.ico'/>
				<script type="application/json" id="GlobalContent" dangerouslySetInnerHTML={{
					__html: JSON.stringify({ global }),
				}}></script>
			</head>
			<body className={font.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
