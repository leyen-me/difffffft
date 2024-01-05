---
title: "NodeJS版本过高导致的OpenSSL3.0报错"
date: "2023-07-14"
categories: 
  - "前端"
---

## 解决方法

```
"scripts": {
   "serve": "SET NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve",
   "build": "SET NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service build"
},
```
