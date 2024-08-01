---
date: 2024-08-01 10:43
slug: WordPress自定义查询时按照Simple Custom Post Order的文章排序
---

您提供的代码确实没有考虑到 Simple Custom Post Order 插件的自定义排序。这是因为您的查询明确设置了排序方式：

```php
$query->set('orderby', 'date');
$query->set('order', 'DESC');
```

这会覆盖任何其他排序设置，包括 Simple Custom Post Order 插件的自定义排序。

要让 Simple Custom Post Order 插件的排序生效，您需要修改查询参数。Simple Custom Post Order 通常使用 'menu_order' 作为排序依据。以下是如何修改代码以支持这个插件的排序：

<!-- truncate -->

```php
add_action('elementor/query/current_category_posts', function($query) {
    if (is_single()) {
        $current_post_id = get_the_ID();
        $categories = get_the_category($current_post_id);
        
        if (!empty($categories)) {
            $category_id = $categories[0]->term_id;
            
            $query->set('post_type', 'post');
            $query->set('cat', $category_id);
            $query->set('posts_per_page', -1);
            
            // 使用 Simple Custom Post Order 的排序
            $query->set('orderby', 'menu_order');
            $query->set('order', 'ASC');
        }
    }
});
```

这个修改将使用 'menu_order' 作为排序依据，这通常是 Simple Custom Post Order 插件用来存储自定义顺序的字段。

如果您想在自定义排序和日期排序之间提供一个选择，您可以在 Elementor 中添加一个控件来切换排序方式。例如：

```php
add_action('elementor/query/current_category_posts', function($query, $control_id, $settings) {
    if (is_single()) {
        $current_post_id = get_the_ID();
        $categories = get_the_category($current_post_id);
        
        if (!empty($categories)) {
            $category_id = $categories[0]->term_id;
            
            $query->set('post_type', 'post');
            $query->set('cat', $category_id);
            $query->set('posts_per_page', -1);
            
            // 检查排序设置
            if (isset($settings['custom_ordering']) && $settings['custom_ordering'] === 'yes') {
                $query->set('orderby', 'menu_order');
                $query->set('order', 'ASC');
            } else {
                $query->set('orderby', 'date');
                $query->set('order', 'DESC');
            }
        }
    }
}, 10, 3);
```

然后在 Elementor 小部件中添加一个切换控件：

```php
$this->add_control(
    'custom_ordering',
    [
        'label' => __('Use Custom Ordering', 'your-text-domain'),
        'type' => \Elementor\Controls_Manager::SWITCHER,
        'default' => 'no',
    ]
);
```

这样，您就可以在 Elementor 界面中选择是否使用 Simple Custom Post Order 的排序了。

请注意，确保 Simple Custom Post Order 插件正确安装并激活，并且您已经为相关文章设置了自定义顺序。
