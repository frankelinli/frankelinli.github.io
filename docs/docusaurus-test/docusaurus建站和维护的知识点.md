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

## `enableUpdateTime` 选项启用最后更新日期DD/MM/YYYY功能。但是，每个个页面都是相同的“最后更新日期”？如何解决？

最后一次更新日期是查看文件的Git历史计算出来的。

解决方案：在Github Action工作流中，获取你所有的github历史记录。默认情况下，它只获取最后一次提交。

```yaml
steps:
    - uses: actions/checkout@v3
      with:
        fetch-depth: 0
```
