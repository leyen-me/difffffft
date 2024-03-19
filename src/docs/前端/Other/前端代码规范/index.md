---
title: "Tencent前端代码规范"
date: "2023-11-29"
categories: 
  - "前端"
---

## 项目结构

![](images/image-1.png)

```
--.git                 版本控制系统
--.husky               代码提交规范约束
--.github              github配置文件
--.vscode              vscode配置文件
  --extensions.json    插件推荐配置文件
  --setting.json       配置文件
--docs                 项目文档，可以给README使用
--mock                 项目的MOCK环境，当没有后端服务的时候，需要定义MOCK接口
--node_modules         项目依赖文件
--public               项目静态文件，不会被打包编译
--src                  项目源码
  --api                项目接口目录
    --model            接口的参数和响应都是一个model，主要用于类型提示，对应的后端
    --xxx.ts           项目的接口
  --assets             项目资源目录
    --assets-bg.png    项目资源文件
  --components         项目基础组件
  --config             项目配置文件
  --constants          项目的常量
  --hooks              项目自定义Hooks
  --layout             项目基础布局，路由渲染的页面在基础布局里面显示
  --locales            项目国际化，i18n
  --pages              项目的页面
  --router             项目的路由配置页
  --store              项目全局状态管理，vuex和pinia
  --style              项目的样式文件
    --font-family.less 项目字体
    --index.less       项目样式注册的入口
    --layout.less      项目布局的样式
    --reset.less       项目对部分样式进行重置
    --variables.less   项目的LESS变量
  --types              项目TS的类型存放地（全局的）
  --utils              项目工具类
  --App.vue            项目页面入口
  --main.ts            项目逻辑入口
  --permission.ts      项目的权限路由
--.editorconfig        项目规范，和setting.json差不多，区别是可以在webstorm使用
--.env                 项目环境
--.env.development     项目开发环境
--.env.production      项目生产环境
--.env.test            项目测试环境
--.eslintignore        eslint忽略文件
--.eslintrc            eslint配置文件
--.gitignore           git忽略文件
--.gitattributes       git配置文件
--.npmrc               npm配置文件
--.prettierrc.js       prettier配置文件
--.stylelintignore     less忽略文件
--commitlint.config.js 项目commit提交规范配置文件
--index.html           工程入口
--LICENSE              版权声明文件
--package.json         项目配置文件
--pnpm-lock.yaml       项目pnpm-lock文件
--README-zh_CN.md      中文阅读文件
--README.md            英文阅读文件
--stylelint.config.js  css配置文件
--tsconfig.json        TypeScript配置文件
--vite.config.ts       Vite配置文件
```

目录规范和文件规范，请参考

[difffffft/tdesign-vue-next-starter: A starter-kit for TDesign Vue Next UI components (github.com)](https://github.com/difffffft/tdesign-vue-next-starter)
