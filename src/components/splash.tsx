import Image from 'next/image';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { css, Scope } from 'react-shadow-scope';
import Icon from './icon';

const stylesheet = css`
	.splash-container {
		position: relative;
		height: 100%;
	}
	.splash {
		height: 100%;
	}
	h1 {
		margin: 0;
		text-align: center;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
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
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		padding: 3rem 0 0.5rem;
		color: var(--color-brand-1);
		font-weight: bold;
		font-size: 2rem;
		background-image: linear-gradient(transparent, rgba(255, 255, 255, 0.6) 50%);
	}
`;

const Splash = () => {
	return (
		<div style={{ height: '100vh' }}>
			<ParallaxBanner style={{ aspectRatio: '2 / 1', height: '100%' }}>
				<ParallaxBannerLayer image="mount-fuji.webp" speed={30} opacity={[1, 0]} />
				<ParallaxBannerLayer image="snowflakes-small.webp" speed={-10} opacity={[2, 0]} />
				<ParallaxBannerLayer speed={0} opacity={[2, 0]}>
					<Scope stylesheet={stylesheet}>
						<div className="splash-container">
							<div className="splash">
								<h1>
									<Image className="logo" src="sangawa-logo.svg" width={704} height={236} alt="Sangawa Project" />
								</h1>
							</div>
							<div className="scroll">
								<span>Scroll</span>
								<Icon type="down-chevron" />
							</div>
						</div>
					</Scope>
				</ParallaxBannerLayer>
				<ParallaxBannerLayer image="snowflakes-large.webp" speed={-30} />
			</ParallaxBanner>
		</div>
	);
};

export default Splash;
