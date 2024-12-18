---
date: 2024-12-18 19:58
slug: WordPress制作用户个人收藏中心
---

整理完整的个人收藏中心实现流程和代码。

<!-- truncate -->

### 1. 在functions.php中添加以下代码:

```php
// 1. 注册必要的脚本和样式
function enqueue_favorite_scripts() {
    wp_enqueue_script('jquery');
    wp_enqueue_script('favorite-script', get_stylesheet_directory_uri() . '/custom.js', array('jquery'), '1.0', true);
    wp_localize_script('favorite-script', 'ajax_object', array(
        'ajax_url' => admin_url('admin-ajax.php')
    ));
}
add_action('wp_enqueue_scripts', 'enqueue_favorite_scripts');

// 2. 添加收藏按钮到文章
function add_favorite_button() {
    if (is_single() && is_user_logged_in()) {
        $post_id = get_the_ID();
        $user_id = get_current_user_id();
        $favorites = get_user_meta($user_id, 'user_favorites', true);
        
        if (!is_array($favorites)) {
            $favorites = array();
        }
        
        $is_favorited = in_array($post_id, $favorites);
        $button_text = $is_favorited ? '取消收藏' : '收藏文章';
        $button_class = $is_favorited ? 'favorited' : '';
        
        echo '<button class="favorite-button ' . $button_class . '" data-post-id="' . $post_id . '">' . $button_text . '</button>';
    }
}
add_action('astra_entry_content_after', 'add_favorite_button');

// 3. 处理AJAX收藏请求
function handle_favorite_action() {
    if (!is_user_logged_in()) {
        wp_send_json_error('请先登录');
    }
    
    $post_id = isset($_POST['post_id']) ? intval($_POST['post_id']) : 0;
    $user_id = get_current_user_id();
    $favorites = get_user_meta($user_id, 'user_favorites', true);
    
    if (!is_array($favorites)) {
        $favorites = array();
    }
    
    if (in_array($post_id, $favorites)) {
        $favorites = array_diff($favorites, array($post_id));
        $action = 'removed';
    } else {
        $favorites[] = $post_id;
        $action = 'added';
    }
    
    update_user_meta($user_id, 'user_favorites', $favorites);
    
    wp_send_json_success(array(
        'action' => $action,
        'message' => $action === 'added' ? '收藏成功' : '已取消收藏'
    ));
}
add_action('wp_ajax_handle_favorite', 'handle_favorite_action');
```

### 2. 创建个人中心页面模板
在主题目录下创建文件 `page-user-center.php`:

```php
<?php
/*
Template Name: 用户中心
*/

if (!is_user_logged_in()) {
    wp_redirect(wp_login_url(get_permalink()));
    exit;
}

get_header();
?>

<div class="ast-container">
    <div id="primary" class="content-area primary">
        <main id="main" class="site-main">
            <article class="user-center-container">
                <?php
                $user = wp_get_current_user();
                $favorites = get_user_meta($user->ID, 'user_favorites', true);
                ?>
                
                <div class="user-info">
                    <h2>欢迎, <?php echo esc_html($user->display_name); ?></h2>
                    <?php echo get_avatar($user->ID, 96); ?>
                </div>
                
                <div class="favorite-posts">
                    <h3>我的收藏</h3>
                    <?php
                    if (!empty($favorites) && is_array($favorites)) {
                        $args = array(
                            'post__in' => $favorites,
                            'post_type' => 'post',
                            'posts_per_page' => -1
                        );
                        
                        $favorite_query = new WP_Query($args);
                        
                        if ($favorite_query->have_posts()) {
                            echo '<div class="favorite-list">';
                            while ($favorite_query->have_posts()) {
                                $favorite_query->the_post();
                                ?>
                                <div class="favorite-post-item">
                                    <a href="<?php the_permalink(); ?>">
                                        <?php if (has_post_thumbnail()): ?>
                                            <?php the_post_thumbnail('thumbnail'); ?>
                                        <?php endif; ?>
                                        <h4><?php the_title(); ?></h4>
                                    </a>
                                    <button class="remove-favorite" data-post-id="<?php echo get_the_ID(); ?>">删除收藏</button>
                                </div>
                                <?php
                            }
                            echo '</div>';
                            wp_reset_postdata();
                        }
                    } else {
                        echo '<p class="no-favorites">暂无收藏文章</p>';
                    }
                    ?>
                </div>
            </article>
        </main>
    </div>
</div>

<?php get_footer(); ?>
```

### 3. 在style.css中添加样式:

```css
/* 收藏按钮样式 */
.favorite-button {
    padding: 8px 15px;
    background: #f0f0f0;
    border: 1px solid #ddd;
    border-radius: 3px;
    cursor: pointer;
    margin: 15px 0;
    transition: all 0.3s ease;
}

.favorite-button.favorited {
    background: #ff6b6b;
    color: white;
    border-color: #ff6b6b;
}

/* 用户中心样式 */
.user-center-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.user-info {
    text-align: center;
    margin-bottom: 30px;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
}

.user-info img {
    border-radius: 50%;
    margin: 10px 0;
}

.favorite-post-item {
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #eee;
    transition: background 0.3s ease;
}

.favorite-post-item:hover {
    background: #f9f9f9;
}

.favorite-post-item img {
    width: 100px;
    height: auto;
    margin-right: 15px;
    border-radius: 4px;
}

.favorite-post-item h4 {
    margin: 0;
    flex: 1;
}

.remove-favorite {
    padding: 5px 10px;
    background: #ff6b6b;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.remove-favorite:hover {
    background: #ff5252;
}

.no-favorites {
    text-align: center;
    padding: 30px;
    background: #f9f9f9;
    border-radius: 8px;
}
```

### 4. 创建custom.js文件:

```javascript
jQuery(document).ready(function($) {
    // 收藏按钮点击事件
    $('.favorite-button').click(function() {
        var button = $(this);
        var postId = button.data('post-id');
        
        $.ajax({
            url: ajax_object.ajax_url,
            type: 'POST',
            data: {
                action: 'handle_favorite',
                post_id: postId
            },
            success: function(response) {
                if (response.success) {
                    if (response.data.action === 'added') {
                        button.addClass('favorited');
                        button.text('取消收藏');
                    } else {
                        button.removeClass('favorited');
                        button.text('收藏文章');
                    }
                }
            }
        });
    });

    // 删除收藏按钮点击事件
    $('.remove-favorite').click(function() {
        var button = $(this);
        var postId = button.data('post-id');
        var postItem = button.closest('.favorite-post-item');
        
        $.ajax({
            url: ajax_object.ajax_url,
            type: 'POST',
            data: {
                action: 'handle_favorite',
                post_id: postId
            },
            success: function(response) {
                if (response.success) {
                    postItem.fadeOut(300, function() {
                        $(this).remove();
                        if ($('.favorite-post-item').length === 0) {
                            $('.favorite-list').html('<p class="no-favorites">暂无收藏文章</p>');
                        }
                    });
                }
            }
        });
    });
});
```

### 使用步骤:

1. 将所有代码添加到相应文件中
2. 在WordPress后台创建新页面，选择"用户中心"模板
3. 发布页面，记录页面链接
4. 可以在菜单中添加用户中心链接

### 功能说明:

1. 登录用户可以在文章页面收藏/取消收藏文章
2. 用户可以在个人中心查看所有收藏的文章
3. 可以直接在个人中心删除收藏
4. 未登录用户会自动跳转到登录页面
5. 响应式设计，适配移动设备

如需添加其他功能或修改，请告诉我。
