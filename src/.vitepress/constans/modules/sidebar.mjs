import { 摘抄 } from "../../../docs/摘抄";
import {
  前端VUE,
  前端REACT,
  前端THREE,
  前端面试,
  前端其他,
} from "../../../docs/前端";
import { 后端JAVA, 后端MYSQL, 后端其他 } from "../../../docs/后端";
import { 其他 } from "../../../docs/其他";

export const sidebar = {
  "/docs/摘抄/": {
    items: 摘抄,
  },
  "/docs/前端/": {
    items: [
      {
        text: "Vue",
        items: 前端VUE,
      },
      {
        text: "React",
        items: 前端REACT,
      },
      {
        text: "ThreeJs",
        items: 前端THREE,
      },
      {
        text: "面试",
        items: 前端面试,
      },
      {
        text: "Other",
        items: 前端其他,
      },
    ],
  },
  "/docs/后端/": {
    items: [
      {
        text: "Java",
        items: 后端JAVA,
      },
      {
        text: "MySql",
        items: 后端MYSQL,
      },
      {
        text: "Other",
        items: 后端其他,
      },
    ],
  },
  "/docs/其他/": {
    items: 其他,
  },
};
