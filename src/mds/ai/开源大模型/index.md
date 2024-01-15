---
title: "如何跑通一个开源大模型"
date: "2023-12-15"
categories: 
  - "ai"
---

我们就那清华大学的模型举例，显卡显存大于6G就行，实际运行会占用5.8G，当用户问题过多，或者回答的过多。模型就会退出崩溃。

### 1.下载模型

[THUDM/chatglm-6b-int4 · Hugging Face](https://huggingface.co/THUDM/chatglm-6b-int4)

### 2.安装依赖

```sh
protobuf
transformers==4.27.1
cpm_kernels
torch>=1.10
gradio
mdtex2html
sentencepiece
accelerate
```

注意torch要安装CUDA版本的，也就是英伟达优化过的库。

```sh
https://download.pytorch.org/whl/cu118/torch-2.1.2%2Bcu118-cp38-cp38-win_amd64.whl
```

```py
import torch

# 打印结果为True，表示优化过的
print(torch.cuda.is_available())
```

### 3.编写代码开始运行

```py
import os
import platform
import signal
from transformers import AutoTokenizer, AutoModel

# 换成你自己的torch库的路径
os.environ['PATH'] = os.environ.get("PATH", "") + os.pathsep + r'D:\Python\Lib\site-packages\torch\lib'

# 换成你大模型下载的位置
tokenizer = AutoTokenizer.from_pretrained("D:\LLM\chatglm-6b-int4", trust_remote_code=True)
model = AutoModel.from_pretrained("D:\LLM\chatglm-6b-int4", trust_remote_code=True).half().cuda()
model = model.eval()

os_name = platform.system()
clear_command = 'cls' if os_name == 'Windows' else 'clear'
stop_stream = False


def build_prompt(history):
    prompt = "欢迎使用 ChatGLM-6B 模型，输入内容即可进行对话，clear 清空对话历史，stop 终止程序"
    for query, response in history:
        prompt += f"\n\n用户：{query}"
        prompt += f"\n\nChatGLM-6B：{response}"
    return prompt


def signal_handler(signal, frame):
    global stop_stream
    stop_stream = True


def main():
    history = []
    global stop_stream
    print("欢迎使用 ChatGLM-6B 模型，输入内容即可进行对话，clear 清空对话历史，stop 终止程序")
    while True:
        query = input("\n用户：")
        if query.strip() == "stop":
            break
        if query.strip() == "clear":
            history = []
            os.system(clear_command)
            print("欢迎使用 ChatGLM-6B 模型，输入内容即可进行对话，clear 清空对话历史，stop 终止程序")
            continue
        count = 0
        for response, history in model.stream_chat(tokenizer, query, history=history):
            if stop_stream:
                stop_stream = False
                break
            else:
                count += 1
                if count % 8 == 0:
                    os.system(clear_command)
                    print(build_prompt(history), flush=True)
                    signal.signal(signal.SIGINT, signal_handler)
        os.system(clear_command)
        print(build_prompt(history), flush=True)


if __name__ == "__main__":
    main()
```

### 4.接入FastApi，提供服务

```py
from fastapi import FastAPI, Request
from transformers import AutoTokenizer, AutoModel
import uvicorn, json, datetime
import torch

DEVICE = "cuda"
DEVICE_ID = "0"
CUDA_DEVICE = f"{DEVICE}:{DEVICE_ID}" if DEVICE_ID else DEVICE


def torch_gc():
    if torch.cuda.is_available():
        with torch.cuda.device(CUDA_DEVICE):
            torch.cuda.empty_cache()
            torch.cuda.ipc_collect()


app = FastAPI()


@app.post("/")
async def create_item(request: Request):
    global model, tokenizer
    json_post_raw = await request.json()
    json_post = json.dumps(json_post_raw)
    json_post_list = json.loads(json_post)
    prompt = json_post_list.get('prompt')
    history = json_post_list.get('history')
    max_length = json_post_list.get('max_length')
    top_p = json_post_list.get('top_p')
    temperature = json_post_list.get('temperature')
    response, history = model.chat(tokenizer,
                                   prompt,
                                   history=history,
                                   max_length=max_length if max_length else 2048,
                                   top_p=top_p if top_p else 0.7,
                                   temperature=temperature if temperature else 0.95)
    now = datetime.datetime.now()
    time = now.strftime("%Y-%m-%d %H:%M:%S")
    answer = {
        "response": response,
        "history": history,
        "status": 200,
        "time": time
    }
    log = "[" + time + "] " + '", prompt:"' + prompt + '", response:"' + repr(response) + '"'
    print(log)
    torch_gc()
    return answer


if __name__ == '__main__':
    tokenizer = AutoTokenizer.from_pretrained("THUDM/chatglm-6b", trust_remote_code=True)
    model = AutoModel.from_pretrained("THUDM/chatglm-6b", trust_remote_code=True).half().cuda()
    model.eval()
    uvicorn.run(app, host='0.0.0.0', port=8000, workers=1)
```
