import { css, Scope } from 'react-shadow-scope';

const stylesheet = css`
footer {
	background-color: var(--color-site-1);
	border: 0 solid var(--color-brand-1);
	border-width: 1rem 0;
	color: var(--color-site-1-c);
	padding: 0.5rem;
}
`;

const Footer = () => {
	return (
		<Scope stylesheet={stylesheet}>
			<footer>
				{'(placeholder content)'}
			</footer>
		</Scope>
	);
};

export default Footer;
