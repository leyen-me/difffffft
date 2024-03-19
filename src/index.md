---
layout: home

hero:
  name: "DIFFFFFFT"
  text: "Web Developer"
  tagline: "东风夜放花千树，更吹落、星如雨。"
  actions:
    - theme: brand
      text: Aboue Me
      link: /docs/关于/
    - theme: alt
      text: View on Github
      link: https://github.com/difffffft
  image:
    src: /images/logo-with-shadow.png

features:
  - title: Flask-Starter
    details: 基于Python和Flask搭建的后端服务脚手架，和Flask-Vue-Starter配套使用
    link: https://github.com/difffffft/flask-starter
    icon: 💡
  - title: Flask-Vue-Starter
    details: 基于Vue3和Element-Plus建的前端基础脚手架，和Flask-Starter配套使用
    link: https://github.com/difffffft/flask-vue-starter
    icon: ⚡️
  - title: Search
    details: 一个快捷搜索网站
    link: https://github.com/difffffft/search
    icon: 📦
  - title: Chat-Server
    details: 基于OpenAi的SDK构建的聊天机器人，可以自定义函数，和Chat-Client配套使用
    link: https://github.com/difffffft/chat-server
    icon: 🔩
  - title: Chat-Client
    details: 基于Vue3和Element-Plus建的聊天机器人，和Chat-Server配套使用
    link: https://github.com/difffffft/chat-client
    icon: 🔑
  - title: OpenAi-Proxy
    details: OpenAi反向代理工具
    link: https://github.com/difffffft/openai-proxy
    icon: 👍
  - title: Threejs-Sokoban
    details: 基于Three制作的3D版推箱子
    link: https://github.com/difffffft/threejs-sokoban
    icon: 😂
---

<script setup>
import { onMounted, onUnmounted } from "vue";

let timer = null;

function fetchTagline() {
  fetch("https://v1.jinrishici.com/all.txt")
    .then((response) => {
      if (!response.ok) {
        throw new Error("网络请求失败");
      }
      return response.text();
    })
    .then((data) => {
      let tagline = document.querySelector(".tagline");
      if (tagline) {
        tagline.innerText = data;
      }
    })
    .catch((error) => {
      console.error("发生错误:", error);
    });
}

onMounted(() => {
  timer = setInterval(fetchTagline, 3000);
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>
