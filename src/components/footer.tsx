import { theme } from '@/utilities/theme';
import { useCSS, Scope } from 'react-shadow-scope';
import Image from 'next/image';
import Icon from './icon';
import { Fragment, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '@/api-client/context';
import { getTypedContent } from '@/utilities/utilities';
import Link from 'next/link';
import { Content } from '@/api-client/api-client';

export const FOOTER_TAG = 'sg-footer';
export const FOOTER_LOGO_TAG = 'sg-footer-logo';
export const FOOTER_SOCIAL_TAG = 'sg-footer-social';
export const FOOTER_SITEMAP_TAG = 'sg-footer-sitemap';
export const FOOTER_COPYRIGHT_TAG = 'sg-footer-copyright';

type LinkContent = { text: string; href: string };

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
			padding-bottom: 1rem;
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
			display: grid;
			gap: 0.5rem;
			padding: 1rem 2rem;
		}
		.copy {
			grid-area: copy;
			padding-top: 1rem;
		}
		@media (min-width: 50em) {
			footer {
				grid-template-areas:
					'logo    sitemap social'
					'logo    copy    social';
				grid-template-columns: auto 1fr auto;
				grid-template-rows: 1fr auto;
			}
			.sitemap {
				display: flex;
				justify-content: space-around;
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
				<Social className="social" />
				<Sitemap className="sitemap" />
				<Copyright className="copy" />
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
					<Image
						src="/pittjcs-logo.png"
						alt="Pittsburgh Japanese Culture Society"
						height={600}
						width={400}
						className="logo"
					/>
				</div>
			</Scope>
		</div>
	);
};

const socialKey = Symbol();

type SocialProps = { className?: string };

const Social = ({ className }: SocialProps) => {
	const global = useContext(GlobalContext);
	const facebook = getTypedContent<LinkContent>(global.facebook)[0];
	const twitter = getTypedContent<LinkContent>(global.twitter)[0];
	const css = useCSS(socialKey);
	const stylesheet = css`
		:host {
			display: grid;
			justify-content: end;
			padding: 2rem;
			gap: 1.5rem;
		}
		.social-icon {
			font-size: 5rem;
			color: var(--color-brand-1);
		}
	`;
	return (
		<div className={className}>
			<Scope tag={FOOTER_SOCIAL_TAG} stylesheets={[theme, stylesheet]}>
				<Link className="social-link" href={facebook.content.href}>
					<Icon type="facebook" className="social-icon" title={facebook.content.text} />
				</Link>
				<Link className="social-link" href={twitter.content.href}>
					<Icon type="twitter" className="social-icon" title={twitter.content.text} />
				</Link>
			</Scope>
		</div>
	);
};

const sitemapKey = Symbol();

type SitemapProps = { className?: string };

const SitemapSection = ({ id, content, childContent }: Content<LinkContent>) => {
	const [expanded, setExpanded] = useState(false);
	const toggleSitemapSection = () => {
		setExpanded(!expanded);
	};
	const css = useCSS(sitemapKey);
	const stylesheet = css`
		.sitemap-section {
			display: grid;
		}
		.top-level-link {
			font-weight: bold;
		}
		.link {
		}
		.link,
		.top-level-link {
			color: var(--color-brand-1);
		}
		.sitemap-section {
			transition: max-height 0.5s;
			max-height: 10rem;
			overflow: hidden;
		}
		.sitemap-section[aria-hidden='true'] {
			max-height: 0;
		}
		.top-level-link-container {
			display: grid;
			grid-template-columns: 1fr auto;
			gap: 0.5rem;
		}
		.toggler {
			border: 0 solid;
			border-radius: 0.3rem;
			background-color: var(--color-brand-1);
			color: var(--color-brand-1-c);
			cursor: pointer;
			display: inline-flex;
			padding: 0.2rem;
		}
		@media (min-width: 50em) {
			.toggler {
				display: none;
			}
			.top-level-link-container {
				grid-template-columns: 1fr;
			}
			.top-level-link {
				padding-bottom: 0.5rem;
			}
		}
	`;
	useEffect(() => {
		const mediaQuery = matchMedia('(min-width: 50em)');
		const handleMediaChange = (e: MediaQueryListEvent) => {
			setExpanded(e.matches);
		};
		setExpanded(mediaQuery.matches);
		mediaQuery.addEventListener('change', handleMediaChange);
		return () => {
			mediaQuery.removeEventListener('change', handleMediaChange);
		};
	}, []);
	return (
		<Scope tag={FOOTER_SITEMAP_TAG} stylesheets={[theme, stylesheet]}>
			<nav key={id}>
				<div className="top-level-link-container">
					<Link href={content.href ?? ''} className="top-level-link">
						{content.text}
					</Link>
					<button
						className="toggler"
						aria-expanded={expanded}
						aria-owns={`SitemapSection-${id}`}
						onClick={toggleSitemapSection}
					>
						{expanded ? <Icon type="minus" /> : <Icon type="plus" />}
					</button>
				</div>
				<div className="sitemap-section" aria-hidden={!expanded} id={`SitemapSection-${id}`}>
					{childContent?.map(({ id, content }) => (
						<Link key={id} href={content.href ?? ''} className="link">
							{content.text}
						</Link>
					))}
				</div>
			</nav>
		</Scope>
	);
};

const Sitemap = ({ className }: SitemapProps) => {
	const global = useContext(GlobalContext);
	const sitemap = getTypedContent<LinkContent>(global.sitemap);
	return (
		<div className={className}>
			{sitemap.map((props) => (
				<SitemapSection key={props.id} {...props} />
			))}
		</div>
	);
};

const copyrightKey = Symbol();

type CopyrightProps = { className?: string };

const Copyright = ({ className }: CopyrightProps) => {
	const css = useCSS(copyrightKey);
	const stylesheet = css`
		.copyright {
			display: block;
			text-align: center;
			padding-bottom: 1rem;
		}
	`;
	return (
		<div className={className}>
			<Scope tag={FOOTER_COPYRIGHT_TAG} stylesheets={[theme, stylesheet]}>
				<small className="copyright">
					Copyright &copy; Pittsburgh Japanese Culture Society 2020 All Rights Reserved
				</small>
			</Scope>
		</div>
	);
};

export default Footer;
