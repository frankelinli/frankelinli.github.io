平时自己敲敲代码，使用Git命令也渐渐多了起来。使用起来的确很方便，今天来分享下Git基本概念和本地代码提交到github上的过程，很简单的，多操作几次就会了。

## Git定义

Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。

Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。

## Git 与 SVN 区别

**1、Git 是分布式的，SVN 不是**：这是 Git 和其它非分布式的版本控制系统，例如 SVN，CVS 等，最核心的区别。

**2、Git 把内容按元数据方式存储，而 SVN 是按文件：**所有的资源控制系统都是把文件的元信息隐藏在一个类似 .svn、.cvs 等的文件夹里。

**3、Git 分支和 SVN 的分支不同：**分支在 SVN 中一点都不特别，其实它就是版本库中的另外一个目录。

**4、Git 没有一个全局的版本号，而 SVN 有：**目前为止这是跟 SVN 相比 Git 缺少的最大的一个特征。

**5、Git 的内容完整性要优于 SVN：**Git 的内容存储使用的是 SHA-1 哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏。

## Git安装

Git的安装就各取所需了，看各自是在什么平台上使用。如果是在windows系统操作的话，在该地址下载exe文件：https://gitforwindows.org/，安装即可。

安装成功后，就可以使用命令行的git工具（已经自带了ssh客户端）了，另外还有一个图形界面的 Git 项目管理工具。

在开始菜单里找到"Git"->"Git Bash"，会弹出Git命令窗口，你可以在该窗口进行Git操作。

## Git基本命令

### 新建代码库



```
# 在当前目录新建一个 Git 代码库
git init

# 新建一个目录，将其初始化为 Git 代码库
git init [project-name]

# 下载一个项目和它的整个代码历史
git clone [url]
```

### 配置文件

Git的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。



```
# 显示当前的 Git 配置
git config --list

# 编辑 Git 配置文件
git config -e [--global]

# 设置提交代码时的用户信息
git config [--global] user.name "[name]"
git config [--global] user.email "[email address]"
```

### 增加/删除文件



```
# 添加指定文件到暂存区
git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
git add [dir]

# 添加当前目录的所有文件到暂存区
git add .

# 删除工作区文件，并且将这次删除放入暂存区
git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
git mv [file-original] [file-renamed]


代码提交
# 提交暂存区到仓库区
git commit -m [message]

# 提交暂存区的指定文件到仓库区
git commit [file1] [file2] ... -m [message]

# 提交工作区自上次 commit 之后的变化，直接到仓库区
git commit -a

# 提交时显示所有 diff 信息
git commit -v

# 使用一次新的 commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次 commit 的提交信息
git commit --amend -m [message]

# 重做上一次 commit，并包括指定文件的新变化
git commit --amend   ...
```

### 分支操作



```
# 列出所有本地分支
git branch

# 列出所有远程分支
git branch -r

# 列出所有本地分支和远程分支
git branch -a

# 新建一个分支，但依然停留在当前分支
git branch [branch-name]

# 新建一个分支，并切换到该分支
git checkout -b [branch]

# 新建一个分支，指向指定 commit
git branch [branch] [commit]

# 新建一个分支，与指定的远程分支建立追踪关系
git branch --track [branch] [remote-branch]

# 切换到指定分支，并更新工作区
git checkout [branch-name]

# 建立追踪关系，在现有分支与指定的远程分支之间
git branch --set-upstream [branch] [remote-branch]

# 合并指定分支到当前分支
git merge [branch]

# 选择一个 commit，合并进当前分支
git cherry-pick [commit]

# 删除分支
git branch -d [branch-name]

# 删除远程分支
git push origin --delete 
git branch -dr
```

### 查看信息



```
# 显示有变更的文件
git status

# 显示当前分支的版本历史
git log

git log --pretty=oneline  # 使用不同于默认格式的方式展示提交历史
git log --online  # 简洁展示历史
git log --oneline --all  # 分支所有呈现
git log --stat  # 显示 commit 历史，以及每次 commit 发生变更的文件交
git log -p [file]  # 显示指定文件相关的每一次 diff
git log -p -2      # 展示最近的两次提交
git log -n4 --online  # 看最近的历史消息
git branch -v  # 看本地有多少分支
git checkout -b dashu 223343232  # 分支 , 修改分支

# 显示暂存区和工作区的差异
git diff

# 显示暂存区和上一个 commit 的差异
git diff --cached []

# 显示工作区与当前分支最新 commit 之间的差异
git diff HEAD

# 显示两次提交之间的差异/两个分支的比较
git diff [first-branch]...[second-branch]
git diff test master # 本地和本地
git diff test origin/test # 本地和远程

# 显示某次提交的元数据和内容变化
git show [commit]

# 显示某次提交发生变化的文件
git show --name-only [commit]

# 显示某次提交时，某个文件的内容
git show [commit]:[filename]

# 显示当前分支的最近几次提交
git reflog
```

### 远程同步



```
# 下载远程仓库的所有变动
git fetch [remote]

# 显示所有远程仓库
git remote -v

# 显示某个远程仓库的信息
git remote show [remote]

# 增加一个新的远程仓库，并命名
git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
git pull [remote] [branch]

# 上传本地指定分支到远程仓库
git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
git push [remote] --force

# 推送所有分支到远程仓库
git push [remote] --all
```

## 代码提交github

了解了如上命令，是不是想实践一番了？那就跟我来再实践一波，你会发现，Git的基本使用并不是那么难。

首先需要有github账号，这个自行注册。

### 新建仓库

新建仓库有两种方式，可以直接在github中创建，也可以使用命令操作。

#### github创建

直接在github中仓库，操作如下所示：

[![img](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522171816898-178539344.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522171816898-178539344.png)

输入仓库信息，如下：

[![img](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522171856264-528726732.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522171856264-528726732.png)

#### 命令创建

通过git终端，进入到已有内容的文件夹目录下，输入命令**git init**即可，初始化仓库。

### 配置身份

配置了身份，这样提交代码的时候系统就知道是谁提交的了，命令如下：

```
git config --global user.name ``"yourName"` `//注意，--和global之间没有空格` `git config --global user.email ``"yourName@mail.com"
```

检查是否配置成功，输入：

```
git config --global user.name` `git config --global user.email
```

 如图所示：

[![img](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522173101981-604610275.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522173101981-604610275.png)

### 秘钥配置

#### 生成秘钥

如何正常与github建立连接？就需要密码配置，生成秘钥命令如下：

```
ssh-keygen -t rsa -C ``"github注册邮箱"
```

 操作如下所示：

[![img](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522173556108-1670904934.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522173556108-1670904934.png)

#### 配置秘钥

生成的秘钥文件存在目录为：用户目录下的.ssh文件夹

github配置的路径是：设置>ssh keys

[![img](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522173817747-2067284804.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522173817747-2067284804.png)

将id_rsa.pub文件内容复制到key中即可，配置成功后，如下所示：

[![img](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522174716773-440755689.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522174716773-440755689.png)

### 提交代码

#### 添加指定文件到暂存区

使用命令 **git add [file1]**

操作如下所示：

[![img](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522175154053-1079994801.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522175154053-1079994801.png)

#### 提交暂存区到仓库区

使用命令 **git commit -m [message]**

操作如下所示：

[![img](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522175227413-682458329.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522175227413-682458329.png)

#### 连接远程仓库

使用命令**git remote add origin https://github.com/用户名/仓库名.git**

操作如下所示：

**[![img](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522175936775-728432202.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522175936775-728432202.png)**

#### 上传本地指定分支到远程仓库

使用命令**git push -u origin master**

操作如下所示：

[![img](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522180101038-96789219.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522180101038-96789219.png)

代码提交成功后，就可以在github中查看已提交的代码了。