---
date: 2024-03-27 16:01
---
### docs/test库设置默认页面的方法
例如访问http://localhost:3000/test  ，有三种方法设置默认启动页面

1. index.md
2. readme.md
> 如果定义了_category_.json，则此法失效

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3cc6fb616b1a442bb960e95ff2cc240b~tplv-k3u1fbpfcp-watermark.image?)
然后通过设置front matter来改变侧边栏的文字；虽然文件名是index.md，但是呈现在侧边栏的标题可以通过`title: My Doc Title`来自由定义。完美。


3. docs/test/Phones/_category_.json
```json
{
  "label": "Category Links", //修改左侧栏文字
  "link": {
    "type": "generated-index", //指向自动生成的卡片列表
    "slug": "/category-links-generated-index-slug" 自定义网址后缀
  }
}
```

```json
{
  "label": "手机品牌",
   "link": {
    "type": "doc", //指向文档
    "id": "xiaomi" //定义指向文档的id
  }
}
```