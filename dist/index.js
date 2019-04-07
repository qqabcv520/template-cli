'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var program = _interopDefault(require('../node_modules/commander/index.js'));
require('../node_modules/core-js/es7/array.js');
var inquirer = require('inquirer');
var ora = _interopDefault(require('ora'));
require('fs-extra');
require('symbol-observable');
var core = require('@angular-devkit/core');
var node = require('@angular-devkit/core/node');
var schematics = require('@angular-devkit/schematics');
var tools = require('@angular-devkit/schematics/tools');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

// 包含Promise异步情况的Pipe
function asyncPipe(...functions) {
    return (...args) => __awaiter(this, void 0, void 0, function* () {
        let nextArgs = args;
        for (const func of functions) {
            const result = func(...nextArgs);
            if (result instanceof Promise) {
                nextArgs = [yield result];
            }
            else {
                nextArgs = [result];
            }
        }
        return nextArgs[0];
    });
}
//# sourceMappingURL=utils.js.map

function createPromptProvider() {
    return (definitions) => {
        const questions = definitions.map(definition => {
            const question = {
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
                    return Object.assign({}, question, { type: 'confirm' });
                case 'list':
                    return Object.assign({}, question, { type: !!definition.multiselect ? 'checkbox' : 'list', choices: definition.items && definition.items.map(item => {
                            if (typeof item == 'string') {
                                return item;
                            }
                            else {
                                return {
                                    name: item.label,
                                    value: item.value,
                                };
                            }
                        }) });
                default:
                    return Object.assign({}, question, { type: definition.type });
            }
        });
        return inquirer.prompt(questions);
    };
}
function runSchematic(collectionName, schematicName, options) {
    return __awaiter(this, void 0, void 0, function* () {
        /** Create a Virtual FS Host scoped to where the process is being run. */
        const fsHost = new core.virtualFs.ScopedHost(new node.NodeJsSyncHost(), core.normalize(process.cwd()));
        /** Create the workflow that will be executed with this run. */
        const workflow = new tools.NodeWorkflow(fsHost, {});
        workflow.reporter.subscribe((event) => {
            console.log(event);
        });
        workflow.lifeCycle.subscribe(event => {
            console.log(event);
        });
        // Add prompts.
        workflow.registry.usePromptProvider(createPromptProvider());
        return yield workflow.execute({
            collection: collectionName,
            schematic: schematicName,
            options,
        }).toPromise();
    });
}
function createCollection(collectionName) {
    const engineHost = new tools.NodeModulesEngineHost();
    const engine = new schematics.SchematicEngine(engineHost);
    return engine.createCollection(collectionName);
}
// 加载模板，返回模板数据
function loadTemplates(collectionName, schematicFilter) {
    const collection = createCollection(collectionName);
    return () => __awaiter(this, void 0, void 0, function* () {
        return collection
            .listSchematicNames()
            .filter(schematicFilter)
            .map(value => collection.createSchematic(value))
            .map(value => {
            const a = value.description;
            const b = value.collection;
            console.log(a);
            console.log(b);
            debugger;
            return {
                name: value.description.name,
                run: (option) => __awaiter(this, void 0, void 0, function* () { return yield runSchematic(value.collection.description.name, value.description.name, option); }),
                questions: value.description.schemaJson,
            };
        });
    });
}
// 显示模板的定制选项
function templateOption(template) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(template.questions);
        debugger;
        const option = {};
        return { template, option };
    });
}
//# sourceMappingURL=schematics-impl.js.map

// 根据模板数据，显示列表，返回用户选择的模板
function chooseTemplate(templates) {
    return __awaiter(this, void 0, void 0, function* () {
        const { templateName } = yield inquirer.prompt({
            type: 'list',
            name: 'templateName',
            message: '请选择需要生成的模板',
            choices: templates.map(value => value.name),
        });
        return templates.find(value => value.name === templateName);
    });
}
// 生成代码
function generateFile({ template, option }) {
    return __awaiter(this, void 0, void 0, function* () {
        const spinner = ora('Loading...').start();
        try {
            yield template.run(option);
            spinner.succeed('生成完成');
        }
        catch (e) {
            spinner.fail('生成失败');
            console.error(e);
        }
    });
}
function generateModule() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
function generateComponent() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
const generatePage = asyncPipe(loadTemplates('.', schematicName => schematicName.endsWith('-page')), chooseTemplate, templateOption, generateFile);
// 选择类型
function chooseType() {
    return __awaiter(this, void 0, void 0, function* () {
        const { type } = yield inquirer.prompt({
            type: 'list',
            name: 'type',
            message: '请选择需要生成的模板类型',
            choices: ['project', 'module', 'page', 'component'],
            default: 'project',
        });
        return type;
    });
}
// 根据type执行动作
function typeAction(type) {
    return __awaiter(this, void 0, void 0, function* () {
        if (type === 'project') {
            yield generatePage();
            //await generateProject();
        }
        else if (type === 'module') {
            yield generateModule();
        }
        else if (type === 'page') {
            yield generatePage();
        }
        else if (type === 'component') {
            yield generateComponent();
        }
    });
}
// 生成命令
const generate = asyncPipe(chooseType, typeAction);

program
    .version(require('../package.json').version, '-v, --version') // tslint:disable-line
    .usage('<command> [options]');
program
    .command('generate')
    .alias('g')
    .description('generate a new project or module or component.')
    .action(generate);
program.parse(process.argv);
//# sourceMappingURL=main.js.map
