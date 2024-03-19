---
title: "OpenaiProxy代理转发"
date: "2023-12-07"
categories: 
  - "后端"
---

在国内你要访问openai的接口，你是访问不了的。

为了给自己或者公司提供openai的服务，就需要做一些代理转发的功能。

以前通常是使用nginx作为代理转发，但是nginx是反向代理，服务器配置也难配，要配置流，要配置SSL证书，贼麻烦。

自己是前端开发，突然到Vite具有转发的功能，devServer。我就在想devServer能不能行呢。没想到居然很完美。很完美。

以后我就可以用这种方式代理**_所有_**国外的接口。

## 1.国外的服务器

需要一个国外的服务器，香港啥的都行

## 2.创建一个Vite项目（前端经验）

创建一个Vite项目，配置devServer

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        host: "0.0.0.0",
        port: 80,
        proxy: {
            '/v1': {
                target: 'https://api.openai.com/v1',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/v1/, ''),
            }
        }
    },
})
```

## 3.访问你自己的80端口就行了，当然端口可以修改。

我没有测试过Vite代理转发的性能怎么样。如果遇到性能瓶颈可以多开几个做集群部署，然后使用Nginx作为网关，负载均衡就行了。

最后我想说一句尤雨溪，YYDS！

## 4.镜像

当然我也做好了镜像，你直接在你的服务器上安装docker，然后使用docker运行以下命令

```
docker run -dit --restart=always --name openai-proxy -p 9008:80 difffffft/openai-proxy:latest
```

```
client = OpenAI(api_key=CONFIG['APP']['OPENAI']['KEY'], base_url='http://xxx.xxx.xxx.xx:9008/v1')
```

## 5.开源

感谢大佬们来个star，说实话没啥技术含量，但是思路很清奇，哈哈。

[difffffft/openai-proxy: openai-proxy (github.com)](https://github.com/difffffft/openai-proxy)
