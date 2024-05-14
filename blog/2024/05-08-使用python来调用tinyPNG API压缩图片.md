---
date: 2024-05-08 22:59
slug: 使用python来调用tinyPNG API压缩图片
---

用python来调用tinyPNG的API来压缩图片、转换图片格式。以下代码是把jpg图片转换为webp格式。转换格式时，会自动压缩图片。

### 最简洁代码

```python
import tinify
tinify.key = "JRk8s8gxWYpsd6PY925SSN175Hffrkhg"

source = tinify.from_file("jingdezhen.JPG")
converted = source.convert(type=["image/webp","image/png"])
extension = converted.result().extension
converted.to_file("jingdezhen." + extension)	
```

<!-- truncate -->

### 带有屏幕提示和任意键关闭代码

优化版代码，提供了屏幕提示，和任意键关闭屏幕：

```python
import tinify
import os
import msvcrt

def print_file_size(filepath):
    size = os.path.getsize(filepath) / 1024
    print("文件大小: %d kb" % size)

def optimize_image(source_path):
    try:
        print_file_size(source_path)
        print("开始读取图像到tinyPNG服务器...")
        source = tinify.from_file(source_path)
        print("图像加载成功，正在进行转换...")
        converted = source.convert(type="image/webp")      # 转换为webp
        extension = converted.result().extension
        output_path = os.path.join(os.path.dirname(source_path), "test." + extension)
        converted.to_file(output_path)
        print("图像转换成功，已保存为%s" % output_path)
        print_file_size(output_path)
        print("按下任意键关闭...")
        msvcrt.getch()  # 等待用户按下任意键
    except tinify.AccountError as e:
        print("账户错误：%s" % e.message)
    except tinify.ClientError as e:
        print("客户端错误：%s" % e.message)
    except tinify.ServerError as e:
        print("服务器错误：%s" % e.message)
    except tinify.ConnectionError as e:
        print("连接错误：%s" % e.message)
    except Exception as e:
        print("发生异常：%s" % str(e))

# 设置API密钥
tinify.key = "JRk8s8gxWYpsd6PYd925SSN172Hffrkhg"
# 设置源图像路径
source_path = "test.JPEG"
# 优化图像
optimize_image(source_path)
```



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

### 再次完善代码：打开文件框，选择原图

补充了代码，实现在窗口里选择原图，然后执行代码，输出为转换后的图片。

```python

import tinify
import os
import tkinter as tk
from tkinter import filedialog
import msvcrt

def print_file_size(filepath):
    size = os.path.getsize(filepath) / 1024
    print("文件大小: %d kb" % size)

def optimize_image(source_path):
    try:
        print_file_size(source_path)
        print("开始读取图像到tinyPNG服务器...")
        source = tinify.from_file(source_path)
        print("图像加载成功，正在进行转换...")
        converted = source.convert(type="image/webp")      # 转换为webp
        extension = converted.result().extension
        output_path = os.path.join(os.path.dirname(source_path), "test." + extension)
        converted.to_file(output_path)
        print("图像转换成功，已保存为%s" % output_path)
        print_file_size(output_path)
        print("按下任意键关闭...")
        msvcrt.getch()  # 等待用户按下任意键
    except tinify.AccountError as e:
        print("账户错误：%s" % e.message)
    except tinify.ClientError as e:
        print("客户端错误：%s" % e.message)
    except tinify.ServerError as e:
        print("服务器错误：%s" % e.message)
    except tinify.ConnectionError as e:
        print("连接错误：%s" % e.message)
    except Exception as e:
        print("发生异常：%s" % str(e))

def open_file_dialog():
    root = tk.Tk()
    root.withdraw()
    file_path = filedialog.askopenfilename()
    if file_path:
        optimize_image(file_path)

# 设置API密钥
tinify.key = "JRk8s8gxWYpsd6PY925SSN172Hffrkhg"

# 打开文件对话框选择图像文件并优化
open_file_dialog()
```

### 代码优化: 文件框过滤文件，只显示图片文件

```python
import tinify
import os
import tkinter as tk
from tkinter import filedialog
import msvcrt

def print_file_size(filepath):
    size = os.path.getsize(filepath) / 1024
    print("文件大小: %d kb" % size)

def optimize_image(source_path):
    try:
        print_file_size(source_path)
        print("开始读取图像到tinyPNG服务器...")
        source = tinify.from_file(source_path)
        print("图像加载成功，正在进行转换...")
        converted = source.convert(type="image/webp")      # 转换为webp
        extension = converted.result().extension
        output_path = os.path.join(os.path.dirname(source_path), "test." + extension)
        converted.to_file(output_path)
        print("图像转换成功，已保存为%s" % output_path)
        print_file_size(output_path)
        print("按下任意键关闭...")
        msvcrt.getch()  # 等待用户按下任意键
    except tinify.AccountError as e:
        print("账户错误：%s" % e.message)
    except tinify.ClientError as e:
        print("客户端错误：%s" % e.message)
    except tinify.ServerError as e:
        print("服务器错误：%s" % e.message)
    except tinify.ConnectionError as e:
        print("连接错误：%s" % e.message)
    except Exception as e:
        print("发生异常：%s" % str(e))

def is_image_file(file_path):
    image_extensions = ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.jfif']
    _, file_extension = os.path.splitext(file_path)
    return file_extension.lower() in image_extensions

def open_file_dialog():
    root = tk.Tk()
    root.withdraw()
    file_path = filedialog.askopenfilename(filetypes=[("Image Files", "*.png;*.jpg;*.jpeg;*.gif;*.bmp;*.jfif")])
    if file_path and is_image_file(file_path):
        optimize_image(file_path)

# 设置API密钥
tinify.key = "JRk8s8gxWYpsd6PY925SSN172Hffrkhg"

# 打开文件对话框选择图像文件并优化
open_file_dialog()
```

::: info

python的tkinter库，虽然过滤了只显示图片文件，但是仍然会显示文件夹。这是tikinter局限

:::

