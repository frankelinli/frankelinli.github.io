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