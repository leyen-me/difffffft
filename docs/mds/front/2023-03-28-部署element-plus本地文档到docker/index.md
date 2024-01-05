---
title: "用Docker部署Element-Plus文档"
date: "2023-03-28"
categories: 
  - "前端"
---

用Docker部署Element-Plus文档

```
mkdir -p /root/element-plus-doc/conf
mkdir -p /root/element-plus-doc/log
mkdir -p /root/element-plus-doc/html

docker run --name element-plus-doc -p 9006:80 -d nginx
docker cp element-plus-doc:/etc/nginx/nginx.conf /root/element-plus-doc/conf/nginx.conf
docker cp element-plus-doc:/etc/nginx/conf.d /root/element-plus-doc/conf/conf.d
docker cp element-plus-doc:/usr/share/nginx/html /root/element-plus-doc/

docker ps -a
docker stop element-plus-doc
docker rm -f element-plus-doc

docker run \
-p 9006:80 \
--name element-plus-doc \
-v /root/element-plus-doc/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /root/element-plus-doc/conf/conf.d:/etc/nginx/conf.d \
-v /root/element-plus-doc/log:/var/log/nginx \
-v /root/element-plus-doc/html:/usr/share/nginx/html \
-d nginx:latest
```

```
git clone https://github.com/element-plus/element-plus.git -b gh-pages
```

```
firewall-cmd --zone=public --add-port=9006/tcp --permanent
systemctl restart firewalld
```
