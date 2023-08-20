import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { css, Scope } from 'react-shadow-scope';
import { GlobalContent } from './page';
import MobileNav from './mobileNav';
import HamburgerIcon from './hamburgerIcon';
import { getTypedContent } from '@/utilities/utilities';
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
	gap: .5rem;
	align-items: center;
}
.nav-link {
	color: var(--color-brand-1-c);
	text-decoration: none;
	font-size: 1.2rem;
}
.nav-link:hover {
	background-color: var(--color-nav-hover);
}
nav > .nav-link {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 0.75rem;
}
.subnav {
	position: relative;
	height: calc(100% + 0.75rem);
	cursor: pointer;
}
.subnav .subnav-btn {
	border: none;
  outline: none;
	background-color: transparent;
	font-family: inherit;
	margin: calc(20% + 1rem) 0 0 0;
	cursor: pointer;
}
.subnav:hover {
	background-color: var(--color-nav-hover);
}
.subnav:hover .subnav-content {
	display: flex;
}
.subnav-content {
	display: none;
	flex-direction: column;
	gap: 0.375rem;
	position: absolute;
	top: 4.375rem;
	right: 0;
	background-color: var(--color-brand-1);
	z-index: 1;
	border-radius: 0.375rem;
	text-align: right;
	min-width: 11rem;
	padding: 0.75rem 0;
}
.subnav-link {
	padding: 0.25rem 0.625rem;
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
.mobile-nav-icon { display: none; }
@media screen and (max-width: 767px) {
	nav.desktop-nav .nav-link, a.register-link { display: none; }
	nav .mobile-nav-icon { display: block; }
}
`;

type LinkContent = { text: string, href: string };
type TextContent = { text: string };

const MenuBar = () => {
	const global = useContext(GlobalContent);
	const nav = getTypedContent<LinkContent>(global.nav);
	const register = getTypedContent<LinkContent>(global.register)[0];
	const title = getTypedContent<TextContent>(global.title)[0];
	const facebook = getTypedContent<LinkContent>(global.facebook)[0];
	const twitter = getTypedContent<LinkContent>(global.twitter)[0];

	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const toggleMobileNav = () => {
		setMobileNavOpen(!mobileNavOpen);
	};

	return (
		<Scope stylesheet={stylesheet}>
			<header>
				<Link href="/">
					<Image
						className="logo"
						src="/sangawa-logo-light.svg"
						alt={title.content.text}
						height={50}
						width={165}
					/>
				</Link>
				<nav className="desktop-nav">
					{nav.map(({ content, children }) => {
						if (Array.isArray(children) && children.length > 0) {
							return (
								<div key={content.href} className="subnav">
									<button className="nav-link subnav-btn">{content.text}</button>
									<div className="subnav-content">
										{getTypedContent<LinkContent>(children).map(({ content }) => (
											<Link
												key={content.href}
												href={content.href}
												className="nav-link subnav-link"
											>{content.text}</Link>
										))}
									</div>
								</div>
							);
						}

						return (
							<Link
								key={content.href}
								href={content.href as string}
								className="nav-link"
							>{content.text}</Link>
						);
					})}

					<Link
						href={register.content.href}
						className="register-link"
					>{register.content.text}</Link>

					<div className="mobile-nav-icon">
						<HamburgerIcon isOpen={mobileNavOpen} onClick={toggleMobileNav} />
						<MobileNav isOpen={mobileNavOpen} />
					</div>

					<Link href={twitter.content.href}>
						<Icon type="twitter" title={twitter.content.text} className="icon icon--twitter" />
					</Link>
					<Link href={facebook.content.href}>
						<Icon type="facebook" title={facebook.content.text} className="icon icon--facebook" />
					</Link>
				</nav>
			</header>
		</Scope>
	);
};

export default MenuBar;
