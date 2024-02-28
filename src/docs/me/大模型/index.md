### 环境准备

#### CUDA的安装
```
https://developer.nvidia.com/cuda-toolkit
```

#### flash-attention的安装
```
python -m pip install ninja -i https://pypi.tuna.tsinghua.edu.cn/simple

git clone https://github.com/Dao-AILab/flash-attention

cd flash-attention 

git submodule update --init --recursive

cd  flash-attention

pip install wheel==0.41.3 -i https://pypi.tuna.tsinghua.edu.cn/simple # 不然会去下载，还是会超时

python setup.py install

pip install flash-attn --no-build-isolation


>d:\python38\python.exe -m pip install --upgrade pip
pip3 install packaging
pip3 install torch


pip install flash-attn -i https://pypi.tuna.tsinghua.edu.cn/simple
pip install torch -i https://pypi.tuna.tsinghua.edu.cn/simple
pip install transformers -i https://pypi.tuna.tsinghua.edu.cn/simple
pip install sentencepiece -i https://pypi.tuna.tsinghua.edu.cn/simple
```

C:\Users\67222\.conda\envs\test\python.exe