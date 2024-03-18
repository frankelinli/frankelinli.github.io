## 这是把docusaurus网站自动发布到GitHub page上的工作流



```
- name: Install dependencies
    run: npm ci
  - name: Build website
    run: npm run build

  # Popular action to deploy to GitHub Pages:
  # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus
  - name: Deploy to GitHub Pages
    uses: peaceiris/actions-gh-pages@v3
    with:
      github_token: ${{ secrets.GITHUB_TOKEN }}
      # Build output to publish to the `gh-pages` branch:
      publish_dir: ./build
      # The following lines assign commit authorship to the official
      # GH-Actions bot for deploys to `gh-pages` branch:
      # https://github.com/actions/checkout/issues/13#issuecomment-724415212
      # The GH actions bot is used by default if you didn't specify the two fields.
      # You can swap them out with your own user credentials.
      user_name: github-actions[bot]
      user_email: 41898282+github-actions[bot]@users.noreply.github.com
```

## 讲解步骤：

这是一个用于将网站部署到GitHub Pages的GitHub Actions工作流程的示例。让我为您解释一下每个部分的含义：

- `name: Deploy to GitHub Pages`: 定义了该工作流程的名称。

- `on`: 定义了触发工作流程的事件。在这个示例中，工作流程会在将代码推送到`main`分支时触发。

- `permissions`: 定义了工作流程需要的权限。在这个示例中，工作流程需要具有对内容进行写操作的权限。

- `jobs`: 定义了工作流程中的作业。在这个示例中，只有一个名为`deploy`的作业。

- `deploy`: `deploy`作业的名称。

- `runs-on`: 指定作业运行的操作系统环境，这里是`ubuntu-latest`。

- `steps`: 定义了作业中的一系列步骤。

  - `actions/checkout@v3`: 使用`actions/checkout`动作，将代码检出到工作目录中。

  - `actions/setup-node@v3`: 使用`actions/setup-node`动作，设置Node.js环境。

  - `name: Install dependencies`: 安装项目的依赖项。

  - `name: Build website`: 构建网站。

  - `peaceiris/actions-gh-pages@v3`: 使用`peaceiris/actions-gh-pages`动作，将构建输出发布到`gh-pages`分支上的GitHub Pages。

    - `github_token`: GitHub提供的自动生成的访问令牌，用于在工作流程中进行身份验证和授权。

    - `publish_dir`: 构建输出的目录路径，将其发布到`gh-pages`分支。

    - `user_name`和`user_email`: 这些字段指定了提交的作者信息，以便在`gh-pages`分支的部署中使用GitHub Actions机器人的身份。

这个示例工作流程会在每次将代码推送到`main`分支时运行。它首先检出代码，然后安装依赖项并构建网站。最后，它使用`actions-gh-pages`动作将构建输出发布到`gh-pages`分支，以实现GitHub Pages的部署。
