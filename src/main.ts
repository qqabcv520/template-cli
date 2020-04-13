import { generateAPI } from './command/api';
import { generate } from './command/generate';
import { generateProject } from './command/project';

const program = require('commander');
// tslint:disable-next-line
require('core-js/es7/array');

program
  .version(require('../package.json').version, '-v, --version')  // tslint:disable-line
  .usage('<command> [options]');

program
  .command('generate')
  .alias('g')
  .description('生成一个新模块或组件1')
  .action(generate);

program
  .command('project')
  .alias('p')
  .description('生成一个新项目2')
  .action(generateProject);

program
  .command('api')
  .alias('a')
  .description('生成项目接口和数据实体3')
  .action(generateAPI);

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
