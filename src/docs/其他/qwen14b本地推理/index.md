本次安装教程从装机之后开始，使用WSL来部署千问。

本机配置：
|  标题   | 配置  |
|  ----  | ----  |
| 系统  | Windows11 |
| 内存  | 32G |
| 显卡  | NVDIA GeForce RTX 2080 ti (22G) |
| CPU  | AMD Ryzen 5 5500 |
| 硬盘  | 512G |
| 网络  | 良好的网络环境(可访问google.com) |

环境:
1. vscode + wsl(插件) + python(插件)
2. 显卡驱动cuda >= 11.8
3. wsl2
4. cuda = 11.8
5. conda

## 开始


### 安装vscode

1. 官网下载，无脑安装
2. https://code.visualstudio.com/
3. 安装插件
4. WSL和Python两个插件

### 检查本机显卡驱动版本

```sh
# cmd
nvidia-smi
```

大概在右上角的位置，你可以看到 CUDA Version: xx.xx,如何版本小于11.8，请更新你的显卡驱动。

更新驱动：

1. 官网下载安装：https://www.nvidia.cn/geforce/drivers/
2. 注册登录
3. 选择最近发布更新的驱动，点击安装即可

安装完成之后，重新输入nvidia-smi就可以看到驱动支持的最大CUDA完全更新到了12.4了。

### 安装WSL

```sh
wsl --install
```

安装完成之后，需要你配置一个新的用户名和密码，配置完成后，我们需要修改root用户密码，因为新用户权限太小了。

```sh
sudo passwd root
```

### 安装anaconda

1. 选择你linux对应的版本: https://www.anaconda.com/download/
2. 我们会下载一个类似于这样的文件: Anaconda3-2020.07-Linux-x86_64.sh
3. 确保该文件下载到用户目录下
4. 打开VsCode，进入Linux子系统
5. 切到用户目录下: bash Anaconda3-2020.07-Linux-x86_64.sh
6. 回车键，进入注册信息页面
7. 按q跳过阅读，yes
8. 默认安装在用户目录下，直接回车即可安装；若想自定义安装目录，直接输入安装目录，回车即可。
9. Do you wish the installer to initialize Anaconda3 by running conda init ? 输入 no，回车
10. 看到提示信息说明安装完成

我最开始使用手动配置环境变量

```sh
vim ~/.bashrc
export PATH="/home/xxx/anaconda3/bin:$PATH"
source ~/.bashrc
```
最后发现conda init会帮配置

```sh
conda init
```

### 安装CUDA

1.下载cuda 

```sh
wget https://developer.download.nvidia.com/compute/cuda/11.8.0/local_installers/cuda_11.8.0_520.61.05_linux.run
```

2. 安装cuda

安装过程中不加--override参数会报gcc版本不对

```sh
sh cuda_11.8.0_520.61.05_linux.run --override
```

1. 输入accept同意
2. 按空格勾选和反选。只选择CUDA11.8就行
3. 选择install，回车开始安装
4. 安装完成后，需要手动配置下环境变量

```sh
vim ~/.bashrc
export PATH="/usr/local/cuda-11.8/bin:$PATH"
export LD_LIBRARY_PATH="/usr/local/cuda-11.8/bin/lib64"
source ~/.bashrc
```

### 创建Python环境

```sh
# 创建环境
conda create -n qwen14b python=3.10

# 激活环境
conda activate qwen14b
```

1. 你也可以使用git下载，地址在这里: https://modelscope.cn/models/qwen/Qwen1.5-14B-Chat-GPTQ-Int4/files

2. 如果使用modelscope，请写一个py脚本文件并运行它即可

```sh
# 安装modelscope
# modelscope用户下载qwen14b模型
pip install modelscope
```

```sh
from modelscope import snapshot_download
model_dir = snapshot_download('qwen/Qwen1.5-14B-Chat-GPTQ-Int4')
```

### 依赖安装

```sh
conda install pytorch==2.1.1 torchvision=0.16.1 torchaudio=2.1.1 pytorch-cuda=11.8 -c pytorch -c nvidia

pip install accelerate tiktoken einops transformers_stream_generator==0.0.4 scipy optimum peft transformers streamlit modelscope chardet

pip install auto-gptq --extra-index-url https://huggingface.github.io/autogptq-index/whl/cu118/
```

### 安装flash-attention依赖

1. 在Github上找到: https://github.com/Dao-AILab/flash-attention/releases
2. 找到自己对应的版本
3. 我的选择是: flash_attn-2.5.6+cu118torch2.1cxx11abiFALSE-cp310-cp310-linux_x86_64
4. 下载下来之后，使用python安装

```sh
python install flash_attn-2.5.6+cu118torch2.1cxx11abiFALSE-cp310-cp310-linux_x86_64
```

### 环境搭建结束，编写推理代码。

推理过程，最大消耗12G显存

```py
from transformers import AutoModelForCausalLM, AutoTokenizer

path = "/home/lgy/model/Qwen1___5-14B-Chat-GPTQ-Int4"

device = "cuda" 

model = AutoModelForCausalLM.from_pretrained(
    path,
    device_map="auto"
)
tokenizer = AutoTokenizer.from_pretrained(path)

prompt = "给我介绍一下大型语言模型。"
messages = [
    {"role": "system", "content": "你是一个有用的助手。"},
    {"role": "user", "content": prompt}
]
text = tokenizer.apply_chat_template(
    messages,
    tokenize=False,
    add_generation_prompt=True
)
model_inputs = tokenizer([text], return_tensors="pt").to(device)

generated_ids = model.generate(
    model_inputs.input_ids,
    max_new_tokens=512
)
generated_ids = [
    output_ids[len(input_ids):] for input_ids, output_ids in zip(model_inputs.input_ids, generated_ids)
]

response = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]

print(response)
```

