import { PropsWithChildren } from 'react';
import { css, Scope } from 'react-shadow-scope';

const stylesheet = css`
	section {
		background: center / cover no-repeat url('ice-texture.png');
	}
	.wrapper,
	section {
		height: 100%;
	}
`;

export type SectionProps = PropsWithChildren<{
	heading?: string,
	backdropUrl?: string,
}>;

const Section = ({ children, heading, backdropUrl }: SectionProps) => {
	const runtimeStyles = css`
		.wrapper {
			background: center / cover no-repeat url(${backdropUrl});
		}
	`;
	return (
		<Scope stylesheets={[stylesheet, runtimeStyles]} slottedContent={children}>
			<div className="wrapper">
				<section>
					{heading
						? (
							<header>
								<h1>{heading}</h1>
							</header>
						)
						: (<></>)
					}
					<slot></slot>
				</section>
			</div>
		</Scope>
	);
};

export default Section;
