import{_ as s,o as n,c as a,R as p}from"./chunks/framework.lUyD4Cud.js";const v=JSON.parse('{"title":"前端Dockerfile部署","description":"","frontmatter":{"title":"前端Dockerfile部署","date":"2023-03-30","categories":["前端"]},"headers":[],"relativePath":"mds/front/2023-03-30-前端dockerfile部署/index.md","filePath":"mds/front/2023-03-30-前端dockerfile部署/index.md","lastUpdated":1704444471000}'),e={name:"mds/front/2023-03-30-前端dockerfile部署/index.md"},l=p(`<p>1.首先你得有台windows电脑，windows版本最好是11以上</p><p>2.安装docker</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>https://docs.docker.com/desktop/install/windows-install/</span></span></code></pre></div><p>3.要运行WSL,必须装一个内核</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>https://learn.microsoft.com/zh-cn/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package</span></span></code></pre></div><p>4.利用WSL安装一个Ubuntu，在windows命令行直接输入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>wsl --install -d Ubuntu</span></span></code></pre></div><p>5.更新和重启</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>wsl --update</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>wsl --shutdown</span></span></code></pre></div><p>6.在VsCode搜索插件并安装上</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Docker</span></span>
<span class="line"><span>WSL</span></span></code></pre></div><p>7.打开wsl终端，你就可以访问linux</p><p>8.前端项目打包生成dist文件夹</p><p>9.项目根路径下编写Dockefile</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>FROM nginx</span></span>
<span class="line"><span>ENV TimeZone=Asia/Shanghai    </span></span>
<span class="line"><span>COPY ./dist/ /usr/share/nginx/html/</span></span>
<span class="line"><span>COPY ./nginx/nginx.conf /etc/nginx/nginx.conf</span></span>
<span class="line"><span>EXPOSE 80</span></span></code></pre></div><p>10.nginx配置文件的编写，在项目根目录下创建nginx文件夹，目录和文件结构如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>--nginx</span></span>
<span class="line"><span>    --conf.d</span></span>
<span class="line"><span>        --default.conf</span></span>
<span class="line"><span>    --nginx.conf</span></span>
<span class="line"><span>--Dockerfile</span></span>
<span class="line"><span>--dist</span></span>
<span class="line"><span>    --index.html</span></span></code></pre></div><p>11.在nginx.conf中写入以下内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>user  nginx;</span></span>
<span class="line"><span>worker_processes  auto;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>error_log  /var/log/nginx/error.log notice;</span></span>
<span class="line"><span>pid        /var/run/nginx.pid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    worker_connections  1024;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    include       /etc/nginx/mime.types;</span></span>
<span class="line"><span>    default_type  application/octet-stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span>                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span>                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    access_log  /var/log/nginx/access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span>    #tcp_nopush     on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    keepalive_timeout  65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #gzip  on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    include /etc/nginx/conf.d/*.conf;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>12.在default.conf写入以下内容，注意配置vue是hash路由还是history路由，参考vue-router官方配置<a href="https://router.vuejs.org/zh/guide/essentials/history-mode.html" target="_blank" rel="noreferrer">https://router.vuejs.org/zh/guide/essentials/history-mode.html</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen       80;</span></span>
<span class="line"><span>    listen  [::]:80;</span></span>
<span class="line"><span>    server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #access_log  /var/log/nginx/host.access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        root   /usr/share/nginx/html;</span></span>
<span class="line"><span>        index  index.html index.htm;</span></span>
<span class="line"><span>        try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #error_page  404              /404.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span>    error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>    location = /50x.html {</span></span>
<span class="line"><span>        root   /usr/share/nginx/html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span>    #location ~ \\.php$ {</span></span>
<span class="line"><span>    #    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span>    #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span>    #location ~ \\.php$ {</span></span>
<span class="line"><span>    #    root           html;</span></span>
<span class="line"><span>    #    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span>    #    fastcgi_index  index.php;</span></span>
<span class="line"><span>    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span>    #    include        fastcgi_params;</span></span>
<span class="line"><span>    #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span>    # concurs with nginx&#39;s one</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span>    #location ~ /\\.ht {</span></span>
<span class="line"><span>    #    deny  all;</span></span>
<span class="line"><span>    #}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>13.打包成镜像文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker build -t 镜像名称:镜像版本 .</span></span></code></pre></div><p>14.本地测试一下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker run -p 服务器端口:80 -idt 镜像名称:镜像版本</span></span></code></pre></div><p>15.将镜像打包成文件上传到服务器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker save 镜像名称:镜像版本 &gt; ./xxx.tar</span></span></code></pre></div><p>16.拷贝到线上之后，复制到docker镜像中</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker load &lt; xxx.tar</span></span></code></pre></div><p>17.复制完成之后，你可以看到你的镜像，直接运行即可</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker run -p 服务器端口:80 -idt 镜像名称:镜像版本</span></span></code></pre></div><p>18.端口记得添加防火墙，公网才可以访问</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>firewall-cmd --zone=public --add-port=端口/tcp --permanent</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>systemctl restart firewalld</span></span></code></pre></div>`,35),i=[l];function t(c,o,d,r,h,g){return n(),a("div",null,i)}const m=s(e,[["render",t]]);export{v as __pageData,m as default};
