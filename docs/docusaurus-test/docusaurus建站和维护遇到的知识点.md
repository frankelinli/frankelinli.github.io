---
date: 2024-04-06 03:00

---

建站容易，维护难。记录一些知识点。

### 设置docusaurus blog的网址结构

> http://localhost:3000/blog/2024/04/01/2024年4月1号

"2024/04/01/文件名"这种结构。

方法是在Blog目录下，先创建2024目录，然后在2024目录下的文件都用这个格式来命名：04-04-文件名.md

好处是，每年建立一个文件夹。让Blog目录下不至于存放上千个文件。

![image-20240406040603928](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/image-20240406040603928.png)

:+1:完美实现我想要的功能。



### `enableUpdateTime`最近更新日期

enableUpdateTime选项启用最后更新日期DD/MM/YYYY功能。但是，该值对于每个页面都是相同的？如何解决？

最后一次更新日期是查看文件的Git历史计算出来的。

解决方案：在Github Action工作流中，获取你所有的github历史记录。默认情况下，它只获取最后一次提交。

```yaml
steps:
    - uses: actions/checkout@v3
      with:
        fetch-depth: 0
```

### .gitignore失效

突然遇到.gitignore失效了，把.docusaurus, node-moulde都上传到GitHub了。如何解决？

在项目开发过程中个，一般都会添加 .gitignore 文件，规则很简单，但有时会发现，规则不生效。
原因是 .gitignore 只能忽略那些原来没有被track的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。
那么解决方法就是先把本地缓存删除（改变成未track状态），然后再提交。

```bash
git rm -r --cached .

git add .

git commit -m 'update .gitignore'

git push
```



### 给docusaurus站点添加Google adsense广告

1. https://www.google.com/adsense  在google里设置好，获取google adsense广告代码。复制代码。

2. 在docusaurus.config配置文件里，把adsense广告代码，添加进去：
   ``` json
     scripts: [
       // // String format.
       // 'https://docusaurus.io/script.js',
       // Object format.
       {
         src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-41162283436784234310',
         async: true,
         crossorigin: "anonymous"
       },
     ],
   ```

   :::tip

   要把获得的google adsense广告代码稍微修改.如上面config配置。

   :::

### 修改Sidebar.js后要重启

修改Sidebar.js后，localhost不会实时呈现。需要关闭，重新npm start后，才能看到效果。



### 不要轻易升级docusaurus

:::danger
**等到docusaurus 4的时候再升级！其他不要动。否则浪费时间。**

太浪费时间！！

不要轻易升级！！！

官网说的很轻松，实际很多坑！
::::

