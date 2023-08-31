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
			gap: 2rem;
			padding: 0 2rem;
		}
		p {
			margin: 0;
			text-align: center;
			font-size: 1.6rem;
		}
	`;
	return (
		<Scope tag={TEXT_TAG} stylesheets={[theme, stylesheet]}>
			<ReactMarkdown
				components={{
					p: ({ children, ...props }) => (
						<Scope tag={TEXT_P_TAG} stylesheets={[theme, stylesheet]} slottedContent={children}>
							<p {...props}>
								<slot></slot>
							</p>
						</Scope>
					),
				}}
				className="text"
			>
				{text}
			</ReactMarkdown>
		</Scope>
	);
};

export default Text;
