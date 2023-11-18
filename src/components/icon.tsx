import { IconBaseProps } from 'react-icons';
import {
	FaAngleDown,
	FaAngleLeft,
	FaBed,
	FaFacebook,
	FaPlus,
	FaShoePrints,
	FaTicketAlt,
	FaTwitter,
} from 'react-icons/fa';

const iconMap = {
	'facebook': FaFacebook,
	'twitter': FaTwitter,
	'left-chevron': FaAngleLeft,
	'down-chevron': FaAngleDown,
	'ticket': FaTicketAlt,
	'bed': FaBed,
	'footsteps': FaShoePrints,
	'plus': FaPlus,
};

export type IconProps = {
	type: keyof typeof iconMap;
} & IconBaseProps;

const Icon = ({ type, ...props }: IconProps) => {
	const IconComponent = iconMap[type];
	return <IconComponent {...props} />;
};

export default Icon;
