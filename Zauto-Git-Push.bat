@echo off
echo Executing Git commands...

REM 添加所有更改
echo 添加所有更改...
git add .
timeout /t 3

REM 提交更改
echo 提交更改...
git commit -m "Auto commit"
timeout /t 3

REM 推送到远程仓库
echo 推送到远程仓库...
git push

echo 执行成功.
pause