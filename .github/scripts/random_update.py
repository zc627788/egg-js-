import os
import random
import time

# 获取环境变量中的最大和最小提交次数
max_commits = int(os.environ['MAX_COMMITS'])
min_commits = int(os.environ['MIN_COMMITS'])

# 检查环境变量是否设置了当前尝试的提交次数
attempted_commits = random.randint(min_commits, max_commits)

for _ in range(attempted_commits):
    # 这里添加你修改文件的逻辑，比如向文件添加时间戳
    with open('update.log', 'a') as file:
        timestamp = time.strftime('%Y-%m-%d %H:%M:%S')
        file.write(f'Update at {timestamp}\n')

    # 随机延迟，模拟自然的间隔
    time_to_sleep = random.randint(60, 300)  # 随机1到5分钟
    time.sleep(time_to_sleep)

    # 执行git命令，添加和提交改动
    os.system('git add update.log')
    commit_message = f"Update for {timestamp}"
    os.system(f'git commit -m "{commit_message}"')

# 输出结束
print(f"Attempted {attempted_commits} commits.")
