---
date: 2024-06-23 13:44
slug: WordPress批量输出自定义帖子类型的所有文章列表
---

要列出所有自定义帖子类型 `docs` 的帖子，你可以编写一个短代码（shortcode）或一个自定义模板，来显示这些帖子。以下是两个方法的详细步骤：

<!-- truncate -->

### 方法 1: 使用短代码列出 `docs` 类型的帖子

短代码是一个非常灵活和方便的方式，可以在任何页面或帖子中显示 `docs` 类型的帖子。你可以将以下代码添加到你的主题的 `functions.php` 文件中：

#### 代码示例

```php
// 创建一个短代码来列出所有 'docs' 类型的帖子
function list_docs_posts_shortcode($atts) {
    // 设置默认参数
    $atts = shortcode_atts(array(
        'posts_per_page' => -1, // 显示所有帖子
    ), $atts, 'list_docs_posts');

    // 查询 'docs' 类型的帖子
    $args = array(
        'post_type' => 'docs',
        'post_status' => 'publish', // 只显示发布的帖子
        'posts_per_page' => $atts['posts_per_page'],
    );

    $query = new WP_Query($args);

    // 检查是否有帖子
    if ($query->have_posts()) {
        $output = '<ul>';

        // 循环显示每个帖子
        while ($query->have_posts()) {
            $query->the_post();
            $output .= '<li><a href="' . get_permalink() . '">' . get_the_title() . '</a></li>';
        }

        $output .= '</ul>';

        // 重置查询
        wp_reset_postdata();
    } else {
        $output = '<p>没有找到任何 docs 帖子。</p>';
    }

    return $output;
}
add_shortcode('list_docs_posts', 'list_docs_posts_shortcode');
```

#### 使用短代码

将上述代码添加到 `functions.php` 文件后，你可以在任何页面或帖子中使用以下短代码来列出所有 `docs` 类型的帖子：

```html
[list_docs_posts]
```

你也可以在短代码中添加参数来限制显示的帖子数量，例如：

```html
[list_docs_posts posts_per_page="10"]
```

### 方法 2: 创建自定义模板列出 `docs` 类型的帖子

如果你希望创建一个专门的页面模板来显示 `docs` 类型的帖子，可以在你的主题目录中创建一个自定义模板文件。

#### 代码示例

1. **创建模板文件**：在你的主题目录中创建一个名为 `template-list-docs.php` 的文件，并添加以下代码：

```php
<?php
/**
 * Template Name: List Docs Posts
 */

get_header();
?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">
        <?php
        // 查询 'docs' 类型的帖子
        $args = array(
            'post_type' => 'docs',
            'post_status' => 'publish', // 只显示发布的帖子
            'posts_per_page' => -1, // 显示所有帖子
        );

        $query = new WP_Query($args);

        // 检查是否有帖子
        if ($query->have_posts()) {
            echo '<ul>';

            // 循环显示每个帖子
            while ($query->have_posts()) {
                $query->the_post();
                echo '<li><a href="' . get_permalink() . '">' . get_the_title() . '</a></li>';
            }

            echo '</ul>';

            // 重置查询
            wp_reset_postdata();
        } else {
            echo '<p>没有找到任何 docs 帖子。</p>';
        }
        ?>
    </main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer();
?>
```

2. **创建页面并选择模板**：

    - 登录到你的 WordPress 后台。
    - 导航到 "页面" -> "新建页面"。
    - 设置页面标题，例如 "List Docs Posts"。
    - 在右侧的 "页面属性" 中，选择 "List Docs Posts" 模板。
    - 发布页面。

### 总结

通过上述两种方法，你可以轻松列出所有 `docs` 类型的帖子：

1. 使用短代码方法，可以将帖子列表插入到任何页面或帖子中，灵活性较高。
2. 使用自定义模板方法，可以创建一个专门的页面来显示 `docs` 类型的帖子，适合需要专门展示的场景。

选择适合你需求的方法，并根据需要进行调整。
