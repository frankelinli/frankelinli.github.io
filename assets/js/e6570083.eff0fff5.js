"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4081],{8908:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=t(4848),o=t(8453);const s={},i=void 0,a={permalink:"/blog/\u7edf\u8ba1\u5c0f\u8bf4\u4e2d\u4eba\u540d\u51fa\u73b0\u7684\u6b21\u6570",editUrl:"https://github.com/frankelinli/frankelinli.github.io/edit/main/blog/\u7edf\u8ba1\u5c0f\u8bf4\u4e2d\u4eba\u540d\u51fa\u73b0\u7684\u6b21\u6570.md",source:"@site/blog/\u7edf\u8ba1\u5c0f\u8bf4\u4e2d\u4eba\u540d\u51fa\u73b0\u7684\u6b21\u6570.md",title:"\u7edf\u8ba1\u5c0f\u8bf4\u4e2d\u4eba\u540d\u51fa\u73b0\u7684\u6b21\u6570",description:"\u7edf\u8ba1\u7b11\u50b2\u6c5f\u6e56\u8fd9\u672c\u4e66\u91cc\uff0c\u4efb\u76c8\u76c8\u7684\u540d\u5b57\u603b\u5171\u51fa\u73b0\u4e86\u591a\u5c11\u6b21",date:"2024-03-19T09:46:29.000Z",formattedDate:"March 19, 2024",tags:[],readingTime:.275,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"\u7528python\u628a\u591a\u4e2apdf\u5408\u5e76\u4e3a\u4e00\u4e2aPDF\u5e76\u81ea\u52a8\u6dfb\u52a0\u4e66\u7b7e",permalink:"/blog/\u7528python\u628a\u591a\u4e2apdf\u5408\u5e76\u4e3a\u4e00\u4e2aPDF\u5e76\u81ea\u52a8\u6dfb\u52a0\u4e66\u7b7e"},nextItem:{title:"20240317",permalink:"/blog/2024/03/17/20240317"}},c={authorsImageUrls:[]},p=[];function d(n){const e={code:"code",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u7edf\u8ba1\u7b11\u50b2\u6c5f\u6e56\u8fd9\u672c\u4e66\u91cc\uff0c\u4efb\u76c8\u76c8\u7684\u540d\u5b57\u603b\u5171\u51fa\u73b0\u4e86\u591a\u5c11\u6b21"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"\nwith open(r\"JinYong\\\u7b11\u50b2\u6c5f\u6e56.txt\",'r',encoding='gbk',errors='ignore') as text:\n    txt=text.read()\n\nimport jieba.posseg as jb\n\nwords=[]\nfor word, flag in jb.cut(txt):\n    if flag ==\"nr\":\n        words.append(word)\n\nimport pandas as pd\n\nprint(pd.Series(words).value_counts()[:40])\n\n\n\n\n\n\t\n"})})]})}function l(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>a});var r=t(6540);const o={},s=r.createContext(o);function i(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);