import program from 'commander';
// tslint:disable-next-line
import 'core-js/es7/array';
import { gen } from './gen';

program
    .version(require('../package.json').version, '-v, --version')  // tslint:disable-line
    .usage('<command> [options]');

program
    .command('gen')
    .description('generate a new project or module or component.')
    .action(gen);

program.parse(process.argv);
