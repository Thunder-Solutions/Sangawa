import { PropsWithChildren } from 'react';
import { useCSS, Scope } from 'react-shadow-scope';
import { theme } from '@/utilities/theme';
import Icon, { IconProps } from './icon';

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
			--size: 1.5em;
			background-color: var(--color-brand-1);
			border: 0 solid;
			border-radius: 50%;
			display: flex;
			place-items: center;
			place-content: center;
			height: var(--size);
			width: var(--size);
			color: var(--color-brand-1-c);
			font-size: 6rem;
			margin: 0.5rem;
			transition: all 0.3s;
		}
		a:hover {
			filter: hue-rotate(-25deg);
		}
		a:hover > .icon-wrapper {
			--size: 1.6em;
			margin: 0.2rem;
		}
	`;
	return (
		<Scope tag={CTA_LINK_TAG} stylesheets={[theme, stylesheet]} slottedContent={children}>
			<a href={href}>
				<div className="icon-wrapper">
					<Icon type={icon} className="icon" />
				</div>
				<slot></slot>
			</a>
		</Scope>
	);
};

export default CtaLink;
