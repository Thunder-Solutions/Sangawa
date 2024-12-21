'use client';

import { theme } from '@/utilities/theme';
import { PropsWithChildren } from 'react';
import { Scope, useCSS } from 'react-shadow-scope';
import Image from './image';
import Text from './text';

const key = Symbol();

export type FeaturedContentProps = PropsWithChildren<{
	heading: string;
	imgSrc: string;
	description: string;
}>;

export const FeaturedContent = ({ heading, imgSrc, description }: FeaturedContentProps) => {
	const css = useCSS(key);
	return (
		<Scope
			stylesheets={[
				theme,
				css`
					article {
						display: grid;
						grid-template-columns: minmax(0, 1fr);
						gap: 1rem;
						text-align: center;
						padding: 1rem;
					}
					@media (min-width: 1180px) {
						article {
							grid-template-columns: 1fr 1fr;
							grid-template-areas:
								'heading heading'
								'image description';
							text-align: left;
							max-width: 90rem;
							margin: 0 auto;
						}
						h2 {
							grid-area: heading;
							padding-left: 2rem;
						}
						.image {
							grid-area: image;
						}
						.image::part(img) {
							max-height: 40rem;
						}
						.description {
							grid-area: description;
						}
					}
				`,
			]}
		>
			<article>
				<h2>{heading}</h2>
				<Image src={imgSrc} alt="Featured Image" className="image" />
				<div className="description">
					<Text text={description} />
				</div>
			</article>
		</Scope>
	);
};
