---
date: 2024-06-24 00:52
slug: WordPress根据文章分类类动态显示侧边栏文章列表
---

为了实现你的需求，即根据当前文章的分类动态显示侧边栏内容，可以在步骤2中改进小工具的代码，使其能够动态获取当前文章的分类，并根据分类显示相应的文章列表。

<!-- truncate -->

### 改进步骤2：创建一个自定义小工具

以下是改进后的自定义小工具代码，<u>它将在侧边栏中显示当前文章所属分类的文章列表：</u>

```php
class Dynamic_Category_Posts_Widget extends WP_Widget {
    function __construct() {
        parent::__construct(
            'dynamic_category_posts_widget',
            __('Dynamic Category Posts Widget', 'my_theme'),
            array('description' => __('Displays a list of posts from the current post\'s category.', 'my_theme'))
        );
    }

    public function widget($args, $instance) {
        if (is_single()) {
            global $post;
            // 获取当前文章的分类
            $categories = get_the_category($post->ID);
            if (!empty($categories)) {
                // 假设使用第一个分类
                $category_id = $categories[0]->term_id;
                
                echo $args['before_widget'];
                if (!empty($instance['title'])) {
                    echo $args['before_title'] . apply_filters('widget_title', $instance['title']) . $args['after_title'];
                }

                $number_of_posts = !empty($instance['number_of_posts']) ? $instance['number_of_posts'] : 5;

                $query_args = array(
                    'cat' => $category_id,
                    'posts_per_page' => $number_of_posts,
                );

                $query = new WP_Query($query_args);

                if ($query->have_posts()) {
                    echo '<ul class="category-posts-list">';
                    while ($query->have_posts()) {
                        $query->the_post();
                        echo '<li><a href="' . get_permalink() . '">' . get_the_title() . '</a></li>';
                    }
                    echo '</ul>';
                }

                wp_reset_postdata();

                echo $args['after_widget'];
            }
        }
    }

    public function form($instance) {
        $title = !empty($instance['title']) ? $instance['title'] : __('Category Posts', 'my_theme');
        $number_of_posts = !empty($instance['number_of_posts']) ? $instance['number_of_posts'] : 5;
        ?>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('title')); ?>"><?php esc_attr_e('Title:', 'my_theme'); ?></label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('title')); ?>" name="<?php echo esc_attr($this->get_field_name('title')); ?>" type="text" value="<?php echo esc_attr($title); ?>">
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('number_of_posts')); ?>"><?php esc_attr_e('Number of Posts:', 'my_theme'); ?></label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('number_of_posts')); ?>" name="<?php echo esc_attr($this->get_field_name('number_of_posts')); ?>" type="number" value="<?php echo esc_attr($number_of_posts); ?>">
        </p>
        <?php
    }

    public function update($new_instance, $old_instance) {
        $instance = array();
        $instance['title'] = (!empty($new_instance['title'])) ? strip_tags($new_instance['title']) : '';
        $instance['number_of_posts'] = (!empty($new_instance['number_of_posts'])) ? intval($new_instance['number_of_posts']) : 5;

        return $instance;
    }
}

function register_dynamic_category_posts_widget() {
    register_widget('Dynamic_Category_Posts_Widget');
}
add_action('widgets_init', 'register_dynamic_category_posts_widget');
```

### 解释

1. **构造函数**：定义小工具的名称和描述。
2. **`widget` 方法**：这是小工具的输出内容。在这里，我们检查当前页面是否为单篇文章页面（`is_single()`），然后获取当前文章的分类（`get_the_category()`）。使用第一个分类的ID来查询并显示该分类下的文章列表。
3. **`form` 方法**：定义小工具的后台表单，让用户可以设置小工具的标题和显示文章的数量。
4. **`update` 方法**：保存小工具的设置。

### 步骤 3：在侧边栏中添加小工具

1. **导航到“外观” > “小工具”**。
2. **找到“Dynamic Category Posts Widget”小工具**，将其拖放到你之前注册的“Left Sidebar”区域。
3. **配置小工具**，设置标题和显示的文章数量。

### 总结

通过上述改进，你的<u>侧边栏小工具将动态显示当前文章所属分类的文章列表</u>，并在**点击文章标题时在当前窗口打开对应的文章页面**。



:::info

这是我一心想实现侧边栏显示分类列表，打开文章。这是一种方法。搞了很久才想明白这个事情

:::
