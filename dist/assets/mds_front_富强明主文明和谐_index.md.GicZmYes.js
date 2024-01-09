import{_ as n,c as s,o as a,R as p}from"./chunks/framework.43nt70q0.js";const e="/assets/image-1.9V3QM59k.png",_=JSON.parse('{"title":"富强民主文明和谐","description":"","frontmatter":{"title":"富强民主文明和谐","date":"2023-12-12","categories":["前端"]},"headers":[],"relativePath":"mds/front/富强明主文明和谐/index.md","filePath":"mds/front/富强明主文明和谐/index.md","lastUpdated":null}'),l={name:"mds/front/富强明主文明和谐/index.md"},t=p('<p>在很多博客中都可以看到一种点击效果，&#39;富强&#39;, &#39;民主&#39;, &#39;文明&#39;, &#39;和谐&#39;, &#39;自由&#39;, &#39;平等&#39;, &#39;公正&#39;, &#39;法治&#39;, &#39;爱国&#39;, &#39;敬业&#39;, &#39;诚信&#39;, &#39;友善&#39;。</p><p>这种效果如何实现呢，请看如下代码：</p><p><img src="'+e+`" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;title&gt;引导页&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        .text-popup {</span></span>
<span class="line"><span>            animation: textPopup 1s;</span></span>
<span class="line"><span>            user-select: none;</span></span>
<span class="line"><span>            white-space: nowrap;</span></span>
<span class="line"><span>            position: absolute;</span></span>
<span class="line"><span>            z-index: 99;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @keyframes textPopup {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            0%,</span></span>
<span class="line"><span>            100% {</span></span>
<span class="line"><span>                opacity: 0;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            5% {</span></span>
<span class="line"><span>                opacity: 1;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            100% {</span></span>
<span class="line"><span>                transform: translateY(-50px);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;container&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;!-- &lt;canvas id=&quot;canvas&quot;&gt;&lt;/canvas&gt; --&gt;</span></span>
<span class="line"><span>    &lt;!-- &lt;script src=&quot;bootstrapmb.com.js&quot;&gt;&lt;/script&gt; --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        var generateRandomColor = function () {</span></span>
<span class="line"><span>            var letters = &#39;0123456789ABCDEF&#39;;</span></span>
<span class="line"><span>            var color = &#39;#&#39;;</span></span>
<span class="line"><span>            for (var i = 0; i &lt; 6; i++) {</span></span>
<span class="line"><span>                color += letters[Math.floor(Math.random() * 16)];</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return color;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var fnTextPopup = function (arr, options) {</span></span>
<span class="line"><span>            // arr参数是必须的</span></span>
<span class="line"><span>            if (!arr || !arr.length) {</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 主逻辑</span></span>
<span class="line"><span>            var index = 0;</span></span>
<span class="line"><span>            document.documentElement.addEventListener(&#39;click&#39;, function (event) {</span></span>
<span class="line"><span>                var x = event.pageX, y = event.pageY;</span></span>
<span class="line"><span>                var eleText = document.createElement(&#39;span&#39;);</span></span>
<span class="line"><span>                eleText.className = &#39;text-popup&#39;;</span></span>
<span class="line"><span>                eleText.style.color = generateRandomColor()</span></span>
<span class="line"><span>                this.appendChild(eleText);</span></span>
<span class="line"><span>                if (arr[index]) {</span></span>
<span class="line"><span>                    eleText.innerHTML = arr[index];</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    index = 0;</span></span>
<span class="line"><span>                    eleText.innerHTML = arr[0];</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                // 动画结束后删除自己</span></span>
<span class="line"><span>                eleText.addEventListener(&#39;animationend&#39;, function () {</span></span>
<span class="line"><span>                    eleText.parentNode.removeChild(eleText);</span></span>
<span class="line"><span>                });</span></span>
<span class="line"><span>                // 位置</span></span>
<span class="line"><span>                eleText.style.left = (x - eleText.clientWidth / 2) + &#39;px&#39;;</span></span>
<span class="line"><span>                eleText.style.top = (y - eleText.clientHeight) + &#39;px&#39;;</span></span>
<span class="line"><span>                // index递增</span></span>
<span class="line"><span>                index++;</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        fnTextPopup([&#39;富强&#39;, &#39;民主&#39;, &#39;文明&#39;, &#39;和谐&#39;, &#39;自由&#39;, &#39;平等&#39;, &#39;公正&#39;, &#39;法治&#39;, &#39;爱国&#39;, &#39;敬业&#39;, &#39;诚信&#39;, &#39;友善&#39;]);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div>`,4),i=[t];function c(o,r,d,x,g,m){return a(),s("div",null,i)}const h=n(l,[["render",c]]);export{_ as __pageData,h as default};
