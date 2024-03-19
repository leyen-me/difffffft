import { 摘抄 } from "../../../docs/摘抄";
import { 前端VUE } from "../../../docs/前端";
import { 后端JAVA } from "../../../docs/后端";
import { 其他 } from "../../../docs/其他";

export const nav = [
  { text: "摘抄", link: 摘抄[0].link, activeMatch: "/docs/摘抄/(.*)" },
  { text: "前端", link: 前端VUE[0].link, activeMatch: "/docs/前端/(.*)" },
  { text: "后端", link: 后端JAVA[0].link, activeMatch: "/docs/后端/(.*)"},
  { text: "关于", link: "/docs/关于/", activeMatch: "/docs/关于/(.*)" },
  {
    text: "其他",
    items: [
      {
        text: "算法",
        link: "https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md",
      },
      {
        text: "网站",
        link: "/docs/网站/",
        activeMatch: "/docs/网站/(.*)",
      },
      {
        text: "其他",
        link: 其他[0].link,
        activeMatch: "/docs/其他/(.*)",
      },
    ],
  },
];
