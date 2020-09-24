# template-cli
命令行模板生成

## 开发

- `git clone`克隆代码到本地

- `npm i`安装依赖

- 开发完成后，`npm run build`打包

- `npm publish`发布到npm仓库

## 安装
```bash
npm i template-cli-core -g # npm安装

```

## 生成项目

```bash
tpl project

tpl p # 简写
```

## 生成模块或组件

- 安装需要使用的模板package

- 执行生成命令

  ```bash
  tpl generate

  tpl g # 简写
  ```
- 根据命令选择需要生成的组件并初始化组件参数

- 模板可直接使用angular schematics，但需要将package前缀命名为`template-cli-schematics-`

## 生成接口

- 安装需要使用的模板package

    ```javascript
    module.exports = {
        path: './api', //生成后保存路径
        serviceTemplatePath: './template/service.js', // 接口模板
        entityTemplatePath: './template/entity.js', // 实体模板
        include: [
            {path: '/user/**'},
            {path: '/test/**', methods: ['get']},
        ], // 需要生成的接口
        exclude: [
        //     {path: '**', methods: ['delete', 'put', 'options', 'patch', 'head']},
        //     {path: '/error'},
        ], // 排除需要生成的接口，会覆盖include配置
        projects: [
            {
                url: 'http://192.168.1.146:8520/v2/api-docs', // swagger地址
                data: { // 接口信息，可在模板中获取
                    baseUrl: 'common',
                    prefix: 'abc'
                }
            },
        ],
        assetsPath: './template/assets', // 需要直接生成的资源文件
    };
    ```

- 执行生成命令

  ```bash
  tpl api

  tpl a # 简写
  ```


