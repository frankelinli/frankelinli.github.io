import os
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