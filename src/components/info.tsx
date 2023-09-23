import { PropsWithChildren } from 'react';
import { useCSS, Scope } from 'react-shadow-scope';
import { theme } from '@/utilities/theme';

export const INFO_TAG = 'sg-info';

export type InfoProps = PropsWithChildren<{
	heading: string;
}>;

const key = Symbol();

const Info = ({ children, heading }: InfoProps) => {
	const css = useCSS(key);
	const stylesheet = css`
		.info {
			border: 0.1rem solid var(--color-brand-1);
			max-width: 40rem;
			width: 100%;
		}
		header {
			background-color: var(--color-brand-1);
		}
		h1 {
			color: var(--color-brand-1-c);
			text-align: center;
			padding: 0.5rem 4rem;
			font-size: 1.8rem;
		}
		.content {
			display: block;
			padding: 3rem 1rem;
		}
	`;
	return (
		<Scope tag={INFO_TAG} stylesheets={[theme, stylesheet]} slottedContent={children}>
			<article className="info">
				{heading ? (
					<header>
						<h1>{heading}</h1>
					</header>
				) : (
					<></>
				)}
				<slot className="content"></slot>
			</article>
		</Scope>
	);
};

export default Info;
