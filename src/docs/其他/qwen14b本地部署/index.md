
### 创建新的部署环境

```sh
conda create -y -n qwen14b_vllm python==3.10
```

### 激活新环境

```sh
conda activate qwen14b_vllm
```

### 安装依赖

```sh
pip install vllm
```

vLLM 默认用CUDA12.1 编译，可以用一下代码用其他版本CUDA版本进行编译

```sh
export VLLM_VERSION=0.4.0.post1
export PYTHON_VERSION=310
pip install https://github.com/vllm-project/vllm/releases/download/v${VLLM_VERSION}/vllm-${VLLM_VERSION}+cu118-cp${PYTHON_VERSION}-cp${PYTHON_VERSION}-manylinux1_x86_64.whl
```

### 重装其他依赖

```sh
pip uninstall torch -y
pip install torch==2.1.2 --upgrade --index-url https://download.pytorch.org/whl/cu118
```

```sh
pip uninstall xformers -y
pip install --upgrade xformers==0.0.23.post1 --index-url https://download.pytorch.org/whl/cu118
```

### 开始运行

```sh
# 默认这个配置似乎默认占用了很多GPU内存，查阅资料后发现因为 vllm 的核心机制——KV 缓存，vllm 默认加载会占用大量 GPU 存储空间。可以通过将 GPU_MEMORY_UTILIZATION 参数调低控制显存占用量， GPU_MEMORY_UTILIZATION 默认是0.9，可以设置成0.5试试

# --max-model-len 1024
# --max-model-len 2048

python -m vllm.entrypoints.openai.api_server --host 0.0.0.0 --port 8000 --gpu-memory-utilization 0.8 --max-model-len 1024 --model /home/lgy/model/Qwen1___5-14B-Chat-GPTQ-Int4
```