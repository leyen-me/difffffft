## 1.下载Maven

```sh
https://maven.apache.org/
```

## 2.配置环境变量MAVEN\_HOME

```sh
D:\Maven
```

## 3.配置环境变量Path

```sh
%MAVEN_HOME%\bin
```

## 4.验证安装

```sh
mvn -v
```

## 5.修改配置文件

```xml
<loaclRepository>D:\MavenRepository</localRepository>
```

```xml
<mirror>
    <id>nexus-aliyun</id>
    <mirrorOf>central</mirrorOf>
    <name>Nexus aliyun</name>
    <url>https://maven.aliyun.com/nexus/content/groups/public</url>
</mirror>
```
