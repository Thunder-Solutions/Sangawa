import { IconBaseProps } from 'react-icons';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const iconMap = {
	facebook: FaFacebook,
	twitter: FaTwitter,
};

export type IconProps = {
	type: keyof typeof iconMap,
} & IconBaseProps;

const Icon = ({
	type,
	...props
}: IconProps) => {
	const IconComponent = iconMap[type];
	return (<IconComponent {...props} />);
};

export default Icon;
