---
date: 2024-07-23 13:05
slug: wordpress Astra主题钩子函数
---



wordpress Astra主题钩子函数

<!-- truncate -->

```php
function add_author_info() {
    if (is_single()) {
        echo '<div class="author-info">';
        echo '<h3>作者是abc</h3>';
        echo '<p>' . get_the_author_meta('description') . '</p>';
        echo '</div>';
    }
}
add_action('astra_entry_bottom', 'add_author_info');

function add_ad_before_sidebar() {
    echo '<div class="sidebar-ad">侧边栏广告</div>';
}
add_action('astra_sidebars_before', 'add_ad_before_sidebar');
```

```php
function add_icon_before_title($title) {
    if (is_single()) {
        return '<i class="fas fa-star"></i> ' . $title;
    }
    return $title;
}
add_filter('astra_the_title', 'add_icon_before_title');
```
:::info
以上两处分别是用了add action和ad filter钩子函数，add action是添加内容，add filter是修改内容。大概这个意思
:::

```php
//使用astra钩子函数，在文章内插入广告
// function insert_ad_after_second_paragraph($content) {
//     if (is_single() && !is_admin()) {
//         $ad_code = '<div class="ad-container">这里是广告代码</div>';
//         $paragraphs = explode('</p>', $content);
//         if (count($paragraphs) > 2) {
//             $paragraphs[1] .= $ad_code;
//         }
//         return implode('</p>', $paragraphs);
//     }
//     return $content;
// }
// add_filter('the_content', 'insert_ad_after_second_paragraph');
```

