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
		width: 100%;
		height: 15rem;
		padding: 1rem;
		object-fit: contain;
		box-sizing: border-box;
	}
	.scroll {
		position: absolute;
		bottom: 0;
		width: 100%;
		display: grid;
		justify-content: center;
		justify-items: center;
		gap: 0.2rem;
		padding-bottom: 2rem;
		color: var(--color-brand-1);
		font-weight: bold;
		font-size: 2rem;
	}
`;

const Splash = () => {
	return (
		<div style={{ height: '100vh' }}>
			<ParallaxBanner style={{ aspectRatio: '2 / 1', height: '100%' }}>
				<ParallaxBannerLayer image="Tekko-Japanese-Anime-Convention-Dealers-Room.jpg" speed={20} opacity={[2, 0]} />
				<ParallaxBannerLayer image="ice-texture.png" speed={-20} />
				<ParallaxBannerLayer speed={0} opacity={[2, 0]}>
					<Scope stylesheet={stylesheet}>
						<div className="splash-container">
							<div className="splash">
								<h1>
									<Image className="logo" src="sangawa-logo.svg" height={300} width={600} alt="Sangawa Project" />
								</h1>
							</div>
							<div className="scroll">
								<span>Scroll</span>
								<Icon type="down-chevron" />
							</div>
						</div>
					</Scope>
				</ParallaxBannerLayer>
			</ParallaxBanner>
		</div>
	);
};

export default Splash;
