import { defineConfig } from 'vitepress'
import {
    MODULE_FRONT_OTHER,
    MODULE_FRONT_VUE,
    MODULE_FRONT_REACT,
    MODULE_FRONT_THREE,

    MODULE_BACK_JAVA,
    MODULE_BACK_OTHER,

    MODULE_ARITHMETIC_COMMON,
    MODULE_AI_COMMON,
    MODULE_ME_COMMON,
    MODULE_RESUME
} from "./module.mjs"


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
        ],
        [
            'link',
            {
                href: '/images/logo-with-shadow.png',
                type: "image/png",
                rel: 'icon'
            }
        ]
    ],
    outDir: '../dist',
    appearance: 'dark',
    sitemap: {
        hostname: 'https://difffffft.com'
    },
    // https://vitepress.dev/reference/default-theme-config
    themeConfig: {
        prev: 'false',
        next: 'false',
        logo: '/svgs/logo.svg',
        editLink: {
            pattern: 'https://github.com/difffffft/difffffft/edit/master/docs/:path'
        },
        lastUpdated: true,
        search: {
            provider: 'local'
        },
        footer: {
            message: '蜀ICP备2021033158号',
            copyright: 'Copyright © 2024-present DIFFFFFFT'
        },
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        outlineTitle: '本篇',
        lastUpdatedText: '最后更新',

        nav: [
            { text: '博客', link: MODULE_ME_COMMON[0].link, activeMatch: '/mds/me/(.*)' },
            { text: '简历', link: MODULE_RESUME[0].link, activeMatch: '/mds/resume/' },
            {
                text: '文档',
                items: [
                    { text: '前端', link: MODULE_FRONT_VUE[0].link, activeMatch: '/mds/front/(.*)' },
                    { text: '后端', link: MODULE_BACK_JAVA[0].link, activeMatch: '/mds/back/(.*)' },
                    { text: '算法', link: MODULE_ARITHMETIC_COMMON[0].link, activeMatch: '/mds/arithmetic/(.*)' },
                    { text: '人工智能', link: MODULE_AI_COMMON[0].link, activeMatch: '/mds/ai/(.*)' },
                ],
            },
        ],

        // http://tool.pfan.cn/random
        sidebar: {
            '/mds/me/': {
                items: MODULE_ME_COMMON
            },

            '/mds/arithmetic/': {
                items: MODULE_ARITHMETIC_COMMON
            },
            '/mds/ai/': {
                items: MODULE_AI_COMMON
            },
            '/mds/front/': {
                items: [
                    {
                        text: 'Vue',
                        collapsed: false,
                        items: MODULE_FRONT_VUE
                    },
                    {
                        text: 'React',
                        collapsed: true,
                        items: MODULE_FRONT_REACT
                    },
                    {
                        text: 'ThreeJs',
                        collapsed: true,
                        items: MODULE_FRONT_THREE
                    },
                    {
                        text: 'Other',
                        collapsed: true,
                        items: MODULE_FRONT_OTHER
                    },
                ]
            },
            '/mds/back/': {
                items: [
                    {
                        text: 'Java',
                        collapsed: false,
                        items: MODULE_BACK_JAVA
                    },
                    {
                        text: 'Other',
                        collapsed: true,
                        items: MODULE_BACK_OTHER
                    },
                ]
            },
        },

        socialLinks: [
            { icon: 'twitter', link: 'https://x.com/difffffft' },
            { icon: 'github', link: 'https://github.com/difffffft' },
        ]
    }
})
