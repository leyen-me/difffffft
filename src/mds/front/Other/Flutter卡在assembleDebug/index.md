---
title: "Flutter第一次运行的时候卡在assembleDebug"
date: "2023-10-14"
categories: 
  - "前端"
---

修改文件

D:\\Flutter\\packages\\flutter\_tools\\gradle\\src\\main\\groovy\\flutter.groovy

```
buildscript {
    repositories {
        // google()
        // mavenCentral()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'https://maven.aliyun.com/repository/public' }
    }
}
```

```
private static final String DEFAULT_MAVEN_HOST = "https://storage.flutter-io.cn";
```

自己项目的android目录中build.gradle也要修改

```
    repositories {
//        google()
//        mavenCentral()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'https://maven.aliyun.com/repository/public' }
    }



allprojects {
    repositories {
//        google()
//        mavenCentral()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'https://maven.aliyun.com/repository/public' }
    }
}
```
