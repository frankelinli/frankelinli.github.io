---
date: 2024-03-24 21:22
slug: 用python自动化生成Markdown文件的yml头部信息

---

用python自动化生成Markdown文件，并自动填入yml头部信息。你可以在代码中修改，加入自己想要自动化填入的信息，比如可以自动化填入作者、标题等等，全部都可以！

我又让它自动填入`<!-- truncate -->\`命令，这样在docusaurus博客列表中，就会显示摘要了，不用每次自己手动输入这个难写的命令了。

伟大的python！

<!-- truncate -->

```python title="/auto creat markdown file and auto fill in yml.py"

# 获取当前日期和时间
current_datetime = datetime.datetime.now()

# 构建 Markdown 文件名（去掉扩展名）
md_filename = f"{current_datetime.year}年{current_datetime.month}月{current_datetime.day}日"

# 构建 YAML 内容
yaml_content = """---
title: {title}
author: Your Name
date: {date}
---""".format(title=md_filename, date=current_datetime)

# 写入 Markdown 文件内容
md_content = "\n\n\n<!-- truncate -->\n"

with open(f"{md_filename}.md", "w", encoding="utf-8") as file:
    file.write(yaml_content)
    file.write(md_content)

print(f"Markdown 文件 {md_filename}.md 创建成功，YAML 头信息和内容已写入文件。")	
```

:::tip

注意，如果自动填入的内容是中文，encoding="utf-8"必须要写；否则填入的是乱码

:::

