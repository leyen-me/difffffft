---
title: "Maven详细安装步骤"
date: "2023-08-21"
categories: 
  - "后端"
---

## 1.下载Maven

```
https://maven.apache.org/
```

## 2.配置环境变量MAVEN\_HOME

```
D:\Maven
```

## 3.配置环境变量Path

```
%MAVEN_HOME%\bin
```

## 4.验证安装

```
mvn -v
```

## 5.修改配置文件

```
<loaclRepository>D:\MavenRepository</localRepository>
```

```
<mirror>
    <id>nexus-aliyun</id>
    <mirrorOf>central</mirrorOf>
    <name>Nexus aliyun</name>
    <url>https://maven.aliyun.com/nexus/content/groups/public</url>
</mirror>
```
