---
title: "OnlyOffice源码编译"
date: "2023-09-22"
categories: 
  - "后端"
---

拥有一个绝佳的网络环境来编译源码是非常重要的，网络能决定编译的99%的问题，第二你需要一个Ubuntu的操作系统。我的编译系统版本为18(官方推荐16.04，其实18也行)，其次你需要在系统上安装最基础的编译环境Python和Git。

[Compiling ONLYOFFICE Docs for a local server - ONLYOFFICE](https://helpcenter.onlyoffice.com/installation/docs-community-compile.aspx)

这里的服务器，我推荐使用狗云。

Python用于编译步骤，Git用于下载源码，其中包括了Onlyoffice的源码和GoogleV8的源码。

## 环境准备

```
sudo apt-get update
sudo apt-get upgrade
```

```
sudo apt install -y nodejs
npm i -g grunt-cli
npm i -g pkg

sudo apt install -y openjdk-11-jdk
```

```
sudo apt-get install -y python git
```

```
git clone https://github.com/ONLYOFFICE/build_tools.git
```

```
cd build_tools/tools/linux
```

```
./automate.py server
```

编译时间过长，我建议开一个后台终端来运行

build.sh

```
cd build_tools/tools/linux

./automate.py server
```

```
chmod +x build.sh
sudo nohup ./build.sh &
```

编译完成之后，我们需要对Onlyoffice做功能新增的方案。

如下：

突破20个人同时编辑。

一般一个文档，不能让很多人同时编辑，这会对浏览器的性能造成各种影响。

## 1.修改20人同时编辑功能

```
/server/Common/sources/constants.js

exports.LICENSE_CONNECTIONS = 20;#将此处修改你想要的连接数
```

```
/root/build_tools/tools/linux/automate.pybuild_tools_params = ["--branch", branch,
                     "--module", modules,
                     "--update", "0", #此处修改为0，否则会覆盖你修改的文件
                     "--qt-dir", os.getcwd() + "/qt_build/Qt-5.9.9"]
```

## 部署运行

安装NGINX, PostgreSQL,RabbitMQ

```
sudo apt-get install -y nginx
```

```
sudo rm -f /etc/nginx/sites-enabled/default
```

新建文件，输入内容

```
touch /etc/nginx/sites-available/onlyoffice-documentserver
```

```
map $http_host $this_host {
  "" $host;
  default $http_host;
}
map $http_x_forwarded_proto $the_scheme {
  default $http_x_forwarded_proto;
  "" $scheme;
}
map $http_x_forwarded_host $the_host {
  default $http_x_forwarded_host;
  "" $this_host;
}
map $http_upgrade $proxy_connection {
  default upgrade;
  "" close;
}
proxy_set_header Host $http_host;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection $proxy_connection;
proxy_set_header X-Forwarded-Host $the_host;
proxy_set_header X-Forwarded-Proto $the_scheme;
server {
  listen 0.0.0.0:80;
  listen [::]:80 default_server;
  server_tokens off;
  rewrite ^\/OfficeWeb(\/apps\/.*)$ /web-apps$1 redirect;
  location / {
    proxy_pass http://localhost:8000;
    proxy_http_version 1.1;
  }  
}
```

创建软链接

```
sudo ln -s /etc/nginx/sites-available/onlyoffice-documentserver /etc/nginx/sites-enabled/onlyoffice-documentserver
```

重启Nginx

```
sudo nginx -s reload
```

安装数据库

```
sudo apt-get install -y postgresql
```

```
sudo -i -u postgres psql -c "CREATE DATABASE onlyoffice;"
sudo -i -u postgres psql -c "CREATE USER onlyoffice WITH password 'onlyoffice';"
sudo -i -u postgres psql -c "GRANT ALL privileges ON DATABASE onlyoffice TO onlyoffice;"
```

```
psql -hlocalhost -Uonlyoffice -d onlyoffice -f ../../out/linux_64/onlyoffice/documentserver/server/schema/postgresql/createdb.sql
```

安装RabbitMQ

```
sudo apt-get install -y rabbitmq-server
```

```
cd out/linux_64/onlyoffice/documentserver/
```

```
mkdir fonts
```

```
LD_LIBRARY_PATH=${PWD}/server/FileConverter/bin server/tools/allfontsgen \
  --input="${PWD}/core-fonts" \
  --allfonts-web="${PWD}/sdkjs/common/AllFonts.js" \
  --allfonts="${PWD}/server/FileConverter/bin/AllFonts.js" \
  --images="${PWD}/sdkjs/common/Images" \
  --selection="${PWD}/server/FileConverter/bin/font_selection.bin" \
  --output-web='fonts' \
  --use-system="true"
```

```
cd out/linux_64/onlyoffice/documentserver/
```

```
LD_LIBRARY_PATH=${PWD}/server/FileConverter/bin server/tools/allthemesgen \
  --converter-dir="${PWD}/server/FileConverter/bin"\
  --src="${PWD}/sdkjs/slide/themes"\
  --output="${PWD}/sdkjs/common/Images"
```

## 运行

```
cd out/linux_64/onlyoffice/documentserver/server/FileConverter

LD_LIBRARY_PATH=$PWD/bin NODE_ENV=development-linux NODE_CONFIG_DIR=$PWD/../Common/config ./converter
```

```
cd out/linux_64/onlyoffice/documentserver/server/DocService

NODE_ENV=development-linux NODE_CONFIG_DIR=$PWD/../Common/config ./docservice
```
