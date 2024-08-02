## 用Astra hook钩子函数注入内容

functions.php里如下：

```php
//使用astra_primary_content_bottom这个hook往单页博客里注入右边栏元素
function add_custom_right_content() {
    if (is_single()) {
        echo '</div>';//重要！务必要有，关闭primary的标签；
    echo '<div class="custom-right-content">';
    echo '<div class="widget-content toc-widget">';
    echo '<h3 class="widget-title">目录<button class="toc-toggle">☰</button></h3>';
    echo '<nav class="toc-content" id="toc"></nav>';
    echo '</div>'; // .widget-content
    echo '</div>'; // .custom-right-content
    }
}
add_action('astra_primary_content_bottom', 'add_custom_right_content', 5);
```

:::warning 警告

`echo '</div>';`  重要！务必要有，关闭primary的标签；否则页面布局失败；

:::

## 引入tocbot外部库，实现右边目录

```php

function enqueue_toc_scripts() {
    wp_enqueue_script('tocbot', 'https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.11.1/tocbot.min.js', array(), '4.11.1', true);
    wp_enqueue_style('tocbot-style', 'https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.11.1/tocbot.css', array(), '4.11.1');
    wp_enqueue_script('custom-toc', get_stylesheet_directory_uri() . '/custom-toc.js', array('tocbot'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'enqueue_toc_scripts');

//tocbot使用，给每个标题自动生成与标题文字一样的id
function add_ids_to_headings($content) {
    $pattern = '/<h([1-6])(.*?)>(.*?)<\/h[1-6]>/i';
    $content = preg_replace_callback($pattern, function($matches) {
        $level = $matches[1];
        $attrs = $matches[2];
        $title = $matches[3];
        $id = sanitize_title($title);
        return "<h$level$attrs id=\"$id\">$title</h$level>";
    }, $content);
    return $content;
}
add_filter('the_content', 'add_ids_to_headings');
```

## custome-toc.js

```js
document.addEventListener('DOMContentLoaded', function() {
    tocbot.init({
        // Where to render the table of contents.
        tocSelector: '.toc-content',
        // Where to grab the headings to build the table of contents.
        contentSelector: '.entry-content',
        // Which headings to grab inside of the contentSelector element.
        headingSelector: 'h2, h3, h4, h5, h6',
        // For headings inside relative or absolute positioned containers within content.
        hasInnerContainers: true,
        // Smooth scroll options
        scrollSmooth: false,
        // scrollSmoothOffset: ,
        // 确保生成链接
        linkClass: 'toc-link',
        extraLinkClasses: '',
        activeLinkClass: 'is-active-link',
        listClass: 'toc-list',
        extraListClasses: '',
        isCollapsedClass: 'is-collapsed',
        collapsibleClass: 'is-collapsible',
        listItemClass: 'toc-list-item',
        // 新增：自定义 ID 生成
        headingsOffset: 40,
        scrollSmoothDuration: 300,
        orderedList: false,
        collapseDepth: 6,
        headingObjectCallback: function(object, element) {
            // 使用标题文本生成 ID
            if (!element.id) {
                element.id = element.textContent.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
            }
            return object;
        },    
               
        
    });

    const tocToggle = document.querySelector('.toc-toggle');
    const tocContent = document.querySelector('.toc-content');

    if (tocToggle && tocContent) {
        tocToggle.addEventListener('click', function() {
            tocContent.classList.toggle('active');
        });
    }

    // 如果 TOC 为空，显示一条消息
    if (tocContent && tocContent.children.length === 0) {
        tocContent.innerHTML = '';
    }
});
```

## CSS控制hook注入的内容，实现右边栏；

```css

.entry-content h1,
.entry-content h2,
.entry-content h3,
.entry-content h4,
.entry-content h5,
.entry-content h6 {
    margin-top: 0px; 
}

.ast-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

#secondary.widget-area {
    flex: 0 0 20%;
    max-width: 20%;
    order: 1;
    padding: 64px 0 0 0;
    margin-top: 0px;
    
}

#primary.content-area {
    flex: 0 0 55%;
    max-width: 55%;
    order: 2;
}

.custom-right-content {
    flex: 0 0 25%;
    max-width: 25%;
    order: 3;
    padding: 64px 0px 0px 0px;
    box-sizing: border-box;
}

.toc-widget {
    background-color: #f9f9f9;
    border-left: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 15px;
    position: sticky;
    top: 20px;
    max-height: calc(100vh - 80px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.widget-title {
    margin-top: 0;
    display: flex;
    justify-content: flex-start;

   
}

.toc-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.2em;
    cursor: pointer;
}

.toc-content {
    overflow-y: auto;
    flex-grow: 1;
}

 Tocbot 自定义样式 
.toc-list {
    padding-left: 20px;
    list-style-type: none;
}

.toc-list-item {
    margin-bottom: 5px;
}

.toc-link {
    cursor: pointer;
    color: #333;
    text-decoration: none;
}

.toc-link:hover {
    text-decoration: underline;
}

.is-active-link {
    font-weight: 700;
}

@media (max-width: 921px) {
    #secondary.widget-area,
    #primary.content-area,
    .custom-right-content {
        flex: 0 0 100%;
        max-width: 100%;
        padding-left: 0;
        padding-right: 0;
    }

    #secondary.widget-area {
        order: 3;
    }

    #primary.content-area {
        order: 2;
    }

    .custom-right-content {
        order: 1;
    }

    .toc-widget {
        position: static;
        max-height: none;
        overflow: visible;
    }

    .toc-toggle {
        display: block;
    }

    .toc-content {
        display: none;
        max-height: none;
        overflow: visible;
    }

    .toc-content.active {
        display: block;
    }
}
```

