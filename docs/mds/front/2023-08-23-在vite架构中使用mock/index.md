---
title: "在Vite架构中使用Mock"
date: "2023-08-23"
categories: 
  - "前端"
---

## 1.配置

vite-plugin-mock 是一个为 Vite 开发的 mock 插件,它可以在你开发 Vue 或 React 应用程序的时候,轻松模拟 HTTP 请求,避免需要去启动真实的后端服务。

使用方式很简单,先通过 npm 安装:

```
npm install vite-plugin-mock --save-dev
```

然后在 vite.config.js 配置文件中导入插件,并添加到 plugins 数组中:

import {viteMockServe} from 'vite-plugin-mock';

export default (params) => {
  const {mode} = params;
  return {
    plugins: \[
      mode === 'mock' &&
      viteMockServe({
        mockPath: './mock',
        localEnabled: true,
      }),
    \],
  };
};

它会拦截对 mock 目录下的 `.js` 或 `.ts` 文件的请求,然后返回模拟的数据。

内置了延迟模拟、自动 404 模拟等功能。

总之,vite-plugin-mock 提供了在使用 Vite 开发时,无需真实后端就可以模拟 API 请求的非常便捷的解决方案。

## 2.在mock目录下写拦截代码

对了,在谈到 vite-plugin-mock 时,不得不提的就是它所依赖的 mockjs。

mockjs 是一个在前端模拟生成模拟数据的库,vite-plugin-mock 插件就是利用它来实现模拟 API 响应的。

使用 mockjs 的优点是:

- 它的语法简单,通过模板定义来生成随机数据,无需自己手写各种随机逻辑。

- 支持生成多种随机类型的数据,包括字符串、数字、布尔、对象、数组等。

- 可以通过 mock.Random 来自定义随机函数。

- 定义数据模板后,每次调用可以生成不同的模拟数据。

- 支持基于 JSON schema 来生成模拟数据。

- 同时还提供了 mock.js 和 mock.RESt 两种方式来模拟 API。

所以 vite-plugin-mock 借助 mockjs,让我们可以非常方便地编写模拟数据,从而模拟出 API 的响应,极大地提高了开发效率。

总体来说,mockjs 为前端模拟数据提供了强大的支持,也是 vite-plugin-mock 这样的 mock 插件的重要基石。

```
import Mock from "mockjs";

export default [{
  url: '/api/get-list',
  method: 'get',
  response: () => {
    return {
      code: 0,
      msg: 'ok',
      data: {
        ...Mock.mock({
          'list|100': [
            {
              'index|+1': 1,
              'status|1': '@natural(0, 4)',
              no: 'BH00@natural(01, 100)',
              name: '@city()办公用品采购项目',
              'paymentType|1': '@natural(0, 1)',
              'contractType|1': '@natural(0, 2)',
              updateTime: '2020-05-30 @date("HH:mm:ss")',
              amount: '@natural(10, 500),000,000',
              adminName: '@cname()',
            },
          ],
        }),
      },
    };
  },
}];
```
