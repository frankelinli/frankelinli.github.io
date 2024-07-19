---
date: 2024-07-19 10:02
slug: header.php和footer.php必须要包含wp_head()和wp_footer()函数
---

在 WordPress 主题开发中，header.php 和 footer.php 文件确实必须分别包含 wp_head() 和 wp_footer() 函数。这两个函数对于 WordPress 主题的正确功能至关重要。让我解释一下原因，并给出一些例子。

<!-- truncate -->

1. header.php 中的 wp_head()

wp_head() 应该放在 header.php 文件的 </head> 标签之前：

```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title( '|', true, 'right' ); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
```

2. footer.php 中的 wp_footer()

wp_footer() 应该放在 footer.php 文件的 </body> 标签之前：

```php
    <footer>
        <!-- 页脚内容 -->
    </footer>
    <?php wp_footer(); ?>
</body>
</html>
```

这两个函数的重要性在于：

1. 插件兼容性：许多 WordPress 插件依赖这些函数来加载必要的脚本和样式。

2. 主题功能：主题自身的一些功能也可能依赖这些函数。

3. WordPress 核心功能：某些 WordPress 核心功能需要这些函数来正确运行。

4. 管理员工具栏：wp_footer() 负责在前端显示 WordPress 管理员工具栏。

5. JavaScript 依赖：很多依赖于 jQuery 的脚本通过 wp_footer() 加载。

如果不包含这些函数，可能会导致以下问题：

- 插件无法正常工作
- JavaScript 错误
- 样式表加载失败
- SEO 相关的元标签缺失
- 管理员工具栏不显示

举个例子，如果你在 functions.php 中注册了一个脚本：

```php
function enqueue_my_scripts() {
    wp_enqueue_script( 'my-js', get_template_directory_uri() . '/js/my-script.js', array('jquery'), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'enqueue_my_scripts' );
```

这个脚本会通过 wp_footer() 在页面底部加载，因为我们设置了最后一个参数为 true。如果 footer.php 中没有 wp_footer()，这个脚本就不会被加载。

总之，wp_head() 和 wp_footer() 是 WordPress 主题开发中不可或缺的部分。它们确保了主题与 WordPress 核心、插件和其他功能的兼容性和正确运行。
