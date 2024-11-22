---
date: 2024-11-21 21:10
slug: docsidebar显示和隐藏部分文章列表
---

完全可以不使用子分类，而是在 **同一个分类下的某几篇文章** 以点击展开的形式显示在侧边栏中。这里的实现方式是通过标记或筛选文章（例如通过自定义字段、文章的标签、或者手动选择特定文章 ID 的方式），然后以折叠/展开的形式展示。

![image-20241121211501613](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/image-20241121211501613.png)

以下是实现的完整方案：



<!-- truncate -->

## **实现目标**

1. **显示同一个分类下的文章**：
   - 列出当前分类下的所有文章（或者某些特定文章）。
2. **部分文章可折叠/展开**：
   - 将某些指定的文章（比如推荐文章或精选文章）放入一个可折叠的列表中，默认隐藏，点击后展开。

---

## **代码实现**

### **1. 获取当前分类的文章**

在你的子主题中创建或修改 `docsidebar.php` 文件，代码如下：

```php
<?php
// 获取当前文章的分类
$categories = get_the_category();

if (!empty($categories)) {
    foreach ($categories as $category) {
        echo '<div class="category-sidebar">';

        // 显示当前分类的标题
        echo '<h3>' . esc_html($category->name) . '</h3>';

        // 查询当前分类下的文章
        $args = array(
            'category__in' => array($category->term_id), // 当前分类
            'post__not_in' => array(get_the_ID()),      // 排除当前文章
            'posts_per_page' => -1,                     // 显示所有文章
        );
        $query = new WP_Query($args);

        if ($query->have_posts()) {
            echo '<ul class="category-post-list">';

            $count = 0; // 计数器
            while ($query->have_posts()) {
                $query->the_post();

                // 前 5 篇文章直接显示
                if ($count < 5) {
                    echo '<li><a href="' . get_the_permalink() . '">' . get_the_title() . '</a></li>';
                }
                // 其余文章放入可折叠列表中
                else {
                    echo '<li class="hidden-post" style="display: none;"><a href="' . get_the_permalink() . '">' . get_the_title() . '</a></li>';
                }

                $count++;
            }

            echo '</ul>';

            // 如果有超过 5 篇文章，则显示 "展开更多" 按钮
            if ($count > 5) {
                echo '<button class="toggle-more-posts">展开更多</button>';
            }
        } else {
            echo '<p>暂无文章。</p>';
        }

        wp_reset_postdata();
        echo '</div>'; // 分类容器结束
    }
} else {
    echo '<p>该文章没有分类。</p>';
}
?>
```

---

### **2. 样式优化**

在子主题的 `style.css` 中添加样式，使隐藏文章和按钮显示得更美观：

```css
.category-sidebar {
    margin-bottom: 20px;
    padding: 15px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.category-sidebar h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
}

.category-post-list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.category-post-list li {
    margin: 5px 0;
}

.category-post-list li a {
    text-decoration: none;
    color: #555;
}

.category-post-list li a:hover {
    text-decoration: underline;
    color: #0073aa;
}

.toggle-more-posts {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #0073aa;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 14px;
}

.toggle-more-posts:hover {
    background-color: #005177;
}
```

---

### **3. 添加 JavaScript 实现动态展开/折叠**

为了实现点击 "展开更多" 按钮时动态显示隐藏的文章，需要添加 JavaScript。假设文件为 `js/docsidebar.js`，并在 `functions.php` 中加载：

#### **JavaScript 文件 (`docsidebar.js`)**

```javascript
jQuery(document).ready(function ($) {
    // 点击 "展开更多" 按钮
    $('.toggle-more-posts').on('click', function () {
        var hiddenPosts = $(this).siblings('.category-post-list').find('.hidden-post');
        if (hiddenPosts.is(':visible')) {
            hiddenPosts.slideUp(); // 收起
            $(this).text('展开更多'); // 更新按钮文字
        } else {
            hiddenPosts.slideDown(); // 展开
            $(this).text('收起'); // 更新按钮文字
        }
    });
});
```

#### **在 `functions.php` 中加载 JavaScript 文件**

```php
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

---

### **4. 效果分析**

1. **默认显示前 5 篇文章**：
   - 使用计数器 `$count` 来控制，前 5 篇文章直接显示。

2. **隐藏剩余文章**：
   - 超出 5 篇的文章加上类名 `hidden-post`，并通过 `style="display: none;"` 隐藏。

3. **点击按钮展开/折叠**：
   - 点击按钮时，使用 JavaScript 展开或收起隐藏的文章，同时更新按钮文字。

---

### **5. 如果需要手动选择文章**

如果你希望手动选择哪些文章需要折叠，可以通过 **自定义字段** 或 **文章标签** 来实现。

#### **通过自定义字段**
1. 在文章编辑页面，添加一个自定义字段（比如 `highlight`）。
2. 修改查询逻辑，根据自定义字段筛选文章：
   ```php
   $args = array(
       'meta_query' => array(
           array(
               'key' => 'highlight',
               'value' => 'yes',
               'compare' => '='
           )
       ),
       'category__in' => array($category->term_id),
       'post__not_in' => array(get_the_ID()),
       'posts_per_page' => -1,
   );
   ```

#### **通过文章标签**

1. 给想要折叠的文章添加一个特定标签（比如 `featured`）。
2. 修改查询逻辑，根据标签筛选文章：
   ```php
   $args = array(
       'tag' => 'featured', // 筛选特定标签
       'category__in' => array($category->term_id),
       'post__not_in' => array(get_the_ID()),
       'posts_per_page' => -1,
   );
   ```

---

### **最终效果**

1. 默认显示当前分类的前 5 篇文章。
2. 超出部分的文章默认隐藏，点击 "展开更多" 按钮动态显示。
3. 使用 CSS 和 JavaScript 实现简洁的样式和交互效果。
4. 如果需要更灵活的控制，可以通过自定义字段或标签筛选需要折叠的文章
