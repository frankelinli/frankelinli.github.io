---
date: 2024-03-27 16:01
---
---
custom_edit_url: 
---

## 这是把docusaurus网站自动发布到GitHub page上的工作流



```yaml
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



---



### 它是模拟有一个人在一台安装了node的电脑上运行npm deploy命令

![Assistant](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/assistant.b077c338.svg)

Assistant

Poe



是的，您可以将GitHub Actions工作流程视为在具有Node.js安装的计算机上运行`npm deploy`命令的模拟。工作流程中的步骤通过执行相应的操作来模拟在本地计算机上进行操作的过程。

具体地，工作流程中的步骤包括：

1. 使用`actions/checkout@v3`动作从GitHub仓库中检出代码。
2. 使用`actions/setup-node@v3`动作设置Node.js环境，并安装指定版本的Node.js。
3. 使用`npm ci`命令安装项目的依赖项。
4. 使用`npm run build`命令构建网站。
5. 使用`peaceiris/actions-gh-pages@v3`动作将构建输出发布到GitHub Pages。

通过这些步骤的模拟执行，GitHub Actions可以在云端为您自动完成构建和部署的过程，而无需您在本地计算机上手动执行这些命令。这使得您可以轻松地集成自动化流程到GitHub仓库中，并在每次推送代码时自动进行构建和部署。



### 每次工作流执行时，都要安装node.js和依赖项？

![Assistant](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/assistant.b077c338.svg)

Assistant

Poe



在默认情况下，GitHub Actions会在每次工作流程执行时重新安装Node.js和项目依赖项。这是因为GitHub Actions的执行环境是一个干净的虚拟机，每次工作流程执行时都会从头开始构建和配置环境。

然而，为了提高工作流程的执行效率，您可以使用缓存来避免每次都重新安装依赖项。GitHub Actions提供了缓存功能，允许您将构建所需的依赖项缓存起来，下次执行时可以直接从缓存中加载，而无需重新下载和安装。

在示例工作流程中，使用了`actions/setup-node@v3`动作的`cache`参数来启用依赖项的缓存。这样，如果之前已经缓存了相同的依赖项，下次执行时将直接从缓存中加载，加快工作流程的执行速度。

请注意，缓存的有效性取决于您的项目依赖项是否发生了变化。如果依赖项没有发生变化，缓存将有效，并且可以加快工作流程的执行速度。但如果依赖项发生了变化，GitHub Actions会自动重新安装最新的依赖项。

因此，通过使用缓存机制，可以在一定程度上避免在每次工作流程执行时都重新安装Node.js和依赖项，提高工作流程的执行效率。
