---
date: 2024-03-24 22:14
---

用bat命令行脚本，自动执行git commit, git push。点击这个脚本，就可以自动运行了。`chcp 65001 > nul`是为了让终端显示中文，否则会乱码。

好用的要哭！从此告别以下步骤：

1. git add .
2. git commit -m 'test xcfdf'
3. git push

<!-- truncate -->

![image-20240324222044694](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/image-20240324222044694.png)

``` bat title='/auto git push.bat'
@echo off
chcp 65001 > nul
echo 正在执行 Git 命令...

echo 添加更改到git...
git add .
timeout /t 2

echo 正在提交更改...
git commit -m "自动提交"
timeout /t 2

echo 正在推送更改到远程仓库...
git push
timeout /t 2

echo Git 命令执行成功。
pause
```



批处理命令自动git push到GitHub，GitHub action自动执行deploy生成网页，哎呀，妈耶，过程太丝滑，全自动！

写好博客后，点击以下这个批处理脚本，就万事大吉了！！！



