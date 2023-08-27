import { IconBaseProps } from 'react-icons';
import { FaAngleDown, FaFacebook, FaTwitter } from 'react-icons/fa';

const iconMap = {
	'facebook': FaFacebook,
	'twitter': FaTwitter,
	'down-chevron': FaAngleDown,
};

export type IconProps = {
	type: keyof typeof iconMap;
} & IconBaseProps;

const Icon = ({ type, ...props }: IconProps) => {
	const IconComponent = iconMap[type];
	return <IconComponent {...props} />;
};

export default Icon;
