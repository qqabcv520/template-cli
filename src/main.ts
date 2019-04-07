import program from 'commander';
// tslint:disable-next-line
import 'core-js/es7/array';
import { generate } from './generate';

program
    .version(require('../package.json').version, '-v, --version')  // tslint:disable-line
    .usage('<command> [options]');

program
    .command('generate')
    .alias('g')
    .description('generate a new project or module or component.')
    .action(generate);

program.parse(process.argv);
