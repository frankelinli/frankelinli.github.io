---
date: 2024-06-16 16:20
slug: wordpress全站禁止鼠标复制文字和鼠标右键
---

在WordPress网站上禁止鼠标左键和右键点击，可以通过添加自定义的JavaScript代码来实现。这些代码可以放在主题的`functions.php`文件中，或者通过安装插件来添加自定义代码。以下是两种实现方法：

### 方法一：在`functions.php`文件中添加代码

1. 进入WordPress后台，导航到外观 > 主题文件编辑器。
2. 在右侧选择`functions.php`文件。
3. 在文件的末尾添加以下代码：

<!-- truncate -->

```php
function disable_mouse_clicks() {
    ?>
    <script type="text/javascript">
        // 禁止鼠标右键点击
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        // 禁止鼠标左键点击选择文本
        document.addEventListener('mousedown', function(e) {
            if (e.button == 0) {
                e.preventDefault();
            }
        });

        // 禁止键盘快捷键 (如Ctrl+C)
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'a')) {
                e.preventDefault();
            }
        });
    </script>
    <?php
}
add_action('wp_footer', 'disable_mouse_clicks');

```

我是通过修改子主题的function来实现的。
