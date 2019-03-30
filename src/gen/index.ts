import fse from 'fs-extra';
import { prompt } from 'inquirer';
import ora from 'ora';
import { asyncPipe } from '../utils';
import { generateProject } from './project/generateProject';

async function generateModule() {

}

function generatePage() {

}

function generateComponent() {

}


// 选择类型
async function chooseType() {
    return await prompt({
        type: 'list',
        name: 'type',
        message: '请选择需要创建模板类型',
        choices: ['project', 'module', 'page', 'component'],
        default: 'project'
    });
}

// 根据type执行动作
async function typeAction({type}: any) {
    if (type === 'project') {
        await generateProject();
    } else if (type === 'module') {
        await generateModule();
    } else if (type === 'page') {
        await generatePage();
    } else if (type === 'component') {
        await generateComponent();
    }


}


// 生成命令
export const gen = asyncPipe(chooseType, typeAction);


// console.log('生成中...');
// try {
//     const config = loadConfig();
//     console.log('生成完成');
// } catch (e) {
//     console.error('生成失败');
//     console.error(e);
// }

function isFileNameValid(filename: string) {
    return /\/|\|<|>|\*|\?/.test(filename);
}

function isFileNameExcessLimit(filename: string) {
    return filename.length > 2 << 8; // 2的8次方
}

function isFileNameNameRep(filename: string) {
    const path = process.cwd();
    let files = fse.readdirSync(path);
    return files.some((f_name) => f_name === filename);
}

function isFileNameStat(file: string) {
    return fse.statSync(file);
}


function cleanArgs(cmd: any) {
    const args: any = {};
    debugger;
    cmd.options.forEach((o: any) => {
    });
    return args;
}
