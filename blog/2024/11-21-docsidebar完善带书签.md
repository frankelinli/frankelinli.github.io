---
date: 2024-11-21 23:40
slug: docsidebar完善带书签
---

**无论当前文章属于主分类还是子分类，侧边栏都显示主分类的文章列表，并折叠显示主分类下子分类的文章列表**。

使侧边栏在当前文章属于子分类时，**自动展开对应的子分类的文章列表**，无需用户手动点击展开。

![image-20241121235111027](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/image-20241121235111027.png)

1. 自动展开当前子分类

   ：

   - 如果当前文章属于某个子分类，则对应的子分类文章列表默认展开。
   - 其他子分类仍然保持折叠状态。

2. 当前子分类高亮显示

   ：

   - 在侧边栏中高亮当前子分类的标题，提升用户体验。



**高亮当前文章**：

- 在主分类文章列表中，高亮当前文章。
- 在子分类文章列表中，同样高亮当前文章。

**样式优化**：

- 添加明显的视觉区分，使当前文章在文章列表中更加突出。

<!-- truncate -->

![image-20241121235222652](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/image-20241121235222652.png)

### docsidebar.php:

```php
<?php
// 获取当前文章的分类
$categories = get_the_category();

if (!empty($categories)) {
    // 获取当前文章的第一个分类
    $current_category = $categories[0];

    // 获取当前文章的 ID
    $current_post_id = get_the_ID();

    // 获取主分类（最顶层分类）
    $main_category = $current_category;
    while ($main_category->parent != 0) {
        $main_category = get_category($main_category->parent);
    }

    // 获取主分类的文章（不排除当前文章）
    $main_category_args = array(
        'category__in' => array($main_category->term_id), // 主分类
        'post__not_in' => array(),                       // 包括当前文章
        'posts_per_page' => -1,                          // 获取所有文章
    );
    $main_query = new WP_Query($main_category_args);

    // 获取主分类的子分类
    $child_categories = get_categories(array(
        'parent' => $main_category->term_id, // 主分类的子分类
        'hide_empty' => false,               // 包括空子分类
    ));

    echo '<div class="category-sidebar">';

    // 显示主分类标题
    echo '<h3>' . esc_html($main_category->name) . '</h3>';

    // 显示主分类的文章列表
    if ($main_query->have_posts()) {
        echo '<ul class="category-post-list">';
        while ($main_query->have_posts()) {
            $main_query->the_post();
            $post_id = get_the_ID();

            // 判断是否为当前文章
            $is_current_post = ($post_id == $current_post_id);

            echo '<li>';
            echo '<a href="' . get_the_permalink() . '"';
            if ($is_current_post) {
                echo ' style="font-weight: bold; color: #0073aa;"'; // 高亮当前文章
            }
            echo '>';
            // 添加 Font Awesome 图标
            echo '<i class="fa ' . ($is_current_post ? 'fa-bookmark' : 'fa-file-alt') . '" aria-hidden="true"></i> '; // 当前文章显示书签图标，其他文章显示文件图标
            echo get_the_title();
            echo '</a>';
            echo '</li>';
        }
        echo '</ul>';
    } else {
        echo '<p>主分类暂无文章。</p>';
    }

    // 显示子分类及其文章
    if (!empty($child_categories)) {
        foreach ($child_categories as $child_category) {
            // 检查当前文章是否属于这个子分类
            $is_current_child = ($current_category->term_id == $child_category->term_id);

            // 获取子分类的文章
            $child_args = array(
                'category__in' => array($child_category->term_id), // 子分类
                'posts_per_page' => -1,                           // 获取所有文章
            );
            $child_query = new WP_Query($child_args);

            echo '<div class="child-category">';

            // 子分类标题
            echo '<h4 class="child-category-title" data-child-category="' . $child_category->term_id . '"';
            if ($is_current_child) {
                echo ' style="font-weight: bold; color: #0073aa;"'; // 高亮当前子分类
            }
            echo '>';
            echo esc_html($child_category->name) . ($is_current_child ? ' ▲' : ' ▼'); // 当前子分类展开，其他子分类折叠
            echo '</h4>';

            // 子分类文章列表
            echo '<ul class="child-category-post-list" id="child-category-' . $child_category->term_id . '"';
            if (!$is_current_child) {
                echo ' style="display: none;"'; // 默认隐藏非当前子分类的文章列表
            }
            echo '>';
            if ($child_query->have_posts()) {
                while ($child_query->have_posts()) {
                    $child_query->the_post();
                    $post_id = get_the_ID();

                    // 判断是否为当前文章
                    $is_current_post = ($post_id == $current_post_id);

                    echo '<li>';
                    echo '<a href="' . get_the_permalink() . '"';
                    if ($is_current_post) {
                        echo ' style="font-weight: bold; color: #0073aa;"'; // 高亮当前文章
                    }
                    echo '>';
                    // 添加 Font Awesome 图标
                    echo '<i class="fa ' . ($is_current_post ? 'fa-bookmark' : 'fa-file-alt') . '" aria-hidden="true"></i> '; // 当前文章显示书签图标，其他文章显示文件图标
                    echo get_the_title();
                    echo '</a>';
                    echo '</li>';
                }
            } else {
                echo '<p>此子分类暂无文章。</p>';
            }
            echo '</ul>';

            echo '</div>';
        }
    }

    echo '</div>'; // 主分类容器结束
    wp_reset_postdata();
} else {
    echo '<p>当前文章没有分类。</p>';
}
?>
```

### style.css

```css
/* 主分类容器 */
.category-sidebar {
    margin-bottom: 20px;
    padding: 15px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
}

/* 当前分类标题 */
.category-sidebar h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
}

/* 当前分类文章列表 */
.category-post-list {
    list-style: none; /* 去掉圆点 */
    margin: 0;
    padding: 0;
}

.category-post-list li {
    margin: 8px 0; /* 调整间距 */
}

.category-post-list li a {
    text-decoration: none;
    color: #555;
    display: flex; /* 让图标和文字对齐 */
    align-items: center;
}

.category-post-list li a i {
    margin-right: 8px; /* 图标与文字的间距 */
    color: #aaa;
}

.category-post-list li a:hover i {
    color: #0073aa; /* 鼠标悬停时图标颜色 */
}

/* 高亮当前文章 */
.category-post-list li a[style*="font-weight: bold"],
.child-category-post-list li a[style*="font-weight: bold"] {
    font-weight: bold;
    color: #0073aa;
    background-color: #eef6fc; /* 添加背景色 */
    padding: 3px 5px;
    border-radius: 3px;
}

.category-post-list li a[style*="font-weight: bold"] i {
    color: #0073aa; /* 高亮图标颜色 */
}

/* 子分类标题 */
.child-category-title {
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    color: #0073aa;
    margin-top: 15px;
}

.child-category-title:hover {
    text-decoration: underline;
}

/* 当前子分类高亮 */
.child-category-title[style*="font-weight: bold"] {
    color: #333;
}

/* 子分类文章列表 */
.child-category-post-list {
    list-style: none; /* 去掉圆点 */
    margin: 10px 0 0 15px;
    padding: 0;
}

.child-category-post-list li {
    margin: 8px 0;
}

.child-category-post-list li a {
    text-decoration: none;
    color: #555;
    display: flex;
    align-items: center;
}

.child-category-post-list li a i {
    margin-right: 8px;
    color: #aaa;
}

.child-category-post-list li a:hover i {
    color: #0073aa;
}

.child-category-post-list li a[style*="font-weight: bold"] i {
    color: #0073aa;
}	
```

### 加载 Font Awesome 图标库

确保 WordPress 加载了 Font Awesome 图标库。如果尚未加载，可以在 `functions.php` 中添加以下代码：

```php
function enqueue_fontawesome() {
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
}
add_action('wp_enqueue_scripts', 'enqueue_fontawesome');
```

### docsidebar.js

```js
jQuery(document).ready(function ($) {
    // 点击子分类标题展开/折叠子分类文章列表
    $('.child-category-title').on('click', function () {
        var childCategoryId = $(this).data('child-category');
        var childCategoryList = $('#child-category-' + childCategoryId);

        if (childCategoryList.is(':visible')) {
            childCategoryList.slideUp(); // 折叠
            $(this).text($(this).text().replace('▲', '▼')); // 更新箭头
        } else {
            childCategoryList.slideDown(); // 展开
            $(this).text($(this).text().replace('▼', '▲')); // 更新箭头
        }
    });
});
```

### functions.php

```php
// 在内容顶部加载自定义侧边栏
add_action('astra_content_top', 'load_doc_sidebar');
function load_doc_sidebar() {
    if (is_single()) { // 仅在单篇文章页面加载
        // 加载 docsidebar.php 文件
        get_template_part('docsidebar');
    }
}



function enqueue_docsidebar_scripts() {
    wp_enqueue_script(
        'docsidebar-js',
        get_stylesheet_directory_uri() . '/js/docsidebar.js', // 使用子主题目录
        array('jquery'), // 依赖 jQuery
        null,
        true // 在页面底部加载
    );
}
add_action('wp_enqueue_scripts', 'enqueue_docsidebar_scripts');
```

