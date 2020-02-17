import { normalize, virtualFs } from '@angular-devkit/core';
import { NodeJsSyncHost } from '@angular-devkit/core/node';
import { NodeWorkflow } from '@angular-devkit/schematics/tools';
import { readdir } from 'fs-extra';
import { prompt } from 'inquirer';
import * as path from 'path';
import { asyncPipe, findUp, findWorkspaceRoot } from '../utils/utils';
import { chooseTemplate, createCollection, generateFile, JsonSchema, pluginPrefix, questionFromSchema, Template } from '../utils/common';


const workPath = process.cwd();

// 运行Schematic
export async function runSchematic(collectionName: string, schematicName: string, options: any): Promise<void> {
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


// 加载模板，返回模板数据
export function loadTemplates(
  collectionNames: string | string[],
): Template[] {
  const collectionNameArr = Array.isArray(collectionNames) ? collectionNames : [collectionNames];
  const collections = collectionNameArr
    .map(value => {
      try {
        return createCollection(value);
      } catch (e) {
        return null;
      }
    })
    .filter(value => value);
  return collections.flatMap(value => {

    return value.listSchematicNames()
      .map(val => value.createSchematic(val))
      .map(val => {
        return {
          pluginName: value.description.name,
          name: val.description.name,
          description: val.description.description,
          run: async (option: any) => await runSchematic(val.collection.description.name, val.description.name, option),
          schemaJson: val.description.schemaJson as JsonSchema,
        };
      });
  });
}

// 显示模板的定制选项
export async function templateOption(template: Template): Promise<{ template: Template; option: any }> {
  const asnwer = await questionFromSchema(template.schemaJson);
  const option = {
    ...asnwer,
    __workPath: normalize(path.relative(findWorkspaceRoot(workPath), workPath)),
  };
  return {template, option};
}

// 加载插件
export async function loadPlugins() {
  const packagePath = findUp(['node_modules'], workPath);
  if (packagePath === null) {
    throw new Error('没有找到node_modules');
  }
  const dirs = await readdir(packagePath);
  const plugins = dirs.filter(value => value.startsWith(pluginPrefix));
  if (plugins.length === 0) {
    throw new Error('没有加载到插件');
  }
  return plugins;
}

// 选择类型
async function choosePlugin(): Promise<string> {
  const plugins = await loadPlugins();
  if (plugins.length === 1) {
    return plugins[0];
  }
  const {type} = await prompt({
    type: 'list',
    name: 'type',
    message: '请选择模板插件包',
    choices: plugins,
    default: 'component',
  });
  return type;
}


// 生成命令
export const generate = asyncPipe(
  choosePlugin,
  loadTemplates,
  chooseTemplate,
  templateOption,
  generateFile,
);


