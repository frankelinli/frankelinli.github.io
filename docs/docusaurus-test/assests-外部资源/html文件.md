---
slug: /waibuziyuan
---



可以把单独的html文件放在`‘/static'`文件夹下；

然后像访问src下面的pages一样来访问：



```html
http://localhost:3000/haha.html
```



**完美**



:::tip

**独立html页面只有放在'/static/'下才能被访问，如果放在'src/pages/'下面，无法访问！**

而且访问网址时，必须要加上后缀！  

`http://localhost:3000/haha.html` （这样会访问'/static/haha.html')

`http://localhost:3000/haha` (这样会访问'src/pages/haha.md'或者'src/pages/haha.js')

**意思是，把独立html文件，当成和图片、pdf一样的文件**

:::



这样的独立HTML文件，是完全独立于docusaurus系统之外的。
