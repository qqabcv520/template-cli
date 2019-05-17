// tslint:disable-next-line
const CommandInit = require('bgx-cli/libs/commands/init.js').default;

// 生成命令
export const generateProject = async (options: any) => {
  new CommandInit().run();
};
