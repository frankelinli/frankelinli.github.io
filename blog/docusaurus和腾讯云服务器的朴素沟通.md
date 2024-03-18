### 本地电脑，访问远程主机的localhost:3000

ssh -L 3000:localhost:3000 root@121.220.83.133

这个命令会将本地电脑的 `3000` 端口转发到远程主机上的 `localhost:3000` 端口。

SSH 端口转发是一次性的，只要你关闭了终端窗口，端口转发就会自动停止。

端口转发只会影响你当前的 SSH 连接以及转发的端口，不会影响你的其他网络连接和端口使用

哈哈
---


### 从远程服务器下载（备份）文件到本地

```bash
scp -r root@121.220.83.133:/www/wwwroot/konglong/* C:\Users\wingxu\Desktop\shiyishi\
```

在这个命令中，`-r` 选项表示要递归复制整个目录树，`root@121.220.83.133:/www/wwwroot/ceshi/*` 指定了要复制的远程目录和文件名通配符，`C:\Users\wingxu\Desktop\shiyishi\` 指定了要将文件复制到本地的目录。请注意，路径末尾的斜杠很重要，它表示将文件复制到目录中，而不是将整个远程目录复制到本地目录中。

在运行命令时，您需要输入远程主机的密码。另外，请确保本地主机和远程主机之间的网络连接正常，并且您具有足够的权限访问远程主机上的文件和目录。

---

### Linux主机，设置一键deploy部署静态网站

制作一个Linux的批处理，首先运行npm run build;然后执行把build里构建好的文件，复制到网站根目录下。

您可以创建一个Shell脚本，将这两条命令放在一起执行。具体步骤如下：

**打开终端，使用文本编辑器创建一个新文件，比如说`deploy.sh`：**

```bash
nano deploy.sh
```

**在文件中输入以下内容：**

```bash
#!/bin/bash

# 进入项目目录
echo "正在进入项目目录：/www/wwwroot/konglong"
cd /www/wwwroot/konglong

# 执行npm run build
echo "正在执行npm run build命令"
npm run build

# 复制文件
echo "正在复制文件到目标目录：/www/wwwroot/mart"
cp -r /www/wwwroot/konglong/build/* /www/wwwroot/mart/

# 完成
echo "部署已完成"
```

这个脚本首先进入项目目录`/www/wwwroot/konglong`，然后执行`npm run build`命令生成打包文件，最后使用`cp`命令将打包文件复制到目标目录`/www/wwwroot/mart`。

**保存并退出文件。然后使用以下命令为脚本添加可执行权限：**

```bash
chmod +x deploy.sh
```

**现在您可以运行这个脚本了。在终端中输入以下命令：**

```bash
./deploy.sh
```

这个命令会执行`deploy.sh`脚本，依次执行`npm run build`和`cp`命令。

请注意，这个脚本中的路径应该根据您的实际情况进行修改。另外，如果您不希望每次运行脚本时都需要输入密码，可以将脚本放在root用户的家目录下，并使用root用户运行脚本。

**如果您将这个脚本保存在一个可执行的文件中，并将该文件添加到系统的PATH环境变量中，那么您可以在任意目录下运行该命令。**

以下是将脚本添加到PATH环境变量的步骤：

1. 将脚本保存为一个可执行文件，比如`deploy.sh`。
2. 将文件复制到/usr/local/bin目录下：

```bash
sudo cp deploy.sh /usr/local/bin/deploy
```

这个命令将文件复制到/usr/local/bin目录下，并将文件名改为`deploy`。这个目录通常是系统的PATH环境变量包含的目录之一。

3. 添加执行权限：

```bash
sudo chmod +x /usr/local/bin/deploy
```

这个命令将给`/usr/local/bin/deploy`文件添加可执行权限。

4. 现在您可以在任意目录下运行该命令了：

```bash
deploy
```

这个命令会执行`/usr/local/bin/deploy`文件，依次执行`npm run build`和`cp`命令。

请注意，如果您在执行命令时仍然遇到权限问题，可以尝试使用sudo命令以root权限运行该命令。

---

```
cat ~/.ssh/id_rsa.pub | ssh root@121.220.83.133 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

---

### SSH秘钥，这样就不用每次连接服务器都输入密码了

在默认情况下，每次使用 `scp` 命令都需要输入远程主机的密码。为了避免每次手动输入密码，您可以使用 SSH 公钥认证的方式。

SSH 公钥认证的基本原理是，在本地主机上生成一对公钥和私钥，将公钥复制到远程主机上，然后将私钥用于本地主机与远程主机之间的认证，这样就可以实现自动登录，不再需要手动输入密码。

以下是使用 SSH 公钥认证的步骤：

1. 在本地主机上生成 SSH 密钥对。

```
ssh-keygen -t rsa
```

按照提示输入文件名和密码。如果您不想设置密码，可以直接按回车键。

2. 将公钥复制到远程主机上。

```
ssh-copy-id username@remote_host
```

[如果windows终端执行不了这个代码，则需要安装git,用Git的bash终端来执行这个命令]

其中 `username` 是远程主机上的用户名，`remote_host` 是远程主机的 IP 地址或主机名。运行命令后，您需要输入远程主机的密码。

3. 测试 SSH 公钥认证是否生效。

```
ssh root@121.220.83.133
```

如果 SSH 公钥认证设置成功，您将可以直接登录到远程主机，不再需要输入密码。此时，您可以使用 `scp` 命令将文件上传到远程主机，不再需要手动输入密码。

---

```bash
rsync -avzhe ssh --delete C:\Users\wingxu\wiki root@121.220.83.133:/www/wwwroot/konglong
```

