---
date: 2024-06-17 00:48
slug: WordPress子主题实现首页浮动提示框
---

### 问题

1. **在Astra子主题中制作一个浮动的提醒文字DIV，显示报名时间开始和截至日期，并在首页浮动。**
2. **使该浮动DIV可以在主屏四处移动，提醒的文字要醒目。**
3. **浮动DIV在屏幕上自动移动，而不是通过拖拽。**
4. **当鼠标悬停在浮动DIV上时，该DIV停止移动，鼠标移开时恢复移动。**

### 解决方案
#### 1. 在子主题中添加CSS和JavaScript文件
在您的子主题目录中，创建一个 `style.css` 文件和一个 `script.js` 文件。

<!-- truncate -->

#### 2. 修改 `functions.php` 文件

确保子主题的 `functions.php` 文件中排队添加您的CSS和JavaScript文件：

```php
<?php
function enqueue_child_theme_styles() {
    // Enqueue parent styles
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    
    // Enqueue child styles
    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style'));

    // Enqueue custom script
    wp_enqueue_script('custom-script', get_stylesheet_directory_uri() . '/script.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_child_theme_styles');
```

#### 3. 添加样式 (`style.css`)

确保浮动DIV的样式醒目并适合在屏幕四处移动：

```css
.floating-reminder {
    position: fixed;
    background-color: rgba(255, 0, 0, 0.8); /* 红色背景，更加醒目 */
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    z-index: 1000;
    max-width: 300px;
    text-align: center;
    color: #fff; /* 白色文字 */
    font-size: 20px; /* 加大字体 */
    font-weight: bold; /* 加粗字体 */
}
```

#### 4. 添加JavaScript代码 (`script.js`)

使浮动DIV自动在屏幕四处移动，并在鼠标悬停时停止移动，鼠标移开时恢复移动：

```js
jQuery(document).ready(function($) {
    var reminderContent = `
        <div class="floating-reminder">
            <h2>提醒</h2>
            <p>报名时间开始日期：2024-06-20</p>
            <p>报名时间截至日期：2024-07-10</p>
        </div>
    `;

    $('body').append(reminderContent);

    var $reminder = $('.floating-reminder');
    var directionX = 1;
    var directionY = 1;
    var speed = 0.5; // 调整移动速度

    var isHovered = false;

    function moveReminder() {
        if (!isHovered) {
            var windowWidth = $(window).width();
            var windowHeight = $(window).height();
            var reminderWidth = $reminder.outerWidth();
            var reminderHeight = $reminder.outerHeight();
            var currentLeft = $reminder.offset().left;
            var currentTop = $reminder.offset().top;

            if (currentLeft <= 0 || currentLeft + reminderWidth >= windowWidth) {
                directionX *= -1; // 反转水平方向
            }
            if (currentTop <= 0 || currentTop + reminderHeight >= windowHeight) {
                directionY *= -1; // 反转垂直方向
            }

            $reminder.css({
                left: currentLeft + directionX * speed,
                top: currentTop + directionY * speed
            });
        }

        requestAnimationFrame(moveReminder);
    }

    // 初始化位置
    $reminder.css({
        left: ($(window).width() - $reminder.outerWidth()) / 2,
        top: ($(window).height() - $reminder.outerHeight()) / 2
    });

    $reminder.hover(
        function() {
            isHovered = true; // 鼠标悬停时停止移动
        },
        function() {
            isHovered = false; // 鼠标移开时恢复移动
        }
    );

    moveReminder();
});
```

### 5. 确保子主题激活

确保您的子主题已经在WordPress后台激活。如果还没有激活，请前往`外观 -> 主题`，然后激活您的子主题。
