export type ErrorPageProps = {
	error: Error | string;
};

const ErrorPage = ({ error }: ErrorPageProps) => {
	const message = error instanceof Error ? error.message : error;
	return (
		<main>
			<h1>ERROR</h1>
			<p>{message}</p>
		</main>
	);
};

export default ErrorPage;
