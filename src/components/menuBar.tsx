import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { css, Scope } from 'react-shadow-scope';
import { GlobalContent } from './page';

const stylesheet = css`
header {
	background-color: var(--color-brand-1);
	padding: 5px 20px;
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: right;
}
.logo {
	height: 50px;
}
nav {
	display: flex;
	gap: 1rem;
	align-items: center;
}
.nav-link {
	color: var(--color-brand-1-c);
	text-decoration: none;
}
.register-link {
	font-family: "Brasspounder";
	background-color: var(--color-brand-1-c);
	border: 0 solid;
	border-radius: 5px;
	color: var(--color-brand-1);
	text-decoration: none;
	padding: 10px 20px;
	display: inline-block;
}
`;

const MenuBar = () => {
	const global = useContext(GlobalContent);
	const nav = global.nav ?? [];
	const titleText = global.title?.[0]?.text ?? '';
	const registerTxt = global.register?.[0]?.text ?? '';
	const registerHref = global.register?.[0]?.href ?? '';
	return (
		<Scope stylesheet={stylesheet}>
			<header>
				<Link href="/">
					<Image
						className="logo"
						src="/sangawa-logo-light.svg"
						alt={titleText}
						height={50}
						width={165}
					/>
				</Link>
				<nav>
					{nav?.map(({ text, href }) => (
						<Link
							key={href}
							href={href}
							className="nav-link"
						>{text}</Link>
					))}
					<Link
						href={registerHref}
						className="register-link"
					>{registerTxt}</Link>
				</nav>
			</header>
		</Scope>
	);
};

export default MenuBar;
