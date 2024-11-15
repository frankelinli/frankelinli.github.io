"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1045],{66228:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var o=i(82467),t=i(74848),d=i(28453);const s={date:"2024-06-20 19:41",slug:"WordPress\u9875\u9762\u52a0\u8f7d\u52a8\u753b"},l=void 0,r={authorsImageUrls:[]},c=[{value:"\u9875\u9762\u52a0\u8f7d\u52a8\u753b",id:"\u9875\u9762\u52a0\u8f7d\u52a8\u753b",level:3},{value:"\u5728 <code>functions.php</code> \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee3\u7801",id:"\u5728-functionsphp-\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee3\u7801",level:4},{value:"1. \u5feb\u901f\u539f\u578b\u8bbe\u8ba1\u548c\u5f00\u53d1",id:"1-\u5feb\u901f\u539f\u578b\u8bbe\u8ba1\u548c\u5f00\u53d1",level:3},{value:"2. \u7b80\u5316\u63d2\u4ef6\u548c\u4e3b\u9898\u5f00\u53d1",id:"2-\u7b80\u5316\u63d2\u4ef6\u548c\u4e3b\u9898\u5f00\u53d1",level:3},{value:"3. \u65b9\u4fbf\u6f14\u793a\u6216\u5206\u4eab\u4ee3\u7801",id:"3-\u65b9\u4fbf\u6f14\u793a\u6216\u5206\u4eab\u4ee3\u7801",level:3},{value:"4. \u4e34\u65f6\u89e3\u51b3\u65b9\u6848",id:"4-\u4e34\u65f6\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u591c\u95f4\u6a21\u5f0f\u5207\u6362",id:"\u591c\u95f4\u6a21\u5f0f\u5207\u6362",level:3},{value:"\u5728 <code>functions.php</code> \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee3\u7801",id:"\u5728-functionsphp-\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee3\u7801-1",level:4},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3}];function a(n){const e={admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h3,{id:"\u9875\u9762\u52a0\u8f7d\u52a8\u753b",children:"\u9875\u9762\u52a0\u8f7d\u52a8\u753b"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u9875\u9762\u52a0\u8f7d\u65f6\u663e\u793a\u4e00\u4e2a\u52a8\u753b\uff0c\u589e\u5f3a\u7528\u6237\u4f53\u9a8c\u3002"}),"\n",(0,t.jsxs)(e.h4,{id:"\u5728-functionsphp-\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee3\u7801",children:["\u5728 ",(0,t.jsx)(e.code,{children:"functions.php"})," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee3\u7801"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-php",children:'function add_page_loading_animation() {\n    if (!is_admin()) {\n        echo \'\n        <style>\n            #loading-animation {\n                position: fixed;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                background-color: #fff;\n                z-index: 10000;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                font-size: 24px;\n                color: #000;\n            }\n        </style>\n        <div id="loading-animation">Loading...</div>\n        <script>\n            document.addEventListener("DOMContentLoaded", function() {\n                var loadingAnimation = document.getElementById("loading-animation");\n                window.addEventListener("load", function() {\n                    loadingAnimation.style.display = "none";\n                });\n            });\n        <\/script>\';\n    }\n}\nadd_action(\'wp_footer\', \'add_page_loading_animation\');\n'})}),"\n",(0,t.jsxs)(e.admonition,{type:"info",children:[(0,t.jsx)(e.p,{children:"\u628ahtml, CSS, JS\u5c01\u88c5\u5728\u4e00\u4e2a\u51fd\u6570\u91cc\uff0c\u53ea\u662f\u4e3a\u4e86\u5feb\u901f\u5b9e\u73b0\u6548\u679c\uff0c\u5e76\u4e0d\u662f\u5b9e\u9645\u6700\u4f73\u65b9\u6848\u3002\u5b9e\u9645\u751f\u4ea7\u4e2d\uff0c\u628ahtml, JS\uff0cCSS\u653e\u5230\u4e13\u95e8\u7684\u5916\u90e8\u6587\u4ef6\u662f\u6700\u597d\u3002\u90a3\u6837\u53ef\u4ee5\u7f13\u5b58\u3002"}),(0,t.jsx)(e.p,{children:"\u5c06 HTML\u3001CSS \u548c JavaScript \u5c01\u88c5\u5728\u4e00\u4e2a\u51fd\u6570\u91cc\u6709\u5176\u7279\u5b9a\u7684\u7528\u9014\u548c\u610f\u4e49\uff0c\u4e3b\u8981\u5728\u4e8e\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u9762\uff1a"}),(0,t.jsx)(e.h3,{id:"1-\u5feb\u901f\u539f\u578b\u8bbe\u8ba1\u548c\u5f00\u53d1",children:"1. \u5feb\u901f\u539f\u578b\u8bbe\u8ba1\u548c\u5f00\u53d1"}),(0,t.jsx)(e.p,{children:"\u5728\u5f00\u53d1\u9636\u6bb5\uff0c\u5c24\u5176\u662f\u5728\u8fdb\u884c\u5feb\u901f\u539f\u578b\u8bbe\u8ba1\u65f6\uff0c\u5c06\u6240\u6709\u4ee3\u7801\u5c01\u88c5\u5728\u4e00\u4e2a\u51fd\u6570\u91cc\u53ef\u4ee5\u52a0\u5feb\u5f00\u53d1\u901f\u5ea6\u3002\u8fd9\u6837\u505a\u53ef\u4ee5\u7acb\u5373\u770b\u5230\u6548\u679c\uff0c\u800c\u4e0d\u7528\u53bb\u7ba1\u7406\u591a\u4e2a\u6587\u4ef6\u3002"}),(0,t.jsx)(e.h3,{id:"2-\u7b80\u5316\u63d2\u4ef6\u548c\u4e3b\u9898\u5f00\u53d1",children:"2. \u7b80\u5316\u63d2\u4ef6\u548c\u4e3b\u9898\u5f00\u53d1"}),(0,t.jsx)(e.p,{children:"\u5f53\u5f00\u53d1\u63d2\u4ef6\u6216\u7279\u5b9a\u529f\u80fd\u7684\u4e3b\u9898\u65f6\uff0c\u53ef\u80fd\u9700\u8981\u5728\u6fc0\u6d3b\u63d2\u4ef6\u6216\u4e3b\u9898\u65f6\u7acb\u5373\u6dfb\u52a0\u4e00\u4e9b\u529f\u80fd\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5c06\u6240\u6709\u4ee3\u7801\u5c01\u88c5\u5728\u4e00\u4e2a\u51fd\u6570\u4e2d\u66f4\u4e3a\u65b9\u4fbf\uff0c\u4e0d\u7528\u53bb\u5904\u7406\u989d\u5916\u7684\u6587\u4ef6\u4f9d\u8d56\u3002"}),(0,t.jsx)(e.h3,{id:"3-\u65b9\u4fbf\u6f14\u793a\u6216\u5206\u4eab\u4ee3\u7801",children:"3. \u65b9\u4fbf\u6f14\u793a\u6216\u5206\u4eab\u4ee3\u7801"}),(0,t.jsx)(e.p,{children:"\u5728\u5c55\u793a\u6216\u5206\u4eab\u67d0\u4e2a\u7279\u5b9a\u529f\u80fd\u7684\u5b9e\u73b0\u65f6\uff0c\u5c01\u88c5\u5728\u4e00\u4e2a\u51fd\u6570\u4e2d\u53ef\u4ee5\u8ba9\u4ee3\u7801\u66f4\u6613\u4e8e\u7406\u89e3\u548c\u590d\u5236\uff0c\u5c24\u5176\u662f\u5728\u8bba\u575b\u3001\u535a\u5ba2\u6216\u95ee\u7b54\u5e73\u53f0\u4e0a\uff0c\u8fd9\u6837\u53ef\u4ee5\u51cf\u5c11\u5916\u90e8\u6587\u4ef6\u7684\u4f9d\u8d56\uff0c\u786e\u4fdd\u4ee3\u7801\u7247\u6bb5\u5b8c\u6574\u6027\u3002"}),(0,t.jsx)(e.h3,{id:"4-\u4e34\u65f6\u89e3\u51b3\u65b9\u6848",children:"4. \u4e34\u65f6\u89e3\u51b3\u65b9\u6848"}),(0,t.jsx)(e.p,{children:"\u5728\u4e34\u65f6\u9700\u8981\u5b9e\u73b0\u67d0\u4e9b\u529f\u80fd\u6216\u8fdb\u884c\u6d4b\u8bd5\u65f6\uff0c\u5c06\u4ee3\u7801\u653e\u5728\u4e00\u4e2a\u51fd\u6570\u91cc\u53ef\u4ee5\u5feb\u901f\u5b9e\u73b0\u6240\u9700\u6548\u679c\uff0c\u5f85\u529f\u80fd\u786e\u8ba4\u540e\u518d\u8fdb\u884c\u4ee3\u7801\u4f18\u5316\u548c\u5206\u79bb\u3002"})]}),"\n",(0,t.jsx)(e.h3,{id:"\u591c\u95f4\u6a21\u5f0f\u5207\u6362",children:"\u591c\u95f4\u6a21\u5f0f\u5207\u6362"}),"\n",(0,t.jsxs)(e.p,{children:["\u4e3a\u7f51\u7ad9\u6dfb\u52a0\u4e00\u4e2a\u591c\u95f4\u6a21\u5f0f\u5207\u6362\u6309\u94ae\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u767d\u5929\u548c\u591c\u95f4\u6a21\u5f0f\u4e4b\u95f4\u5207\u6362\uff0c\u504f\u597d\u901a\u8fc7 ",(0,t.jsx)(e.code,{children:"localStorage"})," \u4fdd\u5b58\u3002"]}),"\n",(0,t.jsxs)(e.h4,{id:"\u5728-functionsphp-\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee3\u7801-1",children:["\u5728 ",(0,t.jsx)(e.code,{children:"functions.php"})," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee3\u7801"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-php",children:'function add_night_mode_toggle() {\n    if (!is_admin()) {\n        echo \'\n        <style>\n            #night-mode-toggle {\n                position: fixed;\n                bottom: 20px;\n                right: 20px;\n                background-color: #000;\n                color: #fff;\n                padding: 10px;\n                border-radius: 5px;\n                cursor: pointer;\n                z-index: 1000;\n            }\n            body.night-mode {\n                background-color: #121212;\n                color: #ffffff;\n            }\n        </style>\n        <div id="night-mode-toggle">Night Mode</div>\n        <script>\n            document.addEventListener("DOMContentLoaded", function() {\n                var nightModeToggle = document.getElementById("night-mode-toggle");\n                var body = document.body;\n\n                // Check for saved night mode preference\n                if (localStorage.getItem("nightMode") === "enabled") {\n                    body.classList.add("night-mode");\n                }\n\n                nightModeToggle.addEventListener("click", function() {\n                    body.classList.toggle("night-mode");\n                    if (body.classList.contains("night-mode")) {\n                        localStorage.setItem("nightMode", "enabled");\n                    } else {\n                        localStorage.removeItem("nightMode");\n                    }\n                });\n            });\n        <\/script>\';\n    }\n}\nadd_action(\'wp_footer\', \'add_night_mode_toggle\');\n'})}),"\n",(0,t.jsx)(e.admonition,{type:"warning",children:(0,t.jsx)(e.p,{children:"\u8fd9\u4e2a\u591c\u95f4\u5207\u6362\u529f\u80fd\u975e\u5e38\u7c97\u7cd9\u3002\u53ea\u662f\u6f14\u793a\u529f\u80fd\u3002"})}),"\n",(0,t.jsx)(e.h3,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u4e9b\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u5229\u7528 WordPress \u7684\u5185\u7f6e\u51fd\u6570\u3001JavaScript \u548c CSS \u5b9e\u73b0\u4e00\u4e9b\u4ee4\u4eba\u60ca\u8bb6\u4e14\u5b9e\u7528\u7684\u529f\u80fd\uff1a"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u5b9e\u65f6\u5b57\u7b26\u8ba1\u6570\u5668"}),"\uff1a\u5e2e\u52a9\u7528\u6237\u5728\u8bc4\u8bba\u65f6\u4e86\u89e3\u5269\u4f59\u5b57\u7b26\u6570\u91cf\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u52a8\u6001\u5185\u5bb9\u63a8\u8350"}),"\uff1a\u6839\u636e\u5f53\u524d\u6587\u7ae0\u7684\u6807\u7b7e\u63a8\u8350\u76f8\u5173\u5185\u5bb9\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u9650\u65f6\u4f18\u60e0\u5012\u8ba1\u65f6"}),"\uff1a\u5728\u9875\u9762\u9876\u90e8\u663e\u793a\u4e00\u4e2a\u9650\u65f6\u4f18\u60e0\u5012\u8ba1\u65f6\u6761\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u9875\u9762\u52a0\u8f7d\u52a8\u753b"}),"\uff1a\u5728\u9875\u9762\u52a0\u8f7d\u65f6\u663e\u793a\u4e00\u4e2a\u52a8\u753b\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u591c\u95f4\u6a21\u5f0f\u5207\u6362"}),"\uff1a\u4e3a\u7f51\u7ad9\u6dfb\u52a0\u4e00\u4e2a\u591c\u95f4\u6a21\u5f0f\u5207\u6362\u6309\u94ae\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u4e9b\u529f\u80fd\u4e0d\u4ec5\u63d0\u5347\u4e86\u7f51\u7ad9\u7684\u7528\u6237\u4f53\u9a8c\uff0c\u8fd8\u5c55\u793a\u4e86\u524d\u7aef\u548c\u540e\u7aef\u6280\u672f\u7684\u6574\u5408\u5e94\u7528\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u5177\u4f53\u9700\u6c42\u8fdb\u4e00\u6b65\u8c03\u6574\u548c\u6269\u5c55\u8fd9\u4e9b\u4ee3\u7801\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>l});var o=i(96540);const t={},d=o.createContext(t);function s(n){const e=o.useContext(d);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),o.createElement(d.Provider,{value:e},n.children)}},82467:n=>{n.exports=JSON.parse('{"permalink":"/blog/WordPress\u9875\u9762\u52a0\u8f7d\u52a8\u753b","editUrl":"https://github.com/frankelinli/frankelinli.github.io/edit/main/blog/2024/06-20-WordPress\u9875\u9762\u52a0\u8f7d\u65f6\u663e\u793a\u8fc7\u6e21loading.md","source":"@site/blog/2024/06-20-WordPress\u9875\u9762\u52a0\u8f7d\u65f6\u663e\u793a\u8fc7\u6e21loading.md","title":"WordPress\u9875\u9762\u52a0\u8f7d\u65f6\u663e\u793a\u8fc7\u6e21loading","description":"\u9875\u9762\u52a0\u8f7d\u52a8\u753b","date":"2024-06-20T19:41:00.000Z","tags":[],"readingTime":4.245,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2024-06-20 19:41","slug":"WordPress\u9875\u9762\u52a0\u8f7d\u52a8\u753b"},"unlisted":false,"lastUpdatedAt":1718910430000,"prevItem":{"title":"wordpress\u6839\u636eURL\u4e2d\u7684\u5173\u952e\u8bcd\u6761\u4ef6\u6765\u5f39\u51fa\u901a\u77e5","permalink":"/blog/wordpress\u6839\u636eURL\u4e2d\u7684\u5173\u952e\u8bcd\u6761\u4ef6\u6765\u5f39\u51fa\u901a\u77e5"},"nextItem":{"title":"WordPress\u7ed9\u6700\u8fd13\u7bc7\u6587\u7ae0\u5f39\u51fa\u63d0\u9192\u901a\u77e5","permalink":"/blog/WordPress\u7ed9\u6700\u8fd13\u7bc7\u6587\u7ae0\u5f39\u51fa\u63d0\u9192\u901a\u77e5"}}')}}]);