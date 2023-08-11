import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { css, Scope } from 'react-shadow-scope';
import { GlobalContent } from './page';
import Icon from './icon';

const stylesheet = css`
header {
	background-color: var(--color-brand-1);
	padding: 0.5rem 2rem;
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: right;
}
.logo {
	height: 4rem;
}
nav {
	display: flex;
	gap: 1rem;
	align-items: center;
}
.nav-link {
	color: var(--color-brand-1-c);
	text-decoration: none;
	font-size: 1.2rem;
}
.register-link {
	font-family: "Brasspounder";
	background-color: var(--color-brand-1-c);
	border: 0 solid;
	border-radius: 0.5rem;
	color: var(--color-brand-1);
	text-decoration: none;
	padding: 1rem 2rem;
	display: inline-block;
}
.icon {
	color: var(--color-brand-1-c);
	font-size: 2rem;
}
`;

const MenuBar = () => {
	const global = useContext(GlobalContent);
	const nav = global.nav ?? [];
	const titleText = global.title?.[0]?.text ?? '';
	const registerTxt = global.register?.[0]?.text ?? '';
	const registerHref = global.register?.[0]?.href ?? '';
	const twitterText = global.twitter?.[0]?.text ?? '';
	const twitterHref = global.twitter?.[0]?.href ?? '';
	const facebookText = global.facebook?.[0]?.text ?? '';
	const facebookHref = global.facebook?.[0]?.href ?? '';
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
					<Link
						href={twitterHref}
					><Icon type="twitter" title={twitterText} className="icon icon--twitter" /></Link>
					<Link
						href={facebookHref}
					><Icon type="facebook" title={facebookText} className="icon icon--facebook" /></Link>
				</nav>
			</header>
		</Scope>
	);
};

export default MenuBar;
