通过一个批处理命令，把docusaurus自动构建、自动发布到腾讯云空间，也就说，写完文章后，只要点击这个bat命令文件，就可以自动发布成网页的功能。

这个批处理命令，分为2步骤：

1. 在CMD中运行npm run build
2. 把构建好的build文件夹上传到腾讯云的网站根目录下。

前提是要把本机和你购买的云空间建立公钥、私钥的关系。这样就可以实现免密码自动上传。

非常简单！



```bash

REM 设置命令行编码为UTF-8，以支持中文字符
chcp 65001 > nul

REM 获取当前时间
set start_time=%time%

echo ********************正在构建 npm run build...********************
call npm run build

echo *******正在将build目录中的所有内容复制到远程服务器网站根目录mart...*******
scp -r ./build/* root@111.230.81.144:/www/wwwroot/www.abcfed.com/docu

echo *******复制完成！*******

REM 获取结束时间
set end_time=%time%

REM 计算并显示总耗时
echo 总耗时：%time:~0,2%小时%time:~3,2%分钟%time:~6,2%秒

echo *******全部完成了！摁下任意键退出*******
pause>nul
```