Astra 主题默认支持1个Sidebar; 要么是左侧，要么是右侧。

**使用Astra hook钩子，注入一个新建的右侧栏；这样就实现了网页的三栏布局，左右2个sidebar， 中间是文章页；**

**这样很容易扩展，左右两侧都是侧边栏，想要修改内容，只要去小工具侧边栏里添加、修改即可。**

侧边栏不仅可以添加table of content，可以添加任意东西了。

---

### 最终实现代码：

```php
// 注册新的侧边栏abc_right_sidebar，或者使用已有的侧边栏。


// 通过钩子astra_content_bottom,实现网页三栏布局。左侧是侧边栏，中间是主内容，右侧是通过钩子astra_content_bottom注入的第三列
function display_abc_right_sidebar() {
    // 检查是否是单篇文章页面,只在单文章页面显示
    if (is_single()) {
        if (is_active_sidebar('abc-right')) {
            echo '<div class="abc-right-sidebar">'; 
            dynamic_sidebar('abc-right');
        }
    }
}
add_action('astra_content_bottom', 'display_abc_right_sidebar');

```

### 实现思路：

左侧栏和中间主内容栏，使用Astra默认自带的；然后使用astra_content_bottom钩子函数，向文章详情页注入第三列；

此种方法为Astra自带的功能。astra_content_bottom钩子函数注入的第三列，自动与左侧栏、中间栏保持行内并列，flex row；基本不用再写什么CSS。

![image-20240911201421848](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/image-20240911201421848.png)

