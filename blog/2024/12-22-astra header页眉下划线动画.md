---
date: 2024-12-22 12:56
slug: astra header页眉下划线动画
---



对于Astra主题头部菜单导航的hover下划线动画效果，提供以下解决方案：

<!-- truncate -->

没问题，上面的代码已经实现了从左到右展开的效果。因为我们使用了：
- `width: 0` 到 `width: 100%` 的过渡
- `transition: all 0.1s linear`
- `left: 0` 确保从左边开始

但如果你觉得效果不够明显，我们可以稍微调整过渡时间和动画曲线，让效果更加清晰：

```php
function add_header_underline_animation() {
    ?>
    <style>
        .main-header-menu a {
            position: relative;
        }
        
        .main-header-menu a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: currentColor;
            /* 增加过渡时间，使用 ease-out 使动画更自然 */
            transition: width 0.3s ease-out;
            opacity: 1;
        }
        
        .main-header-menu a:hover::after {
            width: 100%;
        }
    </style>
    <?php
}
add_action('wp_head', 'add_header_underline_animation');
```

主要改动：
1. 将过渡时间从0.1s改为0.3s，使动画更容易观察
2. 使用 `ease-out` 替代 `linear`，让动画更自然
3. 移除了opacity的过渡，专注于宽度的变化
4. 明确指定只对width属性进行过渡（`transition: width 0.3s ease-out`）

这样下划线会更明显地呈现出从左到右逐渐展开的效果。如果想调整动画速度，可以修改0.3s这个值。
