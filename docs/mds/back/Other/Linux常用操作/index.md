下载文件到本地

```sh
scp root@xx.xx.xx.xx:/root/xxx.tar.gz C:\
```

以后台方式运行终端

```sh
chmod +x build.sh
sudo nohup ./build.sh &
```

应用自启

```sh
systemctl enable docker
```
