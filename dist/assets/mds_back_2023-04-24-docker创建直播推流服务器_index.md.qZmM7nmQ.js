import{_ as s,c as a,o as n,R as p}from"./chunks/framework.43nt70q0.js";const u=JSON.parse('{"title":"Docker创建直播推流服务器","description":"","frontmatter":{"title":"Docker创建直播推流服务器","date":"2023-04-24","categories":["后端"]},"headers":[],"relativePath":"mds/back/2023-04-24-docker创建直播推流服务器/index.md","filePath":"mds/back/2023-04-24-docker创建直播推流服务器/index.md","lastUpdated":1704444471000}'),e={name:"mds/back/2023-04-24-docker创建直播推流服务器/index.md"},t=p(`<p>1.<strong>创建 bridge 网络并指定 IP 区间</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#创建自定义网络</span></span>
<span class="line"><span>docker network create --driver bridge --subnet 172.0.0.0/16 woniu_network</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>#查看已存在网络</span></span>
<span class="line"><span>docker network ls</span></span></code></pre></div><p>2.<strong>创建数据目录</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 创建数据目录</span></span>
<span class="line"><span>mkdir -p /home/docker/srs4</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 安装并启动 srs</span></span>
<span class="line"><span>docker run -p 1935:1935 -p 1985:1985 -p 8080:8080 \\</span></span>
<span class="line"><span>--name srs \\</span></span>
<span class="line"><span>ossrs/srs:v4.0.85</span></span></code></pre></div><p><strong>4.复制配置文件</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 把容器中的配置文件复制出来</span></span>
<span class="line"><span>docker cp -a srs:/usr/local/srs/conf /home/docker/srs4/conf</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span># 把容器中的数据文件复制出来</span></span>
<span class="line"><span>docker cp -a srs:/usr/local/srs/objs /home/docker/srs4/objs</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span># 删除 srs 容器</span></span>
<span class="line"><span>docker rm -f srs</span></span></code></pre></div><p>5.<strong>启动 SRS</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker run -p 1935:1935 -p 1985:1985 -p 8080:8080 \\</span></span>
<span class="line"><span>--name srs \\</span></span>
<span class="line"><span>--network woniu_network \\</span></span>
<span class="line"><span>--ip 172.0.0.35 \\</span></span>
<span class="line"><span>--restart=always \\</span></span>
<span class="line"><span>-v /home/docker/srs4/conf/:/usr/local/srs/conf/ \\</span></span>
<span class="line"><span>-v /home/docker/srs4/objs/:/usr/local/srs/objs/ \\</span></span>
<span class="line"><span>ossrs/srs:v4.0.85</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># SRS 控制台访问地址</span></span>
<span class="line"><span>http://服务器 IP 地址:8080</span></span></code></pre></div>`,10),c=[t];function l(o,i,r,d,h,g){return n(),a("div",null,c)}const v=s(e,[["render",l]]);export{u as __pageData,v as default};
