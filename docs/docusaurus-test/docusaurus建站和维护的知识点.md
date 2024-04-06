---
date: 2024-04-06 03:00

---

建站容易，维护难。记录一些知识点。

## 如何让blog的网址像这个结构？

> http://localhost:3000/blog/2024/04/01/2024年4月1号

"2024/04/01/文件名"这种结构。

方法是在Blog目录下，先创建2024目录，然后在2024目录下的文件都用这个格式来命名：04-04-文件名.md

好处是，每年建立一个文件夹。让Blog目录下不至于存放上千个文件。

![image-20240406040603928](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/image-20240406040603928.png)

<<<<<<< HEAD
:+1:完美实现我想要的功能。

## `enableUpdateTime` 选项启用最后更新日期DD/MM/YYYY功能。但是，该值对于每个页面都是相同的？如何解决？

最后一次更新日期是查看文件的Git历史计算出来的。

解决方案：在Github Action工作流中，获取你所有的github历史记录。默认情况下，它只获取最后一次提交。

```yaml
steps:
    - uses: actions/checkout@v3
      with:
        fetch-depth: 0
```

### 突然遇到.gitignore失效了，把.docusaurus, node-moulde都上传到GitHub了。如何解决？

在项目开发过程中个，一般都会添加 .gitignore 文件，规则很简单，但有时会发现，规则不生效。
原因是 .gitignore 只能忽略那些原来没有被track的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。
那么解决方法就是先把本地缓存删除（改变成未track状态），然后再提交。

```bash
git rm -r --cached .

git add .

git commit -m 'update .gitignore'

git push
```
