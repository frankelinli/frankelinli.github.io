"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7809],{5957:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var o=e(4848),r=e(8453);const i={date:"2024-03-24 21:22"},a=void 0,d={permalink:"/blog/2024/03/24/\u7528python\u81ea\u52a8\u5316\u751f\u6210Markdown\u6587\u4ef6\u7684yml\u5934\u90e8\u4fe1\u606f",editUrl:"https://github.com/frankelinli/frankelinli.github.io/edit/main/blog/2024/03-24-\u7528python\u81ea\u52a8\u5316\u751f\u6210Markdown\u6587\u4ef6\u7684yml\u5934\u90e8\u4fe1\u606f.md",source:"@site/blog/2024/03-24-\u7528python\u81ea\u52a8\u5316\u751f\u6210Markdown\u6587\u4ef6\u7684yml\u5934\u90e8\u4fe1\u606f.md",title:"\u7528python\u81ea\u52a8\u5316\u751f\u6210Markdown\u6587\u4ef6\u7684yml\u5934\u90e8\u4fe1\u606f",description:"\u7528python\u81ea\u52a8\u5316\u751f\u6210Markdown\u6587\u4ef6\uff0c\u5e76\u81ea\u52a8\u586b\u5165yml\u5934\u90e8\u4fe1\u606f\u3002\u4f60\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u4fee\u6539\uff0c\u52a0\u5165\u81ea\u5df1\u60f3\u8981\u81ea\u52a8\u5316\u586b\u5165\u7684\u4fe1\u606f\uff0c\u6bd4\u5982\u53ef\u4ee5\u81ea\u52a8\u5316\u586b\u5165\u4f5c\u8005\u3001\u6807\u9898\u7b49\u7b49\uff0c\u5168\u90e8\u90fd\u53ef\u4ee5\uff01",date:"2024-03-24T21:22:00.000Z",tags:[],readingTime:1.225,hasTruncateMarker:!0,authors:[],frontMatter:{date:"2024-03-24 21:22"},unlisted:!1,prevItem:{title:"bat\u547d\u4ee4\u884c\u811a\u672c\u81ea\u52a8\u6267\u884cgit commit\u548cgit push",permalink:"/blog/2024/03/24/bat\u547d\u4ee4\u884c\u811a\u672c\u81ea\u52a8\u6267\u884cgit commit\u548cgit push"},nextItem:{title:"docusaurus\u76ee\u524d\u4e0d\u9002\u5408\u505a\u535a\u5ba2",permalink:"/blog/2024/03/21/docusaurus\u76ee\u524d\u4e0d\u9002\u5408\u505a\u535a\u5ba2"}},c={authorsImageUrls:[]},m=[];function l(t){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"\u7528python\u81ea\u52a8\u5316\u751f\u6210Markdown\u6587\u4ef6\uff0c\u5e76\u81ea\u52a8\u586b\u5165yml\u5934\u90e8\u4fe1\u606f\u3002\u4f60\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u4fee\u6539\uff0c\u52a0\u5165\u81ea\u5df1\u60f3\u8981\u81ea\u52a8\u5316\u586b\u5165\u7684\u4fe1\u606f\uff0c\u6bd4\u5982\u53ef\u4ee5\u81ea\u52a8\u5316\u586b\u5165\u4f5c\u8005\u3001\u6807\u9898\u7b49\u7b49\uff0c\u5168\u90e8\u90fd\u53ef\u4ee5\uff01"}),"\n",(0,o.jsxs)(n.p,{children:["\u6211\u53c8\u8ba9\u5b83\u81ea\u52a8\u586b\u5165",(0,o.jsx)(n.code,{children:"\x3c!-- truncate --\x3e\\"}),"\u547d\u4ee4\uff0c\u8fd9\u6837\u5728docusaurus\u535a\u5ba2\u5217\u8868\u4e2d\uff0c\u5c31\u4f1a\u663e\u793a\u6458\u8981\u4e86\uff0c\u4e0d\u7528\u6bcf\u6b21\u81ea\u5df1\u624b\u52a8\u8f93\u5165\u8fd9\u4e2a\u96be\u5199\u7684\u547d\u4ee4\u4e86\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u4f1f\u5927\u7684python\uff01"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",metastring:'title="/auto creat markdown file and auto fill in yml.py"',children:'\n# \u83b7\u53d6\u5f53\u524d\u65e5\u671f\u548c\u65f6\u95f4\ncurrent_datetime = datetime.datetime.now()\n\n# \u6784\u5efa Markdown \u6587\u4ef6\u540d\uff08\u53bb\u6389\u6269\u5c55\u540d\uff09\nmd_filename = f"{current_datetime.year}\u5e74{current_datetime.month}\u6708{current_datetime.day}\u65e5"\n\n# \u6784\u5efa YAML \u5185\u5bb9\nyaml_content = """---\ntitle: {title}\nauthor: Your Name\ndate: {date}\n---""".format(title=md_filename, date=current_datetime)\n\n# \u5199\u5165 Markdown \u6587\u4ef6\u5185\u5bb9\nmd_content = "\\n\\n\\n\x3c!-- truncate --\x3e\\n"\n\nwith open(f"{md_filename}.md", "w", encoding="utf-8") as file:\n    file.write(yaml_content)\n    file.write(md_content)\n\nprint(f"Markdown \u6587\u4ef6 {md_filename}.md \u521b\u5efa\u6210\u529f\uff0cYAML \u5934\u4fe1\u606f\u548c\u5185\u5bb9\u5df2\u5199\u5165\u6587\u4ef6\u3002")\t\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:'\u6ce8\u610f\uff0c\u5982\u679c\u81ea\u52a8\u586b\u5165\u7684\u5185\u5bb9\u662f\u4e2d\u6587\uff0cencoding="utf-8"\u5fc5\u987b\u8981\u5199\uff1b\u5426\u5219\u586b\u5165\u7684\u662f\u4e71\u7801'})})]})}function s(t={}){const{wrapper:n}={...(0,r.R)(),...t.components};return n?(0,o.jsx)(n,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},8453:(t,n,e)=>{e.d(n,{R:()=>a,x:()=>d});var o=e(6540);const r={},i=o.createContext(r);function a(t){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function d(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:a(t.components),o.createElement(i.Provider,{value:n},t.children)}}}]);