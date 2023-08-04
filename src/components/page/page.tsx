import { PropsWithChildren } from 'react';

export type PageProps = PropsWithChildren;

const Page = ({ children }: PageProps) => {
	return (
		<div className="page">
			{children}
		</div>
	);
};

export default Page;
