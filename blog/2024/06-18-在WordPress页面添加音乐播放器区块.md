---
date: 2024-06-18 13:58
slug: 在WordPress页面添加音乐播放器区块
---

我有WordPress子主题，请帮我用aplayer JS来实现在网页左下角添加播放区块：

好的，下面是如何在WordPress子主题中添加APlayer播放区块的步骤。

### 1. 下载和引入APlayer资源

首先，你需要下载APlayer的JavaScript和CSS文件，并将其放入你的子主题目录中。你可以从[APlayer的GitHub页面](https://github.com/MoePlayer/APlayer)下载这些文件，或者使用CDN。

### 2. 引入APlayer的CSS和JS

<!-- truncate -->

在你的子主题的`functions.php`文件中添加以下代码，以便在WordPress中加载APlayer的CSS和JS文件：[首页 - APlayer](https://aplayer.js.org/#/zh-Hans/?id=cdn)

```php
function enqueue_aplayer_scripts() {
    // APlayer CSS
    wp_enqueue_style('aplayer-css', 'https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.css');

    // APlayer JS
    wp_enqueue_script('aplayer-js', 'https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_aplayer_scripts');
```

### 3. 创建播放区块容器

在你的子主题的模板文件（例如`footer.php`）中添加一个用于APlayer的HTML容器：

```html
<div id="aplayer" class="aplayer"></div>
```

### 4. 初始化APlayer

接下来，在你的子主题的JavaScript文件中（例如`custom.js`，你需要确保该文件已经在`functions.php`中被正确加载），初始化APlayer：

```javascript
document.addEventListener('DOMContentLoaded', function () {
    const ap = new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true, // 固定在页面底部
        audio: [{
            name: 'Song Title',
            artist: 'Artist Name',
            url: 'path/to/your/audio/file.mp3',
            cover: 'path/to/your/cover/image.jpg'
        }]
    });
});
```

### 5. 确保自定义JavaScript文件加载

在你的`functions.php`文件中，确保加载了自定义的JavaScript文件：

```php
function enqueue_custom_scripts() {
    // 你的自定义JS文件
    wp_enqueue_script('custom-js', get_stylesheet_directory_uri() . '/custom.js', array('jquery', 'aplayer-js'), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_custom_scripts');
```

### 6. 完成

以上步骤完成后，你应该能够在你的网站左下角看到APlayer播放区块。你可以根据需要调整CSS样式和JavaScript配置来满足你的需求。

如果你有任何问题或需要进一步的帮助，请告诉我！

---

以上代码，网页刷新后，音乐就停止了，而且要从头开始播放。

一个简单的刷新网页，继续播放的方案,，使用localStorage

```js
<audio id="myAudio" controls>
  <source src="https://spacexcode.oss-cn-hangzhou.aliyuncs.com/mp3/那女孩对我说.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<script>
window.onload = function() {
  var audio = document.getElementById("myAudio");
  var playedTime = localStorage.getItem("playedTime");
  
  if (playedTime) {
    audio.currentTime = parseFloat(playedTime);
    audio.play();
  }

  audio.addEventListener('timeupdate', function() {
    localStorage.setItem("playedTime", audio.currentTime);
  });
  
  audio.addEventListener('ended', function() {
    localStorage.removeItem("playedTime");
  });
};
</script>
```

