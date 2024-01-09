import{_ as s,c as n,o as a,R as p}from"./chunks/framework.43nt70q0.js";const _=JSON.parse('{"title":"如何跑通一个开源大模型","description":"","frontmatter":{"title":"如何跑通一个开源大模型","date":"2023-12-15","categories":["ai"]},"headers":[],"relativePath":"mds/ai/开源大模型/index.md","filePath":"mds/ai/开源大模型/index.md","lastUpdated":null}'),e={name:"mds/ai/开源大模型/index.md"},l=p(`<p>我们就那清华大学的模型举例，显卡显存大于6G就行，实际运行会占用5.8G，当用户问题过多，或者回答的过多。模型就会退出崩溃。</p><h3 id="_1-下载模型" tabindex="-1">1.下载模型 <a class="header-anchor" href="#_1-下载模型" aria-label="Permalink to &quot;1.下载模型&quot;">​</a></h3><p><a href="https://huggingface.co/THUDM/chatglm-6b-int4" target="_blank" rel="noreferrer">THUDM/chatglm-6b-int4 · Hugging Face</a></p><h3 id="_2-安装依赖" tabindex="-1">2.安装依赖 <a class="header-anchor" href="#_2-安装依赖" aria-label="Permalink to &quot;2.安装依赖&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>protobuf</span></span>
<span class="line"><span>transformers==4.27.1</span></span>
<span class="line"><span>cpm_kernels</span></span>
<span class="line"><span>torch&gt;=1.10</span></span>
<span class="line"><span>gradio</span></span>
<span class="line"><span>mdtex2html</span></span>
<span class="line"><span>sentencepiece</span></span>
<span class="line"><span>accelerate</span></span></code></pre></div><p>注意torch要安装CUDA版本的，也就是英伟达优化过的库。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>https://download.pytorch.org/whl/cu118/torch-2.1.2%2Bcu118-cp38-cp38-win_amd64.whl</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import torch</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 打印结果为True，表示优化过的</span></span>
<span class="line"><span>print(torch.cuda.is_available())</span></span></code></pre></div><h3 id="_3-编写代码开始运行" tabindex="-1">3.编写代码开始运行 <a class="header-anchor" href="#_3-编写代码开始运行" aria-label="Permalink to &quot;3.编写代码开始运行&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import os</span></span>
<span class="line"><span>import platform</span></span>
<span class="line"><span>import signal</span></span>
<span class="line"><span>from transformers import AutoTokenizer, AutoModel</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 换成你自己的torch库的路径</span></span>
<span class="line"><span>os.environ[&#39;PATH&#39;] = os.environ.get(&quot;PATH&quot;, &quot;&quot;) + os.pathsep + r&#39;D:\\Python\\Lib\\site-packages\\torch\\lib&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 换成你大模型下载的位置</span></span>
<span class="line"><span>tokenizer = AutoTokenizer.from_pretrained(&quot;D:\\LLM\\chatglm-6b-int4&quot;, trust_remote_code=True)</span></span>
<span class="line"><span>model = AutoModel.from_pretrained(&quot;D:\\LLM\\chatglm-6b-int4&quot;, trust_remote_code=True).half().cuda()</span></span>
<span class="line"><span>model = model.eval()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>os_name = platform.system()</span></span>
<span class="line"><span>clear_command = &#39;cls&#39; if os_name == &#39;Windows&#39; else &#39;clear&#39;</span></span>
<span class="line"><span>stop_stream = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def build_prompt(history):</span></span>
<span class="line"><span>    prompt = &quot;欢迎使用 ChatGLM-6B 模型，输入内容即可进行对话，clear 清空对话历史，stop 终止程序&quot;</span></span>
<span class="line"><span>    for query, response in history:</span></span>
<span class="line"><span>        prompt += f&quot;\\n\\n用户：{query}&quot;</span></span>
<span class="line"><span>        prompt += f&quot;\\n\\nChatGLM-6B：{response}&quot;</span></span>
<span class="line"><span>    return prompt</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def signal_handler(signal, frame):</span></span>
<span class="line"><span>    global stop_stream</span></span>
<span class="line"><span>    stop_stream = True</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    history = []</span></span>
<span class="line"><span>    global stop_stream</span></span>
<span class="line"><span>    print(&quot;欢迎使用 ChatGLM-6B 模型，输入内容即可进行对话，clear 清空对话历史，stop 终止程序&quot;)</span></span>
<span class="line"><span>    while True:</span></span>
<span class="line"><span>        query = input(&quot;\\n用户：&quot;)</span></span>
<span class="line"><span>        if query.strip() == &quot;stop&quot;:</span></span>
<span class="line"><span>            break</span></span>
<span class="line"><span>        if query.strip() == &quot;clear&quot;:</span></span>
<span class="line"><span>            history = []</span></span>
<span class="line"><span>            os.system(clear_command)</span></span>
<span class="line"><span>            print(&quot;欢迎使用 ChatGLM-6B 模型，输入内容即可进行对话，clear 清空对话历史，stop 终止程序&quot;)</span></span>
<span class="line"><span>            continue</span></span>
<span class="line"><span>        count = 0</span></span>
<span class="line"><span>        for response, history in model.stream_chat(tokenizer, query, history=history):</span></span>
<span class="line"><span>            if stop_stream:</span></span>
<span class="line"><span>                stop_stream = False</span></span>
<span class="line"><span>                break</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                count += 1</span></span>
<span class="line"><span>                if count % 8 == 0:</span></span>
<span class="line"><span>                    os.system(clear_command)</span></span>
<span class="line"><span>                    print(build_prompt(history), flush=True)</span></span>
<span class="line"><span>                    signal.signal(signal.SIGINT, signal_handler)</span></span>
<span class="line"><span>        os.system(clear_command)</span></span>
<span class="line"><span>        print(build_prompt(history), flush=True)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>    main()</span></span></code></pre></div><h3 id="_4-接入fastapi-提供服务" tabindex="-1">4.接入FastApi，提供服务 <a class="header-anchor" href="#_4-接入fastapi-提供服务" aria-label="Permalink to &quot;4.接入FastApi，提供服务&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>from fastapi import FastAPI, Request</span></span>
<span class="line"><span>from transformers import AutoTokenizer, AutoModel</span></span>
<span class="line"><span>import uvicorn, json, datetime</span></span>
<span class="line"><span>import torch</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DEVICE = &quot;cuda&quot;</span></span>
<span class="line"><span>DEVICE_ID = &quot;0&quot;</span></span>
<span class="line"><span>CUDA_DEVICE = f&quot;{DEVICE}:{DEVICE_ID}&quot; if DEVICE_ID else DEVICE</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def torch_gc():</span></span>
<span class="line"><span>    if torch.cuda.is_available():</span></span>
<span class="line"><span>        with torch.cuda.device(CUDA_DEVICE):</span></span>
<span class="line"><span>            torch.cuda.empty_cache()</span></span>
<span class="line"><span>            torch.cuda.ipc_collect()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>app = FastAPI()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>@app.post(&quot;/&quot;)</span></span>
<span class="line"><span>async def create_item(request: Request):</span></span>
<span class="line"><span>    global model, tokenizer</span></span>
<span class="line"><span>    json_post_raw = await request.json()</span></span>
<span class="line"><span>    json_post = json.dumps(json_post_raw)</span></span>
<span class="line"><span>    json_post_list = json.loads(json_post)</span></span>
<span class="line"><span>    prompt = json_post_list.get(&#39;prompt&#39;)</span></span>
<span class="line"><span>    history = json_post_list.get(&#39;history&#39;)</span></span>
<span class="line"><span>    max_length = json_post_list.get(&#39;max_length&#39;)</span></span>
<span class="line"><span>    top_p = json_post_list.get(&#39;top_p&#39;)</span></span>
<span class="line"><span>    temperature = json_post_list.get(&#39;temperature&#39;)</span></span>
<span class="line"><span>    response, history = model.chat(tokenizer,</span></span>
<span class="line"><span>                                   prompt,</span></span>
<span class="line"><span>                                   history=history,</span></span>
<span class="line"><span>                                   max_length=max_length if max_length else 2048,</span></span>
<span class="line"><span>                                   top_p=top_p if top_p else 0.7,</span></span>
<span class="line"><span>                                   temperature=temperature if temperature else 0.95)</span></span>
<span class="line"><span>    now = datetime.datetime.now()</span></span>
<span class="line"><span>    time = now.strftime(&quot;%Y-%m-%d %H:%M:%S&quot;)</span></span>
<span class="line"><span>    answer = {</span></span>
<span class="line"><span>        &quot;response&quot;: response,</span></span>
<span class="line"><span>        &quot;history&quot;: history,</span></span>
<span class="line"><span>        &quot;status&quot;: 200,</span></span>
<span class="line"><span>        &quot;time&quot;: time</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    log = &quot;[&quot; + time + &quot;] &quot; + &#39;&quot;, prompt:&quot;&#39; + prompt + &#39;&quot;, response:&quot;&#39; + repr(response) + &#39;&quot;&#39;</span></span>
<span class="line"><span>    print(log)</span></span>
<span class="line"><span>    torch_gc()</span></span>
<span class="line"><span>    return answer</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    tokenizer = AutoTokenizer.from_pretrained(&quot;THUDM/chatglm-6b&quot;, trust_remote_code=True)</span></span>
<span class="line"><span>    model = AutoModel.from_pretrained(&quot;THUDM/chatglm-6b&quot;, trust_remote_code=True).half().cuda()</span></span>
<span class="line"><span>    model.eval()</span></span>
<span class="line"><span>    uvicorn.run(app, host=&#39;0.0.0.0&#39;, port=8000, workers=1)</span></span></code></pre></div>`,12),t=[l];function i(o,c,r,u,m,d){return a(),n("div",null,t)}const q=s(e,[["render",i]]);export{_ as __pageData,q as default};
