"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3818],{3232:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(4848),r=t(8453);const o={date:"2024-06-29 22:25",slug:"\u4ece\u641c\u7d22\u7ed3\u679c\u4e2d\u5168\u9762\u5c4f\u853dCSDN\u65e0\u803b\u4e4b\u5f92"},i=void 0,c={permalink:"/blog/\u4ece\u641c\u7d22\u7ed3\u679c\u4e2d\u5168\u9762\u5c4f\u853dCSDN\u65e0\u803b\u4e4b\u5f92",editUrl:"https://github.com/frankelinli/frankelinli.github.io/edit/main/blog/2024/06-29-\u4ece\u641c\u7d22\u7ed3\u679c\u4e2d\u5168\u9762\u5c4f\u853dCSDN\u65e0\u803b\u4e4b\u5f92.md",source:"@site/blog/2024/06-29-\u4ece\u641c\u7d22\u7ed3\u679c\u4e2d\u5168\u9762\u5c4f\u853dCSDN\u65e0\u803b\u4e4b\u5f92.md",title:"\u4ece\u641c\u7d22\u7ed3\u679c\u4e2d\u5168\u9762\u5c4f\u853dCSDN\u65e0\u803b\u4e4b\u5f92",description:"\u4f7f\u7528\u6cb9\u7334\u811a\u672c\uff0c\u53ef\u4ee5\u628a\u641c\u7d22\u7ed3\u679c\u7684CSDN\u9875\u9762\u5168\u9762\u5c4f\u853d\u3002",date:"2024-06-29T22:25:00.000Z",tags:[],readingTime:2.375,hasTruncateMarker:!0,authors:[],frontMatter:{date:"2024-06-29 22:25",slug:"\u4ece\u641c\u7d22\u7ed3\u679c\u4e2d\u5168\u9762\u5c4f\u853dCSDN\u65e0\u803b\u4e4b\u5f92"},unlisted:!1,lastUpdatedAt:1719680667e3,prevItem:{title:"\u5236\u4f5c\u8f6f\u4ef6\u548c\u9500\u552e\u8f6f\u4ef6",permalink:"/blog/\u5236\u4f5c\u8f6f\u4ef6\u548c\u9500\u552e\u8f6f\u4ef6"},nextItem:{title:"\u9a8c\u5382\u987e\u95ee\u6279\u91cf\u81ea\u52a8\u586b\u5145\u591a\u4e2a\u6a21\u677f\u6587\u4ef6vs",permalink:"/blog/\u54a8\u8be2\u5e08\u6279\u91cf\u81ea\u52a8\u586b\u5145\u591a\u4e2a\u6a21\u677f\u6587\u4ef6v2"}},l={authorsImageUrls:[]},d=[{value:"\u8bf4\u660e\uff1a",id:"\u8bf4\u660e",level:3}];function a(e){const n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u4f7f\u7528\u6cb9\u7334\u811a\u672c\uff0c\u53ef\u4ee5\u628a\u641c\u7d22\u7ed3\u679c\u7684CSDN\u9875\u9762\u5168\u9762\u5c4f\u853d\u3002"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3a\u4e86\u786e\u4fdd\u811a\u672c\u5728\u52a0\u8f7d\u4e0b\u4e00\u9875\u65f6\u4e5f\u80fd\u8fd0\u884c\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(n.code,{children:"MutationObserver"}),"\u6765\u76d1\u63a7\u9875\u9762\u4e0a\u7684DOM\u53d8\u5316\u3002\u8fd9\u6837\uff0c\u5f53\u641c\u7d22\u7ed3\u679c\u9875\u9762\u52a8\u6001\u52a0\u8f7d\u65b0\u5185\u5bb9\uff08\u4f8b\u5982\u901a\u8fc7\u70b9\u51fb\u201c\u4e0b\u4e00\u9875\u201d\u6309\u94ae\u6216\u6eda\u52a8\u52a0\u8f7d\u66f4\u591a\u7ed3\u679c\uff09\u65f6\uff0c\u811a\u672c\u80fd\u591f\u68c0\u6d4b\u5230\u8fd9\u4e9b\u53d8\u5316\u5e76\u91cd\u65b0\u6267\u884c\u9690\u85cf\u64cd\u4f5c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f\u66f4\u65b0\u540e\u7684\u811a\u672c\uff0c\u6dfb\u52a0\u4e86",(0,s.jsx)(n.code,{children:"MutationObserver"}),"\u6765\u76d1\u63a7DOM\u53d8\u5316\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// ==UserScript==\n// @name         Block CSDN Results\n// @namespace    http://tampermonkey.net/\n// @version      1.0\n// @description  Hide CSDN results from search engines\n// @match        *://www.google.com/*\n// @match        *://www.baidu.com/*\n// @match        *://www.bing.com/*\n// @match        *://www.sogou.com/*\n// @grant        none\n// ==/UserScript==\n\n(function() {\n    'use strict';\n\n    // Function to hide CSDN results\n    function hideCSDNResults() {\n        const selectors = [\n            'a[href*=\"csdn.net\"]',\n            'a[href*=\"csdn.com\"]'\n        ];\n        \n        selectors.forEach(selector => {\n            const links = document.querySelectorAll(selector);\n            links.forEach(link => {\n                const result = link.closest('div'); // Adjust this if the structure is different\n                if (result) {\n                    result.style.display = 'none';\n                }\n            });\n        });\n    }\n\n    // Run the function on page load\n    hideCSDNResults();\n\n    // Create a MutationObserver to monitor changes in the DOM\n    const observer = new MutationObserver((mutations) => {\n        mutations.forEach((mutation) => {\n            if (mutation.addedNodes && mutation.addedNodes.length > 0) {\n                hideCSDNResults();\n            }\n        });\n    });\n\n    // Configure the observer to watch for changes in the body element\n    observer.observe(document.body, {\n        childList: true,\n        subtree: true\n    });\n\n})();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u8bf4\u660e",children:"\u8bf4\u660e\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"hideCSDNResults"})," \u51fd\u6570"]}),"\uff1a\u7528\u4e8e\u67e5\u627e\u5e76\u9690\u85cf\u5305\u542bCSDN\u94fe\u63a5\u7684\u641c\u7d22\u7ed3\u679c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u9875\u9762\u52a0\u8f7d\u65f6\u8fd0\u884c\u4e00\u6b21"}),"\uff1a\u5728\u9875\u9762\u521d\u6b21\u52a0\u8f7d\u65f6\u8fd0\u884c",(0,s.jsx)(n.code,{children:"hideCSDNResults"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"MutationObserver"})}),"\uff1a\u521b\u5efa\u4e00\u4e2a",(0,s.jsx)(n.code,{children:"MutationObserver"}),"\u5b9e\u4f8b\u6765\u76d1\u63a7DOM\u53d8\u5316\u3002","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u56de\u8c03\u51fd\u6570"}),"\uff1a\u6bcf\u5f53DOM\u4e2d\u6709\u65b0\u8282\u70b9\u6dfb\u52a0\u65f6\uff0c\u56de\u8c03\u51fd\u6570\u90fd\u4f1a\u8fd0\u884c\uff0c\u5e76\u8c03\u7528",(0,s.jsx)(n.code,{children:"hideCSDNResults"}),"\u51fd\u6570\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u89c2\u5bdf\u76ee\u6807"}),"\uff1a\u8bbe\u7f6e\u89c2\u5bdf\u76ee\u6807\u4e3a",(0,s.jsx)(n.code,{children:"document.body"}),"\uff0c\u5e76\u76d1\u89c6\u5b50\u8282\u70b9\u548c\u5b50\u6811\u7684\u53d8\u5316\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u811a\u672c\u80fd\u5728\u521d\u59cb\u9875\u9762\u52a0\u8f7d\u548c\u540e\u7eed\u52a8\u6001\u52a0\u8f7d\uff08\u5982\u70b9\u51fb\u201c\u4e0b\u4e00\u9875\u201d\u6309\u94ae\u6216\u6eda\u52a8\u52a0\u8f7d\u66f4\u591a\u7ed3\u679c\uff09\u65f6\u90fd\u80fd\u9690\u85cf\u6765\u81eaCSDN\u7684\u7ed3\u679c\u3002\u8fd9\u79cd\u65b9\u6cd5\u4e0d\u4ec5\u9ad8\u6548\uff0c\u800c\u4e14\u907f\u514d\u4e86\u4e0d\u5fc5\u8981\u7684\u9891\u7e41\u8fd0\u884c\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(6540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);