---
title: "CodeServer"
date: "2023-03-22"
categories: 
  - "前端"
---

### 1.购买服务器（Ubuntu v20）

```
apt update
apt upgrade
```

### 2.安装Docker

```
https://www.cnblogs.com/unixcs/p/13114531.html
```

### 3.设置开机自启

```
systemctl enable docker
```

### 4.部署CodeServer

```
docker run -d \
  --name=code-server \
  -e PUID=0 \
  -e PGID=0 \
  -e TZ=Asia/Shanghai \
  -e PASSWORD=password \
  -e DEFAULT_WORKSPACE=/config/workspace \
  -p 8443:8443 \
  -p 9001:9001 \
  -p 9002:9002 \
  -p 9003:9003 \
  -p 9004:9004 \
  -p 9005:9005 \
  -v /root/config:/config \
  --restart unless-stopped \
  lscr.io/linuxserver/code-server:latest
```

## 5.安装NodeJs和Npm

```
sudo apt update
sudo apt install nodejs npm

nodejs --version

#更新到最新版本
npm i -g n
n latest
npm i -g npm

npm config set registry https://registry.npm.taobao.org
```

## 6.安装Python

```
apt install python3 -y

apt install python3-pip -y

pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

## 7.安装Anaconda

下载Conda安装包

[清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/)

运行命令

```
bash Anaconda3-2020.07-Linux-x86_64.sh
1.回车键，进入注册信息页面
2.按q跳过阅读，yes
3.默认安装在用户目录下，直接回车即可安装；若想自定义安装目录，直接输入安装目录，回车即可。
4.Do you wish the installer to initialize Anaconda3 by running conda init ? 输入 no，回车
5.看到下面的提示信息说明安装完成
```

```
vim ~/.bashrc
export PATH="/home/ssj/anaconda3/bin:$PATH"
source ~/.bashrc
```

检验

```
conda --version
```
