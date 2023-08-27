import Link from 'next/link';
import { useContext } from 'react';
import { useCSS, Scope } from 'react-shadow-scope';
import { GlobalContent } from './page';
import { getTypedContent } from '@/utilities/utilities';
import { theme } from '@/utilities/theme';

export interface Props {
	isOpen: boolean;
}

type LinkContent = { text: string; href: string };

const MobileNav = ({ isOpen }: Props) => {
	const css = useCSS();
	const stylesheet = css`
		nav {
			position: absolute;
			top: 4.125rem;
			right: 0;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			align-items: flex-end;
			background-color: var(--color-brand-1);
			padding: 0.75rem 0;
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
	const global = useContext(GlobalContent);
	const nav = getTypedContent<LinkContent>(global.nav);
	const register = getTypedContent<LinkContent>(global.register)[0];

	return (
		<Scope stylesheets={[theme, stylesheet]}>
			<nav style={{ display: isOpen ? 'flex' : 'none' }}>
				{nav.map(({ content, children }) => {
					if (children !== undefined && children.length > 0) {
						return (
							<div key={content.href} className="subnav">
								<button className="nav-link subnav-btn">{`< ${content.text}`}</button>
								<div className="subnav-content">
									{getTypedContent<LinkContent>(children).map(({ content }) => (
										<Link key={content.href} href={content.href} className="nav-link subnav-link">
											{content.text}
										</Link>
									))}
								</div>
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
		</Scope>
	);
};

export default MobileNav;
