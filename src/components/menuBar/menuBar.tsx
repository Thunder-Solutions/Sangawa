import Image from 'next/image';
import css from './menuBar.module.css';
import Link from 'next/link';
import { getContent } from '@/api-client/api-client';

const [error, response] = await getContent('menuBar');

if (error || !response) {
	const _error = error instanceof Error
		? error
		: new Error('Content could not be found.');
	console.error(_error);
};

const MenuBar = () => {
	const content = response ?? {
		title: [{}],
		nav: [],
		register: [{}],
	};
	return (
		<header className={css.menuBar}>
			<Link href="/">
				<Image
					className={css.logo}
					src="/sangawa-logo-light.svg"
					alt={content.title[0].text}
					height={50}
					width={165}
				/>
			</Link>

			<nav className={css.navBar}>
				{content.nav.map(({ text, href }) => (
					<Link
						key={href}
						href={href}
						className={css.navLink}
					>{text}</Link>
				))}
				<Link
					href={content.register[0].href}
					className={css.registerLink}
				>{content.register[0].text}</Link>
			</nav>
		</header>
	);
};

export default MenuBar;
