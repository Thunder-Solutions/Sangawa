import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { useCSS, Scope } from 'react-shadow-scope';
import { GlobalContext } from '@/api-client/context';
import { getTypedContent } from '@/utilities/utilities';
import Icon from './icon';
import { theme } from '@/utilities/theme';
import PageNav from './pageNav';

export const MENU_BAR_TAG = 'sg-menu-bar';

type LinkContent = { text: string; href: string };
type TextContent = { text: string };

const key = Symbol();

const MenuBar = () => {
	const global = useContext(GlobalContext);
	const title = getTypedContent<TextContent>(global.title)[0];
	const facebook = getTypedContent<LinkContent>(global.facebook)[0];
	const twitter = getTypedContent<LinkContent>(global.twitter)[0];
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const toggleMobileNav = () => {
		setMobileNavOpen(!mobileNavOpen);
	};

	const css = useCSS(key);
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
		.toggler {
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
		.toggler-line {
			width: 2rem;
			height: 0.25rem;
			border-radius: 0.625rem;
			background-color: white;
			transform-origin: 0.1rem;
			transition: all 0.3s linear;
		}
		.toggler-line-1 {
			transform: ${mobileNavOpen ? 'rotate(45deg)' : 'rotate(0)'};
		}
		.toggler-line-2 {
			opacity: ${mobileNavOpen ? '0' : '1'};
		}
		.toggler-line-3 {
			transform: ${mobileNavOpen ? 'rotate(-45deg)' : 'rotate(0)'};
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

	return (
		<Scope tag={MENU_BAR_TAG} stylesheets={[theme, stylesheet]}>
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
						<button
							className="toggler"
							onClick={toggleMobileNav}
							aria-controls="mobile-nav"
							aria-expanded={mobileNavOpen}
						>
							<div className="toggler-line toggler-line-1" />
							<div className="toggler-line toggler-line-2" />
							<div className="toggler-line toggler-line-3" />
						</button>
						<PageNav id="mobile-nav" aria-hidden={!mobileNavOpen} mobile={true} isOpen={mobileNavOpen} />
					</div>
				</div>
			</header>
		</Scope>
	);
};

export default MenuBar;
