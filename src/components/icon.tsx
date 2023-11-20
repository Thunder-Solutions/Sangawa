import { IconBaseProps } from 'react-icons';
import { FaBed, FaFacebook, FaMinus, FaPlus, FaShoePrints, FaTicketAlt, FaTwitter } from 'react-icons/fa';
import { HiChevronDown, HiChevronLeft } from 'react-icons/hi2';

const iconMap = {
	'facebook': FaFacebook,
	'twitter': FaTwitter,
	'left-chevron': HiChevronLeft,
	'down-chevron': HiChevronDown,
	'ticket': FaTicketAlt,
	'bed': FaBed,
	'footsteps': FaShoePrints,
	'plus': FaPlus,
	'minus': FaMinus,
};

export type IconProps = {
	type: keyof typeof iconMap;
} & IconBaseProps;

const Icon = ({ type, ...props }: IconProps) => {
	const IconComponent = iconMap[type];
	return <IconComponent {...props} />;
};

export default Icon;
