import Image from 'next/image';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { useCSS, Scope } from 'react-shadow-scope';
import Icon from './icon';
import { theme } from '@/utilities/theme';

export const SPLASH_TAG = 'sg-splash-container';

const key = Symbol();

const Splash = () => {
	const css = useCSS(key);
	const stylesheet = css`
		.container {
			position: relative;
			height: 100%;
		}
		h1 {
			margin: 0;
			text-align: center;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;
			padding-bottom: 100vh;
		}
		.logo {
			box-sizing: border-box;
			height: 20.5rem;
			object-fit: contain;
			padding: 2rem 3rem;
			max-width: 100%;
			width: 60rem;
		}
		.scroll {
			position: absolute;
			top: 0;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
			padding: 1rem 0 3rem;
			color: var(--color-brand-1);
			font-weight: bold;
			font-size: 1.2rem;
			background-image: linear-gradient(rgba(255, 255, 255, 0.3) 50%, transparent);
		}
	`;
	return (
		<div style={{ height: '200vh' }}>
			<ParallaxBanner style={{ aspectRatio: '2 / 1', height: '100%' }}>
				<ParallaxBannerLayer image="mount-fuji.webp" speed={40} opacity={[0.8, 0]} />
				<ParallaxBannerLayer image="snowflakes.webp" speed={-20} />
				<ParallaxBannerLayer>
					<Scope tag={SPLASH_TAG} stylesheets={[theme, stylesheet]}>
						<div className="container">
							<h1>
								<Image className="logo" src="sangawa-logo.svg" width={704} height={236} alt="Sangawa Project" />
							</h1>
							<div className="scroll">
								<span>Scroll</span>
								<Icon type="down-chevron" />
							</div>
						</div>
					</Scope>
				</ParallaxBannerLayer>
				<ParallaxBannerLayer image="snowflakes.webp" speed={-70} />
			</ParallaxBanner>
		</div>
	);
};

export default Splash;
