@echo off
echo Executing Git commands...

REM 添加所有更改
git add .

REM 提交更改
git commit -m "Auto commit"

REM 推送到远程仓库
git push

echo Git commands executed successfully.
pause