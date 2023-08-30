export const firstToUpper = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const firstToLower = (s) => s.charAt(0).toLowerCase() + s.slice(1);
export const toUpperSnakeCase = (str) =>
	str
		.replace(/[^A-Z0-9_]/gi, '_')
		.replace(/(?<!(^|[A-Z]|_))[A-Z]/g, (letter) => `_${letter}`)
		.replace(/^[0-9]/, (number) => `_${number}`)
		.toUpperCase();
export const toLowerKebabCase = (str) =>
	str
		.replace(/[^A-Z0-9\-]/gi, '-')
		.replace(/(?<!(^|[A-Z]|-))[A-Z]/g, (letter) => `-${letter}`)
		.toLowerCase();

export const tryCommandSync = (consoleMsg, commandFn) => {
	console.log(consoleMsg);
	try {
		commandFn();
	} catch (error) {
		console.error('Failed');
		console.error(error);
	}
};
