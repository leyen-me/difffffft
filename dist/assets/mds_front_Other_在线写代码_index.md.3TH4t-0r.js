import{_ as a,c as s,o as n,U as p}from"./chunks/framework.hWf9kaa6.js";const v=JSON.parse('{"title":"CodeServer","description":"","frontmatter":{"title":"CodeServer","date":"2023-03-22","categories":["前端"]},"headers":[],"relativePath":"mds/front/Other/在线写代码/index.md","filePath":"mds/front/Other/在线写代码/index.md","lastUpdated":1704782344000}'),e={name:"mds/front/Other/在线写代码/index.md"},t=p(`<h3 id="_1-购买服务器-ubuntu-v20" tabindex="-1">1.购买服务器（Ubuntu v20） <a class="header-anchor" href="#_1-购买服务器-ubuntu-v20" aria-label="Permalink to &quot;1.购买服务器（Ubuntu v20）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>apt update</span></span>
<span class="line"><span>apt upgrade</span></span></code></pre></div><h3 id="_2-安装docker" tabindex="-1">2.安装Docker <a class="header-anchor" href="#_2-安装docker" aria-label="Permalink to &quot;2.安装Docker&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>https://www.cnblogs.com/unixcs/p/13114531.html</span></span></code></pre></div><h3 id="_3-设置开机自启" tabindex="-1">3.设置开机自启 <a class="header-anchor" href="#_3-设置开机自启" aria-label="Permalink to &quot;3.设置开机自启&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>systemctl enable docker</span></span></code></pre></div><h3 id="_4-部署codeserver" tabindex="-1">4.部署CodeServer <a class="header-anchor" href="#_4-部署codeserver" aria-label="Permalink to &quot;4.部署CodeServer&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>  --name=code-server \\</span></span>
<span class="line"><span>  -e PUID=0 \\</span></span>
<span class="line"><span>  -e PGID=0 \\</span></span>
<span class="line"><span>  -e TZ=Asia/Shanghai \\</span></span>
<span class="line"><span>  -e PASSWORD=password \\</span></span>
<span class="line"><span>  -e DEFAULT_WORKSPACE=/config/workspace \\</span></span>
<span class="line"><span>  -p 8443:8443 \\</span></span>
<span class="line"><span>  -p 9001:9001 \\</span></span>
<span class="line"><span>  -p 9002:9002 \\</span></span>
<span class="line"><span>  -p 9003:9003 \\</span></span>
<span class="line"><span>  -p 9004:9004 \\</span></span>
<span class="line"><span>  -p 9005:9005 \\</span></span>
<span class="line"><span>  -v /root/config:/config \\</span></span>
<span class="line"><span>  --restart unless-stopped \\</span></span>
<span class="line"><span>  lscr.io/linuxserver/code-server:latest</span></span></code></pre></div><h2 id="_5-安装nodejs和npm" tabindex="-1">5.安装NodeJs和Npm <a class="header-anchor" href="#_5-安装nodejs和npm" aria-label="Permalink to &quot;5.安装NodeJs和Npm&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo apt update</span></span>
<span class="line"><span>sudo apt install nodejs npm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nodejs --version</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#更新到最新版本</span></span>
<span class="line"><span>npm i -g n</span></span>
<span class="line"><span>n latest</span></span>
<span class="line"><span>npm i -g npm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm config set registry https://registry.npm.taobao.org</span></span></code></pre></div><h2 id="_6-安装python" tabindex="-1">6.安装Python <a class="header-anchor" href="#_6-安装python" aria-label="Permalink to &quot;6.安装Python&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>apt install python3 -y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>apt install python3-pip -y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple</span></span></code></pre></div><h2 id="_7-安装anaconda" tabindex="-1">7.安装Anaconda <a class="header-anchor" href="#_7-安装anaconda" aria-label="Permalink to &quot;7.安装Anaconda&quot;">​</a></h2><p>下载Conda安装包</p><p><a href="https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/" target="_blank" rel="noreferrer">清华大学开源软件镜像站</a></p><p>运行命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>bash Anaconda3-2020.07-Linux-x86_64.sh</span></span>
<span class="line"><span>1.回车键，进入注册信息页面</span></span>
<span class="line"><span>2.按q跳过阅读，yes</span></span>
<span class="line"><span>3.默认安装在用户目录下，直接回车即可安装；若想自定义安装目录，直接输入安装目录，回车即可。</span></span>
<span class="line"><span>4.Do you wish the installer to initialize Anaconda3 by running conda init ? 输入 no，回车</span></span>
<span class="line"><span>5.看到下面的提示信息说明安装完成</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vim ~/.bashrc</span></span>
<span class="line"><span>export PATH=&quot;/home/ssj/anaconda3/bin:$PATH&quot;</span></span>
<span class="line"><span>source ~/.bashrc</span></span></code></pre></div><p>检验</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>conda --version</span></span></code></pre></div>`,20),i=[t];function l(o,c,d,r,h,u){return n(),s("div",null,i)}const b=a(e,[["render",l]]);export{v as __pageData,b as default};
