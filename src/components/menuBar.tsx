import Image from 'next/image';
import { Link } from '@/components/navigation';
import { HTMLAttributes, useContext, useState } from 'react';
import { useCSS, Scope, css } from 'react-shadow-scope';
import { GlobalContext } from '@/api-client/context';
import { getTypedContent } from '@/utilities/utilities';
import Icon from './icon';
import { theme } from '@/utilities/theme';

export const PAGE_NAV_TAG = 'sg-page-nav';

type LinkContent = { text: string; href: string };
export type PageNavProps = {
	isOpen?: boolean;
	mobile?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const mobileStylesheet = css`
	.nav {
		display: none;
		flex-direction: column;
		gap: 0.5rem;
		align-items: flex-end;
	}
	.nav,
	.subnav-content {
		background-color: var(--color-brand-1);
		padding: 0.75rem 0;
		border: 0;
		border-radius: 0.4rem;
		border-top-right-radius: 0;
		box-shadow: -0.2rem 0.2rem 0 rgba(0, 0, 0, 0.4);
	}
	.nav[aria-hidden='false'] {
		display: flex;
	}
	.wrapper {
		position: absolute;
		top: calc(100% + 0.02rem);
		right: 0;
	}
	.nav-link {
		color: var(--color-brand-1-c);
		text-decoration: none;
		width: 100%;
		text-align: right;
		padding: 0.25rem 0.75rem;
		box-sizing: border-box;
	}
	.subnav {
		position: relative;
		cursor: pointer;
		width: 100%;
	}
	.subnav .subnav-btn {
		display: flex;
		place-items: center;
		justify-content: end;
		border: none;
		background-color: transparent;
		font-family: inherit;
		cursor: pointer;
	}
	.subnav-content[aria-hidden='false'] {
		display: flex;
	}
	.subnav-content {
		display: none;
		flex-direction: column;
		gap: 0.375rem;
		position: absolute;
		top: -0.813rem;
		right: calc(100% + 0.1rem);
		z-index: 1;
		text-align: right;
		min-width: 11rem;
	}
	.subnav-link {
		padding: 0.25rem 0.625rem;
	}
	.subnav-mobile-icon {
		font-size: 1.3rem;
		flex: 1;
	}
	.register-link {
		font-family: 'Brasspounder';
		background-color: var(--color-brand-1-c);
		border: 0 solid;
		border-radius: 0.375rem;
		color: var(--color-brand-1);
		text-decoration: none;
		padding: 0.625rem 1.25rem;
		margin: 0.375rem 0.625rem;
		display: inline-block;
	}
`;
const desktopStylesheet = css`
	.wrapper,
	.nav {
		height: 100%;
	}
	.nav {
		display: flex;
		place-items: center;
		gap: 0.5rem;
		height: 100%;
	}
	.nav-link {
		color: var(--color-brand-1-c);
		display: flex;
		place-items: center;
		padding: 0 1rem;
		height: 100%;
		text-decoration: none;
		font-size: 1.2rem;
	}
	.nav-link:hover {
		background-color: var(--color-brand-1-1);
	}
	.nav > .nav-link {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 0.75rem;
	}
	.subnav {
		display: flex;
		position: relative;
		height: 100%;
		cursor: pointer;
	}
	.subnav .subnav-btn {
		display: flex;
		gap: 0.2rem;
		place-items: center;
		border: none;
		background-color: transparent;
		font-family: inherit;
		cursor: pointer;
	}
	.subnav:hover {
		background-color: var(--color-brand-1-1);
	}
	.subnav-content[aria-hidden='false'] {
		display: flex;
	}
	.subnav-content {
		display: none;
		flex-direction: column;
		gap: 0.4rem;
		position: absolute;
		top: calc(100% + 0.02rem);
		right: 0;
		background-color: var(--color-brand-1);
		z-index: 1;
		border-radius: 0.4rem;
		border-top-right-radius: 0;
		box-shadow: 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.4);
		text-align: right;
		min-width: 15rem;
		padding: 0.75rem 0;
	}
	.subnav-desktop-icon {
		font-size: 1.6rem;
	}
	.subnav-link {
		padding: 0.25rem 0.625rem;
	}
	.register-link {
		font-family: 'Brasspounder';
		background-color: var(--color-brand-1-c);
		border: 0 solid;
		border-radius: 0.5rem;
		color: var(--color-brand-1);
		text-decoration: none;
		padding: 1rem 2rem;
		display: inline-block;
		transition: background-color 0.3s;
	}
	.register-link:hover {
		background-color: var(--color-brand-1-c-1);
	}
`;

const PageNav = ({ isOpen = true, mobile = false, ...forwardedProps }: PageNavProps) => {
	const stylesheet = mobile ? mobileStylesheet : desktopStylesheet;
	const global = useContext(GlobalContext);
	const nav = getTypedContent<LinkContent>(global.nav);
	const register = getTypedContent<LinkContent>(global.register)[0];
	return (
		<Scope {...forwardedProps} tag={PAGE_NAV_TAG} stylesheets={[theme, stylesheet]}>
			<div className="wrapper">
				<nav className="nav" aria-hidden={!isOpen}>
					{nav.map(({ id, content, childContent }) => {
						// eslint doesn't recognize this as a component, even though it is
						// eslint-disable-next-line
						const [subnavOpen, setSubnavOpen] = useState(false);
						const toggleSubnav = () => {
							setSubnavOpen(!subnavOpen);
						};
						const handleHover = (on: boolean) => () => {
							if (mobile) return;
							setSubnavOpen(on);
						};
						return Array.isArray(childContent) && childContent.length > 0 ? (
							<div
								key={content.href}
								className="subnav"
								onMouseOver={handleHover(true)}
								onMouseLeave={handleHover(false)}
							>
								<button
									className="nav-link subnav-btn"
									onClick={toggleSubnav}
									aria-controls={id}
									aria-expanded={subnavOpen}
								>
									{mobile ? <Icon className="subnav-mobile-icon" type="left-chevron" /> : <></>}
									<span>{content.text}</span>
									{mobile ? <></> : <Icon className="subnav-desktop-icon" type="down-chevron" />}
								</button>
								<nav className="subnav-content" id={id} aria-hidden={!subnavOpen}>
									{getTypedContent<LinkContent>(childContent).map(({ content }) => (
										<Link key={content.href} href={content.href} className="nav-link subnav-link">
											{content.text}
										</Link>
									))}
								</nav>
							</div>
						) : (
							<Link key={content.href} href={content.href} className="nav-link">
								{content.text}
							</Link>
						);
					})}

					<Link href={register.content.href} className="register-link">
						{register.content.text}
					</Link>
				</nav>
			</div>
		</Scope>
	);
};

export const MENU_BAR_TAG = 'sg-menu-bar';

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
			display: grid;
			grid-template-columns: auto 1fr;
			position: sticky;
			justify-items: right;
			top: 0;
			max-width: 100vw;
			z-index: 2;
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
			height: 100%;
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
		.logo-link {
			display: flex;
			padding-left: 1rem;
		}
		.mobile-nav {
			height: 100%;
			display: flex;
			place-items: center;
			position: relative;
			padding-right: 1rem;
		}
		@media screen and (min-width: 55em) {
			.mobile-nav {
				display: none;
			}
			.desktop-nav {
				display: block;
			}
			.menu-items {
				padding-right: 1rem;
			}
		}
	`;

	return (
		<Scope tag={MENU_BAR_TAG} stylesheets={[theme, stylesheet]}>
			<header>
				<Link href="/" className="logo-link">
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
