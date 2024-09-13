---
date: 2024-09-13 21:29
slug: 往WordPress管理后台里添加页面，自定义功能
---

这段代码创建了一个WordPress插件，它在管理面板中添加了一个自定义菜单。主要功能包括：

1. 定义插件信息（名称和描述）。
2. 创建一个主菜单项"Forms"和一个子菜单项"Archived Submissions"。
3. 为这些菜单项定义简单的页面内容。

每个函数都有其特定的作用，注释解释了每个部分的功能。这个结构为进一步开发更复杂的表单管理系统提供了基础。

<!-- truncate -->

```php
<?php
/**
 * Plugin Name: Josh Admin Menu
 * Description: Just an example for the admin menu
 */

/**
 * 创建管理菜单结构
 */
function josh_admin_menu() {
    // 添加主菜单页面
    add_menu_page(
        'Forms',             // 页面标题
        'Form Items',        // 菜单标题
        'manage_options',    // 所需权限
        'josh-admin-menu',   // 菜单slug
        'josh_admin_menu_main' // 回调函数
    );
    
    // 添加子菜单页面
    add_submenu_page(
        'josh-admin-menu',       // 父菜单slug
        'Archived Submissions',  // 页面标题
        'Archive',               // 子菜单标题
        'manage_options',        // 所需权限
        'josh-admin-menu-archive', // 菜单slug
        'josh_admin_menu_sub_archive' // 回调函数
    );
}

// 将菜单创建函数挂钩到WordPress admin_menu动作
add_action('admin_menu', 'josh_admin_menu');

/**
 * 主菜单页面的回调函数
 */
function josh_admin_menu_main() {
    echo '<div class="wrap"><h2>Form Submissions</h2>Welcome to the form submissions page!</div>';
}

/**
 * 子菜单页面（归档）的回调函数
 */
function josh_admin_menu_sub_archive() {
    echo '<div class="wrap">Submenu Option Page Archives</div>';
}
```

