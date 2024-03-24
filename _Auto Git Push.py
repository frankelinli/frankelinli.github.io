import os
import time

os.system('git add .')
time.sleep(1)  # 停顿1秒

current_time = time.strftime("%H:%M:%S")  # 获取当前的时分秒
commit_message = "python auto push {}".format(current_time)
os.system('git commit -m "{}"'.format(commit_message))
time.sleep(1)  # 停顿1秒

os.system('git push origin main')