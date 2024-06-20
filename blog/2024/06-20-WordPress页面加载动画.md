---
date: 2024-06-20 19:41
slug: WordPress页面加载动画
---

### 页面加载动画

在页面加载时显示一个动画，增强用户体验。

#### 在 `functions.php` 文件中添加代码

<!-- truncate -->

```php
function add_page_loading_animation() {
    if (!is_admin()) {
        echo '
        <style>
            #loading-animation {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #fff;
                z-index: 10000;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 24px;
                color: #000;
            }
        </style>
        <div id="loading-animation">Loading...</div>
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                var loadingAnimation = document.getElementById("loading-animation");
                window.addEventListener("load", function() {
                    loadingAnimation.style.display = "none";
                });
            });
        </script>';
    }
}
add_action('wp_footer', 'add_page_loading_animation');
```

:::tip

把html, CSS, JS封装在一个函数里，只是为了快速实现效果，并不是实际最佳方案。实际生产中，把html, JS，CSS放到专门的外部文件是最好。那样可以缓存。

:::

### 夜间模式切换

为网站添加一个夜间模式切换按钮，用户可以在白天和夜间模式之间切换，偏好通过 `localStorage` 保存。

#### 在 `functions.php` 文件中添加代码

```php
function add_night_mode_toggle() {
    if (!is_admin()) {
        echo '
        <style>
            #night-mode-toggle {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: #000;
                color: #fff;
                padding: 10px;
                border-radius: 5px;
                cursor: pointer;
                z-index: 1000;
            }
            body.night-mode {
                background-color: #121212;
                color: #ffffff;
            }
        </style>
        <div id="night-mode-toggle">Night Mode</div>
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                var nightModeToggle = document.getElementById("night-mode-toggle");
                var body = document.body;

                // Check for saved night mode preference
                if (localStorage.getItem("nightMode") === "enabled") {
                    body.classList.add("night-mode");
                }

                nightModeToggle.addEventListener("click", function() {
                    body.classList.toggle("night-mode");
                    if (body.classList.contains("night-mode")) {
                        localStorage.setItem("nightMode", "enabled");
                    } else {
                        localStorage.removeItem("nightMode");
                    }
                });
            });
        </script>';
    }
}
add_action('wp_footer', 'add_night_mode_toggle');
```

:::warning

这个夜间切换功能非常粗糙。只是演示功能。

:::

### 总结

这些例子展示了如何利用 WordPress 的内置函数、JavaScript 和 CSS 实现一些令人惊讶且实用的功能：

1. **实时字符计数器**：帮助用户在评论时了解剩余字符数量。
2. **动态内容推荐**：根据当前文章的标签推荐相关内容。
3. **限时优惠倒计时**：在页面顶部显示一个限时优惠倒计时条。
4. **页面加载动画**：在页面加载时显示一个动画。
5. **夜间模式切换**：为网站添加一个夜间模式切换按钮。

这些功能不仅提升了网站的用户体验，还展示了前端和后端技术的整合应用。你可以根据具体需求进一步调整和扩展这些代码。
