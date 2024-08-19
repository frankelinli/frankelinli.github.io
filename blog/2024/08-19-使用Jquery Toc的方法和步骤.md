---
date: 2024-08-19 02:28
slug: 使用Jquery Toc的方法和步骤
---

在长篇文章或复杂的网页内容中,目录(Table of Contents, TOC)可以极大地提升用户体验。本文将指导您如何在WordPress网站中实现一个自动生成的、具有粘性定位和交互效果的目录功能。

<!-- truncate -->

## 1. 引入jQuery TOC插件

首先,我们需要在WordPress中引入jQuery TOC插件。将以下代码添加到您的主题的`functions.php`文件中:

```php
function enqueue_jquery_toc() {
    wp_enqueue_script('jquery-toc', 'https://cdn.jsdelivr.net/npm/jquery.toc@0.4.0/jquery.toc.min.js', array('jquery'), '0.4.0', true);
    
    wp_add_inline_script('jquery-toc', '
        jQuery(document).ready(function($) {
            $("#toc").toc({
                content: ".entry-content",
                headings: "h2,h3,h4,h5,h6"
            });
        });
    ');
}
add_action('wp_enqueue_scripts', 'enqueue_jquery_toc');
```

这段代码做了以下几件事:
1. 从CDN加载jQuery TOC插件。
2. 初始化TOC插件,指定生成目录的内容区域和要包含的标题级别。

:::tip

jQuery TOC非常轻量，只实现了呈现目录，没有任何样式，需要自己定制

:::

## 2. 添加目录容器

在您希望显示目录的位置添加以下HTML代码:

```html
<div id="toc"></div>
```

这个div将作为目录的容器。我添加到了侧边栏。

## 3. 设置TOC样式

为了使目录美观且易于使用,我们需要添加一些CSS样式。将以下CSS代码添加到您的主题的样式文件中:

```css
#block-40 {
  position: sticky;
  top: 40px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  padding: 10px;
  font-size: 0.9rem;
  border-left: 1px solid #dddddd;
}

#toc {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

#toc li {
  margin-bottom: 10px;
  color: #333333;
}

#toc li li {
  padding-left: 15px;
}

#toc li li li {
  padding-left: 15px;
}

#toc li:last-child {
  margin-bottom: 0;
}

#toc li a {
  color: #525860;
}

#toc li a:hover {
  color: #ff4500;
}

#toc a.active {
  color: #ff4500;
}
```

这些样式将使目录具有粘性定位、可滚动、层级缩进,并添加了悬停和激活状态的样式。

## 4. 添加交互效果

最后,我们将添加一些JavaScript代码来增强目录的交互性。将以下代码添加到您的主题的JavaScript文件中:

```javascript
jQuery(document).ready(function($) {
    console.log('TOC script loaded');
    $(document).on('click', '#toc a, #block-41 #toc a', function(e) {
        console.log('TOC link clicked');
        
        $('#toc a, #block-41 #toc a').removeClass('active');
        console.log('Removed active class from all links');
        
        $(this).addClass('active');
        console.log('Added active class to:', this.href);
        
        if ($(this).hasClass('active')) {
            console.log('Active class successfully added');
        } else {
            console.log('Failed to add active class');
        }
    });
});
```

这段代码为目录项添加了点击事件,使当前选中的目录项高亮显示。

:::warning

本项目已经顺利成功。但是侧边栏不会滚动自定高亮。待解决
:::
