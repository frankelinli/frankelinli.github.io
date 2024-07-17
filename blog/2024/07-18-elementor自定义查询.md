---
date: 2024-07-18 01:04
slug: elementor自定义查询
---

要在Elementor中查询最近一个月的帖子，可以使用你已经设置的Query ID，并在相应的代码中定义查询逻辑。以下是如何实现这一目标的详细步骤：

:::info

原来如此简单！elementor的自定义查询，等于把“elementor可视化”与WordPress代码结合起来了。

:::

<!-- truncate -->

### 1. 添加自定义查询逻辑

将以下代码添加到你的WordPress主题的`functions.php`文件，或者通过插件添加：

```php
add_action( 'elementor/query/sedexthismonth', function( $query ) {
    // 获取当前日期
    $current_date = date( 'Y-m-d' );
    // 获取一个月前的日期
    $date_one_month_ago = date( 'Y-m-d', strtotime( '-1 month' ) );

    // 设置查询参数
    $query->set( 'post_type', 'post' );
    $query->set( 'posts_per_page', 10 ); // 每页显示10篇文章，可以根据需要调整
    $query->set( 'date_query', array(
        array(
            'after'     => $date_one_month_ago,
            'before'    => $current_date,
            'inclusive' => true,
        ),
    ));
});
```

### 2. 在Elementor编辑器中使用Query ID

1. **打开Elementor编辑器**，编辑你想要显示查询结果的页面或模板。
2. **添加小工具**：拖放你需要的小工具到页面上，比如“文章列表”（Posts）小工具。
3. **设置查询**：
    - 点击小工具来打开其设置面板。
    - 找到“查询”选项。
    - 在“高级”部分，找到“Query ID”输入框，并输入`sedexthismonth`。

通过以上步骤，你将能够显示最近一个月内发布的帖子。如果你需要更多自定义的查询逻辑或有其他问题，请随时问我。
