---
title: "Linux常用操作"
date: "2023-09-26"
categories: 
  - "后端"
---

下载文件到本地

```
scp root@xx.xx.xx.xx:/root/xxx.tar.gz C:\
```

以后台方式运行终端

```
chmod +x build.sh
sudo nohup ./build.sh &
```

应用自启

```
systemctl enable docker
```
