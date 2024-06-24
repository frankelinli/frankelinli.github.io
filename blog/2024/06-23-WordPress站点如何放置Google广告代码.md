---
date: 2024-06-23 23:24
slug: WordPress站点如何放置Google广告代码
---

这是从谷歌复制下来的谷歌广告源代码，可以直接一股脑放在你想要呈现广告的位置，但是会出现广告加载慢的情况，因为你没有确保head里尽早加载谷歌广告代码。可以分开2个部分放置代码。



<!-- truncate -->

是的，Google AdSense 的 `<script>` 标签和 `<ins>` 标签可以分开放置在不同的位置，只要它们在正确的顺序和位置上就可以正常工作。通常情况下，包含 AdSense JavaScript 的 `<script>` 标签可以放在页面的 `<head>` 部分，而 `<ins>` 标签和相应的初始化脚本可以放在你希望广告显示的具体位置。

### 示例：

#### 1. 在 `header.php` 中放置包含 AdSense JavaScript 的 `<script>` 标签

```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
    <!-- Google AdSense JavaScript -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4116228001844410"
    crossorigin="anonymous"></script>
</head>
<body <?php body_class(); ?>>
    <header>
        <!-- 你的网站头部内容 -->
    </header>
```

#### 2. 在你希望广告显示的地方放置 `<ins>` 标签和初始化脚本

例如，在 `footer.php` 文件中：

```php
<footer>
    <!-- 你的网站页脚内容 -->
    
    <!-- Google AdSense Ad -->
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-4116228001844410"
         data-ad-slot="6284036157"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</footer>
<?php wp_footer(); ?>
</body>
</html>
```

### 重要注意事项

1. **确保 `<script>` 标签在 `<head>` 部分**：这样可以确保 AdSense 的 JavaScript 文件在页面加载时被尽早加载。
2. **确保 `<ins>` 标签和初始化脚本在你希望广告显示的位置**：初始化脚本 `(adsbygoogle = window.adsbygoogle || []).push({});` 必须紧跟在 `<ins>` 标签的后面。
3. **不要重复加载 AdSense JavaScript**：如果你已经在 `<head>` 中加载了 AdSense JavaScript，则不要在其他地方重复加载。

### 总结

通过将 AdSense JavaScript 文件放在页面的 `<head>` 部分，并将 `<ins>` 标签和初始化脚本放在你希望广告显示的具体位置，你可以更灵活地控制广告的显示位置。这种方法不仅有助于优化页面加载速度，还可以确保广告正确加载和显示。
