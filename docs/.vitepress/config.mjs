import { defineConfig } from 'vitepress'


const items1 = [
    { text: 'threejs', link: '/2024-01-05-threejs/' },
    { text: 'VsCode中的extensions-json', link: '/2023-11-29-vscode中的extensions-json/' },
    { text: '前端代码规范', link: '/2023-11-29-tencent前端代码规范/' },
    { text: '撤销重做', link: '/2023-11-20-撤销重做优雅的解决方案/' },
    { text: 'flutter卡在assembledebug', link: '/2023-10-14-flutter第一次运行的时候卡在assembledebug/' },
    { text: 'OnlyOffice源码编译', link: '/2023-09-22-onlyoffice源码编译/' },
    { text: '编译v8', link: '/2023-07-15-编译v8/' },
    { text: 'openssl3-0', link: '/2023-07-14-nodejs版本过高导致的openssl3-0报错/' },
    { text: 'react', link: '/2023-07-11-react/' },
    { text: 'chromium编译', link: '/2023-07-01-chromium/' },
    { text: '在线写代码', link: '/2023-03-22-在线写代码/' },
]

const items1_1 = [
    { text: 'Vue3一行代码显示弹窗', link: '/2023-11-29-vue如何一行代码显示弹窗/' },
    { text: 'Vue3异步组件', link: '/2023-11-20-defineasynccomponent异步组件/' },
    { text: 'Vite中使用Mock', link: '/2023-08-23-在vite架构中使用mock/' },
    { text: 'ElementPlus多表单验证', link: '/2023-08-23-elementplus多表单验证/' },
    { text: 'ElementPlus表格列合并', link: '/2023-08-10-elementplus表格列合并/' },
    { text: 'ElementPlus复选框单选', link: '/2023-07-27-elementplus复选框实现单选框的功能/' },
    { text: '前端DockerFile部署', link: '/2023-03-30-前端dockerfile部署/' },
    { text: '部署ElementPlusDoc', link: '/2023-03-28-部署element-plus本地文档到docker/' },
]

const items2 = [
    { text: 'linux常用操作', link: '/2023-09-26-linux常用操作/' },
    { text: 'vmware安装', link: '/2023-09-22-vmware安装/' },
    { text: 'maven详细安装步骤', link: '/2023-08-21-maven详细安装步骤/' },
    { text: 'java8的新特性', link: '/2023-08-21-java8的新特性/' },
    { text: 'docker创建直播推流服务器', link: '/2023-04-24-docker创建直播推流服务器/' },
]

const items3 = [
    { text: '关于创业sam·altman', link: '/2023-11-15-关于创业sam·altman/' },
]


// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "DIFFFFFFT",
    description: "designer devlopment",
    head: [
        [
            'link',
            {
                href: '/css/font.css',
                rel: 'stylesheet'
            }
        ]
    ],
    outDir:'../dist',
    appearance: 'dark',
    // https://vitepress.dev/reference/default-theme-config
    themeConfig: {
        prev: 'false',
        next: 'false',
        logo: '/svgs/logo.svg',
        editLink: {
            pattern: 'https://github.com/difffffft/edit/main/docs/:path'
        },
        lastUpdated: true,
        search: {
            provider: 'local'
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024-present DIFFFFFFT'
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        outlineTitle: '这一页',
        lastUpdatedText: '最后更新',
        nav: [
            { text: '首页', link: '/' },
            { text: '博客', link: `/mds/me${items3[0].link}`, activeMatch: '/mds/me/' },
            {
                text: '文档',
                items: [
                    { text: '前端', link: `/mds/front${items1[0].link}`, activeMatch: '/mds/front/' },
                    { text: '后端', link: `/mds/back${items2[0].link}`, activeMatch: '/mds/back/' },
                    { text: '算法', link: '/blog' },
                    { text: '人工智能', link: '/blog' },
                ],
            },
        ],

        // http://tool.pfan.cn/random
        sidebar: {
            '/mds/me/': {
                base: '/mds/me/',
                items: items3
            },
            '/mds/back/': {
                base: '/mds/back/',
                items: items2
            },
            '/mds/front/': {
                base: '/mds/front/', items: [
                    {
                        text: '常见',
                        collapsed: false,
                        items: items1
                    },
                    {
                        text: 'Vue',
                        collapsed: false,
                        items: items1_1
                    },
                    // {
                    //     text: '自定义',
                    //     collapsed: false,
                    //     items: [
                    //         { text: '自定义主题', link: 'custom-theme' },
                    //         { text: '扩展默认主题', link: 'extending-default-theme' },
                    //         { text: '构建时数据加载', link: 'data-loading' },
                    //         { text: 'SSR 兼容性', link: 'ssr-compat' },
                    //         { text: '连接 CMS', link: 'cms' }
                    //     ]
                    // },
                    // {
                    //     text: '实验性功能',
                    //     collapsed: false,
                    //     items: [
                    //         { text: 'MPA 模式', link: 'mpa-mode' },
                    //         { text: 'sitemap 生成', link: 'sitemap-generation' }
                    //     ]
                    // },
                    // { text: '配置和 API 参考', base: '/zh/reference/', link: 'site-config' }
                ]
            },
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/difffffft' }
        ]
    }
})
