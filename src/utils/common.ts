// 加载模板，返回模板数据
import { JsonObject, normalize, virtualFs } from '@angular-devkit/core';
import { NodeJsSyncHost } from '@angular-devkit/core/node';
import { SchematicEngine } from '@angular-devkit/schematics';
import { FileSystemEngineHost, NodeModulesEngineHost, NodeWorkflow } from '@angular-devkit/schematics/tools';
import { prompt } from 'inquirer';
import { findWorkspaceRoot } from './utils';
import ora from 'ora';


export const pluginPrefix = 'template-cli-schematics-';

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
  description: string;
  run: (option: any) => Promise<void>;
  schemaJson: JsonSchema;
}

export interface Project {
  name: string;
}


// 根据collection插件的包名生成collection
export function createCollection(collectionName: string) {
  const engineHost = new NodeModulesEngineHost();
  const engine = new SchematicEngine(engineHost);
  return engine.createCollection(collectionName);
}

// 运行Schematic
export async function runSchematic(collectionName: string, schematicName: string, options: any, workPath: string): Promise<void> {
  const root = findWorkspaceRoot(workPath) || workPath;
  const fsHost = new virtualFs.ScopedHost(new NodeJsSyncHost(), normalize(root));
  const workflow = new NodeWorkflow(fsHost, {});
  // workflow.reporter.subscribe((event: DryRunEvent) => {
  //   console.log(event);
  // });
  // workflow.lifeCycle.subscribe(event => {
  //   console.log(event);
  // });

  return await workflow.execute({
    collection: collectionName,
    schematic: schematicName,
    options,
  }).toPromise();
}

export async function questionFromSchema(json: JsonSchema) {
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


// 生成代码
export async function generateFile({template, option}: { template: Template; option: any }) {
  const spinner = ora('生成中...').start();
  try {
    await template.run(option);
    spinner.succeed('生成完成');
  } catch (e) {
    spinner.fail('生成失败');
    console.error(e);
  }
}


// 根据模板数据，显示列表，返回用户选择的模板
export async function chooseTemplate(templates: Template[]) {
  const {templateName} = await prompt({
    type: 'list',
    name: 'templateName',
    message: '请选择需要生成的模板',
    choices: templates.map(value => `[${value.name}]: ${value.description}`),
  });
  return templates.find(value => `[${value.name}]: ${value.description}` === templateName);
}
