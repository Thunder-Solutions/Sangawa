import { css } from 'react-shadow-scope';

export const theme = css`
	@font-face {
		font-family: 'Brasspounder';
		src: url('BrasspSC.ttf');
	}

	/*
	This theme is based on the AIR naming convention.
	Please be consistent with that when modifying the theme!

	Read more:
	https://levelup.gitconnected.com/air-naming-css-color-variables-437cb4d261a6
	*/
	:host {
		--font-display: 'Brasspounder', serif;
		--font-content: 'Quicksand', sans-serif;

		--color-brand-1: #ff0000;
		--color-brand-1-1: rgba(255, 255, 255, 0.25);
		--color-brand-1-c: #fff;

		--color-site-1: #e3ebee;
		--color-site-1-c: #000;
		--color-site-2: #abb0b4;

		color: var(--color-site-1-c);
		font-family: var(--font-content);
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		all: unset;
		display: block;
		color: var(--color-brand-1);
		font-family: var(--font-display);
		font-size: 3rem;
	}
`;
