---
date: 2024-06-17 12:43
slug: 用WordPress子主题实现网页底部弹窗并可以关闭
---

#### 问题：

1. **如何用WordPress子主题实现底部弹出通知并且可以关闭**：
   - 页面加载时在底部显示一个通知框。
   - 用户点击关闭按钮后，通知框隐藏并且不再显示。

#### 答案：



<!-- truncate -->

1. **创建子主题的基本结构**：
   - 在 `wp-content/themes` 目录下创建 `child-theme` 文件夹。
   - 创建 `style.css` 文件，并添加以下内容：
     ```css
     /*
     Theme Name: Child Theme
     Template: parent-theme
     */
     ```

2. **创建 `functions.php` 文件**：
   ```php
   <?php
   function child_theme_enqueue_styles() {
       wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
   }
   add_action('wp_enqueue_scripts', 'child_theme_enqueue_styles');
   
   function child_theme_enqueue_scripts() {
       wp_enqueue_script('child-theme-script', get_stylesheet_directory_uri() . '/js/popup.js', array('jquery'), null, true);
   }
   add_action('wp_enqueue_scripts', 'child_theme_enqueue_scripts');
   ```

3. **在 `footer.php` 文件中添加通知的HTML结构**：
   ```html
   <div class="popup-notification" id="popup-notification">
       <div class="popup-content">
           <p>Welcome to x.com!<br>
           We are letting you know that we are changing our URL, but your privacy and data protection settings remain the same.<br>
           For more details, see our Privacy Policy: <a href="https://x.com/en/privacy" target="_blank">https://x.com/en/privacy</a></p>
           <button class="close-popup" id="close-popup">&times;</button>
       </div>
   </div>
   ```

4. **在 `style.css` 文件中添加CSS样式**：
   ```css
   .popup-notification {
       position: fixed;
       bottom: 0;
       left: 0;
       width: 100%;
       background-color: #fff;
       box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
       padding: 15px;
       display: none;
       z-index: 1000;
   }
   
   .popup-content {
       max-width: 800px;
       margin: 0 auto;
       text-align: center;
       position: relative;
   }
   
   .popup-content p {
       margin: 0;
       font-size: 16px;
   }
   
   .popup-content a {
       color: #0073aa;
       text-decoration: none;
   }
   
   .popup-content a:hover {
       text-decoration: underline;
   }
   
   .close-popup {
       position: absolute;
       top: 50%;
       right: 15px;
       transform: translateY(-50%);
       background: none;
       border: none;
       font-size: 20px;
       cursor: pointer;
       color: #000;
   }
   ```

5. **在 `child-theme` 文件夹中创建 `js` 文件夹和 `popup.js` 文件**，并添加如下代码：
   ```javascript
   jQuery(document).ready(function($) {
       // 检查本地存储中是否存在关闭标记
       if (localStorage.getItem('popupClosed') !== 'true') {
           // 显示通知
           $('#popup-notification').fadeIn();
       }
   
       // 点击关闭按钮时隐藏通知并设置本地存储标记
       $('#close-popup').click(function() {
           $('#popup-notification').fadeOut();
           localStorage.setItem('popupClosed', 'true');
       });
   });
   ```

通过这些步骤，您可以在WordPress子主题中添加一个底部弹出通知，并确保用户关闭一次后不再显示。
