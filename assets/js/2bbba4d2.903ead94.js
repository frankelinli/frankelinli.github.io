"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9510],{16749:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var o=t(99537),s=t(74848),l=t(28453);const r={date:"2024-06-27 19:54",slug:"\u6cb9\u7334\u811a\u672c\u7ed9\u6240\u6709\u7f51\u9875\u52a0\u4e00\u4e2a\u201c\u56de\u5230\u9876\u90e8\u201d\u6309\u94ae"},i=void 0,d={authorsImageUrls:[]},c=[{value:"\u89e3\u91ca",id:"\u89e3\u91ca",level:3}];function a(n){const e={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u8981\u4e3a\u6bcf\u4e2a\u9875\u9762\u6dfb\u52a0\u4e00\u4e2a\u201c\u56de\u5230\u9876\u90e8\u201d\u7684\u6309\u94ae\uff0c\u53ef\u4ee5\u4f7f\u7528\u6cb9\u7334\u811a\u672c\u6765\u6ce8\u5165\u76f8\u5e94\u7684HTML\u548cCSS\uff0c\u5e76\u6dfb\u52a0JavaScript\u6765\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u6cb9\u7334\u811a\u672c\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"// ==UserScript==\n// @name         Add Back to Top Button\n// @namespace    http://tampermonkey.net/\n// @version      0.1\n// @description  Add a back to top button on every page\n// @author       You\n// @match        *://*/*\n// @grant        none\n// ==/UserScript==\n\n(function() {\n    'use strict';\n\n    // Create the button\n    const button = document.createElement('button');\n    button.innerHTML = '\u2b06\ufe0f';\n    button.id = 'back-to-top-button';\n    button.style.position = 'fixed';\n    button.style.bottom = '20px';\n    button.style.right = '20px';\n    button.style.padding = '10px 15px';\n    button.style.fontSize = '20px';\n    button.style.backgroundColor = '#000';\n    button.style.color = '#fff';\n    button.style.border = 'none';\n    button.style.borderRadius = '5px';\n    button.style.cursor = 'pointer';\n    button.style.display = 'none'; // Hidden by default\n    button.style.zIndex = '1000';\n\n    // Append the button to the body\n    document.body.appendChild(button);\n\n    // Show the button when scrolling down 100px from the top of the document\n    window.addEventListener('scroll', () => {\n        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {\n            button.style.display = 'block';\n        } else {\n            button.style.display = 'none';\n        }\n    });\n\n    // Scroll to the top when the button is clicked\n    button.addEventListener('click', () => {\n        window.scrollTo({ top: 0, behavior: 'smooth' });\n    });\n\n})();\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u89e3\u91ca",children:"\u89e3\u91ca"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u521b\u5efa\u6309\u94ae"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"document.createElement"})," \u521b\u5efa\u4e00\u4e2a\u6309\u94ae\u5143\u7d20\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u8bbe\u7f6e\u6309\u94ae\u7684 ",(0,s.jsx)(e.code,{children:"innerHTML"})," \u4e3a\u4e00\u4e2a\u5411\u4e0a\u7684\u7bad\u5934\u7b26\u53f7\uff08\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u6587\u672c\u6216\u56fe\u6807\uff09\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u4e3a\u6309\u94ae\u8bbe\u7f6e\u5404\u79cd\u6837\u5f0f\uff0c\u4f7f\u5176\u770b\u8d77\u6765\u4e0d\u9519\u5e76\u4e14\u56fa\u5b9a\u5728\u9875\u9762\u7684\u53f3\u4e0b\u89d2\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u6dfb\u52a0\u5230\u9875\u9762"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"document.body.appendChild"})," \u5c06\u6309\u94ae\u6dfb\u52a0\u5230\u9875\u9762\u7684 ",(0,s.jsx)(e.code,{children:"body"})," \u5143\u7d20\u4e2d\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u663e\u793a\u548c\u9690\u85cf\u6309\u94ae"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"window.addEventListener('scroll')"})," \u76d1\u542c\u6eda\u52a8\u4e8b\u4ef6\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u5f53\u9875\u9762\u6eda\u52a8\u8d85\u8fc7100\u50cf\u7d20\u65f6\uff0c\u663e\u793a\u6309\u94ae\uff1b\u5426\u5219\uff0c\u9690\u85cf\u6309\u94ae\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u6eda\u52a8\u5230\u9876\u90e8"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"button.addEventListener('click')"})," \u76d1\u542c\u6309\u94ae\u7684\u70b9\u51fb\u4e8b\u4ef6\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5f53\u6309\u94ae\u88ab\u70b9\u51fb\u65f6\uff0c\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"window.scrollTo"})," \u5e73\u6ed1\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5c06\u8fd9\u4e2a\u811a\u672c\u4fdd\u5b58\u5e76\u542f\u7528\u540e\uff0c\u6bcf\u4e2a\u9875\u9762\u90fd\u4f1a\u6709\u4e00\u4e2a\u201c\u56de\u5230\u9876\u90e8\u201d\u7684\u6309\u94ae\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8c03\u6574\u6309\u94ae\u7684\u6837\u5f0f\u548c\u663e\u793a/\u9690\u85cf\u903b\u8f91\u3002"})]})}function u(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>i});var o=t(96540);const s={},l=o.createContext(s);function r(n){const e=o.useContext(l);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),o.createElement(l.Provider,{value:e},n.children)}},99537:n=>{n.exports=JSON.parse('{"permalink":"/blog/\u6cb9\u7334\u811a\u672c\u7ed9\u6240\u6709\u7f51\u9875\u52a0\u4e00\u4e2a\u201c\u56de\u5230\u9876\u90e8\u201d\u6309\u94ae","editUrl":"https://github.com/frankelinli/frankelinli.github.io/edit/main/blog/2024/06-27-\u6cb9\u7334\u811a\u672c\u7ed9\u6240\u6709\u7f51\u9875\u52a0\u4e00\u4e2a\u201c\u56de\u5230\u9876\u90e8\u201d\u6309\u94ae.md","source":"@site/blog/2024/06-27-\u6cb9\u7334\u811a\u672c\u7ed9\u6240\u6709\u7f51\u9875\u52a0\u4e00\u4e2a\u201c\u56de\u5230\u9876\u90e8\u201d\u6309\u94ae.md","title":"\u6cb9\u7334\u811a\u672c\u7ed9\u6240\u6709\u7f51\u9875\u52a0\u4e00\u4e2a\u201c\u56de\u5230\u9876\u90e8\u201d\u6309\u94ae","description":"\u8981\u4e3a\u6bcf\u4e2a\u9875\u9762\u6dfb\u52a0\u4e00\u4e2a\u201c\u56de\u5230\u9876\u90e8\u201d\u7684\u6309\u94ae\uff0c\u53ef\u4ee5\u4f7f\u7528\u6cb9\u7334\u811a\u672c\u6765\u6ce8\u5165\u76f8\u5e94\u7684HTML\u548cCSS\uff0c\u5e76\u6dfb\u52a0JavaScript\u6765\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u6cb9\u7334\u811a\u672c\u793a\u4f8b\uff1a","date":"2024-06-27T19:54:00.000Z","tags":[],"readingTime":2.275,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2024-06-27 19:54","slug":"\u6cb9\u7334\u811a\u672c\u7ed9\u6240\u6709\u7f51\u9875\u52a0\u4e00\u4e2a\u201c\u56de\u5230\u9876\u90e8\u201d\u6309\u94ae"},"unlisted":false,"lastUpdatedAt":1719680667000,"prevItem":{"title":"\u6cb9\u7334\u811a\u672c\u81ea\u52a8\u8c03\u6574\u6240\u6709textarea\u884c\u9ad8","permalink":"/blog/\u6cb9\u7334\u811a\u672c\u81ea\u52a8\u8c03\u6574\u6240\u6709textarea\u884c\u9ad8"},"nextItem":{"title":"\u81ea\u5df1\u6dfb\u52a0\u6cb9\u7334\u811a\u672c\u4ee3\u7801\uff0c\u8ba9\u6d4f\u89c8\u5668\u6240\u6709\u9875\u9762\u7684\u6eda\u52a8\u6761\u53d8\u5f97\u66f4\u7c97","permalink":"/blog/\u81ea\u5df1\u6dfb\u52a0\u6cb9\u7334\u811a\u672c\u4ee3\u7801\uff0c\u8ba9\u6d4f\u89c8\u5668\u6240\u6709\u9875\u9762\u7684\u6eda\u52a8\u6761\u53d8\u5f97\u66f4\u7c97"}}')}}]);