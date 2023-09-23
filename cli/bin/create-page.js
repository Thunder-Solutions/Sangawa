import * as fs from 'node:fs';
import { execSync } from 'node:child_process';
import { firstToLower, firstToUpper, toLowerKebabCase, tryCommandSync } from './utils.js';
import crypto from 'crypto';

export const createPage = (name, path) => {
	if (!name) {
		console.error(`
Error:
--page expects at least one argument. Example:
  cli --page MyPageName
`);
		return;
	}

	const pageName = firstToLower(name);
	const PageName = firstToUpper(name);
	const kebabPageName = toLowerKebabCase(name);
	const spacePageName = PageName.replace(/(?!^)([A-Z])/g, ' $1');

	const rootPath = `./src/app/${path ? `${path.replace(/\/+$/, '')}/` : ''}${pageName}`;
	const filepath = `./${rootPath}/page.tsx`;
	const apiFilepath = './src/api-client/api-client.ts';
	const apiMethodFilepath = `./src/api-client/methods/${kebabPageName}-page.ts`;
	const apiImportPath = `./methods/${kebabPageName}-page`;

	const contents = `import Head from 'next/head';
import { apiClient } from '@/api-client/api-client';
import { PageContent } from '@/components/cmsComponent';
import { getTypedContent } from '@/utilities/utilities';
import { Page, CMSComponent } from '@/components/clientComponents';

const [${pageName}PageError, ${pageName}Page = {}] = await apiClient.fetch${PageName}PageContent();
if (${pageName}PageError) {
	const _error =
	${pageName}PageError instanceof Error ? ${pageName}PageError : new Error('${PageName} page content could not be found.');
	console.error(_error);
}

const ${PageName} = () => {
	const meta = ${pageName}Page.meta[0];
	const pageContent = getTypedContent<PageContent>(${pageName}Page.pageContent);
	return (
		<Page>
			<Head>
				<title>{meta.content.title}</title>
			</Head>
			{pageContent.map(({ id, content, ...props }) => (
				<CMSComponent key={id} content={content} {...props} />
			))}
		</Page>
	);
};

export default ${PageName};
`;

	tryCommandSync('Creating page...', () => {
		fs.mkdirSync(rootPath);
		fs.writeFileSync(filepath, contents);
	});

	const apiMethodContent = `import { Result, safeTry } from '@/utilities/utilities';
import { ContentSet } from '../api-client';

/**
 * Response is mocked for now. Should be easy enough to swap for a CMS response later.
 *
 * To generate a new ID, run \`node\` in the terminal, then run \`crypto.randomUUID()\`.
 */
export const fetch${PageName}PageContent = async (): Promise<Result<ContentSet>> => {
	return safeTry<any>(() => {
		return {
			meta: [
				{
					id: '${crypto.randomUUID()}',
					content: {
						page: '${pageName}',
						title: 'Sangawa Project | ${spacePageName}',
					},
				},
			],
			pageContent: [
				{
					id: '${crypto.randomUUID()}',
					content: {
						component: 'Section',
						prop__backdropUrl: 'Tekko-Japanese-Anime-Convention-Dealers-Room.jpg',
					},
					childContent: [
						{
							id: '${crypto.randomUUID()}',
							content: {
								component: 'Text',
								prop__text: 'This is the ${spacePageName} page',
							},
						},
					],
				},
			],
		};
	});
};
`;

	tryCommandSync('Creating api method...', () => {
		fs.writeFileSync(apiMethodFilepath, apiMethodContent);
	});

	const apiContent = fs
		.readFileSync(apiFilepath, 'utf8')
		.replace(/^/, `import { fetch${PageName}PageContent } from '${apiImportPath}';\n`)
		.replace(/(export const apiClient = {(\n[^}]+))/, `$1\tfetch${PageName}PageContent,\n`);

	tryCommandSync('Adding tag to intrinsic elements...', () => {
		fs.writeFileSync(apiFilepath, apiContent);
	});

	tryCommandSync('Opening file...', () => {
		execSync(`code ${filepath}`);
	});

	console.log('Done.');
};
