import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { useCSS, Scope } from 'react-shadow-scope';
import { GlobalContent } from './page';
import { getTypedContent } from '@/utilities/utilities';
import Icon from './icon';
import { theme } from '@/utilities/theme';
import PageNav from './pageNav';

type MenuTogglerProps = {
	isOpen: boolean;
	onClick: () => void;
};

const MenuToggler = ({ isOpen, onClick }: MenuTogglerProps) => {
	const css = useCSS();
	const stylesheet = css`
		button {
			background: none;
			border: none;
			height: 2rem;
			display: grid;
			place-items: center;
			z-index: 10;
			cursor: pointer;
			margin: 0 0 0 1rem;
			padding: 0;
		}
		.line {
			width: 2rem;
			height: 0.25rem;
			border-radius: 0.625rem;
			background-color: white;
			transform-origin: 0.1rem;
			transition: all 0.3s linear;
		}
		.line-1 {
			transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
		}
		.line-2 {
			opacity: ${isOpen ? '0' : '1'};
		}
		.line-3 {
			transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
		}
	`;
	return (
		<Scope stylesheets={[theme, stylesheet]}>
			<button onClick={onClick}>
				<div className="line line-1" />
				<div className="line line-2" />
				<div className="line line-3" />
			</button>
		</Scope>
	);
};

type LinkContent = { text: string; href: string };
type TextContent = { text: string };

const MenuBar = () => {
	const css = useCSS();
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
		.menu-items {
			display: flex;
			gap: 0.5rem;
			align-items: center;
		}
		.icon {
			color: var(--color-brand-1-c);
			font-size: 2rem;
		}
		.desktop-nav {
			display: none;
		}
		@media screen and (min-width: 70em) {
			.mobile-nav {
				display: none;
			}
			.desktop-nav {
				display: block;
			}
		}
	`;
	const global = useContext(GlobalContent);
	const title = getTypedContent<TextContent>(global.title)[0];
	const facebook = getTypedContent<LinkContent>(global.facebook)[0];
	const twitter = getTypedContent<LinkContent>(global.twitter)[0];
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const toggleMobileNav = () => {
		setMobileNavOpen(!mobileNavOpen);
	};

	return (
		<Scope stylesheets={[theme, stylesheet]}>
			<header>
				<Link href="/">
					<Image className="logo" src="/sangawa-logo-light.svg" alt={title.content.text} height={50} width={165} />
				</Link>
				<div className="menu-items">
					<div className="desktop-nav">
						<PageNav />
					</div>

					<Link href={twitter.content.href}>
						<Icon type="twitter" title={twitter.content.text} className="icon" />
					</Link>
					<Link href={facebook.content.href}>
						<Icon type="facebook" title={facebook.content.text} className="icon" />
					</Link>

					<div className="mobile-nav">
						<MenuToggler isOpen={mobileNavOpen} onClick={toggleMobileNav} />
						<PageNav mobile={true} isOpen={mobileNavOpen} />
					</div>
				</div>
			</header>
		</Scope>
	);
};

export default MenuBar;
