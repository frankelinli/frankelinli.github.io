---
date: 2024-12-21 07:48
slug: 前端页面显示is doc自定义字段是否为true
---

发表文章后，如何查看是否确实有is doc这个自定义字段

![image-20241221075047228](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/image-20241221075047228.png)

<!-- truncate -->

好的，使用Astra的钩子来添加测试代码，以下是几个合适的位置：

```php
// 在文章内容前显示
add_action('astra_content_before', function() {
    if(is_single() && current_user_can('administrator')) {
        echo '<div style="background: #f0f0f0; padding: 10px; margin: 10px 0;">';
        echo '文章ID: ' . get_the_ID() . '<br>';
        echo 'is_doc值: ' . get_post_meta(get_the_ID(), 'is_doc', true);
        echo '</div>';
    }
});

// 或者在文章标题后显示
add_action('astra_entry_content_before', function() {
    if(is_single() && current_user_can('administrator')) {
        echo '<div style="background: #f0f0f0; padding: 10px; margin: 10px 0;">';
        echo '文章ID: ' . get_the_ID() . '<br>';
        echo 'is_doc值: ' . get_post_meta(get_the_ID(), 'is_doc', true);
        echo '</div>';
    }
});

// 或者在文章内容后显示
add_action('astra_content_after', function() {
    if(is_single() && current_user_can('administrator')) {
        echo '<div style="background: #f0f0f0; padding: 10px; margin: 10px 0;">';
        echo '文章ID: ' . get_the_ID() . '<br>';
        echo 'is_doc值: ' . get_post_meta(get_the_ID(), 'is_doc', true);
        echo '</div>';
    }
});
```

选择一个钩子使用即可，建议使用`astra_content_before`，这样显示在最明显的位置。测试完成后记得删除代码。
