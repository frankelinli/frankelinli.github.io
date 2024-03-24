@echo off
echo Executing Git commands...

REM 添加所有更改
echo Adding all changes...
git add .
timeout /t 1

REM 提交更改
echo Committing changes...
git commit -m "Auto commit"
timeout /t 1

REM 推送到远程仓库
echo Pushing changes to remote repository...
git push

echo Git commands executed successfully.
pause