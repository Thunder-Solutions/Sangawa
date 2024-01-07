import NextImage, { ImageProps } from 'next/image';
import { useCSS, Scope } from 'react-shadow-scope';
import { theme } from '@/utilities/theme';

export const IMAGE_TAG = 'sg-image';

const key = Symbol();

const Image = (props: ImageProps) => {
	const css = useCSS(key);
	const stylesheet = css`
		.img-container {
			padding: 0.5rem 1rem;
		}
		.img {
			display: block;
			width: 100%;
			max-width: 60rem;
			min-height: 20rem;
			max-height: 90vh;
			height: 80vw;
			object-fit: contain;
			margin: 0 auto;
		}
	`;
	return (
		<Scope tag={IMAGE_TAG} stylesheets={[theme, stylesheet]}>
			<div className="img-container">
				<NextImage height={1080} width={1080} {...props} src={props.src} className="img" />
			</div>
		</Scope>
	);
};

export default Image;
