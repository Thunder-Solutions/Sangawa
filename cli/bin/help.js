export const help = () => {
	console.log(`
cli <command>

Usage:

cli --help        display usage info for all commands
cli -h            (alias for --help)
cli --component   create a new UI component with basic boilerplate
cli -c            (alias for --component)

This CLI is a local package, developed and maintained as part of this repository.
It may be modified via the cli/ directory, then reinstalled with:
  npm i -D ./cli
`);
};
