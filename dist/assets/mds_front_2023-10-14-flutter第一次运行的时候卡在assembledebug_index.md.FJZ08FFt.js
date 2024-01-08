import{_ as s,c as a,o as n,R as p}from"./chunks/framework.43nt70q0.js";const v=JSON.parse('{"title":"Flutter第一次运行的时候卡在assembleDebug","description":"","frontmatter":{"title":"Flutter第一次运行的时候卡在assembleDebug","date":"2023-10-14","categories":["前端"]},"headers":[],"relativePath":"mds/front/2023-10-14-flutter第一次运行的时候卡在assembledebug/index.md","filePath":"mds/front/2023-10-14-flutter第一次运行的时候卡在assembledebug/index.md","lastUpdated":1704444471000}'),e={name:"mds/front/2023-10-14-flutter第一次运行的时候卡在assembledebug/index.md"},l=p(`<p>修改文件</p><p>D:\\Flutter\\packages\\flutter_tools\\gradle\\src\\main\\groovy\\flutter.groovy</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>buildscript {</span></span>
<span class="line"><span>    repositories {</span></span>
<span class="line"><span>        // google()</span></span>
<span class="line"><span>        // mavenCentral()</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/google&#39; }</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/jcenter&#39; }</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/public&#39; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>private static final String DEFAULT_MAVEN_HOST = &quot;https://storage.flutter-io.cn&quot;;</span></span></code></pre></div><p>自己项目的android目录中build.gradle也要修改</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    repositories {</span></span>
<span class="line"><span>//        google()</span></span>
<span class="line"><span>//        mavenCentral()</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/google&#39; }</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/jcenter&#39; }</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/public&#39; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>allprojects {</span></span>
<span class="line"><span>    repositories {</span></span>
<span class="line"><span>//        google()</span></span>
<span class="line"><span>//        mavenCentral()</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/google&#39; }</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/jcenter&#39; }</span></span>
<span class="line"><span>        maven { url &#39;https://maven.aliyun.com/repository/public&#39; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,6),t=[l];function i(o,c,r,u,d,m){return n(),a("div",null,t)}const h=s(e,[["render",i]]);export{v as __pageData,h as default};
