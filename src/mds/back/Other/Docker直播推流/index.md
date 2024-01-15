1.**创建 bridge 网络并指定 IP 区间**

```sh
#创建自定义网络
docker network create --driver bridge --subnet 172.0.0.0/16 woniu_network
 
#查看已存在网络
docker network ls
```

2.**创建数据目录**

```sh
# 创建数据目录
mkdir -p /home/docker/srs4
```

```sh
# 安装并启动 srs
docker run -p 1935:1935 -p 1985:1985 -p 8080:8080 \
--name srs \
ossrs/srs:v4.0.85
```

**4.复制配置文件**

```sh
# 把容器中的配置文件复制出来
docker cp -a srs:/usr/local/srs/conf /home/docker/srs4/conf
​
# 把容器中的数据文件复制出来
docker cp -a srs:/usr/local/srs/objs /home/docker/srs4/objs
​
# 删除 srs 容器
docker rm -f srs
```

5.**启动 SRS**

```sh
docker run -p 1935:1935 -p 1985:1985 -p 8080:8080 \
--name srs \
--network woniu_network \
--ip 172.0.0.35 \
--restart=always \
-v /home/docker/srs4/conf/:/usr/local/srs/conf/ \
-v /home/docker/srs4/objs/:/usr/local/srs/objs/ \
ossrs/srs:v4.0.85 
```

```sh
# SRS 控制台访问地址
http://服务器 IP 地址:8080
```
