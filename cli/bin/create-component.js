import * as fs from 'node:fs';
import { execSync } from 'node:child_process';
import { firstToLower, firstToUpper, toLowerKebabCase, toUpperSnakeCase, tryCommandSync } from './utils.js';

export const createComponent = (name, path) => {
	if (!name) {
		console.error(`
Error:
--component expects at least one argument. Example:
  cli --component MyComponentName
`);
		return;
	}

	const componentName = firstToLower(name);
	const ComponentName = firstToUpper(name);
	const COMPONENT_NAME = toUpperSnakeCase(name);

	const filepath = `./${path ?? 'src/components'}/${componentName}.tsx`;
	const importPath = filepath.replace('./src', '@').replace('.tsx', '');
	const typesFilepath = './src/utilities/global.d.ts';

	const contents = `import { PropsWithChildren } from 'react';
import { useCSS, Scope } from 'react-shadow-scope';
import { theme } from '@/utilities/theme';

export const ${COMPONENT_NAME}_TAG = 'sg-${toLowerKebabCase(name)}';

export type ${ComponentName}Props = PropsWithChildren<{
	// add more prop types here...
}>;

const ${ComponentName} = ({ children }: ${ComponentName}Props) => {
	const css = useCSS();
	const stylesheet = css\`
		/* add your CSS styles here */
	\`;
	return (
		<Scope tag={${COMPONENT_NAME}_TAG} stylesheets={[theme, stylesheet]} slottedContent={children}>
			<slot></slot>
		</Scope>
	);
};

export default ${ComponentName};
`;

	tryCommandSync('Creating component...', () => {
		fs.writeFileSync(filepath, contents);
	});

	const typesContent = fs
		.readFileSync(typesFilepath, 'utf8')
		.replace(/^/, `import { ${COMPONENT_NAME}_TAG } from '${importPath}';\n`)
		.replace(/(interface CustomElements {(\n[^}]+))/, `$1\t[${COMPONENT_NAME}_TAG]: CustomIntrinsicElement;\n\t\t`);

	tryCommandSync('Adding tag to intrinsic elements...', () => {
		fs.writeFileSync(typesFilepath, typesContent);
	});

	tryCommandSync('Opening file...', () => {
		execSync(`code ${filepath}`);
	});

	console.log('Done.');
};
