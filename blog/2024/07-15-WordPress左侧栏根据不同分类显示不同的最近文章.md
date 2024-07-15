---
date: 2024-07-15 02:30
slug: WordPress左侧栏根据不同分类显示不同的最近文章
---

WordPress的一个页面模板,它包含了一个左侧栏和一个用于显示文章内容的主内容区域。

对于左侧栏的部分,它目前是显示网站最近发布的10篇文章。如果您想根据不同分类来显示不同的文章列表,可以做如下修改:

<!-- truncate -->



```php
<!-- 左侧栏：文章列表 -->
<aside class="sidebar left-sidebar">
    <h2>相关文章</h2>
    <ul>
        <?php
        // 获取当前文章所属的分类
        $current_category = get_the_category();
        $current_category_id = $current_category[0]->term_id;

        // 查询该分类下最近发布的10篇文章
        $recent_posts = wp_get_recent_posts(array(
            'numberposts' => 10, // 显示最近的10篇文章
            'post_status' => 'publish', // 仅获取已发布的文章
            'category' => $current_category_id // 按当前分类筛选
        ));

        // 遍历并显示文章列表
        foreach ($recent_posts as $post) :
            ?>
            <li>
                <a href="<?php echo get_permalink($post['ID']); ?>">
                    <?php echo $post['post_title']; ?>
                </a>
            </li>
        <?php endforeach; wp_reset_query(); ?>
    </ul>
</aside>
```

这段代码首先获取当前文章所属的分类ID,然后在查询最近文章时,增加了`'category' => $current_category_id`这个条件,这样就可以只显示当前分类下的最近文章了。
