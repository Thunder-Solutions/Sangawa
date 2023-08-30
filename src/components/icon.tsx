import { IconBaseProps } from 'react-icons';
import { FaAngleDown, FaBed, FaFacebook, FaShoePrints, FaTicketAlt, FaTwitter } from 'react-icons/fa';

const iconMap = {
	'facebook': FaFacebook,
	'twitter': FaTwitter,
	'down-chevron': FaAngleDown,
	'ticket': FaTicketAlt,
	'bed': FaBed,
	'footsteps': FaShoePrints,
};

export type IconProps = {
	type: keyof typeof iconMap;
} & IconBaseProps;

const Icon = ({ type, ...props }: IconProps) => {
	const IconComponent = iconMap[type];
	return <IconComponent {...props} />;
};

export default Icon;
