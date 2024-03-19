## 设计理念

Tailwind 设计理念：只需书写 HTML 代码，无需书写 CSS，即可快速构建美观的网站。

Tailwind 具有完整的响应式

Tailwind 拥有精美的网站模板，和强大的组件库


## 入门

### 创建 Vue 项目

```sh
pnpm create vite
```

### 安装依赖

```sh
pnpm i -D tailwindcss postcss autoprefixer
```

### 生成配置文件

```sh
# postcss.config.js
# tailwind.config.js
npx tailwindcss init -p
```

### 配置文件更新

```js{4}
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 初始化 CSS

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 组件测试

```html
<div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="https://v2.tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face">
    <div class="text-center space-y-2 sm:text-left">
      <div class="space-y-0.5">
        <p class="text-lg text-black font-semibold">
          Erin Lindford
        </p>
        <p class="text-gray-500 font-medium">
          Product Engineer
        </p>
      </div>
      <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
    </div>
</div>
```

### 效果图

![alt 属性文本](./images/1.png)

![alt 属性文本](./images/2.png)