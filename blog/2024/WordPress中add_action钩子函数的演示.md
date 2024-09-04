---
date: 2024-09-04 18:41
slug: WordPress中add_action钩子函数的演示
---

提供一些具体的项目例子来说明 `add_action()` 函数的每个部分。我们将通过不同的WordPress开发场景来展示这个函数的灵活性。

```php
add_action( string $hook_name, callable $callback, int $priority = 10, int $accepted_args = 1 ): true
```

<!-- truncate -->

### add_action函数说明

从函数定义中可以看出哪些参数是必须的，哪些是可选的。让我们再次看一下 `add_action()` 函数的定义：

```php
add_action( string $hook_name, callable $callback, int $priority = 10, int $accepted_args = 1 ): true
```

这里的 `string`, `callable`, `int` 是类型声明，用于指定参数的预期类型。

从这个定义中，我们可以得出以下结论：

1. 必须参数：
   - `string $hook_name`
   - `callable $callback`

2. 可选参数：
   - `int $priority = 10`
   - `int $accepted_args = 1`

如何判断：

1. 必须参数：
   - 在函数定义中，没有默认值的参数是必须的。
   - 在这个例子中，`$hook_name` 和 `$callback` 没有指定默认值，所以它们是必须的。

2. 可选参数：
   - 在函数定义中，有默认值的参数是可选的。
   - 这里，`$priority` 和 `$accepted_args` 都有默认值（分别是 10 和 1），所以它们是可选的。

一般规则：

- 在 PHP 函数定义中，所有必须参数都应该放在可选参数之前。
- 可选参数通过在参数名后面使用 `=` 符号并指定一个默认值来表示。
- 如果一个参数有默认值，那么它就是可选的。
- 如果一个参数没有默认值，那么它就是必须的。

这种模式不仅适用于 `add_action()`，也适用于其他 PHP 函数。通过查看函数定义，你总是可以确定哪些参数是必须的，哪些是可选的。

### 举例说明add_action()

1. 基本用法（使用默认优先级和参数数量）：

```php
// 在主题的 functions.php 文件中
function my_theme_setup() {
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'my_theme_setup');

// 解释：
// string $hook_name: 'after_setup_theme'
// callable $callback: 'my_theme_setup'
// int $priority: 默认值 10（未指定）
// int $accepted_args: 默认值 1（未指定）
```

2. 自定义优先级：

```php
// 在一个插件文件中
function custom_header_scripts() {
    echo '<script>console.log("Custom header script");</script>';
}
add_action('wp_head', 'custom_header_scripts', 20);

// 解释：
// string $hook_name: 'wp_head'
// callable $callback: 'custom_header_scripts'
// int $priority: 20（自定义优先级，晚于默认的脚本）
// int $accepted_args: 默认值 1（未指定）
```

3. 使用匿名函数和多个参数：

```php
// 在一个自定义插件中
add_action('save_post', function($post_id, $post, $update) {
    if (!$update) {
        // 执行仅在新文章创建时的操作
        do_something_for_new_post($post_id);
    }
}, 10, 3);

// 解释：
// string $hook_name: 'save_post'
// callable $callback: 匿名函数
// int $priority: 10（默认值）
// int $accepted_args: 3（因为我们需要使用三个参数）
```

4. 在类中使用 add_action：

```php
class My_Plugin {
    public function __construct() {
        add_action('init', array($this, 'initialize_plugin'));
    }

    public function initialize_plugin() {
        // 插件初始化代码
        register_post_type('my_custom_post_type', array(/* ... */));
    }
}
new My_Plugin();

// 解释：
// string $hook_name: 'init'
// callable $callback: array($this, 'initialize_plugin')
// int $priority: 默认值 10（未指定）
// int $accepted_args: 默认值 1（未指定）
```

5. 使用特定优先级和参数数量的高级例子：

```php
// 在一个高级插件中
function modify_query_params($query) {
    if (!is_admin() && $query->is_main_query()) {
        // 修改主查询参数
        $query->set('posts_per_page', 5);
    }
}
add_action('pre_get_posts', 'modify_query_params', 15, 1);

// 解释：
// string $hook_name: 'pre_get_posts'
// callable $callback: 'modify_query_params'
// int $priority: 15（自定义优先级，以确保在其他函数之后运行）
// int $accepted_args: 1（明确指定，尽管这是默认值）
```

这些例子展示了 `add_action()` 函数在不同情况下的使用方式，包括基本用法、自定义优先级、使用匿名函数、在类中使用，以及更高级的用法。每个例子都说明了函数声明中各个参数的作用和灵活性。

通过这些例子，您可以看到 `add_action()` 如何允许开发者在WordPress的不同执行点插入自定义功能，从而实现各种复杂的主题和插件功能。

### 函数中:true

在函数定义 `add_action( string $hook_name, callable $callback, int $priority = 10, int $accepted_args = 1 ): true` 中，最后的 `: true` 表示函数的返回类型。

这里的 `true` 意味着：

1. 返回类型声明：
   - 这是 PHP 7.0 及以后版本引入的特性，用于声明函数的返回类型。
   - `: true` 表示这个函数总是返回布尔值 `true`。

2. 函数行为：
   - 当 `add_action()` 函数成功执行时，它会返回 `true`。
   - 这个返回值通常用于指示动作是否成功添加到 WordPress 的钩子系统中。

3. 用途：
   - 虽然在大多数情况下，你可能不会直接使用这个返回值，但它可以用于错误检查或调试。
   - 例如，你可以这样使用：

     ```php
     if (add_action('wp_footer', 'my_footer_function')) {
         // 动作成功添加
         error_log('Footer action added successfully');
     } else {
         // 这种情况实际上不会发生，因为 add_action 总是返回 true
         error_log('Failed to add footer action');
     }
     ```

4. 注意事项：
   - 尽管函数声明表示它总是返回 `true`，但在实际使用中，你通常不需要检查这个返回值。
   - 在 WordPress 的实现中，`add_action()` 实际上是 `add_filter()` 的一个别名，而 `add_filter()` 确实总是返回 `true`。

5. 代码可读性：
   - 在函数定义中包含返回类型可以提高代码的可读性和自文档化程度。
   - 它让其他开发者（或者将来的你）能够快速了解函数的预期行为。

总的来说，`: true` 这个返回类型声明主要是为了代码的完整性和清晰度，在日常使用 `add_action()` 时，你通常不需要特别关注这个返回值。
