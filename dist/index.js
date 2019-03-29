'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var program = _interopDefault(require('../node_modules/commander/index.js'));
require('../node_modules/core-js/es7/array.js');
require('fs-extra');
var inquirer = require('inquirer');

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

function compose(...functions) {
    return (parameter) => __awaiter(this, void 0, void 0, function* () {
        let result = parameter;
        for (const func of functions) {
            result = yield func(result);
        }
    });
}
//# sourceMappingURL=utils.js.map

function loadTemplates() {
}
function chooseTemplate() {
}
function templateOption() {
}
function generate() {
}
const generateProject = compose(loadTemplates, chooseTemplate, templateOption, generate);
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
function typeAction({ type }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (type === 'project') {
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
function generateModule() {
}
function generatePage() {
}
function generateComponent() {
}
const gen = compose(chooseType, typeAction);
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
