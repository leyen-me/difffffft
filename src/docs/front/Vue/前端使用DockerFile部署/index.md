1.首先你得有台windows电脑，windows版本最好是11以上

2.安装docker

```sh
https://docs.docker.com/desktop/install/windows-install/
```

3.要运行WSL,必须装一个内核

```sh
https://learn.microsoft.com/zh-cn/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package
```

4.利用WSL安装一个Ubuntu，在windows命令行直接输入

```sh
wsl --install -d Ubuntu
```

5.更新和重启

```sh
wsl --update
```

```sh
wsl --shutdown
```

6.在VsCode搜索插件并安装上

```sh
Docker
WSL
```

7.打开wsl终端，你就可以访问linux

8.前端项目打包生成dist文件夹

9.项目根路径下编写Dockefile

```sh
FROM nginx
ENV TimeZone=Asia/Shanghai    
COPY ./dist/ /usr/share/nginx/html/
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
```

10.nginx配置文件的编写，在项目根目录下创建nginx文件夹，目录和文件结构如下

```sh
--nginx
    --conf.d
        --default.conf
    --nginx.conf
--Dockerfile
--dist
    --index.html
```

11.在nginx.conf中写入以下内容

```sh
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}
```

12.在default.conf写入以下内容，注意配置vue是hash路由还是history路由，参考vue-router官方配置[https://router.vuejs.org/zh/guide/essentials/history-mode.html](https://router.vuejs.org/zh/guide/essentials/history-mode.html)

```sh
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;

    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
```

13.打包成镜像文件

```sh
docker build -t 镜像名称:镜像版本 .
```

14.本地测试一下

```sh
docker run -p 服务器端口:80 -idt 镜像名称:镜像版本
```

15.将镜像打包成文件上传到服务器

```sh
docker save 镜像名称:镜像版本 > ./xxx.tar
```

16.拷贝到线上之后，复制到docker镜像中

```sh
docker load < xxx.tar
```

17.复制完成之后，你可以看到你的镜像，直接运行即可

```sh
docker run -p 服务器端口:80 -idt 镜像名称:镜像版本
```

18.端口记得添加防火墙，公网才可以访问

```sh
firewall-cmd --zone=public --add-port=端口/tcp --permanent
```

```sh
systemctl restart firewalld
```
