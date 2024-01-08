import{_ as s,c as a,o as n,R as p}from"./chunks/framework.43nt70q0.js";const h=JSON.parse('{"title":"在Vite架构中使用Mock","description":"","frontmatter":{"title":"在Vite架构中使用Mock","date":"2023-08-23","categories":["前端"]},"headers":[],"relativePath":"mds/front/2023-08-23-在vite架构中使用mock/index.md","filePath":"mds/front/2023-08-23-在vite架构中使用mock/index.md","lastUpdated":1704444471000}'),e={name:"mds/front/2023-08-23-在vite架构中使用mock/index.md"},l=p(`<h2 id="_1-配置" tabindex="-1">1.配置 <a class="header-anchor" href="#_1-配置" aria-label="Permalink to &quot;1.配置&quot;">​</a></h2><p>vite-plugin-mock 是一个为 Vite 开发的 mock 插件,它可以在你开发 Vue 或 React 应用程序的时候,轻松模拟 HTTP 请求,避免需要去启动真实的后端服务。</p><p>使用方式很简单,先通过 npm 安装:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install vite-plugin-mock --save-dev</span></span></code></pre></div><p>然后在 vite.config.js 配置文件中导入插件,并添加到 plugins 数组中:</p><p>import {viteMockServe} from &#39;vite-plugin-mock&#39;;</p><p>export default (params) =&gt; { const {mode} = params; return { plugins: [ mode === &#39;mock&#39; &amp;&amp; viteMockServe({ mockPath: &#39;./mock&#39;, localEnabled: true, }), ], }; };</p><p>它会拦截对 mock 目录下的 <code>.js</code> 或 <code>.ts</code> 文件的请求,然后返回模拟的数据。</p><p>内置了延迟模拟、自动 404 模拟等功能。</p><p>总之,vite-plugin-mock 提供了在使用 Vite 开发时,无需真实后端就可以模拟 API 请求的非常便捷的解决方案。</p><h2 id="_2-在mock目录下写拦截代码" tabindex="-1">2.在mock目录下写拦截代码 <a class="header-anchor" href="#_2-在mock目录下写拦截代码" aria-label="Permalink to &quot;2.在mock目录下写拦截代码&quot;">​</a></h2><p>对了,在谈到 vite-plugin-mock 时,不得不提的就是它所依赖的 mockjs。</p><p>mockjs 是一个在前端模拟生成模拟数据的库,vite-plugin-mock 插件就是利用它来实现模拟 API 响应的。</p><p>使用 mockjs 的优点是:</p><ul><li><p>它的语法简单,通过模板定义来生成随机数据,无需自己手写各种随机逻辑。</p></li><li><p>支持生成多种随机类型的数据,包括字符串、数字、布尔、对象、数组等。</p></li><li><p>可以通过 mock.Random 来自定义随机函数。</p></li><li><p>定义数据模板后,每次调用可以生成不同的模拟数据。</p></li><li><p>支持基于 JSON schema 来生成模拟数据。</p></li><li><p>同时还提供了 mock.js 和 mock.RESt 两种方式来模拟 API。</p></li></ul><p>所以 vite-plugin-mock 借助 mockjs,让我们可以非常方便地编写模拟数据,从而模拟出 API 的响应,极大地提高了开发效率。</p><p>总体来说,mockjs 为前端模拟数据提供了强大的支持,也是 vite-plugin-mock 这样的 mock 插件的重要基石。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import Mock from &quot;mockjs&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default [{</span></span>
<span class="line"><span>  url: &#39;/api/get-list&#39;,</span></span>
<span class="line"><span>  method: &#39;get&#39;,</span></span>
<span class="line"><span>  response: () =&gt; {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      code: 0,</span></span>
<span class="line"><span>      msg: &#39;ok&#39;,</span></span>
<span class="line"><span>      data: {</span></span>
<span class="line"><span>        ...Mock.mock({</span></span>
<span class="line"><span>          &#39;list|100&#39;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>              &#39;index|+1&#39;: 1,</span></span>
<span class="line"><span>              &#39;status|1&#39;: &#39;@natural(0, 4)&#39;,</span></span>
<span class="line"><span>              no: &#39;BH00@natural(01, 100)&#39;,</span></span>
<span class="line"><span>              name: &#39;@city()办公用品采购项目&#39;,</span></span>
<span class="line"><span>              &#39;paymentType|1&#39;: &#39;@natural(0, 1)&#39;,</span></span>
<span class="line"><span>              &#39;contractType|1&#39;: &#39;@natural(0, 2)&#39;,</span></span>
<span class="line"><span>              updateTime: &#39;2020-05-30 @date(&quot;HH:mm:ss&quot;)&#39;,</span></span>
<span class="line"><span>              amount: &#39;@natural(10, 500),000,000&#39;,</span></span>
<span class="line"><span>              adminName: &#39;@cname()&#39;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>          ],</span></span>
<span class="line"><span>        }),</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}];</span></span></code></pre></div>`,18),t=[l];function i(c,o,m,d,r,u){return n(),a("div",null,t)}const _=s(e,[["render",i]]);export{h as __pageData,_ as default};
