@echo off

REM 设置命令行编码为UTF-8，以支持中文字符
chcp 65001 > nul

REM 获取当前时间
set start_time=%time%

echo ********************正在构建 npm run build...********************
call npm run build

echo *******正在将build目录中的所有内容复制到远程服务器网站根目录mart...*******
scp -r ./build/* root@111.232.34.124:/www/wwwroot/www.abcfed.com/docu

echo *******复制完成！*******

REM 获取结束时间
set end_time=%time%

REM 计算并显示总耗时
echo 总耗时：%time:~0,2%小时%time:~3,2%分钟%time:~6,2%秒

echo *******全部完成了！摁下任意键退出*******
pause>nul