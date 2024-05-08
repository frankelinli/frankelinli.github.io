---
date: 2024-03-27 16:03
slug: 用python给Markdown文件批量添加头部yaml信息
---

docusaurus下某个文库写了几十篇doc了，但是当时没有添加头部date信息，导致docusaurus每次更新时，页面底部显示的最近更新时间都是npm build的时间，而不是文件创建时的时间。

给头部添加date信息，可以避免这个问题。

但是已经有几十个doc，我不想一个一个打开来添加。

<!-- truncate -->

大神python出场。

```python
import os
import glob
import fileinput
import datetime

# 获取当前日期和时间
current_datetime = datetime.datetime.now()

# 定义 YAML 内容
yaml_content = """---
date: {date}
---""".format(date=current_datetime.strftime("%Y-%m-%d %H:%M"))

# 获取当前目录路径
directory = os.getcwd()

# 遍历当前目录下的所有 .md 文件
for file_path in glob.glob(os.path.join(directory, '*.md')):
    # 读取文件内容
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    # 在文件头部插入 YAML 内容
    lines.insert(0, yaml_content + '\n')

    # 将修改后的内容写回文件
    with open(file_path, 'w', encoding='utf-8') as file:
        file.writelines(lines)
```

---

如果要遍历目录下的子文件夹里的Markdown文件，

要遍历目录下的所有子目录中的 Markdown 文件，可以使用递归方法。以下是修改后的示例代码：

```python
import os
import glob
import fileinput
import datetime

# 获取当前日期和时间
current_datetime = datetime.datetime.now()

# 定义 YAML 内容
yaml_content = """---
date: {date}
---""".format(date=current_datetime.strftime("%Y-%m-%d %H:%M"))

# 定义递归函数
def process_directory(directory):
    # 遍历目录下的所有文件和子目录
    for entry in os.scandir(directory):
        if entry.is_file() and entry.name.endswith('.md'):
            # 处理 Markdown 文件
            with open(entry.path, 'r', encoding='utf-8') as file:
                lines = file.readlines()

            # 在文件头部插入 YAML 内容
            lines.insert(0, yaml_content + '\n')

            # 将修改后的内容写回文件
            with open(entry.path, 'w', encoding='utf-8') as file:
                file.writelines(lines)
        elif entry.is_dir():
            # 递归处理子目录
            process_directory(entry.path)

# 获取当前目录路径
directory = os.getcwd()

# 调用递归函数处理目录及其子目录中的 Markdown 文件
process_directory(directory)
```

