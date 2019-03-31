'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var program = _interopDefault(require('../node_modules/commander/index.js'));
require('../node_modules/core-js/es7/array.js');
require('fs-extra');
var inquirer = require('inquirer');
var ora = _interopDefault(require('ora'));

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

//
// 包含Promise异步情况的Pipe
function asyncPipe(...functions) {
    return (...args) => __awaiter(this, void 0, void 0, function* () {
        let nextArgs = args;
        for (const func of functions) {
            const result = func(nextArgs);
            if (Promise != undefined && result instanceof Promise) {
                nextArgs = [yield result];
            }
            else {
                nextArgs = [result];
            }
        }
        return nextArgs[0];
    });
}
function sleep(t) {
    return new Promise((resolve) => {
        const timer = setTimeout(() => {
            resolve(timer);
        }, t);
    });
}
//# sourceMappingURL=utils.js.map

// 加载模板，返回模板数据
function loadTemplates() {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(10000);
        return [];
    });
}
// 根据模板数据，显示列表，返回用户选择的模板
function chooseTemplate(templates) {
}
// 显示模板的定制选项
function templateOption() {
}
// 生成代码
function generateFile() {
}
const generate = asyncPipe(loadTemplates, chooseTemplate, templateOption, generateFile);
// 生成项目
function generateProject() {
    return __awaiter(this, void 0, void 0, function* () {
        const spinner = ora('Loading...').start();
        try {
            yield generate();
            spinner.succeed('生成完成');
        }
        catch (e) {
            spinner.fail('生成失败');
            console.error(e);
        }
    });
}
// const question: inquirer.Questions = [
//   // {
//   //   type: 'input',
//   //   name: 'appName',
//   //   required: true,
//   //   message: '请输入项目名称',
//   //   validate: (input: string): string | boolean => {
//   //     if (isFileNameValid(input)) {
//   //       return '文件命名不能包含\/:*?<>|';
//   //     }
//   //     if (isFileNameExcessLimit(input)) {
//   //       return '文件名不能超过255位';
//   //     }
//   //     if (isFileNameNameRep(input)) {
//   //       return '文件命名重复,请重新命名';
//   //     }
//   //     if (input || input.length) {
//   //       return true;
//   //     }
//   //   }
//   // },
//   {
//     type: 'list',
//     name: 'projectTemplate',
//     message: '请选择需要创建模板类型',
//     choices: ['project', 'module', 'page', 'component'],
//     default: 'project'
//   },
//   {
//     type: 'input',
//     name: 'projectDesc',
//     message: 'Please input project description:'
//   },
//   {
//     type: 'input',
//     name: 'projectMain',
//     message: 'Main file (index.js):',
//     default: 'index.js'
//   },
//   {
//     type: 'input',
//     name: 'projectAuthor',
//     message: 'Author (other):',
//     default: 'other she'
//   }
// ];

function generateModule() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
function generatePage() {
}
function generateComponent() {
}
// 选择类型
function chooseType() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield inquirer.prompt({
            type: 'list',
            name: 'type',
            message: '请选择需要创建模板类型',
            choices: ['project', 'module', 'page', 'component'],
            default: 'project'
        });
    });
}
// 根据type执行动作
function typeAction([{ type }]) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(type);
        if (type === 'project') {
            console.log(100);
            yield generateProject();
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
function gen() {
    return asyncPipe(chooseType, typeAction);
}
//# sourceMappingURL=index.js.map

program
    .version(require('../package.json').version, '-v, --version') // tslint:disable-line
    .usage('<command> [options]');
program
    .command('gen')
    .description('generate a new project or module or component.')
    .action(gen);
program.parse(process.argv);
//# sourceMappingURL=main.js.map
