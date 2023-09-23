import { PropsWithChildren } from 'react';
import { useCSS, Scope } from 'react-shadow-scope';
import { theme } from '@/utilities/theme';
import Icon, { IconProps } from './icon';
import { Link } from './navigation';

export const CTA_LINK_TAG = 'sg-cta-link';

export type CtaLinkProps = PropsWithChildren<{
	href: string;
	icon: IconProps['type'];
}>;

const key = Symbol();

const CtaLink = ({ children, href, icon }: CtaLinkProps) => {
	const css = useCSS(key);
	const stylesheet = css`
		@layer {
			a,
			a:hover,
			a:active,
			a:visited {
				all: unset;
				color: var(--color-brand-1);
				cursor: pointer;
				display: grid;
				font-family: 'Brasspounder';
				font-size: 1.6rem;
				justify-items: center;
				width: 15rem;
				text-align: center;
				text-shadow: 0 0 0.3rem var(--color-brand-1-c);
			}
		}
		.icon-wrapper {
			--wrapper-size: 1.6em;
			display: flex;
			place-items: center;
			place-content: center;
			height: var(--wrapper-size);
			width: var(--wrapper-size);
			color: var(--color-brand-1-c);
			font-size: 6rem;
			position: relative;
		}
		.icon {
			position: relative;
			z-index: 1;
		}
		.icon-backdrop {
			--size: 1.5em;
			background-color: var(--color-brand-1);
			border: 0 solid;
			border-radius: 50%;
			content: '';
			display: block;
			position: absolute;
			inset: 0;
			margin: auto;
			height: var(--size);
			width: var(--size);
			transition: all 0.3s;
			z-index: 0;
		}
		a:hover {
			filter: hue-rotate(-25deg);
		}
		a:hover .icon-backdrop {
			--size: 1.6em;
		}
	`;
	return (
		<Scope tag={CTA_LINK_TAG} stylesheets={[theme, stylesheet]} slottedContent={children}>
			<Link href={href}>
				<div className="icon-wrapper">
					<Icon type={icon} className="icon" />
					<div className="icon-backdrop" />
				</div>
				<slot></slot>
			</Link>
		</Scope>
	);
};

export default CtaLink;
