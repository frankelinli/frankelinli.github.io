import datetime

# 获取当前日期和时间
current_datetime = datetime.datetime.now()

# 获取用户输入的slug名称
slug = input("请输入slug名称：")

# 构建 Markdown 文件名
md_filename = "{date}-{slug}".format(date=current_datetime.strftime("%m-%d"), slug=slug)

# 构建 YAML 内容
yaml_content = """---
date: {date}
slug: {slug}
---""".format(date=current_datetime.strftime("%Y-%m-%d %H:%M"), slug=slug)

# 写入 Markdown 文件内容
md_content = "\n\n\n\n\n\n<!-- truncate -->\n"

file_path = f"{md_filename}.md"

with open(file_path, "w", encoding="utf-8") as file:
    file.write(yaml_content)
    file.write(md_content)

print(f"Markdown 文件 {file_path} 创建成功，YAML 头信息和内容已写入文件。")