import { theme } from '@/utilities/theme';
import { useCSS, Scope } from 'react-shadow-scope';

import Image from 'next/image';

export const FOOTER_TAG = 'sg-footer';
export const FOOTER_LOGO_TAG = 'sg-footer-logo';

const key = Symbol();

const Footer = () => {
	const css = useCSS(key);
	const stylesheet = css`
		:host {
			--border: 0.1rem solid var(--color-site-2);
		}
		footer {
			background-color: var(--color-site-1);
			border: 0 solid var(--color-brand-1);
			border-width: 1rem 0;
			color: var(--color-site-1-c);
			padding: 0.5rem;
			display: grid;
			grid-template-areas:
				'logo    social'
				'sitemap sitemap'
				'copy    copy';
			grid-template-columns: 1fr 1fr;
		}
		.logo {
			grid-area: logo;
		}
		.social {
			grid-area: social;
		}
		.sitemap {
			grid-area: sitemap;
			border: var(--border);
			border-right: none;
			border-left: none;
		}
		@media (min-width: 50em) {
			footer {
				grid-template-areas:
					'logo    sitemap social'
					'logo    copy    social';
				grid-template-columns: auto 1fr auto;
			}
			.sitemap {
				border: none;
			}
			.logo {
				border-right: var(--border);
			}
			.social {
				border-left: var(--border);
			}
		}
	`;
	return (
		<Scope tag={FOOTER_TAG} stylesheets={[theme, stylesheet]}>
			<footer>
				<Logo className="logo" />
				<div className="social">social</div>
				<div className="sitemap">sitemap</div>
				<div className="copy">copy</div>
			</footer>
		</Scope>
	);
};

const logoKey = Symbol();

type LogoProps = { className?: string };

const Logo = ({ className }: LogoProps) => {
	const css = useCSS(logoKey);
	const stylesheet = css`
		.logo-wrapper {
			box-sizing: border-box;
			padding: 1rem;
			width: 100%;
			max-width: 16rem;
		}
		.logo {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	`;
	return (
		<div className={className}>
			<Scope tag={FOOTER_LOGO_TAG} stylesheets={[theme, stylesheet]}>
				<div className="logo-wrapper">
					<Image src="/pittjcs-logo.svg" alt="Logo" height={600} width={400} className="logo" />
				</div>
			</Scope>
		</div>
	);
};

export default Footer;
