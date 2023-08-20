import * as fs from 'node:fs';
import { exec } from 'node:child_process';

export const createComponent = (name, path) => {
	if (!name) {
		console.error(`
Error:
--component expects at least one argument. Example:
  cli --component MyComponentName
`);
		return;
	}
	const firstToUpper = (s) => s.charAt(0).toUpperCase() + s.slice(1);
	const firstToLower = (s) => s.charAt(0).toLowerCase() + s.slice(1);

	const filepath = `./${path ?? 'src/components'}/${firstToLower(name)}.tsx`;
	const ComponentName = firstToUpper(name);

	const contents =
`import { PropsWithChildren } from 'react';
import { css, Scope } from 'react-shadow-scope';

const stylesheet = css\`
	/* add your CSS styles here */
\`;

export type ${ComponentName}Props = PropsWithChildren<{
	// add more prop types here...
}>;

const ${ComponentName} = ({ children }: ${ComponentName}Props) => {
	return (
		<Scope stylesheet={stylesheet}>
			{children}
		</Scope>
	);
};

export default ${ComponentName};
`;

	const checkSuccess = (err) => {
		if (!err) return true;
		console.error(err);
		return false;
	};

	fs.writeFile(filepath, contents, (err) => {
		const success = checkSuccess(err);
		if (!success) return;
		console.log('Successfully created component.');
		exec(`code ${filepath}`, (err) => {
			const success = checkSuccess(err);
			if (!success) console.error('Failed to open file.');
		});
	});
};
