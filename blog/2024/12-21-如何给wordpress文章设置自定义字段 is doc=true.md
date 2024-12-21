---
date: 2024-12-21 09:47
slug: 如何给wordpress文章设置自定义字段 is doc=true
---

有几种设置自定义字段 is_doc 的方法：



<!-- truncate -->



### 使用WordPress原生自定义字段（最简单）：

```php
// 添加到functions.php，显示自定义字段框
function show_is_doc_meta_box() {
    // 确保自定义字段模块可见
    add_post_type_support('post', 'custom-fields');
    
    add_meta_box(
        'is_doc_meta_box',           // ID
        '文档类型设置',              // 标题
        'is_doc_meta_box_callback',  // 回调函数
        'post'                       // 显示位置
    );
}
add_action('add_meta_boxes', 'show_is_doc_meta_box');

// meta box的内容
function is_doc_meta_box_callback($post) {
    wp_nonce_field('is_doc_save', 'is_doc_nonce');
    $value = get_post_meta($post->ID, 'is_doc', true);
    ?>
    <label>
        <input type="checkbox" name="is_doc" value="true" <?php checked($value, 'true'); ?> />
        这是一篇文档类文章
    </label>
    <?php
}

// 保存meta值
function save_is_doc_meta($post_id) {
    if (!isset($_POST['is_doc_nonce']) || 
        !wp_verify_nonce($_POST['is_doc_nonce'], 'is_doc_save')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    if (isset($_POST['is_doc'])) {
        update_post_meta($post_id, 'is_doc', 'true');
    } else {
        delete_post_meta($post_id, 'is_doc');
    }
}
add_action('save_post', 'save_is_doc_meta');
```

效果：
- 在文章编辑页面右侧会出现"文档类型设置"面板
- 包含一个简单的复选框
- 勾选后该文章就会被标记为文档类

### 使用Quick Edit（快速编辑）方式：

```php
// 在文章列表添加自定义列（已有）
function add_is_doc_column($columns) {
    $new_columns = array();
    foreach ($columns as $key => $value) {
        $new_columns[$key] = $value;
        if ($key === 'title') {
            $new_columns['is_doc'] = __('文档类型', 'csrwiki');
        }
    }
    return $new_columns;
}
add_filter('manage_posts_columns', 'add_is_doc_column');

// 显示自定义列的内容（已有）
function show_is_doc_column_content($column, $post_id) {
    if ($column === 'is_doc') {
        $is_doc = get_post_meta($post_id, 'is_doc', true);
        if ($is_doc) {
            echo '<span style="color: #2271b1;">📚 文档</span>';
        } else {
            echo '<span style="color: #666;">📰 普通</span>';
        }
    }
}
add_action('manage_posts_custom_column', 'show_is_doc_column_content', 10, 2);

// 添加快速编辑字段
function add_quick_edit_is_doc($column_name, $post_type) {
    if ($column_name !== 'is_doc') return;
    ?>
    <fieldset class="inline-edit-col-right">
        <div class="inline-edit-col">
            <label class="alignleft">
                <input type="checkbox" name="is_doc" value="true">
                <span class="checkbox-title"><?php _e('标记为文档类文章', 'csrwiki'); ?></span>
            </label>
        </div>
    </fieldset>
    <?php
}
add_action('quick_edit_custom_box', 'add_quick_edit_is_doc', 10, 2);

// 保存快速编辑的值
function save_quick_edit_is_doc($post_id) {
    // 安全检查
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;
    
    // 保存is_doc值
    if (isset($_POST['is_doc'])) {
        update_post_meta($post_id, 'is_doc', 'true');
    } else {
        delete_post_meta($post_id, 'is_doc');
    }
}
add_action('save_post', 'save_quick_edit_is_doc');

// 添加必要的JavaScript来处理快速编辑
function add_quick_edit_js() {
    ?>
    <script type="text/javascript">
    jQuery(document).ready(function($) {
        // 保存原始的inlineEditPost.edit函数
        var $wp_inline_edit = inlineEditPost.edit;
        
        // 重写inlineEditPost.edit函数
        inlineEditPost.edit = function(id) {
            // 调用原始的edit函数
            $wp_inline_edit.apply(this, arguments);
            
            // 获取post ID
            var post_id = 0;
            if (typeof(id) == 'object') {
                post_id = parseInt(this.getId(id));
            }
            
            // 获取行数据并设置复选框
            if (post_id > 0) {
                var edit_row = $('#edit-' + post_id);
                var post_row = $('#post-' + post_id);
                
                // 检查是否是文档
                var is_doc = post_row.find('.is_doc span').text().indexOf('文档') !== -1;
                
                // 设置复选框状态
                edit_row.find('input[name="is_doc"]').prop('checked', is_doc);
            }
        };
    });
    </script>
    <?php
}
add_action('admin_footer-edit.php', 'add_quick_edit_js');
```

这将：

1. 在快速编辑面板中添加复选框
2. 正确保存快速编辑的值
3. 正确加载现有的is_doc状态
4. 处理JavaScript交互

现在当你点击快速编辑时，应该可以看到：

- "标记为文档类文章"的复选框选项
- 如果原本是文档类，复选框会自动勾选
- 修改后可以正确保存

![image-20241221095140527](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/image-20241221095140527.png)

这样就提供了两种设置方式：
1. 在编辑文章时通过右侧面板设置
2. 在文章列表页通过快速编辑设置

使用建议：
- 新建文章时使用右侧面板设置
- 单独/批量修改时使用快速编辑功能
- 两种方式都很方便，选择你习惯的即可

- 

### 我的文档类型设置"面板为何在编辑页面底部？我想放到右侧

要将文档类型设置面板移到右侧，需要在 `add_meta_box` 函数中设置正确的 `context` 参数。修改代码如下：

```php
function show_is_doc_meta_box() {
    add_post_type_support('post', 'custom-fields');
    
    add_meta_box(
        'is_doc_meta_box',           // ID
        '文档类型设置',              // 标题
        'is_doc_meta_box_callback',  // 回调函数
        'post',                      // 显示位置
        'side',                      // 设置为side表示显示在右侧
        'high'                       // 优先级设为high，让它显示在较上方
    );
}
```

关键变化：
1. 添加了第5个参数 `'side'` - 指定显示位置在右侧栏
2. 添加了第6个参数 `'high'` - 设置较高优先级

这样修改后，"文档类型设置"面板就会：
- 显示在右侧栏中
- 位置相对靠上
- 与其他右侧设置面板保持一致的风格
