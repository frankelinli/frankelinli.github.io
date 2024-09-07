这段代码，通过在子主题function.php里增加代码，使用astra的astra_entry_content_before钩子函数，在某个分类下的文章里，插入一段文字。

:::tip

这是可行的、良好的办法。在开发主题时，可以充分利用。但是编辑博客增加内容时，有更好和直观的办法，那就是astra Pro 里面的site builder，可以可视化往hook里插入内容。

使用Astra 主题自带的Site Builder里面的hook里，可视化编辑。

:::

```php
function add_bsci_notice() {
    if ( is_single() && has_category( 'bsci' ) ) {
        echo '<div class="warning-block">
                
                   
                    <p>amfori BSCI发布通知，从2024年9月1日期，amfori旗下的验厂包含BSCI、BEPI，QMI，全部改为“不通知日期”审核类型，不再有通知日期的验厂。此“不通知日期”的审核，有1个月的窗口期，审核会在这个窗口期内随机安排。</p>
              
              </div>';
    }
}
add_action( 'astra_entry_content_before', 'add_bsci_notice' );
```

![image-20240818154803742](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/image-20240818154803742.png)
