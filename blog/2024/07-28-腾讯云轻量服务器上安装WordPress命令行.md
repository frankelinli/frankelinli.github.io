---
date: 2024-07-28 02:02
slug: 腾讯云轻量服务器上安装WordPress命令行
---





<!-- truncate -->

使用腾讯云轻量服务器的OrcaTerm终端工具，来安装WP-CLI

## 安装

我们推荐使用下载 Phar 文件的安装方法，如果需要使用[其他安装方法](https://make.wordpress.org/cli/handbook/installing/)（[Composer](https://make.wordpress.org/cli/handbook/installing/#installing-via-composer), [Homebrew](https://make.wordpress.org/cli/handbook/installing/#installing-via-homebrew), [Docker](https://make.wordpress.org/cli/handbook/installing/#installing-via-docker)），请参阅相关文档。

在安装 WP-CLI 之前，请确保您的操作环境满足最低要求：

- UNIX 环境（OS X，Linux，FreeBSD，Cygwin），某些功能在 Windows 中将受到限制。
- PHP 5.6 或更高版本。
- WordPress 3.7 或更高版本，较旧版本在功能上可能会有所减少。

检查好了操作环境，使用 `wget` 或 `curl` 下载 [wp-cli.phar](https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar)：

```
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
```

然后，检查 Phar 文件确保其正常运行：

```
php wp-cli.phar --info
```

## 设置

在.wp-cli目录下，新建config.yml文件，指定WordPress网站的目录

```
path: /www/wwwroot/www.abcfadf.com
```



![image-20240728020509953](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/image-20240728020509953.png)

好了。



1. 获取最近的 5 篇帖子：

   Copy

   ```
   wp post list --posts_per_page=5 --orderby=date --order=desc
   ```

WP-CLI 提供了大量的命令来管理 WordPress 站点的各个方面。以下是一些常用的 WP-CLI 命令类别和示例：

1. 核心 WordPress 管理：
   - `wp core download` - 下载 WordPress 核心文件
   - `wp core install` - 安装 WordPress
   - `wp core update` - 更新 WordPress 核心
   - `wp core version` - 显示 WordPress 版本

2. 数据库管理：
   - `wp db export` - 导出数据库
   - `wp db import` - 导入数据库
   - `wp db optimize` - 优化数据库
   - `wp db repair` - 修复数据库

3. 插件管理：
   - `wp plugin install` - 安装插件
   - `wp plugin activate` - 激活插件
   - `wp plugin deactivate` - 停用插件
   - `wp plugin delete` - 删除插件
   - `wp plugin list` - 列出已安装的插件

4. 主题管理：
   - `wp theme install` - 安装主题
   - `wp theme activate` - 激活主题
   - `wp theme delete` - 删除主题
   - `wp theme list` - 列出已安装的主题

5. 用户管理：
   - `wp user create` - 创建新用户
   - `wp user delete` - 删除用户
   - `wp user list` - 列出用户
   - `wp user update` - 更新用户信息

6. 内容管理：
   - `wp post create` - 创建新文章
   - `wp post delete` - 删除文章
   - `wp post list` - 列出文章
   - `wp comment create` - 创建评论
   - `wp comment delete` - 删除评论

7. 网站维护：
   - `wp cache flush` - 清除缓存
   - `wp transient delete --all` - 删除所有临时数据
   - `wp rewrite flush` - 刷新重写规则

8. 多站点管理：
   - `wp site create` - 创建新站点（在多站点网络中）
   - `wp site list` - 列出网络中的站点

9. 更新管理：
   - `wp core update` - 更新 WordPress 核心
   - `wp plugin update --all` - 更新所有插件
   - `wp theme update --all` - 更新所有主题

10. 其他实用命令：
    - `wp search-replace` - 搜索和替换数据库中的内容
    - `wp option get/update` - 获取或更新 WordPress 选项
    - `wp cron event list` - 列出计划任务

11. 开发者工具：
    - `wp scaffold` - 生成代码、测试和文件
    - `wp db query` - 执行 SQL 查询

要获取完整的命令列表，您可以在命令行中运行：

```bash
wp help
```

对于特定命令的详细信息，可以使用：

```bash
wp help [command]
```

例如：`wp help post list`

WP-CLI 非常强大，可以大大提高 WordPress 管理的效率。您对其中的某个特定命令或功能感兴趣吗？我可以为您提供更详细的信息和使用示例。
