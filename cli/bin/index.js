#! /usr/bin/env node

import { createComponent } from './create-component.js';
import { createPage } from './create-page.js';
import { help } from './help.js';

const command = process.argv[2];
const args = process.argv.slice(3);

switch (command) {
	case '--component':
	case '-c':
		createComponent(...args);
		break;
	case '--page':
	case '-p':
		createPage(...args);
		break;
	case '--help':
	case '-h':
	default:
		help();
}
