import { prompt, Questions } from 'inquirer';
import ora from 'ora';
import { asyncPipe } from '../utils/utils';
import { loadTemplates, templateOption } from './schematics-impl';


export interface Template {
  name: string;
  run: (option: any) => Promise<void>;
  optionsSchema: any;
}

// 根据模板数据，显示列表，返回用户选择的模板
async function chooseTemplate(templates: Template[]) {
  const {templateName} = await prompt({
    type: 'list',
    name: 'templateName',
    message: '请选择需要生成的模板',
    choices: templates.map(value => value.name),
  });
  return templates.find(value => value.name === templateName);
}
// 生成代码
async function generateFile({template, option}: {template: Template; option: any}) {
  const spinner = ora('Loading...').start();
  try {
    await template.run(option);
    spinner.succeed('生成完成');
  } catch (e) {
    spinner.fail('生成失败');
    console.error(e);
  }
}
async function generateModule() {
}


const generateComponent = asyncPipe(

  loadTemplates('template-cli-schematics-sales', schematicName => schematicName.endsWith('-component')),
  chooseTemplate,
  templateOption,
  generateFile,
);


// 选择类型
async function chooseType() {
  const {type} = await prompt({
    type: 'list',
    name: 'type',
    message: '请选择需要生成的模板类型',
    choices: ['module', 'component'],
    default: 'module',
  });
  return type;
}

// 根据type执行动作
async function typeAction(type: string) {
  if (type === 'module') {
    await generateModule();
  } else if (type === 'component') {
    await generateComponent();
  }
}


// 生成命令
export const generate = asyncPipe(
  chooseType,
  typeAction,
);


