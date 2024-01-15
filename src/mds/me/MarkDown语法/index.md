# MarkDown语法学习

Markdown是一种轻量级标记语言，排版语法简洁，让人们更多地关注内容本身而非排版。它使用易读易写的纯文本格式编写文档，可与HTML混编，可导出 HTML、PDF 以及本身的 .md 格式的文件。因简洁、高效、易读、易写，Markdown被大量使用，如Github、Wikipedia、简书等

## 标题

### 语法

````
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
````

## 段落

### 语法

````
没有固定的语法格式直接写
````

### 预览

没有固定的语法格式直接写

## 换行

### 语法

````
要换行的结尾加两个以上的空格即可
直接写
````

### 预览

要换行的结尾加两个以上的空格即可  
直接写

## 加粗

### 语法

````
__粗体文本__
````

### 预览

__粗体文本__

## 斜体

### 语法

````
*斜体文本*
````

### 预览

*斜体文本*

## 粗斜体文本

### 语法

````
***粗斜体文本***
___粗斜体文本___
````

### 预览

***粗斜体文本***

## 删除线

### 语法

````
~~BAIDU.COM~~
````

### 预览

~~BAIDU.COM~~

## 下划线

### 语法

````
<u>带下划线文本</u>
````

### 预览

<u>带下划线文本</u>

## 分割线

### 语法

````
******
````

### 预览

******
******
******
******

## 有序列表

### 语法

````
1. 第一项
2. 第二项
3. 第三项
````

### 预览

1. 第一项
2. 第二项
3. 第三项


## 无序列表

### 语法

````
- 第一项
- 第二项
- 第三项

+ 第一项
+ 第二项
+ 第三项

* 第一项
* 第二项
* 第三项
````

### 预览

- 第一项
+ 第二项
* 第三项

## 引用

### 语法

````
> 最外层
> > 第一层嵌套
> > > 第二层嵌套
````

### 预览

> 最外层
> > 第一层嵌套
> > > 第二层嵌套

## 代码

### 语法

````
```js
$(document).ready(function () {
    alert('hello world');
});
```
````

### 预览

```js
$(document).ready(function () {
    alert('hello world');
});
```

## 链接

### 语法

````
这是一个链接 [百度](https://www.baidu.com)
````

### 预览

这是一个链接 [百度](https://www.baidu.com)


## 图片

### 语法

````
![alt 属性文本](图片地址 "可选标题")
````

### 预览

![alt 属性文本](https://gd-hbimg.huaban.com/2e105a41add87e1248fd214a28377304e4e1a0f94324e-cktSG2_fw1200webp "某APP")

## 表格

### 语法

````
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |
````

### 预览

| 表头   | 表头   | 表头   |
| ------ | ------ | ------ |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |


## 表格对齐

### 语法

````
| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
````

### 预览

| 左对齐 | 右对齐 | 居中对齐 |
| :----- | -----: | :------: |
| 单元格 | 单元格 |  单元格  |
| 单元   |   单元 |  单元格  |


## Emoji

### 语法

````
:tada: :100:
````

### 预览

:tada: :100:

### 注意

这里可以找到所有支持的[emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)列表


## 自定义容器

### 语法

````
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details 点我查看代码
This is a details block.
:::
````

### 预览

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details 点我查看代码
This is a details block.
:::



## 代码块行高亮

### 语法

````
```js{4-5,7}
export default {
  data () {
    return {
      msg: 'Highlighted!',
      msg2: 'Highlighted!'
    }
  }
}
```
````

### 预览
```js{4-5,7}
export default {
  data () {
    return {
      msg: 'Highlighted!',
      msg2: 'Highlighted!'
    }
  }
}
```

## 代码块行号

### 语法

````
```ts:line-numbers {1}
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```
````

### 预览

```ts:line-numbers {1}
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

## 代码组

### 语法

````
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::
````

### 预览

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::