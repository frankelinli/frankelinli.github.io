"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9349],{612:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var i=s(4848),c=s(8453);const t={},r="\u901a\u8fc7\u547d\u4ee4\u884c\u4ece\u672c\u5730\u63a8\u9001\u4ee3\u7801\u5230GitHub",d={permalink:"/blog/git\u4f7f\u7528\u7b80\u4ecb\u6559\u7a0b",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/git\u4f7f\u7528\u7b80\u4ecb\u6559\u7a0b.md",source:"@site/blog/git\u4f7f\u7528\u7b80\u4ecb\u6559\u7a0b.md",title:"\u901a\u8fc7\u547d\u4ee4\u884c\u4ece\u672c\u5730\u63a8\u9001\u4ee3\u7801\u5230GitHub",description:"\u539f\u6587\u8fde\u63a5\u901a\u8fc7\u547d\u4ee4\u884c\u4ece\u672c\u5730\u63a8\u9001\u4ee3\u7801\u5230GitHub | XSUN (xsun4231.github.io)",date:"2024-03-19T02:30:08.000Z",formattedDate:"2024\u5e743\u670819\u65e5",tags:[],readingTime:10.375,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"docusaurus\u548c\u817e\u8baf\u4e91\u670d\u52a1\u5668\u7684\u6734\u7d20\u6c9f\u901a",permalink:"/blog/docusaurus\u548c\u817e\u8baf\u4e91\u670d\u52a1\u5668\u7684\u6734\u7d20\u6c9f\u901a"},nextItem:{title:"\u4e0d\u80fd\u518d\u71ac\u591c\u4e86",permalink:"/blog/\u4e0d\u80fd\u518d\u71ac\u591c\u4e86"}},h={authorsImageUrls:[]},l=[{value:"\u73af\u5883\u642d\u5efa",id:"\u73af\u5883\u642d\u5efa",level:2},{value:"\u514b\u9686\u9879\u76ee\u4ee3\u7801",id:"\u514b\u9686\u9879\u76ee\u4ee3\u7801",level:2},{value:"\u65b0\u5efa\u7684repository",id:"\u65b0\u5efa\u7684repository",level:3},{value:"remote \u548c local",id:"remote-\u548c-local",level:2},{value:"branch",id:"branch",level:2},{value:"commit",id:"commit",level:2},{value:"push",id:"push",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u539f\u6587\u8fde\u63a5",(0,i.jsx)(n.a,{href:"https://xsun4231.github.io/2019/04/15/git-connect/",children:"\u901a\u8fc7\u547d\u4ee4\u884c\u4ece\u672c\u5730\u63a8\u9001\u4ee3\u7801\u5230GitHub | XSUN (xsun4231.github.io)"})]})}),"\n",(0,i.jsxs)(n.p,{children:["\u9996\u5148\uff0cGit\u548cGitHub\u4e0d\u662f\u4e00\u4e2a\u4e1c\u897f\u3002Git\u662f\u4e00\u4e2a\u7248\u672c\u7ba1\u7406\u7cfb\u7edf\uff0c\u800cGitHub\u662f\u4e00\u4e2a\u7528\u6765\u4fdd\u5b58\u8f6f\u4ef6\u4ee3\u7801\u7684\u5e73\u53f0\u3002\u6211\u4eec\u4e0d\u59a8\u628agit\u770b\u4f5c\u662f\u901a\u8baf\u6280\u672f\uff0c\u800cgithub\u53ea\u662f",(0,i.jsx)(n.strong,{children:"\u4e00\u4e2a"}),"\u901a\u8baf\u670d\u52a1\u5546\u3002\u4e5f\u5c31\u662f\u8bf4\u9664\u4e86github\u4e4b\u5916\uff0c\u8fd8\u6709\u5f88\u591a\u7684\u4ee3\u7801\u6258\u7ba1\u5e73\u53f0\uff0c\u5927\u5bb6\u90fd\u662f\u7528\u7684git\u6765\u4e0a\u4f20\u4e0b\u8f7d\u4ee3\u7801\uff0c\u53ea\u4e0d\u8fc7github\u540d\u6c14\u6700\u5927\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e3a\u4e86\u4e0d\u53d7\u5404\u79cd\u4e0d\u540c\u7684\u8f6f\u4ef6\u5f71\u54cd\uff0c\u8fd9\u91cc\u8bf4\u7684\u90fd\u662f\u901a\u8fc7\u547d\u4ee4\u884c\u64cd\u4f5c."}),"\n",(0,i.jsxs)(n.li,{children:["\u8fd9\u91cc\u53ea\u4ecb\u7ecd\u4e00\u4e9b\u6700\u57fa\u672c\u7684\u547d\u4ee4\u548c\u7528\u6cd5\uff0c\u5728\u547d\u4ee4\u540e\u9762\u52a0",(0,i.jsx)(n.code,{children:"--help"}),"\u53ef\u4ee5\u67e5\u770b\u8be6\u7ec6\u7684\u6587\u6863."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u73af\u5883\u642d\u5efa",children:"\u73af\u5883\u642d\u5efa"}),"\n",(0,i.jsxs)(n.p,{children:["\u9996\u5148\u8981\u505a\u7684\u4e8b\u5b89\u88c5",(0,i.jsx)(n.code,{children:"git"}),"\uff0c\u4e0b\u8f7d\u5730\u5740\u5728",(0,i.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"\u8fd9\u91cc"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["git\u5b89\u88c5\u5b8c\u4e4b\u540e\uff0c\u6253\u5f00\u547d\u4ee4\u884c\u6267\u884c",(0,i.jsx)(n.code,{children:"git --version"}),"\u770b\u770b\u662f\u5426\u53ef\u4ee5\u67e5\u770bgit\u7684\u7248\u672c\uff0c\u5982\u679c\u8fd4\u56de\u7248\u672c\u4fe1\u606f\uff0c\u5c31OK\u4e86. git\u4f1a\u81ea\u5df1\u5b89\u88c5\u4e00\u4e2a",(0,i.jsx)(n.code,{children:"git Bash"}),", \u4e0d\u8fc7git\u7684\u547d\u4ee4\u884c\u5e76\u4e0d\u5c40\u9650\u4e8ebash\uff0cwindows\u4e0b\u76f4\u63a5\u5728cmd\u6216\u8005powershell\u90fd\u53ef\u4ee5\u4f7f\u7528."]}),"\n",(0,i.jsxs)(n.p,{children:["\u672c\u5730\u7684\u4ee3\u7801\u63a8\u9001\u5230github\u65f6\uff0cgithub\u9700\u8981\u9a8c\u8bc1\u7528\u6237\u7684\u4fe1\u606f. \u5c31\u597d\u6bd4\u4f60\u53ef\u4ee5\u6bcf\u6b21\u8fdb\u95e8\u90fd\u586b\u4e00\u6b21\u6211\u53eb\u4ec0\u4e48\uff0c\u6211\u4ece\u54ea\u513f\u6765\uff0c\u6211\u662f\u5e72\u4ec0\u4e48\u7684\uff0c\u4e5f\u53ef\u4ee5\u63d0\u524d\u767b\u9646\u597d\u8eab\u4efd\u4fe1\u606f\uff0c\u201c\u54d4\u201d\u7684\u4e00\u58f0\u5237\u8138\u8fdb\u95e8\uff0c\u8fd9\u4e2a\u767b\u5f55\u7684\u8eab\u4efd\u4fe1\u606f\u5c31\u662f",(0,i.jsx)(n.code,{children:"ssh key"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\u7684\u64cd\u4f5c\u5206\u4e3a\u4e09\u6b65\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u786e\u5b9a\u672c\u5730\u662f\u5426\u5df2\u7ecf\u6709\u5efa\u7acb\u597d\u7684ssh key","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6253\u5f00git Bash\uff08\u8fd9\u91cc\u9700\u8981\u7528\u5230Bash, windows\u7684cmd\u662f\u6ca1\u6709ls\u547d\u4ee4\u7684) \u8f93\u5165",(0,i.jsx)(n.code,{children:"ls -al ~/.ssh"})," \u8fd9\u91cc\u4e00\u4e2a\u641c\u7d22\u547d\u4ee4\uff0c\u8fd4\u56de\u540d\u79f0\u4e3a",(0,i.jsx)(n.code,{children:".ssh"}),"\u7684\u76ee\u5f55\u4fe1\u606f\u3002\u5982\u679c\u6709",(0,i.jsx)(n.code,{children:"id_rsa.pub"}),"\u6587\u4ef6\uff0c\u5c31\u8bf4\u660e\u5df2\u7ecf\u6709ssh key\u4e86."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679c\u6ca1\u6709\uff0c\u5efa\u7acb\u4e00\u7ec4\u65b0\u7684ssh key","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6267\u884c\u547d\u4ee4",(0,i.jsx)(n.code,{children:'ssh-keygen -t rsa -b 4096 -C "your_email@example.com"'}),"\u6765\u751f\u6210\u4e00\u7ec4ssh key\uff0c\u63a5\u4e0b\u6765\u76f4\u63a5\u6309\u56de\u8f66\u5c31\u53ef\u4ee5\u4e86\uff08\u6587\u4ef6\u4f4d\u7f6e\u4f7f\u7528\u9ed8\u8ba4\u4f4d\u7f6e\u4e0d\u9700\u8981\u8f93\u5165\uff0cpassphrase\u9ed8\u8ba4\u7a7a\u767d\uff0c\u4e0d\u8bbe\u7f6e\uff0c\u8bbe\u7f6e\u7684\u8bdd\u4ee5\u540e\u6bcf\u6b21\u63a8\u9001\u4ee3\u7801\u90fd\u8981\u8f93\u5bc6\u7801\uff09\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5c06\u751f\u6210\u7684key\u767b\u5f55\u5230ssh-agent. \u6267\u884c\u547d\u4ee4\u542f\u52a8ssh-agent\uff0cwindows\uff1a",(0,i.jsx)(n.code,{children:"eval $(ssh-agent -s)"})," Mac\u6216\u8005Linux\uff1a",(0,i.jsx)(n.code,{children:'eval "$(ssh-agent -s)"'}),".\u7136\u540e\u6267\u884c\u547d\u4ee4\u6dfb\u52a0key\uff0cMac\uff1a",(0,i.jsx)(n.code,{children:"ssh-add -K ~/.ssh/id_rsa"})," windows\u6216\u8005Linux\uff1a",(0,i.jsx)(n.code,{children:"ssh-add ~/.ssh/id_rsa"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5c06\u5efa\u7acb\u597d\u7684ssh key\u767b\u5f55\u5230github","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5c06ssh key\u7684\u5185\u5bb9\u590d\u5236\u5230\u526a\u8d34\u677f. window\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\uff1a",(0,i.jsx)(n.code,{children:"clip < ~/.ssh/id_rsa.pub"})," Mac\u53ef\u4ee5\u4f7f\u7528\uff1a",(0,i.jsx)(n.code,{children:"pbcopy < ~/.ssh/id_rsa.pub"})," Linux\u53ef\u4ee5\u4f7f\u7528\uff1a",(0,i.jsx)(n.code,{children:"sudo apt-get install xclip"})," \u548c ",(0,i.jsx)(n.code,{children:"xclip -sel clip < ~/.ssh/id_rsa.pub"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6dfb\u52a0\u5230github\u8fd9\u4e00\u6b65\u6211\u4eec\u5355\u72ec\u8bf4\u4e00\u4e0b\uff0c\u4ee5\u9632\u5f04\u9519\u3002\u6253\u5f00github\u9875\u9762\uff0c\u70b9\u51fb\u7528\u6237\u5934\u50cf\uff0c\u8fdb\u5165",(0,i.jsx)(n.code,{children:"setting"}),"\uff0c\u5728\u83dc\u5355\u4e2d\u95f4\u7684\u4f4d\u7f6e\u627e\u5230",(0,i.jsx)(n.code,{children:"SSH and GPG keys"}),"\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u7eff\u8272\u6309\u94ae",(0,i.jsx)(n.code,{children:"New SSH key"}),"\uff0c\u5728",(0,i.jsx)(n.code,{children:"Title"}),"\u91cc\u586b\u5199\u8981\u6dfb\u52a0\u7684ssh key\u7684\u4ecb\u7ecd\uff0c\u6bd4\u5982\u201d\u516c\u53f8\u90a3\u53f0\u8d3c\u6162\u7684\u7535\u8111/\u5bb6\u91cc\u7684\u8001\u7237\u673a/\u5b66\u6821\u7684\u5927\u5c41\u80a1\u663e\u793a\u5668\u201d,\u7136\u540e\u5728\u5c06\u590d\u5236\u7684SSH key\u7c98\u8d34\u5230",(0,i.jsx)(n.code,{children:"Key"}),"\u91cc\u9762\uff0c\u70b9\u51fb",(0,i.jsx)(n.code,{children:"Add SSH key"}),"\u5c31\u53ef\u4ee5\u4e86\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u514b\u9686\u9879\u76ee\u4ee3\u7801",children:"\u514b\u9686\u9879\u76ee\u4ee3\u7801"}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u6765\u5230",(0,i.jsx)(n.code,{children:"GitHub"}),"\u7684\u4ee3\u7801\u9875\uff0c\u53ef\u4ee5\u5728\u4ee3\u7801\u7684\u53f3\u4e0a\u89d2\u770b\u5230\u4e00\u4e2a\u7eff\u8272\u6309\u94ae",(0,i.jsx)(n.code,{children:"Clone or Download"}),"\uff0c\u70b9\u5f00\u4e4b\u540e\u53ef\u4ee5\u770b\u5230\u514b\u9686\u4ee3\u7801\u7528\u7684\u94fe\u63a5\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\u6709\u4e24\u79cd\uff0c",(0,i.jsx)(n.code,{children:"https"})," \u548c ",(0,i.jsx)(n.code,{children:"ssh"}),"\uff0c \u7b80\u5355\u6765\u8bb2\uff0c\u4f7f\u7528https\u7684\u94fe\u63a5\u514b\u9686\u7684\u9879\u76ee\u9700\u8981\u7528github\u7684\u7528\u6237\u540d\u5bc6\u7801\u6765\u63a8\u9001\uff0c\u4f7f\u7528ssh\u94fe\u63a5\u514b\u9686\u7684\u9879\u76ee\u5219\u4f7f\u7528ssh-key\u9a8c\u8bc1\n",(0,i.jsx)(n.a,{href:"https://xsun4231.github.io/2019/04/15/git-connect/usehttps.PNG",children:(0,i.jsx)(n.img,{src:"https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/usehttps.PNG",alt:"https"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://xsun4231.github.io/2019/04/15/git-connect/usessh.PNG",children:(0,i.jsx)(n.img,{src:"https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/usessh.PNG",alt:"ssh"})})}),"\n",(0,i.jsxs)(n.p,{children:["\u7531\u4e8e\u6211\u4eec\u5df2\u7ecf\u8bbe\u7f6e\u597d\u4e86ssh-key\uff0c\u6240\u4ee5\u4f7f\u7528\u683c\u5f0f\u4e3a",(0,i.jsx)(n.code,{children:"git@github.com:\u7528\u6237\u540d/\u9879\u76ee\u540d.github.io.git"}),"\u7684ssh\u94fe\u63a5."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone git@github.com:\u7528\u6237\u540d/\u9879\u76ee\u540d.github.io.git\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u65b0\u5efa\u7684repository",children:"\u65b0\u5efa\u7684repository"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u6211\u4eec\u8981\u5c06\u672c\u5730\u7684\u5de5\u7a0b\u6587\u4ef6\u63a8\u9001\u5230\u4e00\u4e2a\u65b0\u5efa\u7684GitHub\u5e93,\u9996\u5148\u786e\u5b9a\u4e24\u4ef6\u4e8b\u513f\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["GitHub\u4e0a\u5efa\u7acb\u4e86\u4e00\u4e2a\u7a7a\u7684\u5e93\uff0cREADME\u90fd\u6ca1\u6709\u7684\u90a3\u79cd\uff0c\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a\u9875\u9762",(0,i.jsx)(n.a,{href:"https://xsun4231.github.io/2019/04/15/git-connect/new_repository.PNG",children:(0,i.jsx)(n.img,{src:"https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/new_repository.PNG",alt:"NEW"})})]}),"\n",(0,i.jsxs)(n.li,{children:["\u672c\u5730\u7684\u5de5\u7a0b\u6587\u4ef6\u521d\u59cb\u5316\u4e86git\uff0c\u5e76\u4e14\u6ca1\u6709\u5173\u8054\u5176\u4ed6\u7684\u5e93. git\u7684\u521d\u59cb\u5316\u53ef\u4ee5\u4f7f\u7528",(0,i.jsx)(n.code,{children:"git init"}),"\u547d\u4ee4\uff0c\u79fb\u9664\u5176\u4ed6\u7684\u5173\u8054\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,i.jsx)(n.code,{children:"git remote remove name"})," \u8fd9\u91cc\u7684name\u4e00\u822c\u662f",(0,i.jsx)(n.code,{children:"origin"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u5c31\u53ef\u4ee5\u4e86\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'git commit -m "first commit"\ngit remote add origin ssh\u94fe\u63a5\ngit push -u origin master\n'})}),"\n",(0,i.jsx)(n.h2,{id:"remote-\u548c-local",children:"remote \u548c local"}),"\n",(0,i.jsx)(n.p,{children:"git\u7ba1\u7406\u7684\u4ee3\u7801\u6709\u4e24\u4e2a\u5730\u65b9:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4e00\u4e2a\u662f",(0,i.jsx)(n.strong,{children:"remote"})," \u53ef\u4ee5\u7406\u89e3\u4e3a\u8fdc\u7aef\uff0c\u4e5f\u5c31\u662f\u6307\u6258\u7ba1\u4ee3\u7801\u7684\u5730\u65b9\uff0c\u4f7f\u7528github\u65f6\uff0c\u503c\u5f97\u4e5f\u5c31\u662fgithub\u670d\u52a1\u5668\u7aef"]}),"\n",(0,i.jsxs)(n.li,{children:["\u4e00\u4e2a\u662f",(0,i.jsx)(n.strong,{children:"local"})," \u76f4\u8bd1\u672c\u5730\uff0c\u610f\u8bd1\u672c\u5730\uff0c\u4ed6\u4e5f\u5c31\u662f\u672c\u5730\u7684\u610f\u601d"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4ece\u8fdc\u7aef\u5411\u672c\u5730\u540c\u6b65\u4ee3\u7801\uff0c\u53eb\u505a",(0,i.jsx)(n.code,{children:"pull"})," \u4e5f\u5c31\u662f\u62c9\uff0c\u5c06\u672c\u5730\u4ee3\u7801\u540c\u6b65\u5230\u8fdc\u7aef\uff0c\u53eb\u505a",(0,i.jsx)(n.code,{children:"push"})," \u63a8\u9001\uff0c\u7b80\u5355\u800c\u5f62\u8c61\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"local\u503c\u4e0d\u9700\u8981\uff0c\u5f53\u7136\u4e5f\u4e0d\u80fd\u4fee\u6539\uff0c\u56e0\u4e3a\u4ee3\u7801\u5c31\u5728\u672c\u5730. remote\u7684\u503c\u53ef\u4ee5\u968f\u65f6\u6dfb\u52a0\uff0c\u5220\u9664\u6216\u8005\u4fee\u6539\uff0cremote\u662fname\u548curl\u6210\u5bf9\u8bbe\u7f6e\u7684\uff0c\u4e00\u822c\u9ed8\u8ba4\u7684remote\u540d\u662forigin"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"git remote"})," \u786e\u8ba4remote\uff0c\u4f1a\u8fd4\u56deremote\u7684\u540d\u79f0"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"git remote get-url remoteName"})," \u83b7\u5f97remote\u7684url"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"git remote set-url remoteName url"})," \u8bbe\u7f6eremote\u7684url"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"branch",children:"branch"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u5b9e\u73b0\u5e76\u884c\u7684\u5f00\u53d1\uff0c\u4ee3\u7801\u901a\u8fc7",(0,i.jsx)(n.code,{children:"branch"}),"\uff08\u5206\u652f\uff09\u6765\u8fdb\u884c\u7ba1\u7406\uff0c\u4e0d\u59a8branch\u7406\u89e3\u6210\u65f6\u95f4\u7ebf\u3001\u6cb3\u6d41\uff0c\u53ef\u5206\u6210\u51e0\u4e2a\u5206\u652f\u5e76\u884c\u524d\u8fdb\uff0c\u4e5f\u53ef\u4ee5\u968f\u65f6\u6c47\u96c6\u5230\u4e00\u8d77\uff08\u53ea\u8981\u5185\u5bb9\u6ca1\u6709\u51b2\u7a81\uff09\u3002\n\u53ef\u4ee5\u901a\u8fc7",(0,i.jsx)(n.code,{children:"git branch"}),"\u6765\u67e5\u5f53\u524d\u672c\u5730\u7684\u5206\u652f\u3002\n\u5207\u6362\u5206\u652f\u7684\u547d\u4ee4\u4e3a ",(0,i.jsx)(n.code,{children:'git checkout "branch_name"'}),"\n\u5e38\u7528\u7684\u751f\u6210\u5206\u652f\u547d\u4ee4\u4e3a ",(0,i.jsx)(n.code,{children:'git checkout -b "new_branch_name" "base_branch_name"'}),"\n\u4f7f\u7528",(0,i.jsx)(n.code,{children:'git branch "new_branch_name'}),"\u4e5f\u53ef\u4ee5\u751f\u6210\u65b0\u7684\u5206\u652f\uff0c\u4e0d\u8fc7\u8be5\u547d\u4ee4\u5e76\u4e0d\u5207\u6362\u5230\u65b0\u751f\u6210\u7684\u5206\u652f."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5206\u652f\u7684\u540d\u79f0\u4e0d\u53ef\u4ee5\u6709\u7a7a\u683c\uff0c\u6240\u4ee5\u4e00\u822c\u901a\u8fc7\u4e0b\u5212\u7ebf\u8fde\u63a5\u5355\u8bcd\uff0c\u5f53\u5206\u652f\u540d\u542b\u6709\u7279\u6b8a\u7b26\u53f7\u6bd4\u5982 # \u65f6\uff0c\u9700\u8981\u5728\u5206\u652f\u540d\u524d\u540e\u52a0 \u201c \u6765\u9632\u6b62\u63a7\u5236\u53f0\u6267\u884c\u65f6\u7684\u6b67\u4e49\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"commit",children:"commit"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u8bf4branch\u662f\u65f6\u95f4\u7ebf\uff0c\u90a3\u4e48commit\u5c31\u662f\u65f6\u95f4\u7ebf\u4e0a\u7684\u5b58\u6863\u70b9\u3002\u521a\u521a\u521b\u5efa\u6216\u8005\u4fee\u6539\u5b8c\u7684\u6587\u4ef6\uff0c\u5728git\u4e2d\u5e76\u4e0d\u7b97",(0,i.jsx)(n.strong,{children:"\u4fdd\u5b58"}),"\u4e86\uff0c\u5982\u679c\u5f3a\u884c\u4fee\u6539\u5206\u652f\uff0c\u8fd9\u4e9b\u5185\u5bb9\u5c31\u4f1a\u4e22\u5931\u3002\u5c06\u4fee\u6539\u7684\u5185\u5bb9\u4fdd\u5b58\u5230branch\u7684\u8bb0\u5f55\u4e2d\u7684\u64cd\u4f5c\uff0c\u53eb\u505a",(0,i.jsx)(n.code,{children:"commit\uff08\u63d0\u4ea4\uff09"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["\u6267\u884ccommit\u4e4b\u524d\uff0c\u9996\u5148\u9700\u8981\u628a\u51c6\u5907\u63d0\u4ea4\u7684\u6587\u4ef6\u6dfb\u52a0\u5230\u63d0\u4ea4\u540d\u5355\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"git add"})," \u547d\u4ee4\u3002\n\u6dfb\u52a0\u4e4b\u524d\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,i.jsx)(n.code,{children:"git status"}),"\u547d\u4ee4\u6765\u67e5\u770b\u6709\u54ea\u4e9b\u6587\u4ef6\u88ab\u4fee\u6539\u4e86."]}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u7b80\u5355\u7684\u4ecebash\u989c\u8272\u4e0a\u533a\u5206\u4e00\u4e0b\uff0c\n\u7eff\u8272\u7684\u5185\u5bb9(Changes to be committed) \u662f\u5df2\u7ecf\u51c6\u5907\u597d\u53ef\u4ee5\u63d0\u4ea4\u7684\u5185\u5bb9\uff0c\n\u7ea2\u8272\u7684\u5185\u5bb9(Changes not staged for commit) \u662f\u8fd8\u6ca1\u6709\u6dfb\u52a0\u5230\u63d0\u4ea4\u5217\u8868\u7684\u4fee\u6539."}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u9762\u4ecb\u7ecd\u51e0\u79cd\u7b80\u5355\u5e38\u7528\u7684\u547d\u4ee4"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# \u5c06\u6240\u6709\u7684\u4fee\u6539\u6dfb\u52a0\u5230\u63d0\u4ea4\u5217\u8868\ngit add --all\n\n# \u5c06\u6307\u5b9a\u6587\u4ef6\u6dfb\u52a0\u5230\u63d0\u4ea4\u5217\u8868\uff0c\u591a\u4e2a\u6587\u4ef6\u7684\u65f6\u5019\u4f7f\u7528\u7a7a\u683c\u533a\u5206\ngit add aaa.md\ngit add bbb.md ccc.md path/ddd.md\n\n# \u53ef\u4ee5\u4f7f\u7528\u6b63\u89c4\u8868\u8fbe\u6765\u6307\u5b9a\u591a\u4e2a\u6587\u4ef6\ngit add a*.md\ngit add path/\\*.md\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6587\u4ef6\u6dfb\u52a0\u5b8c\uff0c\u5c31\u53ef\u4ee5\u6267\u884ccommit\u6765\u63d0\u4ea4\u4e86\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'# \u63d0\u4ea4\u7684\u65f6\u5019\uff0ccommit\u4fe1\u606f\u662f\u5fc5\u987b\u7684\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528-m \u6765\u6307\u5b9acommit\u4fe1\u606f\ngit commit -m "\u5728\u8fd9\u91cc\u8f93\u5165\u4e00\u6761commit\u4fe1\u606f"\n\n# \u4f7f\u7528github\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u5728commit\u4fe1\u606f\u91cc\u901a\u8fc7 #+\u7f16\u53f7 \u6765\u5173\u8054Issue\uff0c\u8fd9\u6837\u63d0\u4ea4\u7684commit\u53ef\u4ee5\u5728Issue\u4e2d\u76f4\u63a5\u627e\u5230\u3002\ngit commit -m "#001 commmit\u4fe1\u606f"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"push",children:"push"}),"\n",(0,i.jsxs)(n.p,{children:["\u5c06remote\u7684\u6700\u65b0\u5185\u5bb9\u540c\u6b65\u5230\u672c\u5730\u7684\u547d\u4ee4\u662f",(0,i.jsx)(n.code,{children:"git pull"}),"\uff0c\u5c06\u672c\u5730\u7684\u4fee\u6539\u63a8\u9001\u5230remote\u7684\u547d\u4ee4\u662f",(0,i.jsx)(n.code,{children:"git push"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u51fa\u73b0\u51b2\u7a81\u7684\u65f6\u5019\u53ef\u4ee5\u52a0\u4e0a",(0,i.jsx)(n.code,{children:"--force"}),"\u6765\u5f3a\u5236\u63a8\u9001\uff0c\u4e0d\u8fc7\u8fd9\u4e2a\u64cd\u4f5c\u4e0d\u63a8\u8350\uff0c\u63a8\u9001\u4ee3\u7801\u5c3d\u53ef\u80fd\u5728\u89e3\u51b3\u51b2\u7a81\u4e4b\u540e\uff0c\u4f7f\u7528\u6700\u7b80\u5355\u6d41\u7545\u7684",(0,i.jsx)(n.code,{children:"git push"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u63a8\u9001\u547d\u4ee4\u7684\u5bf9\u8c61\u662f\u5206\u652f\uff0c\u6240\u4ee5\u5f53\u6211\u4eec\u63a8\u9001\u672c\u5730\u521b\u5efa\u7684\u65b0\u5206\u652f\u65f6\uff0c\u9700\u8981\u6307\u5b9a\u4e00\u4e0b\u8fd9\u4e2a\u5206\u652f\u5728remote\u7684\u4fe1\u606f\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'# git push \u63a8\u9001\u547d\u4ee4\n# --set-upstream \u544a\u8bc9git \u6211\u8981\u8bbe\u7f6e\u63a8\u9001\u76ee\u7684\u5730\n# remotename \u8981\u63a8\u9001\u5230\u7684remote\u540d \u4e00\u822c\u662f origin\n# branch_name \u63a8\u9001\u7684branch\u540d \u542b\u6709\u7279\u6b8a\u5b57\u7b26\u7684\u8bdd\u8981\u7528"branch_name"\ngit push --set-upstream remotename branch_name\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u65e0\u8bba\u662f\u5207\u6362\u5206\u652f\uff0c\u8fd8\u662f\u63a8\u9001\u7684\u65f6\u5019\uff0c\u5982\u679c\u524d\u9762\u547d\u4ee4\u8f93\u5165\u6b63\u786e\uff0cgit bash\u53ef\u4ee5\u8865\u5168\u5206\u652f\u540d\u3002\u6240\u4ee5\u591a\u7528",(0,i.jsx)(n.code,{children:"tab"}),"\u4e0d\u4ec5\u65b9\u4fbf\uff0c\u8fd8\u80fd\u5e2e\u5fd9\u68c0\u67e5\u4e00\u4e0b\u5206\u652f\u540d\u524d\u9762\u7684\u547d\u4ee4\u884c\u6709\u6ca1\u6709\u9519\u3002"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var i=s(6540);const c={},t=i.createContext(c);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);