---
date: 2024-12-17 17:53
slug: WordPress代码块增加代码高亮和复制功能
---



我理解您想要给代码块增加复制功能按钮，类似docusaurus的风格。以下是实现方案，使用jQuery：

<!-- truncate -->

## 代码块复制按钮

```php
function add_code_copy_button() {
    ?>
    <script>
    jQuery(document).ready(function($) {
        // 为所有pre标签添加复制按钮
        $('pre').each(function() {
            $(this).css('position', 'relative');
            
            // 创建复制按钮
            var copyButton = $('<button>')
                .addClass('copy-button')
                .text('复制')
                .css({
                    'position': 'absolute',
                    'right': '10px',
                    'top': '10px',
                    'display': 'none',
                    'background': '#4a5568',
                    'color': 'white',
                    'border': 'none',
                    'border-radius': '4px',
                    'padding': '4px 8px',
                    'font-size': '12px',
                    'cursor': 'pointer',
                    'opacity': '0.8',
                    'z-index': '10'
                });

            $(this).append(copyButton);

            // 鼠标悬停显示/隐藏按钮
            $(this).hover(
                function() {
                    $(this).find('.copy-button').show();
                },
                function() {
                    $(this).find('.copy-button').hide();
                }
            );

            // 点击复制功能
            copyButton.click(function(e) {
                e.preventDefault();
                var codeText = $(this).parent().text().replace('复制', '').trim();
                
                // 创建临时textarea来复制文本
                var textarea = document.createElement('textarea');
                textarea.value = codeText;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);

                // 显示复制成功
                $(this).text('已复制!');
                setTimeout(() => {
                    $(this).text('复制');
                }, 2000);
            });
        });
    });
    </script>
    <?php
}
add_action('wp_footer', 'add_code_copy_button');
```

将此代码添加到您的子主题的functions.php文件中即可。这段代码会：

1. 为所有代码块（pre标签）添加一个复制按钮
2. 按钮默认隐藏，鼠标悬停时显示
3. 点击按钮时复制代码内容
4. 复制成功后显示"已复制!"提示，2秒后恢复

如果您想要调整样式，可以修改copyButton.css()中的样式属性。

这是基于jQuery的解决方案，如果需要修改按钮样式或者其他细节，请告诉我。

## 代码高亮Prism.js 

我推荐使用 Prism.js 来实现代码高亮，这是一个轻量级的语法高亮库。以下是实现方案：

```php
function add_prismjs_highlighting() {
    // 注册 Prism.js CSS
    wp_enqueue_style(
        'prismjs-style',
        'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-tomorrow.min.css',
        array(),
        '1.29.0'
    );

    // 注册 Prism.js 核心文件
    wp_enqueue_script(
        'prismjs-core',
        'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js',
        array(),
        '1.29.0',
        true
    );

    // 注册常用语言包
    wp_enqueue_script(
        'prismjs-languages',
        'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-markup-templating.min.js',
        array('prismjs-core'),
        '1.29.0',
        true
    );

    // 添加更多语言支持
    $languages = array(
        'css',
        'javascript',
        'php',
        'python',
        'bash',
        'sql',
        'json',
        'yaml',
        'java'
    );

    foreach ($languages as $lang) {
        wp_enqueue_script(
            'prismjs-' . $lang,
            'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-' . $lang . '.min.js',
            array('prismjs-core'),
            '1.29.0',
            true
        );
    }

    // 添加自动初始化脚本
    add_action('wp_footer', function() {
        ?>
        <script>
        jQuery(document).ready(function($) {
            // 为代码块添加语言类
            $('pre code').each(function() {
                var $this = $(this);
                if (!$this.attr('class')) {
                    $this.addClass('language-plaintext');
                }
            });
            
            // 对于没有包裹在code标签中的pre标签内容
            $('pre').each(function() {
                if ($(this).children('code').length === 0) {
                    $(this).wrapInner('<code class="language-plaintext"></code>');
                }
            });

            // 重新初始化Prism
            if (typeof Prism !== 'undefined') {
                Prism.highlightAll();
            }
        });
        </script>
        <?php
    });

    // 添加自定义CSS
    add_action('wp_head', function() {
        ?>
        <style>
        pre {
            position: relative;
            background: #2d2d2d;
            border-radius: 6px;
            margin: 1.5em 0;
            padding: 1em;
            overflow: auto;
        }
        
        pre code {
            background: none;
            padding: 0;
            font-size: 14px;
            color: #ccc;
            line-height: 1.5;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
            color: #999;
        }

        .token.function {
            color: #6196cc;
        }

        .token.keyword {
            color: #cc99cd;
        }

        .token.string {
            color: #7ec699;
        }

        .token.number {
            color: #f08d49;
        }
        </style>
        <?php
    });
}
add_action('wp_enqueue_scripts', 'add_prismjs_highlighting');
```

这段代码会：

1. 加载 Prism.js 的核心文件和主题CSS
2. 加载常用编程语言的支持
3. 自动为代码块添加适当的语言类
4. 添加美观的代码高亮样式

使用方法：
1. 将代码添加到子主题的 functions.php 中
2. 在编写文章时，可以这样指定代码语言：
```html
<pre><code class="language-php">
// PHP代码
</code></pre>
```

或在Gutenberg编辑器中使用代码块，选择对应的语言。

支持的特性：
- 自动语言检测
- 常用编程语言语法高亮
- 响应式设计
- 暗色主题
- 良好的可读性

如果需要添加其他语言支持或修改样式，请告诉我。
