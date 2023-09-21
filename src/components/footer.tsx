import { theme } from '@/utilities/theme';
import { useCSS, Scope } from 'react-shadow-scope';

export const FOOTER_TAG = 'sg-footer';

const key = Symbol();

const Footer = () => {
	const css = useCSS(key);
	const stylesheet = css`
		footer {
			background-color: var(--color-site-1);
			border: 0 solid var(--color-brand-1);
			border-width: 1rem 0;
			color: var(--color-site-1-c);
			padding: 0.5rem;
		}
	`;
	return (
		<Scope tag={FOOTER_TAG} stylesheets={[theme, stylesheet]}>
			<footer>{'(placeholder content)'}</footer>
		</Scope>
	);
};

export default Footer;
