// in package.json... use "type":"module" ................
import chalk from "chalk";

// const log=console.log;
// log("log: " + chalk.bold(log));

// const chalk=require("chalk");

// const g=chalk.green("Success");
const log=console.log;
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.green.bgRed.bold('Hello world!'));

log(chalk.blue.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.green.bold("guru","bharan","nmg"));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgCyan('world') + '!'));
log(chalk.green('Hello world',chalk.bgRed.underline("GURU_NMG")));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

const name = 'If something makes changes .... then change them into Success!';
console.log(chalk.dim.green(name));

log(chalk.inverse("Inverse"));
// making it invisible
log(chalk.hidden("HIDDEN"));

log(chalk.red.visible("VISIBLE"));
log(chalk.blue.strikethrough("Strikethrough"));
log(chalk.green.overline("Overline not supported"));

// rgb

log(chalk.rgb(100, 255, 255)("guru"));
log(chalk.bgRgb(255, 50, 255)("guru"));
console.log(chalk.red("GURU"));