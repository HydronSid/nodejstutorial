import chalk from 'chalk';
import validator from 'validator';
const log = console.log;

// log(chalk.white.bgGreen.bold('success'));
// log(chalk.bgRed.bold('false'));

const res = validator.isEmail("siddhant@gmail.com");

log(res ?  chalk.bgGreen.bold(res) :  chalk.bgRed.bold(res));