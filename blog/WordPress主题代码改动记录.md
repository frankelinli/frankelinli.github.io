---
date: 2024-03-30 12:07
---

这里记录下来对WordPress代码的改动。以备使用。

1. 要使博客头部不显示特色图像（feature image），你需要删除以下代码：

   docy/single.php

   ```php
   the_post_thumbnail('full', array( 'class' => 'mb-4 featured-image' ) );
   ```


2. 

<!-- truncate -->
