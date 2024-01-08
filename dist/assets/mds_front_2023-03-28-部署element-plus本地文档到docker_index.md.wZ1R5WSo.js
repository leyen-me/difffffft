import{_ as n,o as s,c as e,R as a}from"./chunks/framework.lUyD4Cud.js";const h=JSON.parse('{"title":"用Docker部署Element-Plus文档","description":"","frontmatter":{"title":"用Docker部署Element-Plus文档","date":"2023-03-28","categories":["前端"]},"headers":[],"relativePath":"mds/front/2023-03-28-部署element-plus本地文档到docker/index.md","filePath":"mds/front/2023-03-28-部署element-plus本地文档到docker/index.md","lastUpdated":1704444471000}'),p={name:"mds/front/2023-03-28-部署element-plus本地文档到docker/index.md"},l=a(`<p>用Docker部署Element-Plus文档</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mkdir -p /root/element-plus-doc/conf</span></span>
<span class="line"><span>mkdir -p /root/element-plus-doc/log</span></span>
<span class="line"><span>mkdir -p /root/element-plus-doc/html</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker run --name element-plus-doc -p 9006:80 -d nginx</span></span>
<span class="line"><span>docker cp element-plus-doc:/etc/nginx/nginx.conf /root/element-plus-doc/conf/nginx.conf</span></span>
<span class="line"><span>docker cp element-plus-doc:/etc/nginx/conf.d /root/element-plus-doc/conf/conf.d</span></span>
<span class="line"><span>docker cp element-plus-doc:/usr/share/nginx/html /root/element-plus-doc/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker ps -a</span></span>
<span class="line"><span>docker stop element-plus-doc</span></span>
<span class="line"><span>docker rm -f element-plus-doc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker run \\</span></span>
<span class="line"><span>-p 9006:80 \\</span></span>
<span class="line"><span>--name element-plus-doc \\</span></span>
<span class="line"><span>-v /root/element-plus-doc/conf/nginx.conf:/etc/nginx/nginx.conf \\</span></span>
<span class="line"><span>-v /root/element-plus-doc/conf/conf.d:/etc/nginx/conf.d \\</span></span>
<span class="line"><span>-v /root/element-plus-doc/log:/var/log/nginx \\</span></span>
<span class="line"><span>-v /root/element-plus-doc/html:/usr/share/nginx/html \\</span></span>
<span class="line"><span>-d nginx:latest</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git clone https://github.com/element-plus/element-plus.git -b gh-pages</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>firewall-cmd --zone=public --add-port=9006/tcp --permanent</span></span>
<span class="line"><span>systemctl restart firewalld</span></span></code></pre></div>`,4),t=[l];function c(o,i,d,r,m,u){return s(),e("div",null,t)}const k=n(p,[["render",c]]);export{h as __pageData,k as default};
