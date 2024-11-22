---
date: 2024-09-13 19:24
slug: WordPress发布文章后，自动把文章标题记录到txt文件
---

在文章成功发布后才记录日志，而忽略自动草稿和普通草稿的保存。以下是修改后的代码：

<!-- truncate -->

https://poe.com/chat/3l4h0njfzo02mcrf4ts

```php
add_action('transition_post_status', 'log_when_published', 10, 3);

function log_when_published($new_status, $old_status, $post) {
    // 只在文章状态从非"publish"变为"publish"时记录
    if ($old_status != 'publish' && $new_status == 'publish') {
        // 确保是文章类型（排除页面等其他内容类型）
        if ($post->post_type == 'post') {
            $post_log = get_stylesheet_directory() . '/post_log.txt';
            $message = get_the_title($post->ID) . ' was just published!';

            $file = fopen($post_log, 'a');
            if ($file) {
                fwrite($file, $message . "\n");
                fclose($file);
            } else {
                error_log("Unable to open or create log file: " . $post_log);
            }
        }
    }
}
```

这个修改后的版本有以下几个重要变化：

1. 我们使用 `transition_post_status` 钩子而不是 `save_post`。这允许我们检查文章状态的变化。
2. 函数现在接收三个参数：新状态、旧状态和文章对象。
3. 我们只在文章状态从非"publish"变为"publish"时才记录日志。这确保了只有在文章首次发布时才会记录。
4. 我们添加了一个额外的检查，确保只记录文章类型（'post'），而不是页面或其他内容类型。
5. 日志消息从 "was just saved" 改为 "was just published"，以更准确地反映所发生的动作。
6. 使用 `fopen()` 的 'a' 模式,如果文件不存在,它会尝试创建文件。
7. 添加了错误处理:如果无法打开或创建文件,它会记录一个错误。
8. 添加了 `fclose()` 来正确关闭文件。

这个版本的代码会忽略所有的草稿保存（包括自动草稿），只在文章实际发布时才记录日志。这样可以确保日志更加清晰，只包含真正重要的发布事件。

### 提示

:::warning

PHP 读写 TXT 文件通常是相当快速的操作，特别是对于小型文件来说。不过，在高流量的网站上，频繁的文件 I/O 操作仍可能成为性能瓶颈。

:::

考虑到这一点，我们可以进一步优化代码，使用更高效的方法来记录日志。以下是一些可能的改进：

1. 使用缓冲写入：
   我们可以将日志消息先存储在内存中，然后定期批量写入文件，而不是每次发布文章都立即写入。
2. 使用数据库而不是文本文件：
   对于 WordPress 来说，使用数据库可能比使用文本文件更有效。
3. 使用 WordPress 的 transients API：
   这可以在内存中缓存日志消息，然后定期写入数据库。
