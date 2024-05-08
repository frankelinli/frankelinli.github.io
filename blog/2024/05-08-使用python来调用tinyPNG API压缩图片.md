---
date: 2024-05-08 22:59
slug: 使用python来调用tinyPNG API压缩图片
---

用python来调用tinyPNG的API来压缩图片、转换图片格式。以下代码是把jpg图片转换为webp格式。转换格式时，会自动压缩图片。

```python
import tinify
tinify.key = "JRk8s8gxWYpsd6PY925SSN175Hffrkhg"

source = tinify.from_file("jingdezhen.JPG")
converted = source.convert(type=["image/webp","image/png"])
extension = converted.result().extension
converted.to_file("jingdezhen." + extension)	
```

<!-- truncate -->

### 为何type要使用数组？

在使用 Tinify 转换图像格式时，`type` 参数接受一个数组。这是因为 Tinify 提供了一种方便的方式，允许你指定多个目标格式进行转换。通过将多个格式包含在数组中，你可以一次性将源图像转换为多个目标格式。

在你的代码示例中，使用 `type=["image/webp"]` 将源图像转换为 WebP 格式。如果你想同时将图像转换为多个格式，只需在 `type` 数组中添加更多元素即可，例如：

```python
converted = source.convert(type=["image/webp", "image/jpeg", "image/png"])
```

这样，源图像将转换为 WebP、JPEG 和 PNG 格式的三个副本。

通过使用数组，Tinify 提供了一种简洁而灵活的方式，方便地指定多个目标格式。

### 如果我只想要webp格式，不使用数组可以吗

是的，如果你只想将图像转换为 WebP 格式，你可以直接将 `"image/webp"` 作为字符串传递给 `type` 参数，而无需使用数组。以下是示例代码：

```python
converted = source.convert(type="image/webp")
```

这样，源图像将仅转换为 WebP 格式，而不会生成其他格式的副本。

使用数组的主要优势是在单个转换操作中指定多个目标格式。如果只需要一个格式，直接传递字符串即可。



