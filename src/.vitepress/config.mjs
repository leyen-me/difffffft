import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

import {
    MODULE_FRONT_OTHER,
    MODULE_FRONT_VUE,
    MODULE_FRONT_REACT,
    MODULE_FRONT_THREE,

    MODULE_BACK_JAVA,
    MODULE_BACK_MYSQL,
    MODULE_BACK_OTHER,

    MODULE_ARITHMETIC,

    MODULE_AI_COMMON,
    MODULE_ME_COMMON,

    MODULE_RESUME,
    MODULE_SELF_STUDU
} from "./module.mjs"

const customElements = [
	'mjx-container',
    'mjx-assistive-mml',
	'math',
	'maction',
	'maligngroup',
	'malignmark',
	'menclose',
	'merror',
	'mfenced',
	'mfrac',
	'mi',
	'mlongdiv',
	'mmultiscripts',
	'mn',
	'mo',
	'mover',
	'mpadded',
	'mphantom',
	'mroot',
	'mrow',
	'ms',
	'mscarries',
	'mscarry',
	'mscarries',
	'msgroup',
	'mstack',
	'mlongdiv',
	'msline',
	'mstack',
	'mspace',
	'msqrt',
	'msrow',
	'mstack',
	'mstack',
	'mstyle',
	'msub',
	'msup',
	'msubsup',
	'mtable',
	'mtd',
	'mtext',
	'mtr',
	'munder',
	'munderover',
	'semantics',
	'math',
	'mi',
	'mn',
	'mo',
	'ms',
	'mspace',
	'mtext',
	'menclose',
	'merror',
	'mfenced',
	'mfrac',
	'mpadded',
	'mphantom',
	'mroot',
	'mrow',
	'msqrt',
	'mstyle',
	'mmultiscripts',
	'mover',
	'mprescripts',
	'msub',
	'msubsup',
	'msup',
	'munder',
	'munderover',
	'none',
	'maligngroup',
	'malignmark',
	'mtable',
	'mtd',
	'mtr',
	'mlongdiv',
	'mscarries',
	'mscarry',
	'msgroup',
	'msline',
	'msrow',
	'mstack',
	'maction',
	'semantics',
	'annotation',
	'annotation-xml',
];



// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "DIFFFFFFT",
    description: "designer devlopment",
    markdown: {
        config: (md) => {
            md.use(mathjax3)
        }
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElements.includes(tag),
            },
        },
    },
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
        ],
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
            { text: '博客', link: MODULE_ME_COMMON[0].link, activeMatch: '/docs/me/(.*)' },
            { text: '简历', link: MODULE_RESUME[0].link, activeMatch: '/docs/resume/' },
            {
                text: '文档',
                items: [
                    { text: '前端', link: MODULE_FRONT_VUE[0].link, activeMatch: '/docs/front/(.*)' },
                    { text: '后端', link: MODULE_BACK_JAVA[0].link, activeMatch: '/docs/back/(.*)' },
                    { text: '算法', link: MODULE_ARITHMETIC[0].items[0].link, activeMatch: '/docs/arithmetic/(.*)' },
                    { text: '人工智能', link: MODULE_AI_COMMON[0].link, activeMatch: '/docs/ai/(.*)' },
                    { text: '提升', link: MODULE_SELF_STUDU[0].link, activeMatch: '/docs/self-study/(.*)' },
                ],
            },
        ],

        // http://tool.pfan.cn/random
        sidebar: {
            '/docs/me/': {
                items: MODULE_ME_COMMON
            },
            '/docs/arithmetic/': {
                items: MODULE_ARITHMETIC
            },
            '/docs/ai/': {
                items: MODULE_AI_COMMON
            },
            '/docs/front/': {
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
            '/docs/back/': {
                items: [
                    {
                        text: 'Java',
                        collapsed: false,
                        items: MODULE_BACK_JAVA
                    },
                    {
                        text: 'MySql',
                        collapsed: true,
                        items: MODULE_BACK_MYSQL
                    },
                    {
                        text: 'Other',
                        collapsed: true,
                        items: MODULE_BACK_OTHER
                    },
                ]
            },
            '/docs/self-study/': {
                items: MODULE_SELF_STUDU
            }
        },

        socialLinks: [
            { icon: 'twitter', link: 'https://x.com/difffffft' },
            { icon: 'github', link: 'https://github.com/difffffft' },
        ]
    }
})
