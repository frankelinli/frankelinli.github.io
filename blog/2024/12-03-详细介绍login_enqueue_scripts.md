---
date: 2024-12-03 18:25
slug: 详细介绍login_enqueue_scripts
---

login_enqueue_scripts 是 WordPress 中用于在登录页面加载脚本和样式的钩子(Hook)。下面详细介绍其用法:

基本语法:

```php
add_action('login_enqueue_scripts', 'your_function_name');
```

<!-- truncate -->

实际使用示例:

1. 修改登录页面 logo:
```php
function custom_login_logo() {
    ?>//插入inline CSS
    <style>
        #login h1 a {
            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/images/logo.png);
            background-size: 200px 80px;
            width: 200px;
            height: 80px;
        }
    </style>
    <?php
}
add_action('login_enqueue_scripts', 'custom_login_logo');
```

2. 添加自定义CSS和JavaScript:
```php
function custom_login_assets() {
    // 加载CSS
    wp_enqueue_style('custom-login', get_stylesheet_directory_uri() . '/css/login.css');
    
    // 加载JavaScript
    wp_enqueue_script('custom-login-js', get_stylesheet_directory_uri() . '/js/login.js', array('jquery'), '1.0', true);
}
add_action('login_enqueue_scripts', 'custom_login_assets');
```

3. 修改登录页面背景:
```php
function custom_login_background() {
    ?>
    <style>
        body.login {
            background: #f1f1f1;
            background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
        }
        .login form {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 8px;
        }
    </style>
    <?php
}
add_action('login_enqueue_scripts', 'custom_login_background');
```

4. 添加自定义动画效果:
```php
function custom_login_animations() {
    ?>
    <style>
        .login form {
            animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
    <?php
}
add_action('login_enqueue_scripts', 'custom_login_animations');
```

主要用途:
1. 自定义登录页面样式
2. 修改登录页面 logo
3. 添加自定义脚本
4. 引入外部CSS和JavaScript文件
5. 添加动画效果
6. 修改登录表单样式
7. 优化移动端显示

注意事项:
1. 确保加载的资源文件路径正确
2. 避免加载过多不必要的资源
3. 考虑性能影响
4. 保持登录页面简洁易用
5. 测试不同设备和浏览器的兼容性



### login_enqueue_scripts 钩子具有以下特点：

1. 仅在WordPress登录相关页面触发，包括：
   - wp-login.php（登录页面）
   - wp-register.php（注册页面）
   - wp-signup.php（注册页面）
   - wp-admin/目录下需要登录验证的页面

2. 不会影响其他页面的加载，比如：
   - 前台页面
   - 已登录后的后台页面
   - 其他普通页面

对比其他常用的样式加载钩子：
```php
// 前台页面加载样式
add_action('wp_enqueue_scripts', 'front_end_styles');

// 后台页面加载样式
add_action('admin_enqueue_scripts', 'admin_styles');

// 仅登录页面加载样式
add_action('login_enqueue_scripts', 'login_styles');
```

这种机制可以帮助我们：
1. 精确控制资源加载位置
2. 避免不必要的资源加载
3. 提高页面加载性能
4. 更好地组织代码结构

### 对比内联CSS和外部CSS文件

1. 内联CSS方式（如你提到的例子）：
```php
function custom_login_background() {
    ?>
    <style>
        /* CSS直接写在这里 */
        body.login { ... }
    </style>
    <?php
}
add_action('login_enqueue_scripts', 'custom_login_background');
```

直接输出内联CSS (Inline CSS)，不需要额外的HTTP请求去加载外部CSS文件
适合少量CSS样式的情况
代码直接嵌入页面head部分



2. 外部CSS文件方式：

```php
function custom_login_styles() {
    wp_enqueue_style('custom-login', get_stylesheet_directory_uri() . '/css/login.css');
}
add_action('login_enqueue_scripts', 'custom_login_styles');
```

选择建议：
- 样式较少（几行到几十行）：使用内联CSS
- 样式较多：使用外部CSS文件
- 需要频繁修改：使用外部CSS文件
- 追求加载速度：使用内联CSS
- 需要缓存：使用外部CSS文件
