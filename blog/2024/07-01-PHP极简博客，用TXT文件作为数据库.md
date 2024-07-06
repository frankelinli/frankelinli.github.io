---
date: 2024-07-01 19:21
slug: PHP极简博客，用TXT文件作为数据库
---

下面是一个简单的单页PHP博客程序。这个程序能够实现新增和删除文章的功能，并使用本地文本文件来存储文章内容。

<!-- truncate -->

```php
<?php
// 定义存储文件路径
$storage_file = 'blog_posts.txt';

// 读取现有文章
function read_posts($file) {
    if (!file_exists($file)) {
        return [];
    }
    $content = file_get_contents($file);
    return $content ? unserialize($content) : [];
}

// 保存文章
function save_posts($file, $posts) {
    file_put_contents($file, serialize($posts));
}

// 新增文章
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['new_post'])) {
    $title = htmlspecialchars($_POST['title']);
    $content = htmlspecialchars($_POST['content']);
    $posts = read_posts($storage_file);
    $posts[] = ['title' => $title, 'content' => $content];
    save_posts($storage_file, $posts);
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}

// 删除文章
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['delete_post'])) {
    $post_id = (int)$_POST['post_id'];
    $posts = read_posts($storage_file);
    if (isset($posts[$post_id])) {
        array_splice($posts, $post_id, 1);
        save_posts($storage_file, $posts);
    }
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}

// 读取所有文章
$posts = read_posts($storage_file);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>简单博客</title>
</head>
<body>
    <h1>简单博客</h1>

    <h2>新增文章</h2>
    <form method="post" action="">
        <label for="title">标题:</label><br>
        <input type="text" id="title" name="title" required><br><br>
        <label for="content">内容:</label><br>
        <textarea id="content" name="content" rows="5" cols="40" required></textarea><br><br>
        <input type="submit" name="new_post" value="新增文章">
    </form>

    <h2>文章列表</h2>
    <?php if (!empty($posts)): ?>
        <ul>
            <?php foreach ($posts as $id => $post): ?>
                <li>
                    <h3><?php echo $post['title']; ?></h3>
                    <p><?php echo nl2br($post['content']); ?></p>
                    <form method="post" action="" style="display:inline;">
                        <input type="hidden" name="post_id" value="<?php echo $id; ?>">
                        <input type="submit" name="delete_post" value="删除">
                    </form>
                </li>
            <?php endforeach; ?>
        </ul>
    <?php else: ?>
        <p>没有文章。</p>
    <?php endif; ?>
</body>
</html>
```

### 解释

1. **存储文件路径**：定义一个文本文件路径来存储博客文章。
2. **读取文章**：从文本文件中读取并反序列化文章数据。
3. **保存文章**：将文章数据序列化并写入文本文件。
4. **新增文章**：处理表单提交，新增文章，并保存。
5. **删除文章**：处理表单提交，删除指定文章，并保存。
6. **显示文章列表**：显示所有已存储的文章，并提供删除功能。

### 使用说明

1. 将上述代码保存为一个PHP文件，例如`blog.php`。
2. 确保同目录下存在一个名为`blog_posts.txt`的文件，并且有写入权限。
3. 通过浏览器访问`blog.php`，即可使用博客功能。

这个简单的博客程序能够增删文章，并使用文本文件作为存储。可以作为学习PHP文件操作和基本表单处理的示例。
