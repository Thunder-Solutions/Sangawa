import { useCSS, Scope } from 'react-shadow-scope';
import { theme } from '@/utilities/theme';
import React from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';

export const TEXT_TAG = 'sg-text';
export const TEXT_P_TAG = 'sg-text-p';

export type TextProps = {
	text: string;
};

const key = Symbol();

const Text = ({ text }: TextProps) => {
	const markdown = marked.parse(text);
	const sanitizedMarkdown = DOMPurify.sanitize(typeof markdown === 'string' ? markdown : '');
	const css = useCSS(key);
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
		.bio {
			display: flex;
			flex-direction: column;
		}
		.bio .bio_content {
			display: flex;
			gap: 5rem;
		}
		.bio .bio_content .bio_pix {
			display: flex;
			flex-direction: row;
			flex: 1;
		}
		.bio .bio_content .bio_pix img {
			max-height: 500px;
		}
		.bio .bio_content .bio_data {
			flex: 4;
		}
		.bio .bio_content .bio_data p {
			margin: 0 0 2rem 0;
		}
	`;
	return (
		<Scope tag={TEXT_TAG} stylesheets={[theme, stylesheet]}>
			<div className="text" dangerouslySetInnerHTML={{ __html: sanitizedMarkdown }} />
		</Scope>
	);
};

export default Text;
