import { getTypedContent } from '@/utilities/utilities';
import Link from 'next/link';
import { useContext } from 'react';
import { GlobalContext } from '@/api-client/context';
import { Scope, useCSS } from 'react-shadow-scope';
import { theme } from '@/utilities/theme';

export const PAGE_NAV_TAG = 'sg-page-nav';

type LinkContent = { text: string; href: string };
export type PageNavProps = {
	isOpen?: boolean;
	mobile?: boolean;
};

const mobileKey = Symbol();
const desktopKey = Symbol();

const PageNav = ({ isOpen = true, mobile = false }: PageNavProps) => {
	const mobileCSS = useCSS(mobileKey);
	const desktopCSS = useCSS(desktopKey);
	const mobileStylesheet = mobileCSS`
		.nav {
			position: absolute;
			top: 1.6rem;
			right: 0;
			display: ${isOpen ? 'flex' : 'none'};
			flex-direction: column;
			gap: 0.5rem;
			align-items: flex-end;
			background-color: var(--color-brand-1);
			padding: 0.75rem 0;
		}
		.wrapper {
			position: relative;
		}
		.nav-link {
			color: var(--color-brand-1-c);
			text-decoration: none;
			width: 100%;
			text-align: right;
			padding: 0.25rem 0.75rem;
			box-sizing: border-box;
		}
		.nav-link:focus-within {
			background-color: var(--color-nav-hover);
		}
		.subnav {
			position: relative;
			cursor: pointer;
			width: 100%;
		}
		.subnav .subnav-btn {
			border: none;
			outline: none;
			background-color: transparent;
			font-family: inherit;
			cursor: pointer;
			margin-left: -0.125rem;
		}
		.subnav:focus-within {
			background-color: var(--color-nav-hover);
		}
		.subnav:focus-within .subnav-content {
			display: flex;
		}
		.subnav-content {
			display: none;
			flex-direction: column;
			gap: 0.375rem;
			position: absolute;
			top: -0.813rem;
			right: 8.625rem;
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
	const desktopStylesheet = desktopCSS`
		.nav {
			display: flex;
			gap: 0.5rem;
			height: 3rem;
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
			background-color: var(--color-nav-hover);
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
			border: none;
			outline: none;
			background-color: transparent;
			font-family: inherit;
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
			top: 3rem;
			right: 0;
			background-color: var(--color-brand-1);
			z-index: 1;
			border-radius: 0.375rem;
			text-align: right;
			min-width: 15rem;
			padding: 0.75rem 0;
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
		}
	`;
	const stylesheet = mobile ? mobileStylesheet : desktopStylesheet;
	const global = useContext(GlobalContext);
	const nav = getTypedContent<LinkContent>(global.nav);
	const register = getTypedContent<LinkContent>(global.register)[0];
	return (
		<Scope tag={PAGE_NAV_TAG} stylesheets={[theme, stylesheet]}>
			<div className="wrapper">
				<nav className="nav">
					{nav.map(({ content, childContent: children }) => {
						if (Array.isArray(children) && children.length > 0) {
							return (
								<div key={content.href} className="subnav">
									<button className="nav-link subnav-btn">{content.text}</button>
									<nav className="subnav-content">
										{getTypedContent<LinkContent>(children).map(({ content }) => (
											<Link key={content.href} href={content.href} className="nav-link subnav-link">
												{content.text}
											</Link>
										))}
									</nav>
								</div>
							);
						}

						return (
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

export default PageNav;
