import { PropsWithChildren } from 'react';
import { useCSS, Scope } from 'react-shadow-scope';
import { theme } from '@/utilities/theme';

export const INFO_LAYOUT_TAG = 'sg-info-layout';

export type InfoLayoutProps = PropsWithChildren<{
	// add more prop types here...
}>;

const key = Symbol();

const InfoLayout = ({ children }: InfoLayoutProps) => {
	const css = useCSS(key);
	const stylesheet = css`
		aside {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 1rem;
			padding: 0 1rem;
		}
	`;
	return (
		<Scope tag={INFO_LAYOUT_TAG} stylesheets={[theme, stylesheet]} slottedContent={children}>
			<aside>
				<slot></slot>
			</aside>
		</Scope>
	);
};

export default InfoLayout;
