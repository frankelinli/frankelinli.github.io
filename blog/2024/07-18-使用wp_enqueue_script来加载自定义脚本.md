---
date: 2024-07-18 22:02
slug: 使用wp_enqueue_script来加载自定义脚本
---

使用 `wp_enqueue_script` 而不是直接在 `<head>` 中插入脚本，有以下几个重要的原因：

### 1. **依赖管理**

`wp_enqueue_script` 允许你声明脚本的依赖关系。如果一个脚本依赖于另一个脚本（例如，许多脚本依赖于 jQuery），你可以通过 `wp_enqueue_script` 确保依赖脚本在正确的顺序加载。

<!-- truncate -->

```php
wp_enqueue_script('custom-js', get_template_directory_uri() . '/js/custom.js', array('jquery'), null, true);
```

在上面的代码中，`custom-js` 脚本依赖于 `jquery`，WordPress 会确保 `jquery` 在 `custom-js` 之前加载。

### 2. **避免重复加载**

`wp_enqueue_script` 会跟踪所有被排队的脚本，避免重复加载同一个脚本。这样可以减少不必要的 HTTP 请求，提高页面加载速度。

### 3. **插件兼容性**

通过 `wp_enqueue_script` 加载脚本，确保你的主题和插件可以互相兼容。插件开发者通常会使用相同的机制加载他们的脚本，这样可以避免脚本冲突和重复加载。

### 4. **条件加载**

你可以根据特定条件加载脚本。例如，只在特定页面或模板加载某些脚本，这样可以减少页面的负载。

```php
if (is_page('contact')) {
    wp_enqueue_script('contact-form-js', get_template_directory_uri() . '/js/contact-form.js', array(), null, true);
}
```

### 5. **性能优化**

`wp_enqueue_script` 提供了一个 `in_footer` 参数，允许你在页面底部加载脚本，这样可以提高页面的初始渲染速度。

```php
wp_enqueue_script('custom-js', get_template_directory_uri() . '/js/custom.js', array(), null, true);
```

### 6. **版本控制**

你可以通过 `wp_enqueue_script` 的第四个参数指定脚本的版本号，这样可以确保用户总是加载最新版本的脚本，避免缓存问题。

```php
wp_enqueue_script('custom-js', get_template_directory_uri() . '/js/custom.js', array(), '1.0.0', true);
```

### 7. **兼容性检查**

WordPress 核心团队会定期更新 `wp_enqueue_script` 的实现，以确保它与最新的浏览器和最佳实践保持一致。使用这个函数可以保证你的网站在未来的兼容性。

### 总结

使用 `wp_enqueue_script` 加载 JavaScript 脚本，不仅可以利用 WordPress 提供的依赖管理、避免重复加载、性能优化等功能，还能确保你的主题和插件兼容性更好。如果你希望构建一个高效、可维护、与插件兼容的 WordPress 主题，强烈建议使用 `wp_enqueue_script` 来加载你的脚本。
