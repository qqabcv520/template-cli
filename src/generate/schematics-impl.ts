// tslint:disable-next-line
import 'symbol-observable';
// tslint:disable-next-line
import { normalize, schema, virtualFs } from '@angular-devkit/core';
import { NodeJsSyncHost } from '@angular-devkit/core/node';
import { DryRunEvent, SchematicEngine } from '@angular-devkit/schematics';
import { NodeModulesEngineHost, NodeWorkflow } from '@angular-devkit/schematics/tools';
import * as inquirer from 'inquirer';
import { Template } from './index';
import fse from 'fs-extra';
import path from 'path';


function createPromptProvider(): schema.PromptProvider {
  return (definitions: Array<schema.PromptDefinition>) => {
    const questions: inquirer.Questions = definitions.map(definition => {
      const question: inquirer.Question = {
        name: definition.id,
        message: definition.message,
        default: definition.default,
      };

      const validator = definition.validator;
      if (validator) {
        question.validate = input => validator(input);
      }

      switch (definition.type) {
        case 'confirmation':
          return {...question, type: 'confirm'};
        case 'list':
          return {
            ...question,
            type: !!definition.multiselect ? 'checkbox' : 'list',
            choices: definition.items && definition.items.map(item => {
              if (typeof item == 'string') {
                return item;
              } else {
                return {
                  name: item.label,
                  value: item.value,
                };
              }
            }),
          };
        default:
          return {...question, type: definition.type};
      }
    });

    return inquirer.prompt(questions);
  };
}

export async function runSchematic(collectionName: string, schematicName: string, options: any): Promise<void> {

  /** Create a Virtual FS Host scoped to where the process is being run. */
  const fsHost = new virtualFs.ScopedHost(new NodeJsSyncHost(), normalize(process.cwd()));

  /** Create the workflow that will be executed with this run. */
  const workflow = new NodeWorkflow(fsHost, {});

  workflow.reporter.subscribe((event: DryRunEvent) => {
    console.log(event);
  });
  workflow.lifeCycle.subscribe(event => {
    console.log(event);
  });

  // Add prompts.
  workflow.registry.usePromptProvider(createPromptProvider());

  return await workflow.execute({
    collection: collectionName,
    schematic: schematicName,
    options,
  }).toPromise();
}



function createCollection(collectionName: string) {
  const engineHost = new NodeModulesEngineHost();
  const engine = new SchematicEngine(engineHost);
  return engine.createCollection(collectionName);
}


export async function loadPlugins() {
  // await fse.readdir(path.resolve(__dirname, '../node_modules'));
}



// 加载模板，返回模板数据
export function loadTemplates(
  collectionName: string,
  schematicFilter: (schematicName: string) => boolean,
): () => Promise<Template[]> {
  const collection = createCollection(collectionName);
  return async () => {
    return collection
      .listSchematicNames()
      .filter(schematicFilter)
      .map(value => collection.createSchematic(value))
      .map(value => {
        console.log(collection.listSchematicNames());
        console.log(value);
        console.log('-------------------------------');
        const a = value.description;
        const b = value.collection;
        debugger;
        return {
          name: value.description.name,
          run: async (option: any) => await runSchematic(value.collection.description.name, value.description.name, option),
          optionsSchema: value.description.schemaJson,
        };
      });
  };
}


// 显示模板的定制选项
export async function templateOption(template: Template): Promise<{template: Template; option: any}> {
  console.log(template.optionsSchema);
  debugger;
  const option = {};

  return {template, option};
}
