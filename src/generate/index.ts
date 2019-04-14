import { prompt, Questions } from 'inquirer';
import ora from 'ora';
import { asyncPipe, findUp } from '../utils/utils';
import { JsonObject, normalize, virtualFs } from '@angular-devkit/core';
import { NodeJsSyncHost } from '@angular-devkit/core/node';
import { NodeModulesEngineHost, NodeWorkflow } from '@angular-devkit/schematics/tools';
import { DryRunEvent, SchematicEngine } from '@angular-devkit/schematics';
import * as _ from 'lodash/fp';
import { readdir } from 'fs-extra';

export const PLUGIN_PREFIX = 'template-cli-schematics-';

export interface JsonSchema extends JsonObject {
  $schema: string;
  title: string;
  description: string;
  type: string;
  properties: {
    [key: string]: {
      description: string;
      type: 'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string' | 'enum';
      default?: any;
      enum?: string[];
      'x-prompt'?: string;
    };
  };
  required: string[];
}

export interface Template {
  pluginName: string;
  name: string;
  run: (option: any) => Promise<void>;
  schemaJson: JsonSchema;
}

// 运行Schematic
export async function runSchematic(collectionName: string, schematicName: string, options: any): Promise<void> {

  const fsHost = new virtualFs.ScopedHost(new NodeJsSyncHost(), normalize(process.cwd()));
  const workflow = new NodeWorkflow(fsHost, {});

  workflow.reporter.subscribe((event: DryRunEvent) => {
    // console.log(event);
  });
  workflow.lifeCycle.subscribe(event => {
    // console.log(event);
  });

  return await workflow.execute({
    collection: collectionName,
    schematic: schematicName,
    options,
  }).toPromise();
}

// 根据collection插件的包名生成collection
function createCollection(collectionName: string) {
  const engineHost = new NodeModulesEngineHost();
  const engine = new SchematicEngine(engineHost);
  return engine.createCollection(collectionName);
}

// 加载模板，返回模板数据
export const loadTemplates = _.curry((
  schematicFilter: (value: string, index: number, array: string[]) => boolean,
  collectionNames: string | string[],
): Template[] => {
  const collectionNameArr = Array.isArray(collectionNames) ? collectionNames : [collectionNames];
  // TODO try/catch createCollection报错
  const collections = collectionNameArr.map(value => createCollection(value));
  return collections.flatMap(value => {
    return value.listSchematicNames()
      .filter(schematicFilter)
      .map(val => value.createSchematic(val))
      .map(val => {
        return {
          pluginName: value.description.name.replace(new RegExp(`^${PLUGIN_PREFIX}`), ''),
          name: val.description.name,
          run: async (option: any) => await runSchematic(val.collection.description.name, val.description.name, option),
          schemaJson: val.description.schemaJson as JsonSchema,
        };
      });
  });
});

async function questionFromSchema(json: JsonSchema) {
  const requiredProperties = Object.entries(json.properties)
    .map(value => ({key: value[0], ...value[1]}))
    .filter(value => json.required.includes(value.key));

  const requiredQuestion = requiredProperties
    .filter(value => value.type !== 'boolean')
    .map(value => {
      return {
        type: value.type === 'number' ? 'number'
          : value.enum ? 'list'
            : 'input',
        name: value.key,
        message: value['x-prompt'] || value.description,
        choices: value.enum,
        default: value.default,
      };
    });
  // 将boolean型合并到一个checkbox
  const booleanProperties = requiredProperties.filter(value => value.type === 'boolean');
  const checkboxQuestion = {
    type: 'checkbox',
    name: '__booleanQuestion', // 防止重名
    message: '可选项',
    choices: booleanProperties.map(value => {
      return {
        checked: value.default,
        name: value['x-prompt'] || value.description,
        value: value.key,
      };
    }),
  };
  const question = [
    ...requiredQuestion,
    ...checkboxQuestion.choices.length > 1 ? [checkboxQuestion] : [], // checkboxQuestion为空就不需要提问了
  ];
  const answer = await prompt<any>(question);
  // 将checkbox的answer拆分
  const booleanQuestion = answer.__booleanQuestion as string[];
  delete answer.__booleanQuestion;
  return booleanProperties.reduce((pre, curr) => {
    pre[curr.key] = booleanQuestion.includes(curr.key);
    return pre;
  }, answer);
}

// 显示模板的定制选项
export async function templateOption(template: Template): Promise<{ template: Template; option: any }> {
  const option = await questionFromSchema(template.schemaJson);
  return {template, option};
}

// 根据模板数据，显示列表，返回用户选择的模板
async function chooseTemplate(templates: Template[]) {
  const {templateName} = await prompt({
    type: 'list',
    name: 'templateName',
    message: '请选择需要生成的模板',
    choices: templates.map(value => {
      return {
        name: `${value.pluginName}:${value.name}`,
        value: value.name,
      };
    }),
  });
  return templates.find(value => value.name === templateName);
}

// 生成代码
async function generateFile({template, option}: { template: Template; option: any }) {
  const spinner = ora('生成中...').start();
  try {
    await template.run(option);
    spinner.succeed('生成完成');
  } catch (e) {
    spinner.fail('生成失败');
    console.error(e);
  }
}

// 生成模块
const generateModule = asyncPipe(
  loadTemplates(schematicName => schematicName.endsWith('-module')),
  chooseTemplate,
  templateOption,
  generateFile,
);

// 生成组件
const generateComponent = asyncPipe(
  loadTemplates(schematicName => schematicName.endsWith('-component')),
  chooseTemplate,
  templateOption,
  generateFile,
);

// 加载插件
export async function loadPlugins() {
  const packagePath = findUp(['node_modules'], process.cwd());
  const dirs = await readdir(packagePath);
  return dirs.filter(value => value.startsWith(PLUGIN_PREFIX));
}


// 选择类型
async function chooseType() {
  const {type} = await prompt({
    type: 'list',
    name: 'type',
    message: '请选择需要生成的模板类型',
    choices: ['component', 'module'],
    default: 'component',
  });
  return type;
}

// 根据type执行动作
async function typeAction(type: string) {
  const plugins = await loadPlugins();
  if (type === 'module') {
    await generateModule(plugins);
  } else if (type === 'component') {
    await generateComponent(plugins);
  }
}

// 生成命令
export const generate = asyncPipe(
  chooseType,
  typeAction,
);


