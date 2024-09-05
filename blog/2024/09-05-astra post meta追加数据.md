---
date: 2024-09-05 17:00
slug: astra post meta追加数据
---

往astra child主题里single post meta后追加一个meta，添加“打印” 元数据；

<!-- truncate -->

## 初步方案

``` php
function add_print_button_to_meta($output) {
if (is_single()) {
$print_button = '<a href="javascript:window.print();" class="print-button">打印</a>';
return $output . $print_button;
}
return $output;
}
add_filter('astra_single_post_meta', 'add_print_button_to_meta');
```

我使用上述代码，往astra child主题里single post meta后追加一个meta，但是位置看起来不对，如图。如何让追加的post meta到entry-meta里面，与其他span并列？

![image.png](https://pfst.cf2.poecdn.net/base/image/42bc1263817fb72eaff7ad579bb89c54e421800c10e1c693ee093b8c89efe39d?w=1241&h=250)

## 改进方案

要将新添加的打印按钮放置在 entry-meta div 内部，与其他 span 元素并列，您需要修改您的函数来直接操作 entry-meta 的内容，而不是简单地追加到整个输出之后。这里有一个修改后的方法：

```php
function modify_entry_meta($output) {
    if (is_single()) {
        $print_button = '<span class="posted-on"><a href="javascript:window.print();">打印</a></span>';
        
        // 查找 entry-meta 结束标签的位置
        $pos = strrpos($output, '</div>');
        
        if ($pos !== false) {
            // 在 </div> 之前插入打印按钮
            $output = substr_replace($output, $print_button, $pos, 0);
        }
    }
    return $output;
}
add_filter('astra_single_post_meta', 'modify_entry_meta');
```

![image-20240905171059318](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/image-20240905171059318.png)

这个修改后的函数做了以下几点改变：

1. 将打印按钮包装在一个 `<span>` 标签中，并给它添加了 `posted-on` 类，使其样式与其他元素一致。
2. 使用 `strrpos()` 函数找到最后一个 `</div>` 标签的位置，这应该是 `entry-meta` div 的结束标签。
3. 使用 `substr_replace()` 函数在 `</div>` 标签之前插入打印按钮。

这样修改后，打印按钮应该会出现在 `entry-meta` div 内部，与其他 span 元素并列。

如果还遇到样式问题，可能需要添加一些 CSS 来确保打印按钮与其他元素对齐：

```css
.entry-meta .print-button {
    margin-left: 10px; /* 根据需要调整 */
    vertical-align: middle;
}
```

将这段 CSS 添加到您的子主题的 `style.css` 文件中。
