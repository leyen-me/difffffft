import{_ as s,o as n,c as a,R as p}from"./chunks/framework.vVZmquDz.js";const m=JSON.parse('{"title":"Vue如何一行代码显示业务级弹窗","description":"","frontmatter":{"title":"Vue如何一行代码显示业务级弹窗","date":"2023-11-29","categories":["前端"]},"headers":[],"relativePath":"mds/front/2023-11-29-vue如何一行代码显示弹窗/index.md","filePath":"mds/front/2023-11-29-vue如何一行代码显示弹窗/index.md","lastUpdated":1704444471000}'),t={name:"mds/front/2023-11-29-vue如何一行代码显示弹窗/index.md"},l=p(`<p>在前端中处理业务级别的弹窗问题是非常麻烦的事情，调用的次数很多，代码也很多很混乱。</p><p>下面将介绍如何用Vue的Jsx的能力实现一行代码控制业务弹窗的显示，关闭，回调。</p><p>如果要在Vue中要使用Jsx</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm i @vitejs/plugin-vue-jsx -D</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import vueJsx from &quot;@vitejs/plugin-vue-jsx&quot;; // 配置vue使用jsx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  plugins: [vue(), vueJsx()],</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>开始封装业务弹窗逻辑</p><p>src/hooks/useDialog.jsx</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>import { defineComponent, ref } from &#39;vue&#39;</span></span>
<span class="line"><span>import { ElButton, ElDialog, ElInput } from &#39;element-plus&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 组件</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>const BaseDialog = defineComponent({</span></span>
<span class="line"><span>	/**</span></span>
<span class="line"><span>	 * 参数</span></span>
<span class="line"><span>	 */</span></span>
<span class="line"><span>	props: {</span></span>
<span class="line"><span>		title: {</span></span>
<span class="line"><span>			type: String,</span></span>
<span class="line"><span>			required: false,</span></span>
<span class="line"><span>			default: () =&gt; &#39;&#39;</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		msg: {</span></span>
<span class="line"><span>			type: String,</span></span>
<span class="line"><span>			required: false,</span></span>
<span class="line"><span>			default: () =&gt; &#39;&#39;</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		closeDialog: {</span></span>
<span class="line"><span>			type: Function,</span></span>
<span class="line"><span>			required: true,</span></span>
<span class="line"><span>			default: () =&gt; () =&gt; {}</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		onPass: {</span></span>
<span class="line"><span>			type: Function,</span></span>
<span class="line"><span>			required: false,</span></span>
<span class="line"><span>			default: () =&gt; () =&gt; {}</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		onReject: {</span></span>
<span class="line"><span>			type: Function,</span></span>
<span class="line"><span>			required: false,</span></span>
<span class="line"><span>			default: () =&gt; () =&gt; {}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	/**</span></span>
<span class="line"><span>	 * 业务逻辑</span></span>
<span class="line"><span>	 */</span></span>
<span class="line"><span>	setup(props) {</span></span>
<span class="line"><span>		const visible = ref(true)</span></span>
<span class="line"><span>		const opinions = ref(&#39;&#39;)</span></span>
<span class="line"><span>		const handleClose = () =&gt; {</span></span>
<span class="line"><span>			visible.value = false</span></span>
<span class="line"><span>			props.closeDialog()</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		const handlePass = () =&gt; {</span></span>
<span class="line"><span>			props.onPass(opinions.value)</span></span>
<span class="line"><span>			handleClose()</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		const handleReject = () =&gt; {</span></span>
<span class="line"><span>			props.onReject(opinions.value)</span></span>
<span class="line"><span>			handleClose()</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		return {</span></span>
<span class="line"><span>			visible,</span></span>
<span class="line"><span>			opinions,</span></span>
<span class="line"><span>			handleClose,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			handlePass,</span></span>
<span class="line"><span>			handleReject</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	/**</span></span>
<span class="line"><span>	 * 组件</span></span>
<span class="line"><span>	 */</span></span>
<span class="line"><span>	render(props) {</span></span>
<span class="line"><span>		return (</span></span>
<span class="line"><span>			&lt;ElDialog modelValue={props.visible} onClose={props.handleClose} title={props.title}&gt;</span></span>
<span class="line"><span>				&lt;ElInput</span></span>
<span class="line"><span>					autosize={{ minRows: 4, maxRows: 6 }}</span></span>
<span class="line"><span>					modelValue={props.opinions}</span></span>
<span class="line"><span>					onUpdate:modelValue={e =&gt; (props.opinions = e)}</span></span>
<span class="line"><span>					type=&#39;textarea&#39;</span></span>
<span class="line"><span>					placeholder=&#39;审批意见&#39;&gt;&lt;/ElInput&gt;</span></span>
<span class="line"><span>				&lt;div style={{ display: &#39;flex&#39;, justifyContent: &#39;flex-end&#39;, marginTop: &#39;8px&#39; }}&gt;</span></span>
<span class="line"><span>					&lt;ElButton onClick={props.handleReject} type=&#39;danger&#39; size=&#39;large&#39;&gt;</span></span>
<span class="line"><span>						驳回</span></span>
<span class="line"><span>					&lt;/ElButton&gt;</span></span>
<span class="line"><span>					&lt;ElButton onClick={props.handlePass} type=&#39;primary&#39; size=&#39;large&#39;&gt;</span></span>
<span class="line"><span>						通过</span></span>
<span class="line"><span>					&lt;/ElButton&gt;</span></span>
<span class="line"><span>				&lt;/div&gt;</span></span>
<span class="line"><span>			&lt;/ElDialog&gt;</span></span>
<span class="line"><span>		)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 显示弹窗</span></span>
<span class="line"><span> * 调用方法：</span></span>
<span class="line"><span> *    const onPass = data =&gt; {</span></span>
<span class="line"><span> *        console.log(&#39;通过&#39;, data)</span></span>
<span class="line"><span> *    }</span></span>
<span class="line"><span> *    const onReject = data =&gt; {</span></span>
<span class="line"><span> *        console.log(&#39;驳回&#39;, data)</span></span>
<span class="line"><span> *    }</span></span>
<span class="line"><span> *    const { showDialog, closeDialog } = useDialog({</span></span>
<span class="line"><span> *        msg: &#39;Hello&#39;,</span></span>
<span class="line"><span> *        title: &#39;是否提交审核？&#39;,</span></span>
<span class="line"><span> *        onPass,</span></span>
<span class="line"><span> *        onReject</span></span>
<span class="line"><span> *    })</span></span>
<span class="line"><span> *    showDialog()</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>const useDialog = props =&gt; {</span></span>
<span class="line"><span>	const mountNode = document.createElement(&#39;div&#39;)</span></span>
<span class="line"><span>	document.body.appendChild(mountNode)</span></span>
<span class="line"><span>	const closeDialog = () =&gt; {</span></span>
<span class="line"><span>		dialog.unmount()</span></span>
<span class="line"><span>		mountNode.remove()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	const showDialog = () =&gt; {</span></span>
<span class="line"><span>		// 挂载显示</span></span>
<span class="line"><span>		dialog.mount(mountNode)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	const dialog = createApp(BaseDialog, { ...props, closeDialog })</span></span>
<span class="line"><span>	return {</span></span>
<span class="line"><span>		showDialog,</span></span>
<span class="line"><span>		closeDialog</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default useDialog</span></span></code></pre></div><p>使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const onPass = data =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;通过&#39;, data)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const onReject = data =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;驳回&#39;, data)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const { showDialog, closeDialog } = useDialog({</span></span>
<span class="line"><span>  msg: &#39;Hello&#39;,</span></span>
<span class="line"><span>  title: &#39;是否提交审核？&#39;,</span></span>
<span class="line"><span>  onPass,</span></span>
<span class="line"><span>  onReject</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>showDialog()</span></span></code></pre></div><p>所以说由此可见，在React，天生处理弹窗的能力就非常强</p><p>Vue结合Jsx也非常强。但是Jsx学习成本问题，处理v-model的问题。这种方式更适合React和Vue都会的。</p>`,12),e=[l];function i(c,o,d,u,g,r){return n(),a("div",null,e)}const v=s(t,[["render",i]]);export{m as __pageData,v as default};
