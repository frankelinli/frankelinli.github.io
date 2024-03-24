@echo off
chcp 65001 > nul
echo 正在执行 Git 命令...

REM 添加所有更改
echo 添加所有更改到git...
git add .
timeout /t 2

REM 提交更改
echo 正在提交更改...
git commit -m "自动提交"
timeout /t 2

REM 推送到远程仓库
echo 正在推送更改到远程仓库...
git push
timeout /t 2

echo Git 命令执行成功。
pause