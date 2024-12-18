---
date: 2024-06-17 21:54
slug: 给WordPress标题前面加个一色块
---

为了给WordPress网站中所有的`<h2>`到`<h6>`标题前面添加一个色块，可以通过自定义CSS和jQuery来实现。以下是详细步骤：

### 步骤 1：创建并加载自定义CSS和JavaScript文件

#### 1. 创建并编辑自定义CSS文件

在您的子主题目录中创建一个CSS文件，例如 `custom.css`，并添加以下样式：

<!-- truncate -->

```css
/* 给标题添加色块的样式 */
.heading-color-block {
    position: relative;
    padding-left: 25px; /* 调整这个值来适应色块的宽度 */
}

.heading-color-block::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 15px; /* 色块的宽度 */
    height: 15px; /* 色块的高度 */
    background-color: #3498db; /* 色块的颜色 */
}
```

#### 2. 创建并编辑自定义JavaScript文件

在您的子主题目录中创建一个JavaScript文件，例如 `custom.js`，并添加以下代码：

```javascript
jQuery(document).ready(function($) {
    $('h2, h3, h4, h5, h6').addClass('heading-color-block');
});
```

### 步骤 2：在子主题中加载自定义CSS和JavaScript

[这一步不用每次都改变，有一次就够了]

### 验证效果

启用子主题后，浏览您的网站，检查`<h2>`到`<h6>`标题前是否正确添加了色块。如果所有步骤正确完成，所有这些标题前都应该显示色块。

通过以上步骤，您可以在WordPress子主题中为全站的`<h2>`到`<h6>`标题前添加色块，实现自定义的显示效果。
