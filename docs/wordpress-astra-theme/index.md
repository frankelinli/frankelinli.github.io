

### [Featured Image Size 特色图像尺寸](https://wpastra.com/docs/recommended-size-for-featured-image/#featured-image-size)

Featured image size may vary depending on the theme being used. With Astra Theme, we recommend uploading the image size of 1200 pixels (width) by 628 pixels (height):
特色图像尺寸可能会根据所使用的主题而有所不同。对于 Astra 主题，我们建议上传 1200 像素（宽）x 628 像素（高）的图像尺寸：

Setting your original image to 1200 x 628 pixels will also help avoid some cropping issues on your website and social media both.
将原始图像设置为 1200 x 628 像素也将有助于避免网站和社交媒体上的一些裁剪问题。



### 设置header边框

1. style.css

```css
.site-header {
    border-bottom: 1px solid #DADDE1; /* 将 #000000 替换为您想要的颜色代码 */
}
```

2. 使用 Astra Hooks：

    如果您想要更多控制，可以使用 Astra 的钩子系统： 

   在您的主题的 functions.php 文件中添加以下代码：

   ```php
   add_action('astra_header_before', 'add_header_border_style');
   function add_header_border_style() {
       echo '<style>
           .site-header {
               border-bottom: 1px solid #000000; /* 将 #000000 替换为您想要的颜色代码 */
           }
       </style>';
   }
   ```