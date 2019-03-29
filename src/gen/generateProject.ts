import { compose } from '../utils';

function loadTemplates() {

}

function chooseTemplate() {

}

function templateOption() {

}

function generate() {

}
export const generateProject = compose(
  loadTemplates,
  chooseTemplate,
  templateOption,
  generate
);


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
