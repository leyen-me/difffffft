import{_ as s,o as n,c as a,R as p}from"./chunks/framework.lUyD4Cud.js";const g=JSON.parse('{"title":"撤销重做优雅的解决方案","description":"","frontmatter":{"title":"撤销重做优雅的解决方案","date":"2023-11-20","categories":["算法"]},"headers":[],"relativePath":"mds/front/2023-11-20-撤销重做优雅的解决方案/index.md","filePath":"mds/front/2023-11-20-撤销重做优雅的解决方案/index.md","lastUpdated":1704444471000}'),t={name:"mds/front/2023-11-20-撤销重做优雅的解决方案/index.md"},l=p(`<h3 id="简单" tabindex="-1">简单 <a class="header-anchor" href="#简单" aria-label="Permalink to &quot;简单&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, shallowReactive } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const history = shallowReactive([[]])</span></span>
<span class="line"><span>const index = ref(0)</span></span>
<span class="line"><span>const data = ref([])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function push() {</span></span>
<span class="line"><span>	data.value.push({ text: 1 })</span></span>
<span class="line"><span>	index.value++</span></span>
<span class="line"><span>	history.push(clone(data.value))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function undo() {</span></span>
<span class="line"><span>	data.value = clone(history[--index.value])</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function redo() {</span></span>
<span class="line"><span>	data.value = clone(history[++index.value])</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function clone(circles) {</span></span>
<span class="line"><span>	return circles.map(c =&gt; ({ ...c }))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>	&lt;div&gt;</span></span>
<span class="line"><span>		&lt;button @click=&quot;undo&quot; :disabled=&quot;index &lt;= 0&quot;&gt;Undo&lt;/button&gt;</span></span>
<span class="line"><span>		&lt;button @click=&quot;redo&quot; :disabled=&quot;index &gt;= history.length - 1&quot;&gt;Redo&lt;/button&gt;</span></span>
<span class="line"><span>		&lt;button @click=&quot;push&quot;&gt;Add&lt;/button&gt;</span></span>
<span class="line"><span>		&lt;p&gt;</span></span>
<span class="line"><span>			{{ history }}</span></span>
<span class="line"><span>		&lt;/p&gt;</span></span>
<span class="line"><span>		&lt;p&gt;</span></span>
<span class="line"><span>			{{ data }}</span></span>
<span class="line"><span>		&lt;/p&gt;</span></span>
<span class="line"><span>	&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><h3 id="复杂" tabindex="-1">复杂 <a class="header-anchor" href="#复杂" aria-label="Permalink to &quot;复杂&quot;">​</a></h3><p>useHistory.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 命令模式涉及将所有操作（如添加、删除、修改）封装为命令对象。每个命令对象需要具备执行（execute）和撤销（undo）方法。</span></span>
<span class="line"><span> * class Command {</span></span>
<span class="line"><span> *  constructor() {}</span></span>
<span class="line"><span> *  execute() {}</span></span>
<span class="line"><span> *  undo() {}</span></span>
<span class="line"><span> * }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 维护两个堆栈：一个用于撤销（undo stack），一个用于重做（redo stack）。</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * 当用户执行一个操作时，将对应的命令对象压入撤销堆栈，并清空重做堆栈。</span></span>
<span class="line"><span> * 撤销操作时，从撤销堆栈中弹出命令对象，调用其 undo 方法，然后将该命令压入重做堆栈。</span></span>
<span class="line"><span> * 重做操作时，从重做堆栈中弹出命令对象，调用其 execute 方法，然后将该命令压入撤销堆栈。</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class History {</span></span>
<span class="line"><span>	constructor() {</span></span>
<span class="line"><span>		this.undoStack = []</span></span>
<span class="line"><span>		this.redoStack = []</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	executeCommand(command) {</span></span>
<span class="line"><span>		command.execute()</span></span>
<span class="line"><span>		this.undoStack.push(command)</span></span>
<span class="line"><span>		this.redoStack.length = 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	undo() {</span></span>
<span class="line"><span>		const command = this.undoStack.pop()</span></span>
<span class="line"><span>		if (command) {</span></span>
<span class="line"><span>			command.undo()</span></span>
<span class="line"><span>			this.redoStack.push(command)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	redo() {</span></span>
<span class="line"><span>		const command = this.redoStack.pop()</span></span>
<span class="line"><span>		if (command) {</span></span>
<span class="line"><span>			command.execute()</span></span>
<span class="line"><span>			this.undoStack.push(command)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const useHistory = () =&gt; {</span></span>
<span class="line"><span>	const history = new History()</span></span>
<span class="line"><span>	const execute = command =&gt; {</span></span>
<span class="line"><span>		history.executeCommand(command)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	const undo = () =&gt; {</span></span>
<span class="line"><span>		history.undo()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	const redo = () =&gt; {</span></span>
<span class="line"><span>		history.redo()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return { history, undo, redo, execute }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default useHistory</span></span></code></pre></div><p>index.vue</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>import useHistory from &#39;./useHistory&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const data = ref([])</span></span>
<span class="line"><span>class AddCommand {</span></span>
<span class="line"><span>	constructor(item) {</span></span>
<span class="line"><span>		this.item = item</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	execute() {</span></span>
<span class="line"><span>		data.value.push(this.item)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	undo() {</span></span>
<span class="line"><span>		data.value.pop()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const { history, undo, redo, execute } = useHistory()</span></span>
<span class="line"><span>const add = () =&gt; {</span></span>
<span class="line"><span>	const command = new AddCommand(&#39;1&#39;)</span></span>
<span class="line"><span>	execute(command)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>	&lt;div&gt;</span></span>
<span class="line"><span>		&lt;button @click=&quot;undo&quot; :disabled=&quot;history.undoStack.length === 0&quot;&gt;Undo&lt;/button&gt;</span></span>
<span class="line"><span>		&lt;button @click=&quot;redo&quot; :disabled=&quot;history.redoStack.length === 0&quot;&gt;Redo&lt;/button&gt;</span></span>
<span class="line"><span>		&lt;button @click=&quot;add&quot;&gt;Add&lt;/button&gt;</span></span>
<span class="line"><span>		&lt;p&gt;{{ data }}&lt;/p&gt;</span></span>
<span class="line"><span>	&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div>`,7),e=[l];function c(i,o,d,u,r,h){return n(),a("div",null,e)}const v=s(t,[["render",c]]);export{g as __pageData,v as default};
