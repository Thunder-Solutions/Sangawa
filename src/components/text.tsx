import { useCSS, Scope } from 'react-shadow-scope';
import { theme } from '@/utilities/theme';
import ReactMarkdown from 'react-markdown';

export const TEXT_TAG = 'sg-text';
export const TEXT_P_TAG = 'sg-text-p';

export type TextProps = {
	text: string;
};

const Text = ({ text }: TextProps) => {
	const css = useCSS();
	const stylesheet = css`
		.text {
			display: grid;
			gap: 1.4rem;
			padding: 0 2rem;
		}
		p {
			margin: 0;
			padding: 0;
			font-size: 1.6rem;
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			all: unset;
			font-size: 1.6rem;
			font-weight: bold;
			margin: 0;
		}
		hr {
			border: none;
			width: 100%;
			height: 0.1rem;
			background-color: var(--color-brand-1);
		}
		a,
		a:hover,
		a:active,
		a:visited {
			color: var(--color-brand-1);
			text-decoration: none;
			display: inline-block;
			border-bottom: 0.1rem solid;
		}
	`;
	return (
		<Scope tag={TEXT_TAG} stylesheets={[theme, stylesheet]}>
			<ReactMarkdown className="text">{text}</ReactMarkdown>
		</Scope>
	);
};

export default Text;
