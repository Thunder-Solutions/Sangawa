import { PropsWithChildren } from 'react';
import { useCSS, Scope } from 'react-shadow-scope';
import { theme } from '@/utilities/theme';

export const CTA_LAYOUT_TAG = 'sg-cta-layout';

export type CtaLayoutProps = PropsWithChildren;

const CtaLayout = ({ children }: CtaLayoutProps) => {
	const css = useCSS();
	const stylesheet = css`
		nav {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			place-content: center;
			gap: 4rem;
			padding: 4rem 1rem;
			min-height: 20rem;
		}
	`;
	return (
		<Scope tag={CTA_LAYOUT_TAG} stylesheets={[theme, stylesheet]} slottedContent={children}>
			<nav>
				<slot></slot>
			</nav>
		</Scope>
	);
};

export default CtaLayout;