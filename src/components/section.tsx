import { theme } from '@/utilities/theme';
import { PropsWithChildren } from 'react';
import { useCSS, Scope } from 'react-shadow-scope';

export const SECTION_TAG = 'sg-section';

export type SectionProps = PropsWithChildren<{
	heading?: string;
	backdropUrl?: string;
}>;

const Section = ({ children, heading, backdropUrl }: SectionProps) => {
	const css = useCSS();
	const stylesheet = css`
		section {
			background: center / cover no-repeat url('ice-texture.png');
		}
		header {
			padding: 1rem;
			background-image: linear-gradient(to right, rgba(255, 255, 255, 0.5), transparent);
		}
		.wrapper,
		section {
			height: 100%;
		}
		.wrapper {
			background: center / cover no-repeat url(${backdropUrl});
		}
	`;
	return (
		<Scope tag={SECTION_TAG} stylesheets={[theme, stylesheet]} slottedContent={children}>
			<div className="wrapper">
				<section>
					{heading ? (
						<header>
							<h1>{heading}</h1>
						</header>
					) : (
						<></>
					)}
					<slot></slot>
				</section>
			</div>
		</Scope>
	);
};

export default Section;
