import ora from 'ora';
import { asyncPipe, sleep } from '../../utils';

// 加载模板，返回模板数据
async function loadTemplates(): Promise<any[]> {
    await sleep(10000);

    return [];

}
// 根据模板数据，显示列表，返回用户选择的模板
function chooseTemplate(templates: any[]) {

}
// 显示模板的定制选项
function templateOption() {

}
// 生成代码
function generateFile() {

}

const generate = asyncPipe(
    loadTemplates,
    chooseTemplate,
    templateOption,
    generateFile
);

// 生成项目
export async function generateProject() {
    const spinner = ora('Loading...').start();
    try {
        await generate();
        spinner.succeed('生成完成');
    } catch (e) {
        spinner.fail('生成失败');
        console.error(e);
    }
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
