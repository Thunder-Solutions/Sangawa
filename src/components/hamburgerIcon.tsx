import { theme } from '@/utilities/theme';
import { useCSS, Scope } from 'react-shadow-scope';

export interface Props {
	isOpen: boolean,
	onClick: () => void,
};

const HamburgerIcon = (props: Props) => {
	const { isOpen, onClick } = props;
	const css = useCSS();
	const stylesheet = css`
		.hamburger {
			width: 2rem;
			height: 2rem;
			display: flex;
			justify-content: space-around;
			flex-flow: column nowrap;
			z-index: 10;
			cursor: pointer;
		}
		.burger {
			width: 2rem;
			height: 0.25rem;
			border-radius: 0.625rem;
			background-color: white;
			transform-origin: 1px;
			transition: all 0.3s linear;
		}
	`;
	return (
		<Scope stylesheets={[theme, stylesheet]}>
			<div className="hamburger" onClick={onClick}>
				<div className="burger burger1" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }} />
				<div className="burger burger2" style={{ opacity: isOpen ? 0 : 1 }} />
				<div className="burger burger3" style={{ transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)' }} />
			</div>
		</Scope>
	);
};

export default HamburgerIcon;
