import { defineConfig } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";

import { nav } from "./constans/modules/nav.mjs"
import { sidebar } from "./constans/modules/sidebar.mjs"
import { customElements } from "./constans/modules/customElements.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DIFFFFFFT",
  description: "designer devlopment",
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
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
      "link",
      {
        href: "/css/font.css",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "/css/common.css",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "/images/logo-with-shadow.png",
        type: "image/png",
        rel: "icon",
      },
    ],
  ],
  outDir: "../dist",
  appearance: "dark",
  sitemap: {
    hostname: "http://difffffft.com",
  },

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    prev: "false",
    next: "false",
    logo: "/svgs/logo.svg",
    editLink: {
      pattern: "https://github.com/difffffft/difffffft/edit/master/docs/:path",
    },
    lastUpdated: true,
    search: {
      provider: "local",
    },
    footer: {
      message:
        '<a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2021033158号</a>',
      copyright:
        '友情链接: <a href="https://liangnianban.com/" target="_blank">XueYa</a> <a href="https://beaumon.github.io/" target="_blank">Beaumon</a>',
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    outlineTitle: "本篇",
    lastUpdatedText: "最后更新",
    nav,
    sidebar,
    socialLinks: [
      { icon: "twitter", link: "https://x.com/difffffft" },
      { icon: "github", link: "https://github.com/difffffft" },
    ],
  },
});
