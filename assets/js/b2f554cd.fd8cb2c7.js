"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5894],{6042:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/Git -- git\u4e2d\u672c\u5730\u4e0e\u8fdc\u7a0b\u5e93\u7684\u5173\u8054\u4e0e\u53d6\u6d88","metadata":{"permalink":"/blog/Git -- git\u4e2d\u672c\u5730\u4e0e\u8fdc\u7a0b\u5e93\u7684\u5173\u8054\u4e0e\u53d6\u6d88","editUrl":"https://github.com/frankelinli/frankelinli.github.io/edit/main/blog/Git -- git\u4e2d\u672c\u5730\u4e0e\u8fdc\u7a0b\u5e93\u7684\u5173\u8054\u4e0e\u53d6\u6d88.md","source":"@site/blog/Git -- git\u4e2d\u672c\u5730\u4e0e\u8fdc\u7a0b\u5e93\u7684\u5173\u8054\u4e0e\u53d6\u6d88.md","title":"Git -- git\u4e2d\u672c\u5730\u4e0e\u8fdc\u7a0b\u5e93\u7684\u5173\u8054\u4e0e\u53d6\u6d88","description":"1.\u5728\u672c\u5730\u76ee\u5f55\u4e0b\u5173\u8054\u8fdc\u7a0brepository \uff1a","date":"2024-03-21T11:55:57.000Z","formattedDate":"2024\u5e743\u670821\u65e5","tags":[],"readingTime":0.18,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"nextItem":{"title":"docusaurus\u548c\u817e\u8baf\u4e91\u670d\u52a1\u5668\u7684\u6734\u7d20\u6c9f\u901a","permalink":"/blog/docusaurus\u548c\u817e\u8baf\u4e91\u670d\u52a1\u5668\u7684\u6734\u7d20\u6c9f\u901a"}},"content":"1.\u5728\u672c\u5730\u76ee\u5f55\u4e0b\u5173\u8054\u8fdc\u7a0brepository \uff1a\\n\\ngit remote add origin git@github.com:git_username/repository_name.git\\n\\n \\n\\n2.\u53d6\u6d88\u672c\u5730\u76ee\u5f55\u4e0b\u5173\u8054\u7684\u8fdc\u7a0b\u5e93\uff1a\\n\\ngit remote remove origin"},{"id":"/docusaurus\u548c\u817e\u8baf\u4e91\u670d\u52a1\u5668\u7684\u6734\u7d20\u6c9f\u901a","metadata":{"permalink":"/blog/docusaurus\u548c\u817e\u8baf\u4e91\u670d\u52a1\u5668\u7684\u6734\u7d20\u6c9f\u901a","editUrl":"https://github.com/frankelinli/frankelinli.github.io/edit/main/blog/docusaurus\u548c\u817e\u8baf\u4e91\u670d\u52a1\u5668\u7684\u6734\u7d20\u6c9f\u901a.md","source":"@site/blog/docusaurus\u548c\u817e\u8baf\u4e91\u670d\u52a1\u5668\u7684\u6734\u7d20\u6c9f\u901a.md","title":"docusaurus\u548c\u817e\u8baf\u4e91\u670d\u52a1\u5668\u7684\u6734\u7d20\u6c9f\u901a","description":"\u672c\u5730\u7535\u8111\uff0c\u8bbf\u95ee\u8fdc\u7a0b\u4e3b\u673a\u7684localhost:3000","date":"2024-03-21T11:55:57.000Z","formattedDate":"2024\u5e743\u670821\u65e5","tags":[],"readingTime":6.74,"hasTruncateMarker":true,"authors":[{"name":"frankelinli","title":"up\u4e3b","url":"https://frankelinli.github.io","email":"wingxyq@qq.com","imageURL":"https://frankelinli.github.io/img/logo.png","key":"frankelinli"}],"frontMatter":{"authors":"frankelinli"},"unlisted":false,"prevItem":{"title":"Git -- git\u4e2d\u672c\u5730\u4e0e\u8fdc\u7a0b\u5e93\u7684\u5173\u8054\u4e0e\u53d6\u6d88","permalink":"/blog/Git -- git\u4e2d\u672c\u5730\u4e0e\u8fdc\u7a0b\u5e93\u7684\u5173\u8054\u4e0e\u53d6\u6d88"},"nextItem":{"title":"docusaurus\u76ee\u524d\u4e0d\u9002\u5408\u505a\u535a\u5ba2","permalink":"/blog/docusaurus\u76ee\u524d\u4e0d\u9002\u5408\u505a\u535a\u5ba2"}},"content":"### \u672c\u5730\u7535\u8111\uff0c\u8bbf\u95ee\u8fdc\u7a0b\u4e3b\u673a\u7684localhost:3000\\n\\nssh -L 3000:localhost:3000 root@121.220.83.133\\n\\n\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u5c06\u672c\u5730\u7535\u8111\u7684 `3000` \u7aef\u53e3\u8f6c\u53d1\u5230\u8fdc\u7a0b\u4e3b\u673a\u4e0a\u7684 `localhost:3000` \u7aef\u53e3\u3002\\n\\nSSH \u7aef\u53e3\u8f6c\u53d1\u662f\u4e00\u6b21\u6027\u7684\uff0c\u53ea\u8981\u4f60\u5173\u95ed\u4e86\u7ec8\u7aef\u7a97\u53e3\uff0c\u7aef\u53e3\u8f6c\u53d1\u5c31\u4f1a\u81ea\u52a8\u505c\u6b62\u3002\\n\\n\u7aef\u53e3\u8f6c\u53d1\u53ea\u4f1a\u5f71\u54cd\u4f60\u5f53\u524d\u7684 SSH \u8fde\u63a5\u4ee5\u53ca\u8f6c\u53d1\u7684\u7aef\u53e3\uff0c\u4e0d\u4f1a\u5f71\u54cd\u4f60\u7684\u5176\u4ed6\u7f51\u7edc\u8fde\u63a5\u548c\u7aef\u53e3\u4f7f\u7528\\n*\x3c!-- truncate --\x3e*\\n\\n\\n---\\n\\n\\n### \u4ece\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0b\u8f7d\uff08\u5907\u4efd\uff09\u6587\u4ef6\u5230\u672c\u5730\\n\\n```bash\\nscp -r root@121.220.83.133:/www/wwwroot/konglong/* C:\\\\Users\\\\frankelin\\\\Desktop\\\\shiyishi\\\\\\n```\\n\\n\u5728\u8fd9\u4e2a\u547d\u4ee4\u4e2d\uff0c`-r` \u9009\u9879\u8868\u793a\u8981\u9012\u5f52\u590d\u5236\u6574\u4e2a\u76ee\u5f55\u6811\uff0c`root@121.220.83.133:/www/wwwroot/ceshi/*` \u6307\u5b9a\u4e86\u8981\u590d\u5236\u7684\u8fdc\u7a0b\u76ee\u5f55\u548c\u6587\u4ef6\u540d\u901a\u914d\u7b26\uff0c`C:\\\\Users\\\\frankelin\\\\Desktop\\\\shiyishi\\\\` \u6307\u5b9a\u4e86\u8981\u5c06\u6587\u4ef6\u590d\u5236\u5230\u672c\u5730\u7684\u76ee\u5f55\u3002\u8bf7\u6ce8\u610f\uff0c\u8def\u5f84\u672b\u5c3e\u7684\u659c\u6760\u5f88\u91cd\u8981\uff0c\u5b83\u8868\u793a\u5c06\u6587\u4ef6\u590d\u5236\u5230\u76ee\u5f55\u4e2d\uff0c\u800c\u4e0d\u662f\u5c06\u6574\u4e2a\u8fdc\u7a0b\u76ee\u5f55\u590d\u5236\u5230\u672c\u5730\u76ee\u5f55\u4e2d\u3002\\n\\n\u5728\u8fd0\u884c\u547d\u4ee4\u65f6\uff0c\u60a8\u9700\u8981\u8f93\u5165\u8fdc\u7a0b\u4e3b\u673a\u7684\u5bc6\u7801\u3002\u53e6\u5916\uff0c\u8bf7\u786e\u4fdd\u672c\u5730\u4e3b\u673a\u548c\u8fdc\u7a0b\u4e3b\u673a\u4e4b\u95f4\u7684\u7f51\u7edc\u8fde\u63a5\u6b63\u5e38\uff0c\u5e76\u4e14\u60a8\u5177\u6709\u8db3\u591f\u7684\u6743\u9650\u8bbf\u95ee\u8fdc\u7a0b\u4e3b\u673a\u4e0a\u7684\u6587\u4ef6\u548c\u76ee\u5f55\u3002\\n\\n---\\n\\n### Linux\u4e3b\u673a\uff0c\u8bbe\u7f6e\u4e00\u952edeploy\u90e8\u7f72\u9759\u6001\u7f51\u7ad9\\n\\n\u5236\u4f5c\u4e00\u4e2aLinux\u7684\u6279\u5904\u7406\uff0c\u9996\u5148\u8fd0\u884cnpm run build;\u7136\u540e\u6267\u884c\u628abuild\u91cc\u6784\u5efa\u597d\u7684\u6587\u4ef6\uff0c\u590d\u5236\u5230\u7f51\u7ad9\u6839\u76ee\u5f55\u4e0b\u3002\\n\\n\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2aShell\u811a\u672c\uff0c\u5c06\u8fd9\u4e24\u6761\u547d\u4ee4\u653e\u5728\u4e00\u8d77\u6267\u884c\u3002\u5177\u4f53\u6b65\u9aa4\u5982\u4e0b\uff1a\\n\\n**\u6253\u5f00\u7ec8\u7aef\uff0c\u4f7f\u7528\u6587\u672c\u7f16\u8f91\u5668\u521b\u5efa\u4e00\u4e2a\u65b0\u6587\u4ef6\uff0c\u6bd4\u5982\u8bf4`deploy.sh`\uff1a**\\n\\n```bash\\nnano deploy.sh\\n```\\n\\n**\u5728\u6587\u4ef6\u4e2d\u8f93\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a**\\n\\n```bash\\n#!/bin/bash\\n\\n# \u8fdb\u5165\u9879\u76ee\u76ee\u5f55\\necho \\"\u6b63\u5728\u8fdb\u5165\u9879\u76ee\u76ee\u5f55\uff1a/www/wwwroot/konglong\\"\\ncd /www/wwwroot/konglong\\n\\n# \u6267\u884cnpm run build\\necho \\"\u6b63\u5728\u6267\u884cnpm run build\u547d\u4ee4\\"\\nnpm run build\\n\\n# \u590d\u5236\u6587\u4ef6\\necho \\"\u6b63\u5728\u590d\u5236\u6587\u4ef6\u5230\u76ee\u6807\u76ee\u5f55\uff1a/www/wwwroot/mart\\"\\ncp -r /www/wwwroot/konglong/build/* /www/wwwroot/mart/\\n\\n# \u5b8c\u6210\\necho \\"\u90e8\u7f72\u5df2\u5b8c\u6210\\"\\n```\\n\\n\u8fd9\u4e2a\u811a\u672c\u9996\u5148\u8fdb\u5165\u9879\u76ee\u76ee\u5f55`/www/wwwroot/konglong`\uff0c\u7136\u540e\u6267\u884c`npm run build`\u547d\u4ee4\u751f\u6210\u6253\u5305\u6587\u4ef6\uff0c\u6700\u540e\u4f7f\u7528`cp`\u547d\u4ee4\u5c06\u6253\u5305\u6587\u4ef6\u590d\u5236\u5230\u76ee\u6807\u76ee\u5f55`/www/wwwroot/mart`\u3002\\n\\n**\u4fdd\u5b58\u5e76\u9000\u51fa\u6587\u4ef6\u3002\u7136\u540e\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u4e3a\u811a\u672c\u6dfb\u52a0\u53ef\u6267\u884c\u6743\u9650\uff1a**\\n\\n```bash\\nchmod +x deploy.sh\\n```\\n\\n**\u73b0\u5728\u60a8\u53ef\u4ee5\u8fd0\u884c\u8fd9\u4e2a\u811a\u672c\u4e86\u3002\u5728\u7ec8\u7aef\u4e2d\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a**\\n\\n```bash\\n./deploy.sh\\n```\\n\\n\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u6267\u884c`deploy.sh`\u811a\u672c\uff0c\u4f9d\u6b21\u6267\u884c`npm run build`\u548c`cp`\u547d\u4ee4\u3002\\n\\n\u8bf7\u6ce8\u610f\uff0c\u8fd9\u4e2a\u811a\u672c\u4e2d\u7684\u8def\u5f84\u5e94\u8be5\u6839\u636e\u60a8\u7684\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u4fee\u6539\u3002\u53e6\u5916\uff0c\u5982\u679c\u60a8\u4e0d\u5e0c\u671b\u6bcf\u6b21\u8fd0\u884c\u811a\u672c\u65f6\u90fd\u9700\u8981\u8f93\u5165\u5bc6\u7801\uff0c\u53ef\u4ee5\u5c06\u811a\u672c\u653e\u5728root\u7528\u6237\u7684\u5bb6\u76ee\u5f55\u4e0b\uff0c\u5e76\u4f7f\u7528root\u7528\u6237\u8fd0\u884c\u811a\u672c\u3002\\n\\n**\u5982\u679c\u60a8\u5c06\u8fd9\u4e2a\u811a\u672c\u4fdd\u5b58\u5728\u4e00\u4e2a\u53ef\u6267\u884c\u7684\u6587\u4ef6\u4e2d\uff0c\u5e76\u5c06\u8be5\u6587\u4ef6\u6dfb\u52a0\u5230\u7cfb\u7edf\u7684PATH\u73af\u5883\u53d8\u91cf\u4e2d\uff0c\u90a3\u4e48\u60a8\u53ef\u4ee5\u5728\u4efb\u610f\u76ee\u5f55\u4e0b\u8fd0\u884c\u8be5\u547d\u4ee4\u3002**\\n\\n\u4ee5\u4e0b\u662f\u5c06\u811a\u672c\u6dfb\u52a0\u5230PATH\u73af\u5883\u53d8\u91cf\u7684\u6b65\u9aa4\uff1a\\n\\n1. \u5c06\u811a\u672c\u4fdd\u5b58\u4e3a\u4e00\u4e2a\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u6bd4\u5982`deploy.sh`\u3002\\n2. \u5c06\u6587\u4ef6\u590d\u5236\u5230/usr/local/bin\u76ee\u5f55\u4e0b\uff1a\\n\\n```bash\\nsudo cp deploy.sh /usr/local/bin/deploy\\n```\\n\\n\u8fd9\u4e2a\u547d\u4ee4\u5c06\u6587\u4ef6\u590d\u5236\u5230/usr/local/bin\u76ee\u5f55\u4e0b\uff0c\u5e76\u5c06\u6587\u4ef6\u540d\u6539\u4e3a`deploy`\u3002\u8fd9\u4e2a\u76ee\u5f55\u901a\u5e38\u662f\u7cfb\u7edf\u7684PATH\u73af\u5883\u53d8\u91cf\u5305\u542b\u7684\u76ee\u5f55\u4e4b\u4e00\u3002\\n\\n3. \u6dfb\u52a0\u6267\u884c\u6743\u9650\uff1a\\n\\n```bash\\nsudo chmod +x /usr/local/bin/deploy\\n```\\n\\n\u8fd9\u4e2a\u547d\u4ee4\u5c06\u7ed9`/usr/local/bin/deploy`\u6587\u4ef6\u6dfb\u52a0\u53ef\u6267\u884c\u6743\u9650\u3002\\n\\n4. \u73b0\u5728\u60a8\u53ef\u4ee5\u5728\u4efb\u610f\u76ee\u5f55\u4e0b\u8fd0\u884c\u8be5\u547d\u4ee4\u4e86\uff1a\\n\\n```bash\\ndeploy\\n```\\n\\n\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u6267\u884c`/usr/local/bin/deploy`\u6587\u4ef6\uff0c\u4f9d\u6b21\u6267\u884c`npm run build`\u548c`cp`\u547d\u4ee4\u3002\\n\\n\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u60a8\u5728\u6267\u884c\u547d\u4ee4\u65f6\u4ecd\u7136\u9047\u5230\u6743\u9650\u95ee\u9898\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528sudo\u547d\u4ee4\u4ee5root\u6743\u9650\u8fd0\u884c\u8be5\u547d\u4ee4\u3002\\n\\n---\\n\\n```\\ncat ~/.ssh/id_rsa.pub | ssh root@121.220.83.133 \\"mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys\\"\\n```\\n\\n---\\n\\n### SSH\u79d8\u94a5\uff0c\u8fd9\u6837\u5c31\u4e0d\u7528\u6bcf\u6b21\u8fde\u63a5\u670d\u52a1\u5668\u90fd\u8f93\u5165\u5bc6\u7801\u4e86\\n\\n\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6bcf\u6b21\u4f7f\u7528 `scp` \u547d\u4ee4\u90fd\u9700\u8981\u8f93\u5165\u8fdc\u7a0b\u4e3b\u673a\u7684\u5bc6\u7801\u3002\u4e3a\u4e86\u907f\u514d\u6bcf\u6b21\u624b\u52a8\u8f93\u5165\u5bc6\u7801\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 SSH \u516c\u94a5\u8ba4\u8bc1\u7684\u65b9\u5f0f\u3002\\n\\nSSH \u516c\u94a5\u8ba4\u8bc1\u7684\u57fa\u672c\u539f\u7406\u662f\uff0c\u5728\u672c\u5730\u4e3b\u673a\u4e0a\u751f\u6210\u4e00\u5bf9\u516c\u94a5\u548c\u79c1\u94a5\uff0c\u5c06\u516c\u94a5\u590d\u5236\u5230\u8fdc\u7a0b\u4e3b\u673a\u4e0a\uff0c\u7136\u540e\u5c06\u79c1\u94a5\u7528\u4e8e\u672c\u5730\u4e3b\u673a\u4e0e\u8fdc\u7a0b\u4e3b\u673a\u4e4b\u95f4\u7684\u8ba4\u8bc1\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5b9e\u73b0\u81ea\u52a8\u767b\u5f55\uff0c\u4e0d\u518d\u9700\u8981\u624b\u52a8\u8f93\u5165\u5bc6\u7801\u3002\\n\\n\u4ee5\u4e0b\u662f\u4f7f\u7528 SSH \u516c\u94a5\u8ba4\u8bc1\u7684\u6b65\u9aa4\uff1a\\n\\n1. \u5728\u672c\u5730\u4e3b\u673a\u4e0a\u751f\u6210 SSH \u5bc6\u94a5\u5bf9\u3002\\n\\n```\\nssh-keygen -t rsa\\n```\\n\\n\u6309\u7167\u63d0\u793a\u8f93\u5165\u6587\u4ef6\u540d\u548c\u5bc6\u7801\u3002\u5982\u679c\u60a8\u4e0d\u60f3\u8bbe\u7f6e\u5bc6\u7801\uff0c\u53ef\u4ee5\u76f4\u63a5\u6309\u56de\u8f66\u952e\u3002\\n\\n2. \u5c06\u516c\u94a5\u590d\u5236\u5230\u8fdc\u7a0b\u4e3b\u673a\u4e0a\u3002\\n\\n```\\nssh-copy-id username@remote_host\\n```\\n\\n[\u5982\u679cwindows\u7ec8\u7aef\u6267\u884c\u4e0d\u4e86\u8fd9\u4e2a\u4ee3\u7801\uff0c\u5219\u9700\u8981\u5b89\u88c5git,\u7528Git\u7684bash\u7ec8\u7aef\u6765\u6267\u884c\u8fd9\u4e2a\u547d\u4ee4]\\n\\n\u5176\u4e2d `username` \u662f\u8fdc\u7a0b\u4e3b\u673a\u4e0a\u7684\u7528\u6237\u540d\uff0c`remote_host` \u662f\u8fdc\u7a0b\u4e3b\u673a\u7684 IP \u5730\u5740\u6216\u4e3b\u673a\u540d\u3002\u8fd0\u884c\u547d\u4ee4\u540e\uff0c\u60a8\u9700\u8981\u8f93\u5165\u8fdc\u7a0b\u4e3b\u673a\u7684\u5bc6\u7801\u3002\\n\\n3. \u6d4b\u8bd5 SSH \u516c\u94a5\u8ba4\u8bc1\u662f\u5426\u751f\u6548\u3002\\n\\n```\\nssh root@121.220.83.133\\n```\\n\\n\u5982\u679c SSH \u516c\u94a5\u8ba4\u8bc1\u8bbe\u7f6e\u6210\u529f\uff0c\u60a8\u5c06\u53ef\u4ee5\u76f4\u63a5\u767b\u5f55\u5230\u8fdc\u7a0b\u4e3b\u673a\uff0c\u4e0d\u518d\u9700\u8981\u8f93\u5165\u5bc6\u7801\u3002\u6b64\u65f6\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 `scp` \u547d\u4ee4\u5c06\u6587\u4ef6\u4e0a\u4f20\u5230\u8fdc\u7a0b\u4e3b\u673a\uff0c\u4e0d\u518d\u9700\u8981\u624b\u52a8\u8f93\u5165\u5bc6\u7801\u3002\\n\\n---\\n\\n```bash\\nrsync -avzhe ssh --delete C:\\\\Users\\\\frankelin\\\\wiki root@121.220.83.133:/www/wwwroot/konglong\\n```"},{"id":"/docusaurus\u76ee\u524d\u4e0d\u9002\u5408\u505a\u535a\u5ba2","metadata":{"permalink":"/blog/docusaurus\u76ee\u524d\u4e0d\u9002\u5408\u505a\u535a\u5ba2","editUrl":"https://github.com/frankelinli/frankelinli.github.io/edit/main/blog/docusaurus\u76ee\u524d\u4e0d\u9002\u5408\u505a\u535a\u5ba2.md","source":"@site/blog/docusaurus\u76ee\u524d\u4e0d\u9002\u5408\u505a\u535a\u5ba2.md","title":"docusaurus\u76ee\u524d\u4e0d\u9002\u5408\u505a\u535a\u5ba2","description":"docusaurus\u76ee\u524d\u4e0d\u9002\u5408\u505a\u535a\u5ba2\u3002\u8fd9\u662f\u603b\u7ed3\u3002docusaurus\u662f\u4e3a\u6587\u6863\u800c\u751f\uff0c\u4e0d\u9002\u5408\u505a\u535a\u5ba2\u3002","date":"2024-03-21T11:55:57.000Z","formattedDate":"2024\u5e743\u670821\u65e5","tags":[],"readingTime":0.585,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"docusaurus\u548c\u817e\u8baf\u4e91\u670d\u52a1\u5668\u7684\u6734\u7d20\u6c9f\u901a","permalink":"/blog/docusaurus\u548c\u817e\u8baf\u4e91\u670d\u52a1\u5668\u7684\u6734\u7d20\u6c9f\u901a"},"nextItem":{"title":"git\u547d\u4ee4\u64cd\u4f5c\u5408\u96c6\u7b80\u660e\u7248","permalink":"/blog/git\u547d\u4ee4\u64cd\u4f5c\u5408\u96c6\u7b80\u660e\u7248"}},"content":"docusaurus\u76ee\u524d\u4e0d\u9002\u5408\u505a\u535a\u5ba2\u3002\u8fd9\u662f\u603b\u7ed3\u3002docusaurus\u662f\u4e3a\u6587\u6863\u800c\u751f\uff0c\u4e0d\u9002\u5408\u505a\u535a\u5ba2\u3002\\n\\n\u7528\u529f\u80fd\u66f4\u4e30\u5bcc\u5168\u9762\u7684hexo\u662f\u6700\u4f73\u9009\u62e9\u3002\\n\\n---\\n\\n\u6298\u817e\u4e86\u4ee5\u4e0bhexo\uff0c\u662f\u633a\u597d\u7528\u3002\u4f46\u662f\u4f1a\u8ba9\u6211\u9677\u5165\u6298\u817e\u4e3b\u9898\u548c\u9875\u9762\u5916\u89c2\u7684\u7a98\u5883\u3002\u6240\u4ee5\u4e0d\u7528\u5b83\u4e86\u3002\u56e0\u4e3a\u6298\u817e\u8d77\u6765\u6ca1\u5b8c\u6ca1\u4e86\u3002\\n\\n\u4e0d\u5220\u9664\u4ed3\u5e93\u4e86\u3002\u53cd\u6b63\u514d\u8d39\u670d\u52a1\u7a7a\u95f4\u3002\u653e\u8fd9\u91cc\u77bb\u4ef0\u5427\u3002\\n\\n[Hexo (frankelinli.github.io)](https://frankelinli.github.io/hexoBlog/)\\n\\n\\n\\n### **\u6240\u4ee5\u8fd8\u662f\u7528\u56de**docusaurus\u3002"},{"id":"/git\u547d\u4ee4\u64cd\u4f5c\u5408\u96c6\u7b80\u660e\u7248","metadata":{"permalink":"/blog/git\u547d\u4ee4\u64cd\u4f5c\u5408\u96c6\u7b80\u660e\u7248","editUrl":"https://github.com/frankelinli/frankelinli.github.io/edit/main/blog/git\u547d\u4ee4\u64cd\u4f5c\u5408\u96c6\u7b80\u660e\u7248.md","source":"@site/blog/git\u547d\u4ee4\u64cd\u4f5c\u5408\u96c6\u7b80\u660e\u7248.md","title":"git\u547d\u4ee4\u64cd\u4f5c\u5408\u96c6\u7b80\u660e\u7248","description":"\u5e73\u65f6\u81ea\u5df1\u6572\u6572\u4ee3\u7801\uff0c\u4f7f\u7528Git\u547d\u4ee4\u4e5f\u6e10\u6e10\u591a\u4e86\u8d77\u6765\u3002\u4f7f\u7528\u8d77\u6765\u7684\u786e\u5f88\u65b9\u4fbf\uff0c\u4eca\u5929\u6765\u5206\u4eab\u4e0bGit\u57fa\u672c\u6982\u5ff5\u548c\u672c\u5730\u4ee3\u7801\u63d0\u4ea4\u5230github\u4e0a\u7684\u8fc7\u7a0b\uff0c\u5f88\u7b80\u5355\u7684\uff0c\u591a\u64cd\u4f5c\u51e0\u6b21\u5c31\u4f1a\u4e86\u3002","date":"2024-03-21T11:55:57.000Z","formattedDate":"2024\u5e743\u670821\u65e5","tags":[],"readingTime":10.515,"hasTruncateMarker":true,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"docusaurus\u76ee\u524d\u4e0d\u9002\u5408\u505a\u535a\u5ba2","permalink":"/blog/docusaurus\u76ee\u524d\u4e0d\u9002\u5408\u505a\u535a\u5ba2"},"nextItem":{"title":"hugo","permalink":"/blog/hugo"}},"content":"\u5e73\u65f6\u81ea\u5df1\u6572\u6572\u4ee3\u7801\uff0c\u4f7f\u7528Git\u547d\u4ee4\u4e5f\u6e10\u6e10\u591a\u4e86\u8d77\u6765\u3002\u4f7f\u7528\u8d77\u6765\u7684\u786e\u5f88\u65b9\u4fbf\uff0c\u4eca\u5929\u6765\u5206\u4eab\u4e0bGit\u57fa\u672c\u6982\u5ff5\u548c\u672c\u5730\u4ee3\u7801\u63d0\u4ea4\u5230github\u4e0a\u7684\u8fc7\u7a0b\uff0c\u5f88\u7b80\u5355\u7684\uff0c\u591a\u64cd\u4f5c\u51e0\u6b21\u5c31\u4f1a\u4e86\u3002\\n\\n## \x3c!-- truncate --\x3e\\n\\n## Git\u5b9a\u4e49\\n\\nGit \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff0c\u7528\u4e8e\u654f\u6377\u9ad8\u6548\u5730\u5904\u7406\u4efb\u4f55\u6216\u5c0f\u6216\u5927\u7684\u9879\u76ee\u3002\\n\\nGit \u4e0e\u5e38\u7528\u7684\u7248\u672c\u63a7\u5236\u5de5\u5177 CVS, Subversion \u7b49\u4e0d\u540c\uff0c\u5b83\u91c7\u7528\u4e86\u5206\u5e03\u5f0f\u7248\u672c\u5e93\u7684\u65b9\u5f0f\uff0c\u4e0d\u5fc5\u670d\u52a1\u5668\u7aef\u8f6f\u4ef6\u652f\u6301\u3002\\n\\n## Git \u4e0e SVN \u533a\u522b\\n\\n**1\u3001Git \u662f\u5206\u5e03\u5f0f\u7684\uff0cSVN \u4e0d\u662f**\uff1a\u8fd9\u662f Git \u548c\u5176\u5b83\u975e\u5206\u5e03\u5f0f\u7684\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff0c\u4f8b\u5982 SVN\uff0cCVS \u7b49\uff0c\u6700\u6838\u5fc3\u7684\u533a\u522b\u3002\\n\\n**2\u3001Git \u628a\u5185\u5bb9\u6309\u5143\u6570\u636e\u65b9\u5f0f\u5b58\u50a8\uff0c\u800c SVN \u662f\u6309\u6587\u4ef6\uff1a**\u6240\u6709\u7684\u8d44\u6e90\u63a7\u5236\u7cfb\u7edf\u90fd\u662f\u628a\u6587\u4ef6\u7684\u5143\u4fe1\u606f\u9690\u85cf\u5728\u4e00\u4e2a\u7c7b\u4f3c .svn\u3001.cvs \u7b49\u7684\u6587\u4ef6\u5939\u91cc\u3002\\n\\n**3\u3001Git \u5206\u652f\u548c SVN \u7684\u5206\u652f\u4e0d\u540c\uff1a**\u5206\u652f\u5728 SVN \u4e2d\u4e00\u70b9\u90fd\u4e0d\u7279\u522b\uff0c\u5176\u5b9e\u5b83\u5c31\u662f\u7248\u672c\u5e93\u4e2d\u7684\u53e6\u5916\u4e00\u4e2a\u76ee\u5f55\u3002\\n\\n**4\u3001Git \u6ca1\u6709\u4e00\u4e2a\u5168\u5c40\u7684\u7248\u672c\u53f7\uff0c\u800c SVN \u6709\uff1a**\u76ee\u524d\u4e3a\u6b62\u8fd9\u662f\u8ddf SVN \u76f8\u6bd4 Git \u7f3a\u5c11\u7684\u6700\u5927\u7684\u4e00\u4e2a\u7279\u5f81\u3002\\n\\n**5\u3001Git \u7684\u5185\u5bb9\u5b8c\u6574\u6027\u8981\u4f18\u4e8e SVN\uff1a**Git \u7684\u5185\u5bb9\u5b58\u50a8\u4f7f\u7528\u7684\u662f SHA-1 \u54c8\u5e0c\u7b97\u6cd5\u3002\u8fd9\u80fd\u786e\u4fdd\u4ee3\u7801\u5185\u5bb9\u7684\u5b8c\u6574\u6027\uff0c\u786e\u4fdd\u5728\u9047\u5230\u78c1\u76d8\u6545\u969c\u548c\u7f51\u7edc\u95ee\u9898\u65f6\u964d\u4f4e\u5bf9\u7248\u672c\u5e93\u7684\u7834\u574f\u3002\\n\\n## Git\u5b89\u88c5\\n\\nGit\u7684\u5b89\u88c5\u5c31\u5404\u53d6\u6240\u9700\u4e86\uff0c\u770b\u5404\u81ea\u662f\u5728\u4ec0\u4e48\u5e73\u53f0\u4e0a\u4f7f\u7528\u3002\u5982\u679c\u662f\u5728windows\u7cfb\u7edf\u64cd\u4f5c\u7684\u8bdd\uff0c\u5728\u8be5\u5730\u5740\u4e0b\u8f7dexe\u6587\u4ef6\uff1ahttps://gitforwindows.org/\uff0c\u5b89\u88c5\u5373\u53ef\u3002\\n\\n\u5b89\u88c5\u6210\u529f\u540e\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u884c\u7684git\u5de5\u5177\uff08\u5df2\u7ecf\u81ea\u5e26\u4e86ssh\u5ba2\u6237\u7aef\uff09\u4e86\uff0c\u53e6\u5916\u8fd8\u6709\u4e00\u4e2a\u56fe\u5f62\u754c\u9762\u7684 Git \u9879\u76ee\u7ba1\u7406\u5de5\u5177\u3002\\n\\n\u5728\u5f00\u59cb\u83dc\u5355\u91cc\u627e\u5230\\"Git\\"->\\"Git Bash\\"\uff0c\u4f1a\u5f39\u51faGit\u547d\u4ee4\u7a97\u53e3\uff0c\u4f60\u53ef\u4ee5\u5728\u8be5\u7a97\u53e3\u8fdb\u884cGit\u64cd\u4f5c\u3002\\n\\n## Git\u57fa\u672c\u547d\u4ee4\\n\\n### \u65b0\u5efa\u4ee3\u7801\u5e93\\n\\n\\n\\n```\\n# \u5728\u5f53\u524d\u76ee\u5f55\u65b0\u5efa\u4e00\u4e2a Git \u4ee3\u7801\u5e93\\ngit init\\n\\n# \u65b0\u5efa\u4e00\u4e2a\u76ee\u5f55\uff0c\u5c06\u5176\u521d\u59cb\u5316\u4e3a Git \u4ee3\u7801\u5e93\\ngit init [project-name]\\n\\n# \u4e0b\u8f7d\u4e00\u4e2a\u9879\u76ee\u548c\u5b83\u7684\u6574\u4e2a\u4ee3\u7801\u5386\u53f2\\ngit clone [url]\\n```\\n\\n### \u914d\u7f6e\u6587\u4ef6\\n\\nGit\u7684\u8bbe\u7f6e\u6587\u4ef6\u4e3a.gitconfig\uff0c\u5b83\u53ef\u4ee5\u5728\u7528\u6237\u4e3b\u76ee\u5f55\u4e0b\uff08\u5168\u5c40\u914d\u7f6e\uff09\uff0c\u4e5f\u53ef\u4ee5\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\uff08\u9879\u76ee\u914d\u7f6e\uff09\u3002\\n\\n\\n\\n```\\n# \u663e\u793a\u5f53\u524d\u7684 Git \u914d\u7f6e\\ngit config --list\\n\\n# \u7f16\u8f91 Git \u914d\u7f6e\u6587\u4ef6\\ngit config -e [--global]\\n\\n# \u8bbe\u7f6e\u63d0\u4ea4\u4ee3\u7801\u65f6\u7684\u7528\u6237\u4fe1\u606f\\ngit config [--global] user.name \\"[name]\\"\\ngit config [--global] user.email \\"[email address]\\"\\n```\\n\\n### \u589e\u52a0/\u5220\u9664\u6587\u4ef6\\n\\n\\n\\n```\\n# \u6dfb\u52a0\u6307\u5b9a\u6587\u4ef6\u5230\u6682\u5b58\u533a\\ngit add [file1] [file2] ...\\n\\n# \u6dfb\u52a0\u6307\u5b9a\u76ee\u5f55\u5230\u6682\u5b58\u533a\uff0c\u5305\u62ec\u5b50\u76ee\u5f55\\ngit add [dir]\\n\\n# \u6dfb\u52a0\u5f53\u524d\u76ee\u5f55\u7684\u6240\u6709\u6587\u4ef6\u5230\u6682\u5b58\u533a\\ngit add .\\n\\n# \u5220\u9664\u5de5\u4f5c\u533a\u6587\u4ef6\uff0c\u5e76\u4e14\u5c06\u8fd9\u6b21\u5220\u9664\u653e\u5165\u6682\u5b58\u533a\\ngit rm [file1] [file2] ...\\n\\n# \u505c\u6b62\u8ffd\u8e2a\u6307\u5b9a\u6587\u4ef6\uff0c\u4f46\u8be5\u6587\u4ef6\u4f1a\u4fdd\u7559\u5728\u5de5\u4f5c\u533a\\ngit rm --cached [file]\\n\\n# \u6539\u540d\u6587\u4ef6\uff0c\u5e76\u4e14\u5c06\u8fd9\u4e2a\u6539\u540d\u653e\u5165\u6682\u5b58\u533a\\ngit mv [file-original] [file-renamed]\\n\\n\\n\u4ee3\u7801\u63d0\u4ea4\\n# \u63d0\u4ea4\u6682\u5b58\u533a\u5230\u4ed3\u5e93\u533a\\ngit commit -m [message]\\n\\n# \u63d0\u4ea4\u6682\u5b58\u533a\u7684\u6307\u5b9a\u6587\u4ef6\u5230\u4ed3\u5e93\u533a\\ngit commit [file1] [file2] ... -m [message]\\n\\n# \u63d0\u4ea4\u5de5\u4f5c\u533a\u81ea\u4e0a\u6b21 commit \u4e4b\u540e\u7684\u53d8\u5316\uff0c\u76f4\u63a5\u5230\u4ed3\u5e93\u533a\\ngit commit -a\\n\\n# \u63d0\u4ea4\u65f6\u663e\u793a\u6240\u6709 diff \u4fe1\u606f\\ngit commit -v\\n\\n# \u4f7f\u7528\u4e00\u6b21\u65b0\u7684 commit\uff0c\u66ff\u4ee3\u4e0a\u4e00\u6b21\u63d0\u4ea4\\n# \u5982\u679c\u4ee3\u7801\u6ca1\u6709\u4efb\u4f55\u65b0\u53d8\u5316\uff0c\u5219\u7528\u6765\u6539\u5199\u4e0a\u4e00\u6b21 commit \u7684\u63d0\u4ea4\u4fe1\u606f\\ngit commit --amend -m [message]\\n\\n# \u91cd\u505a\u4e0a\u4e00\u6b21 commit\uff0c\u5e76\u5305\u62ec\u6307\u5b9a\u6587\u4ef6\u7684\u65b0\u53d8\u5316\\ngit commit --amend   ...\\n```\\n\\n### \u5206\u652f\u64cd\u4f5c\\n\\n\\n\\n```\\n# \u5217\u51fa\u6240\u6709\u672c\u5730\u5206\u652f\\ngit branch\\n\\n# \u5217\u51fa\u6240\u6709\u8fdc\u7a0b\u5206\u652f\\ngit branch -r\\n\\n# \u5217\u51fa\u6240\u6709\u672c\u5730\u5206\u652f\u548c\u8fdc\u7a0b\u5206\u652f\\ngit branch -a\\n\\n# \u65b0\u5efa\u4e00\u4e2a\u5206\u652f\uff0c\u4f46\u4f9d\u7136\u505c\u7559\u5728\u5f53\u524d\u5206\u652f\\ngit branch [branch-name]\\n\\n# \u65b0\u5efa\u4e00\u4e2a\u5206\u652f\uff0c\u5e76\u5207\u6362\u5230\u8be5\u5206\u652f\\ngit checkout -b [branch]\\n\\n# \u65b0\u5efa\u4e00\u4e2a\u5206\u652f\uff0c\u6307\u5411\u6307\u5b9a commit\\ngit branch [branch] [commit]\\n\\n# \u65b0\u5efa\u4e00\u4e2a\u5206\u652f\uff0c\u4e0e\u6307\u5b9a\u7684\u8fdc\u7a0b\u5206\u652f\u5efa\u7acb\u8ffd\u8e2a\u5173\u7cfb\\ngit branch --track [branch] [remote-branch]\\n\\n# \u5207\u6362\u5230\u6307\u5b9a\u5206\u652f\uff0c\u5e76\u66f4\u65b0\u5de5\u4f5c\u533a\\ngit checkout [branch-name]\\n\\n# \u5efa\u7acb\u8ffd\u8e2a\u5173\u7cfb\uff0c\u5728\u73b0\u6709\u5206\u652f\u4e0e\u6307\u5b9a\u7684\u8fdc\u7a0b\u5206\u652f\u4e4b\u95f4\\ngit branch --set-upstream [branch] [remote-branch]\\n\\n# \u5408\u5e76\u6307\u5b9a\u5206\u652f\u5230\u5f53\u524d\u5206\u652f\\ngit merge [branch]\\n\\n# \u9009\u62e9\u4e00\u4e2a commit\uff0c\u5408\u5e76\u8fdb\u5f53\u524d\u5206\u652f\\ngit cherry-pick [commit]\\n\\n# \u5220\u9664\u5206\u652f\\ngit branch -d [branch-name]\\n\\n# \u5220\u9664\u8fdc\u7a0b\u5206\u652f\\ngit push origin --delete \\ngit branch -dr\\n```\\n\\n### \u67e5\u770b\u4fe1\u606f\\n\\n\\n\\n```\\n# \u663e\u793a\u6709\u53d8\u66f4\u7684\u6587\u4ef6\\ngit status\\n\\n# \u663e\u793a\u5f53\u524d\u5206\u652f\u7684\u7248\u672c\u5386\u53f2\\ngit log\\n\\ngit log --pretty=oneline  # \u4f7f\u7528\u4e0d\u540c\u4e8e\u9ed8\u8ba4\u683c\u5f0f\u7684\u65b9\u5f0f\u5c55\u793a\u63d0\u4ea4\u5386\u53f2\\ngit log --online  # \u7b80\u6d01\u5c55\u793a\u5386\u53f2\\ngit log --oneline --all  # \u5206\u652f\u6240\u6709\u5448\u73b0\\ngit log --stat  # \u663e\u793a commit \u5386\u53f2\uff0c\u4ee5\u53ca\u6bcf\u6b21 commit \u53d1\u751f\u53d8\u66f4\u7684\u6587\u4ef6\u4ea4\\ngit log -p [file]  # \u663e\u793a\u6307\u5b9a\u6587\u4ef6\u76f8\u5173\u7684\u6bcf\u4e00\u6b21 diff\\ngit log -p -2      # \u5c55\u793a\u6700\u8fd1\u7684\u4e24\u6b21\u63d0\u4ea4\\ngit log -n4 --online  # \u770b\u6700\u8fd1\u7684\u5386\u53f2\u6d88\u606f\\ngit branch -v  # \u770b\u672c\u5730\u6709\u591a\u5c11\u5206\u652f\\ngit checkout -b dashu 223343232  # \u5206\u652f , \u4fee\u6539\u5206\u652f\\n\\n# \u663e\u793a\u6682\u5b58\u533a\u548c\u5de5\u4f5c\u533a\u7684\u5dee\u5f02\\ngit diff\\n\\n# \u663e\u793a\u6682\u5b58\u533a\u548c\u4e0a\u4e00\u4e2a commit \u7684\u5dee\u5f02\\ngit diff --cached []\\n\\n# \u663e\u793a\u5de5\u4f5c\u533a\u4e0e\u5f53\u524d\u5206\u652f\u6700\u65b0 commit \u4e4b\u95f4\u7684\u5dee\u5f02\\ngit diff HEAD\\n\\n# \u663e\u793a\u4e24\u6b21\u63d0\u4ea4\u4e4b\u95f4\u7684\u5dee\u5f02/\u4e24\u4e2a\u5206\u652f\u7684\u6bd4\u8f83\\ngit diff [first-branch]...[second-branch]\\ngit diff test master # \u672c\u5730\u548c\u672c\u5730\\ngit diff test origin/test # \u672c\u5730\u548c\u8fdc\u7a0b\\n\\n# \u663e\u793a\u67d0\u6b21\u63d0\u4ea4\u7684\u5143\u6570\u636e\u548c\u5185\u5bb9\u53d8\u5316\\ngit show [commit]\\n\\n# \u663e\u793a\u67d0\u6b21\u63d0\u4ea4\u53d1\u751f\u53d8\u5316\u7684\u6587\u4ef6\\ngit show --name-only [commit]\\n\\n# \u663e\u793a\u67d0\u6b21\u63d0\u4ea4\u65f6\uff0c\u67d0\u4e2a\u6587\u4ef6\u7684\u5185\u5bb9\\ngit show [commit]:[filename]\\n\\n# \u663e\u793a\u5f53\u524d\u5206\u652f\u7684\u6700\u8fd1\u51e0\u6b21\u63d0\u4ea4\\ngit reflog\\n```\\n\\n### \u8fdc\u7a0b\u540c\u6b65\\n\\n\\n\\n```\\n# \u4e0b\u8f7d\u8fdc\u7a0b\u4ed3\u5e93\u7684\u6240\u6709\u53d8\u52a8\\ngit fetch [remote]\\n\\n# \u663e\u793a\u6240\u6709\u8fdc\u7a0b\u4ed3\u5e93\\ngit remote -v\\n\\n# \u663e\u793a\u67d0\u4e2a\u8fdc\u7a0b\u4ed3\u5e93\u7684\u4fe1\u606f\\ngit remote show [remote]\\n\\n# \u589e\u52a0\u4e00\u4e2a\u65b0\u7684\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u5e76\u547d\u540d\\ngit remote add [shortname] [url]\\n\\n# \u53d6\u56de\u8fdc\u7a0b\u4ed3\u5e93\u7684\u53d8\u5316\uff0c\u5e76\u4e0e\u672c\u5730\u5206\u652f\u5408\u5e76\\ngit pull [remote] [branch]\\n\\n# \u4e0a\u4f20\u672c\u5730\u6307\u5b9a\u5206\u652f\u5230\u8fdc\u7a0b\u4ed3\u5e93\\ngit push [remote] [branch]\\n\\n# \u5f3a\u884c\u63a8\u9001\u5f53\u524d\u5206\u652f\u5230\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u5373\u4f7f\u6709\u51b2\u7a81\\ngit push [remote] --force\\n\\n# \u63a8\u9001\u6240\u6709\u5206\u652f\u5230\u8fdc\u7a0b\u4ed3\u5e93\\ngit push [remote] --all\\n```\\n\\n## \u4ee3\u7801\u63d0\u4ea4github\\n\\n\u4e86\u89e3\u4e86\u5982\u4e0a\u547d\u4ee4\uff0c\u662f\u4e0d\u662f\u60f3\u5b9e\u8df5\u4e00\u756a\u4e86\uff1f\u90a3\u5c31\u8ddf\u6211\u6765\u518d\u5b9e\u8df5\u4e00\u6ce2\uff0c\u4f60\u4f1a\u53d1\u73b0\uff0cGit\u7684\u57fa\u672c\u4f7f\u7528\u5e76\u4e0d\u662f\u90a3\u4e48\u96be\u3002\\n\\n\u9996\u5148\u9700\u8981\u6709github\u8d26\u53f7\uff0c\u8fd9\u4e2a\u81ea\u884c\u6ce8\u518c\u3002\\n\\n### \u65b0\u5efa\u4ed3\u5e93\\n\\n\u65b0\u5efa\u4ed3\u5e93\u6709\u4e24\u79cd\u65b9\u5f0f\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728github\u4e2d\u521b\u5efa\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u64cd\u4f5c\u3002\\n\\n#### github\u521b\u5efa\\n\\n\u76f4\u63a5\u5728github\u4e2d\u4ed3\u5e93\uff0c\u64cd\u4f5c\u5982\u4e0b\u6240\u793a\uff1a\\n\\n[![img](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/1242227-20200522171816898-178539344.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522171816898-178539344.png)\\n\\n\u8f93\u5165\u4ed3\u5e93\u4fe1\u606f\uff0c\u5982\u4e0b\uff1a\\n\\n[![img](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/1242227-20200522171856264-528726732.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522171856264-528726732.png)\\n\\n#### \u547d\u4ee4\u521b\u5efa\\n\\n\u901a\u8fc7git\u7ec8\u7aef\uff0c\u8fdb\u5165\u5230\u5df2\u6709\u5185\u5bb9\u7684\u6587\u4ef6\u5939\u76ee\u5f55\u4e0b\uff0c\u8f93\u5165\u547d\u4ee4**git init**\u5373\u53ef\uff0c\u521d\u59cb\u5316\u4ed3\u5e93\u3002\\n\\n### \u914d\u7f6e\u8eab\u4efd\\n\\n\u914d\u7f6e\u4e86\u8eab\u4efd\uff0c\u8fd9\u6837\u63d0\u4ea4\u4ee3\u7801\u7684\u65f6\u5019\u7cfb\u7edf\u5c31\u77e5\u9053\u662f\u8c01\u63d0\u4ea4\u7684\u4e86\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a\\n\\n```\\ngit config --global user.name ``\\"yourName\\"` `//\u6ce8\u610f\uff0c--\u548cglobal\u4e4b\u95f4\u6ca1\u6709\u7a7a\u683c` `git config --global user.email ``\\"yourName@mail.com\\"\\n```\\n\\n\u68c0\u67e5\u662f\u5426\u914d\u7f6e\u6210\u529f\uff0c\u8f93\u5165\uff1a\\n\\n```\\ngit config --global user.name` `git config --global user.email\\n```\\n\\n \u5982\u56fe\u6240\u793a\uff1a\\n\\n[![img](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/1242227-20200522173101981-604610275.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522173101981-604610275.png)\\n\\n### \u79d8\u94a5\u914d\u7f6e\\n\\n#### \u751f\u6210\u79d8\u94a5\\n\\n\u5982\u4f55\u6b63\u5e38\u4e0egithub\u5efa\u7acb\u8fde\u63a5\uff1f\u5c31\u9700\u8981\u5bc6\u7801\u914d\u7f6e\uff0c\u751f\u6210\u79d8\u94a5\u547d\u4ee4\u5982\u4e0b\uff1a\\n\\n```\\nssh-keygen -t rsa -C ``\\"github\u6ce8\u518c\u90ae\u7bb1\\"\\n```\\n\\n \u64cd\u4f5c\u5982\u4e0b\u6240\u793a\uff1a\\n\\n[![img](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/1242227-20200522173556108-1670904934.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522173556108-1670904934.png)\\n\\n#### \u914d\u7f6e\u79d8\u94a5\\n\\n\u751f\u6210\u7684\u79d8\u94a5\u6587\u4ef6\u5b58\u5728\u76ee\u5f55\u4e3a\uff1a\u7528\u6237\u76ee\u5f55\u4e0b\u7684.ssh\u6587\u4ef6\u5939\\n\\ngithub\u914d\u7f6e\u7684\u8def\u5f84\u662f\uff1a\u8bbe\u7f6e>ssh keys\\n\\n[![img](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/1242227-20200522173817747-2067284804.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522173817747-2067284804.png)\\n\\n\u5c06id_rsa.pub\u6587\u4ef6\u5185\u5bb9\u590d\u5236\u5230key\u4e2d\u5373\u53ef\uff0c\u914d\u7f6e\u6210\u529f\u540e\uff0c\u5982\u4e0b\u6240\u793a\uff1a\\n\\n[![img](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/1242227-20200522174716773-440755689.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522174716773-440755689.png)\\n\\n### \u63d0\u4ea4\u4ee3\u7801\\n\\n#### \u6dfb\u52a0\u6307\u5b9a\u6587\u4ef6\u5230\u6682\u5b58\u533a\\n\\n\u4f7f\u7528\u547d\u4ee4 **git add [file1]**\\n\\n\u64cd\u4f5c\u5982\u4e0b\u6240\u793a\uff1a\\n\\n[![img](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/1242227-20200522175154053-1079994801.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522175154053-1079994801.png)\\n\\n#### \u63d0\u4ea4\u6682\u5b58\u533a\u5230\u4ed3\u5e93\u533a\\n\\n\u4f7f\u7528\u547d\u4ee4 **git commit -m [message]**\\n\\n\u64cd\u4f5c\u5982\u4e0b\u6240\u793a\uff1a\\n\\n[![img](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/1242227-20200522175227413-682458329.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522175227413-682458329.png)\\n\\n#### \u8fde\u63a5\u8fdc\u7a0b\u4ed3\u5e93\\n\\n\u4f7f\u7528\u547d\u4ee4**git remote add origin https://github.com/\u7528\u6237\u540d/\u4ed3\u5e93\u540d.git**\\n\\n\u64cd\u4f5c\u5982\u4e0b\u6240\u793a\uff1a\\n\\n**[![img](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/1242227-20200522175936775-728432202.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522175936775-728432202.png)**\\n\\n#### \u4e0a\u4f20\u672c\u5730\u6307\u5b9a\u5206\u652f\u5230\u8fdc\u7a0b\u4ed3\u5e93\\n\\n\u4f7f\u7528\u547d\u4ee4**git push -u origin master**\\n\\n\u64cd\u4f5c\u5982\u4e0b\u6240\u793a\uff1a\\n\\n[![img](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/1242227-20200522180101038-96789219.png)](https://img2020.cnblogs.com/blog/1242227/202005/1242227-20200522180101038-96789219.png)\\n\\n\u4ee3\u7801\u63d0\u4ea4\u6210\u529f\u540e\uff0c\u5c31\u53ef\u4ee5\u5728github\u4e2d\u67e5\u770b\u5df2\u63d0\u4ea4\u7684\u4ee3\u7801\u4e86\u3002"},{"id":"/hugo","metadata":{"permalink":"/blog/hugo","editUrl":"https://github.com/frankelinli/frankelinli.github.io/edit/main/blog/hugo.md","source":"@site/blog/hugo.md","title":"hugo","description":"\u5c1d\u8bd5\u65b0\u7684hugo?","date":"2024-03-21T11:55:57.000Z","formattedDate":"2024\u5e743\u670821\u65e5","tags":[],"readingTime":0.025,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"git\u547d\u4ee4\u64cd\u4f5c\u5408\u96c6\u7b80\u660e\u7248","permalink":"/blog/git\u547d\u4ee4\u64cd\u4f5c\u5408\u96c6\u7b80\u660e\u7248"},"nextItem":{"title":"\u5b66\u4f1a\u4e86\u7528git","permalink":"/blog/\u5b66\u4f1a\u4e86\u7528git"}},"content":"\u5c1d\u8bd5\u65b0\u7684hugo?"},{"id":"/\u5b66\u4f1a\u4e86\u7528git","metadata":{"permalink":"/blog/\u5b66\u4f1a\u4e86\u7528git","editUrl":"https://github.com/frankelinli/frankelinli.github.io/edit/main/blog/\u5b66\u4f1a\u4e86\u7528git.md","source":"@site/blog/\u5b66\u4f1a\u4e86\u7528git.md","title":"\u5b66\u4f1a\u4e86\u7528git","description":"\u539f\u6765\u83dc\u9e1f\u7f51\u7ad9\u4e5f\u662f\u7528WordPress\u505a\u7684","date":"2024-03-21T11:55:57.000Z","formattedDate":"2024\u5e743\u670821\u65e5","tags":[],"readingTime":0.06,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"hugo","permalink":"/blog/hugo"},"nextItem":{"title":"\u7528python\u628a\u591a\u4e2apdf\u5408\u5e76\u4e3a\u4e00\u4e2aPDF\u5e76\u81ea\u52a8\u6dfb\u52a0\u4e66\u7b7e","permalink":"/blog/\u7528python\u628a\u591a\u4e2apdf\u5408\u5e76\u4e3a\u4e00\u4e2aPDF\u5e76\u81ea\u52a8\u6dfb\u52a0\u4e66\u7b7e"}},"content":"\u539f\u6765\u83dc\u9e1f\u7f51\u7ad9\u4e5f\u662f\u7528WordPress\u505a\u7684"},{"id":"/\u7528python\u628a\u591a\u4e2apdf\u5408\u5e76\u4e3a\u4e00\u4e2aPDF\u5e76\u81ea\u52a8\u6dfb\u52a0\u4e66\u7b7e","metadata":{"permalink":"/blog/\u7528python\u628a\u591a\u4e2apdf\u5408\u5e76\u4e3a\u4e00\u4e2aPDF\u5e76\u81ea\u52a8\u6dfb\u52a0\u4e66\u7b7e","editUrl":"https://github.com/frankelinli/frankelinli.github.io/edit/main/blog/\u7528python\u628a\u591a\u4e2apdf\u5408\u5e76\u4e3a\u4e00\u4e2aPDF\u5e76\u81ea\u52a8\u6dfb\u52a0\u4e66\u7b7e.md","source":"@site/blog/\u7528python\u628a\u591a\u4e2apdf\u5408\u5e76\u4e3a\u4e00\u4e2aPDF\u5e76\u81ea\u52a8\u6dfb\u52a0\u4e66\u7b7e.md","title":"\u7528python\u628a\u591a\u4e2apdf\u5408\u5e76\u4e3a\u4e00\u4e2aPDF\u5e76\u81ea\u52a8\u6dfb\u52a0\u4e66\u7b7e","description":"\u8fd9\u662f\u4ee5\u524d\u7684\u4e00\u4e2apython\u5c0f\u7a0b\u5e8f\u3002\u5047\u5982\u6587\u4ef6\u5939\u4e0b\u67095\u4e2aPDF\u6587\u4ef6\uff0c\u4ed6\u4eec\u7684\u540d\u5b57\u5206\u522b\u662f\uff1a","date":"2024-03-21T11:55:57.000Z","formattedDate":"2024\u5e743\u670821\u65e5","tags":[],"readingTime":2.18,"hasTruncateMarker":true,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"\u5b66\u4f1a\u4e86\u7528git","permalink":"/blog/\u5b66\u4f1a\u4e86\u7528git"}},"content":"\u8fd9\u662f\u4ee5\u524d\u7684\u4e00\u4e2apython\u5c0f\u7a0b\u5e8f\u3002\u5047\u5982\u6587\u4ef6\u5939\u4e0b\u67095\u4e2aPDF\u6587\u4ef6\uff0c\u4ed6\u4eec\u7684\u540d\u5b57\u5206\u522b\u662f\uff1a\\n\\n1.  hello\\n2.  world\\n3.  nihao\\n4.  shijie\\n5.  thankyou\\n\\n----\\n\\n\u628a\u4ed6\u4eec\u5408\u5e76\u5230\u6210\u4e00\u4e2ajieshao.pdf\u6587\u4ef6\uff0c\u5e76\u4e14\u7528\u4e0a\u97625\u4e2a\u6587\u4ef6\u7684\u540d\u5b57\u6765\u4f5c\u4e3ajieshao.pdf\u7684\u4e66\u7b7e\u3002\\n\\n*\x3c!-- truncate --\x3e*\\n\\n:::info\\n\\n\u8fd9\u4e2a\u51fd\u6570\u4f1a\u904d\u5386\u8981\u6c42\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\uff0c\u5c06\u4ee5  .pdf \u7ed3\u5c3e\u7684\u6240\u6709pdf\u5408\u5e76\u6210\u4e00\u4e2a\u65b0\u7684pdf\uff0c\u5e76\u4fdd\u5b58\u5728 file_dir \u76ee\u5f55\u4e0b\\n\\n:::\\n\\n```python\\nimport os\\nimport os.path\\nfrom PyPDF2 import PdfFileReader, PdfFileWriter\\nimport time\\n\\n##########################\u627e\u5230 filepath \u4e0b\u7684\u6240\u6709pdf\uff0c\u5c06\u5730\u5740\u8fd4\u56de########################\\ndef getFileName(filepath):\\n    list1=[]\\n    for root, dirs, files in os.walk(filepath, topdown=False):\\n        for name in files:\\n            if name.endswith(\\".pdf\\"):\\n                list1.append(os.path.join(root, name))\\n    return list1\\n\\n##########################\u5408\u5e76\u540c\u4e00\u4e2a\u6587\u4ef6\u5939\u4e0b\u6240\u6709PDF\u6587\u4ef6########################\\ndef MergePDF(filepath, outfile):\\n    output = PdfFileWriter()\\n    outputPages = 0\\n    pdf_fileName = getFileName(filepath)\\n    for each_file in pdf_fileName:\\n        print(\\"adding %s\\" % each_file)\\n        # \u8bfb\u53d6\u6e90pdf\u6587\u4ef6\\n        input = PdfFileReader(open(each_file, \\"rb\\"))\\n\\n        # \u5982\u679cpdf\u6587\u4ef6\u5df2\u7ecf\u52a0\u5bc6\uff0c\u5fc5\u987b\u9996\u5148\u89e3\u5bc6\u624d\u80fd\u4f7f\u7528pyPdf\\n        if input.isEncrypted == True:\\n            input.decrypt(\\"map\\")\\n\\n        # \u83b7\u5f97\u6e90pdf\u6587\u4ef6\u4e2d\u9875\u9762\u603b\u6570\\n        pageCount = input.getNumPages()\\n        outputPages += pageCount\\n        print(\\"%s has %d pages\\" % (each_file, pageCount))\\n\\n        # \u5206\u522b\u5c06page\u6dfb\u52a0\u5230\u8f93\u51faoutput\u4e2d\\n        for iPage in range(pageCount):\\n            output.addPage(input.getPage(iPage))\\n\\n        # \u6dfb\u52a0\u4e66\u7b7e,\u4ee5pdf\u540d\u5b57\u547d\u540d\u4e66\u7b7e,\u5e76\u4e14\u6709\u4e66\u7b7e\u540d\u4e2d\u5e26\u9875\u7801\u8303\u56f4\\n        x=outputPages-pageCount  #\u5f53\u524dPDF\u5230\u4e86\u7b2c\u51e0\u9875\\n        output.addBookmark(\\n            title=each_file.split(\\"\\\\\\\\\\")[-1]+str(x+1)+\'-\'+str(x+pageCount),pagenum=x)\\n\\n    print(\\"All Pages Number: \\" + str(outputPages))\\n    # \u6700\u540e\u5199pdf\u6587\u4ef6\\n    outputStream = open(os.path.join(filepath, outfile), \\"wb\\")\\n    output.write(outputStream)\\n    outputStream.close()\\n    print(\\"finished\\")\\n\\n\\nif __name__ == \'__main__\':\\n    time1 = time.time()\\n    # \u8fd9\u91cc\u4fdd\u5b58pdf\u6587\u4ef6\u7684\u76ee\u5f55    \\n    file_dir =r\'C:\\\\Users\\\\frankelin\\\\Documents\\\\\u6e56\u5357\u91b4\u9675\u65c5\u6e38\' \\n    # \u8fd9\u91cc\u4fdd\u5b58\u751f\u6210\u6587\u4ef6\u7684\u540d\u5b57\\n    out = u\\"jieshao.pdf\\" \\n    #\u8fd9\u4e2a\u51fd\u6570\u4f1a\u904d\u5386\u8981\u6c42\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\uff0c\u5c06\u4ee5  .pdf \u7ed3\u5c3e\u7684\u6240\u6709pdf\u5408\u5e76\u6210\u4e00\u4e2a\u65b0\u7684pdf\uff0c\u5e76\u4fdd\u5b58\u5728 file_dir \u76ee\u5f55\u4e0b\\n    MergePDF(file_dir, out)\\n    time2 = time.time()\\n    print(u\'\u603b\u5171\u8017\u65f6\uff1a %.4f s\' % (time2 - time1))\\n\\n```"}]}')}}]);