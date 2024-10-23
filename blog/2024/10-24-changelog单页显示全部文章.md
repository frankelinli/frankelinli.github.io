---
date: 2024-10-24 00:12
slug: changelog单页显示全部文章
---





<!-- truncate -->

https://wpastra.com/whats-new/#astra-pro-4-8-2-updates-2

从URL来看,它确实是在一个页面上显示所有的更新记录,而不是使用WordPress默认的single和archive结构。我们可以这样实现:

1. 首先创建一个页面模板:

```php
<?php
/*
Template Name: Changelog Page
*/

get_header();
?>

<div class="changelog-wrapper">
    <?php
    $changelogs = new WP_Query(array(
        'post_type' => 'changelog',
        'posts_per_page' => -1, // 显示所有文章
        'orderby' => 'date',
        'order' => 'DESC'
    ));

    if ($changelogs->have_posts()) :
        while ($changelogs->have_posts()) : $changelogs->the_post();
    ?>
        <article class="changelog-entry">
            <div class="changelog-header">
                <div class="author-meta">
                    <?php echo get_avatar(get_the_author_meta('email'), 40); ?>
                    <div class="author-info">
                        <span class="author-name"><?php echo get_the_author(); ?></span>
                        <time datetime="<?php echo get_the_date('c'); ?>">
                            <?php echo get_the_date(); ?>
                        </time>
                    </div>
                </div>
                <h2><?php the_title(); ?></h2>
            </div>
            
            <div class="changelog-content">
                <?php the_content(); ?>
            </div>
        </article>
    <?php
        endwhile;
        wp_reset_postdata();
    endif;
    ?>
</div>

<?php get_footer(); ?>
```

2. 添加样式:

```css
.changelog-wrapper {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.changelog-entry {
    background: #fff;
    border-radius: 8px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.changelog-header {
    margin-bottom: 20px;
}

.author-meta {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.author-meta img {
    border-radius: 50%;
    margin-right: 12px;
}

.author-info {
    display: flex;
    flex-direction: column;
}

.author-name {
    font-weight: 500;
    color: #333;
}

time {
    color: #666;
    font-size: 0.9em;
}

.changelog-content h3 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 1.2em;
    color: #333;
}

.changelog-content ul {
    list-style: none;
    padding-left: 0;
}

.changelog-content li {
    margin-bottom: 8px;
    padding-left: 20px;
    position: relative;
}

.changelog-content li:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #0073aa;
}
```

3. 在functions.php中添加支持:

```php
function register_changelog_post_type() {
    register_post_type('changelog',
        array(
            'labels' => array(
                'name' => __('Changelog'),
                'singular_name' => __('Changelog Entry'),
                'add_new' => __('Add New Entry'),
                'add_new_item' => __('Add New Changelog Entry'),
                'edit_item' => __('Edit Changelog Entry'),
            ),
            'public' => true,
            'publicly_queryable' => false, // 禁用单个文章页面访问
            'show_ui' => true,
            'show_in_menu' => true,
            'supports' => array('title', 'editor', 'author'),
            'menu_icon' => 'dashicons-backup',
        )
    );
}
add_action('init', 'register_changelog_post_type');

// 可选：添加自定义区块样式
function changelog_block_styles() {
    wp_enqueue_style(
        'changelog-styles',
        get_template_directory_uri() . '/assets/css/changelog.css',
        array(),
        '1.0.0'
    );
}
add_action('wp_enqueue_scripts', 'changelog_block_styles');
```

4. 为编辑器添加自定义格式(可选):

```php
function changelog_editor_styles() {
    add_editor_style('assets/css/changelog-editor.css');
}
add_action('admin_init', 'changelog_editor_styles');
```

使用方法:

1. 创建一个新页面，选择"Changelog Page"模板
2. 在后台添加changelog文章
3. 使用Gutenberg编辑器的列表区块来添加更新内容
4. 可以使用自定义类别来区分"New"、"Fixes"等不同类型的更新

你也可以添加一些JavaScript来增强用户体验:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动到指定版本
    const urlParams = new URLSearchParams(window.location.search);
    const version = urlParams.get('version');
    
    if (version) {
        const element = document.querySelector(`[data-version="${version}"]`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // 可以添加过滤功能
    const filterButtons = document.querySelectorAll('.changelog-filter button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const type = this.dataset.type;
            const entries = document.querySelectorAll('.changelog-entry');
            
            entries.forEach(entry => {
                if (type === 'all' || entry.dataset.type === type) {
                    entry.style.display = '';
                } else {
                    entry.style.display = 'none';
                }
            });
        });
    });
});
```

关键点:

1. 设置`publicly_queryable => false`禁用单个文章页面访问
2. 使用WP_Query获取所有changelog文章并在一个页面显示
3. 使用CSS Grid或Flexbox来布局
4. 可以添加过滤和搜索功能
5. 可以使用WordPress的区块编辑器来方便地编辑内容

这样就可以创建一个类似图片中的changelog页面了。需要更多具体的实现细节吗？
