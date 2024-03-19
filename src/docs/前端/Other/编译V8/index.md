---
title: "编译v8"
date: "2023-07-15"
categories: 
  - "前端"
---

## 环境

- 科学上网工具

- Visual Studio 2022 使用C++的桌面开发

- Windows SDK（开启Debug）

- depot工具

## 环境变量配置

```
Path新增：C:\src\depot_tools (确保Python和Git是depot_tools里面的)

vs2022_install ：C:\Program Files\Microsoft Visual Studio\2022\Enterprise

DEPOT_TOOLS_WIN_TOOLCHAIN ：0

GYP_MSVS_VERSION : 2022
```

## 打开控制台以管理员方式运行

```
cd C:/src/v8

set http_proxy=http://127.0.0.1:15732 && set https_proxy=http://127.0.0.1:15732
```

## 更新依赖

```
gclient sync
```

## 获取最新的代码

```
fetch v8
git pull origin
```

## 官方编译

```
cd C:\src\v8
python C:\src\v8\tools\dev\gm.py x86.release.check
```

## 自行编译

```
gn gen --ide=vs out/x64.release --args="is_debug=false is_component_build=true"
ninja -C out/x64.release -j 8
```

## 测试

```
C:\src\v8\tools\dev\out\x64.release
d8 hello.js
```

```
consolo.log("Hello World!")
```
