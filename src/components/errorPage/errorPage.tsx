import css from './errorPage.module.css';

export type ErrorPageProps = {
	error: Error | string,
}

const ErrorPage = ({
	error,
}: ErrorPageProps) => {
	const message = error instanceof Error ? error.message : error;
	return (
		<main className={css.errorPage}>
			<h1>ERROR</h1>
			<p>{message}</p>
		</main>
	);
};

export default ErrorPage;
