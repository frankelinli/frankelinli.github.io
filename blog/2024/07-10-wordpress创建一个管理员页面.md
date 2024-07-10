---
date: 2024-07-10 00:32
slug: wordpress创建一个管理员页面
---

WordPress站点中，可以使用加载wp-load环境，制作一个管理员专属页面，只能管理员浏览和使用。随意添加内容。其他用户和访客看不到。

<!-- truncate -->

如果希望进一步限制访问权限，例如仅允许管理员访问，可以添加额外的角色检查：



```php
<?php
// 加载 WordPress 环境
require('wp-load.php');

// 检查用户是否已登录
if (!is_user_logged_in()) {
    // 如果用户未登录，重定向到登录页面
    wp_redirect(wp_login_url());
    exit;
}

// 获取当前登录用户信息
$current_user = wp_get_current_user();

// 检查用户角色
if (!in_array('administrator', $current_user->roles)) {
    // 如果用户不是管理员，显示错误消息并退出
    wp_die('您没有权限访问此页面。');
}

echo 'Hello, ' . $current_user->user_login;

?>

<div id="main-content">
    <h1>欢迎访问我的自定义页面</h1>
    <p>这是一个使用 WordPress 环境加载的自定义页面。</p>
</div>

<h1>User List</h1>
<table border="1">
    <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Email</th>
        <th>Role</th>
    </tr>
    <?php
    // 获取所有用户
    $users = get_users();
    foreach ($users as $user) : ?>
        <tr>
            <td><?php echo $user->ID; ?></td>
            <td><?php echo $user->user_login; ?></td>
            <td><?php echo $user->user_email; ?></td>
            <td><?php echo implode(', ', $user->roles); ?></td>
        </tr>
    <?php endforeach; ?>
</table>

<?php get_footer(); ?>
```

在这个示例中，代码不仅检查用户是否已登录，还检查当前用户是否具有管理员角色。如果用户不是管理员，会显示错误消息并终止脚本执行。
