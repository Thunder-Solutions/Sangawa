import Image from 'next/image';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { useCSS, Scope } from 'react-shadow-scope';
import Icon from './icon';
import { theme } from '@/utilities/theme';
import Link from 'next/link';

export const SCROLL_TAG = 'sg-scroll';

const scrollKey = Symbol();

const Scroll = () => {
	const css = useCSS(scrollKey);
	const stylesheet = css`
		@keyframes bounce {
			0% {
				transform: translateY(0);
			}
			50% {
				transform: translateY(1rem);
			}
			100% {
				transform: translateY(0);
			}
		}
		.scroll {
			position: fixed;
			bottom: 0;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
			padding: 3rem 0 1rem;
			color: var(--color-brand-1);
			font-weight: bold;
			font-size: 1.6rem;
			background-image: linear-gradient(transparent, rgba(255, 255, 255, 0.3) 50%);
			animation: bounce 1s infinite;
		}
	`;
	return (
		<Scope tag={SCROLL_TAG} stylesheets={[theme, stylesheet]}>
			<div className="scroll">
				<span>Scroll</span>
				<Icon type="down-chevron" />
			</div>
		</Scope>
	);
};

export const SPLASH_TAG = 'sg-splash-container';

const splashKey = Symbol();

const Splash = () => {
	const css = useCSS(splashKey);
	const stylesheet = css`
		header {
			height: 100vh;
			display: grid;
			justify-items: center;
			align-content: center;
		}
		h1 {
			margin: 0;
			text-align: center;
		}
		h2 {
			font-size: 8vw;
		}
		.logo {
			box-sizing: border-box;
			height: 28vw;
			object-fit: contain;
			padding: 0 3rem;
			width: 100%;
			max-width: 60rem;
			max-height: 17rem;
		}
		.register {
			padding: 1rem 2rem;
			background-color: var(--color-brand-1);
			color: var(--color-brand-1-c);
			font-weight: bold;
			text-decoration: none;
			border: 0 solid;
			border-radius: 1rem;
			margin: 1rem;
			font-size: 2rem;
		}
		@media (min-width: 62.5em) {
			h2 {
				font-size: 5rem;
			}
		}
	`;
	return (
		<>
			<style>{
				/*css*/ `
				/* using BEM here because it must be in the global scope */
				.sg-splash__container {
					height: 200vh;
				}
				.sg-splash__layer {
					pointer-events: none;
				}
			`
			}</style>
			<div className="sg-splash__container">
				<ParallaxBanner style={{ aspectRatio: '2 / 1', height: '100%' }}>
					<ParallaxBannerLayer className="sg-splash__layer" image="mount-fuji.webp" speed={40} opacity={[0.8, 0]} />
					<ParallaxBannerLayer className="sg-splash__layer" image="snowflakes.webp" speed={-20} />
					<ParallaxBannerLayer>
						<Scope tag={SPLASH_TAG} stylesheets={[theme, stylesheet]}>
							<header>
								<h1>
									<Image className="logo" src="sangawa-logo.svg" width={704} height={236} alt="Sangawa Project" />
								</h1>
								<h2>
									<time dateTime="2024-02-09">February 9</time>&ndash;<time dateTime="2024-02-11">11, 2024</time>
								</h2>
								<Link className="register" href="/registration">
									Register Now!
								</Link>
							</header>
						</Scope>
					</ParallaxBannerLayer>
					<ParallaxBannerLayer className="sg-splash__layer" image="snowflakes.webp" speed={-70} />
				</ParallaxBanner>
			</div>
			<Scroll />
		</>
	);
};

export default Splash;
