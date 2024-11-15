"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5122],{57170:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>h});var r=s(87529),t=s(74848),l=s(28453);const c={date:"2024-07-20 19:31",slug:"single.php\u91cc\u663e\u793a\u5206\u7c7b\u540d"},i=void 0,o={authorsImageUrls:[]},h=[];function d(e){const n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["WordPress\u4e3b\u9898\u5f00\u53d1\u4e2d\u5e38\u7528\u7684\u4e00\u4e2a\u51fd\u6570",(0,t.jsx)(n.code,{children:"the_category()"}),"\u3002\u8ba9\u6211\u89e3\u91ca\u4e00\u4e0b\u8fd9\u4e2a\u51fd\u6570\u7684\u7528\u6cd5\u548c\u60a8\u63d0\u5230\u7684\u60c5\u51b5\uff1a"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"the_category(', ');"}),"\u8fd9\u884c\u4ee3\u7801\u7684\u4f5c\u7528\u662f\u8f93\u51fa\u5f53\u524d\u6587\u7ae0\u7684\u6240\u6709\u5206\u7c7b\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u591a\u4e2a\u5206\u7c7b\u4f1a\u7528\u9017\u53f7\u548c\u7a7a\u683c\uff08', '\uff09\u5206\u9694\u3002"]}),"\n",(0,t.jsx)(n.p,{children:'\u7136\u800c\uff0c\u60a8\u60f3\u8981"\u76f4\u63a5\u8f93\u51fa\u7b2c\u4e00\u4e2a"\u5206\u7c7b\u3002\u8981\u5b9e\u73b0\u8fd9\u4e2a\u76ee\u7684\uff0c\u6211\u4eec\u9700\u8981\u7a0d\u5fae\u4fee\u6539\u4e00\u4e0b\u4ee3\u7801\u3002\u4ee5\u4e0b\u662f\u51e0\u79cd\u65b9\u6cd5\u53ef\u4ee5\u53ea\u8f93\u51fa\u7b2c\u4e00\u4e2a\u5206\u7c7b\uff1a'}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4f7f\u7528",(0,t.jsx)(n.code,{children:"get_the_category()"}),"\u51fd\u6570\uff1a"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"$categories = get_the_category();\nif (!empty($categories)) {\n    echo esc_html($categories[0]->name);\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\u4f7f\u7528",(0,t.jsx)(n.code,{children:"wp_get_post_categories()"}),"\u51fd\u6570\uff1a"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"$categories = wp_get_post_categories(get_the_ID(), array('fields' => 'names'));\nif (!empty($categories)) {\n    echo esc_html($categories[0]);\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["\u5982\u679c\u60a8\u4ecd\u7136\u60f3\u4f7f\u7528",(0,t.jsx)(n.code,{children:"the_category()"}),"\u51fd\u6570\uff0c\u4f46\u53ea\u663e\u793a\u7b2c\u4e00\u4e2a\u5206\u7c7b\uff0c\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"the_category(', ', '', false);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u7528\u6cd5\u4e2d\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u8bbe\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u7b2c\u56db\u4e2a\u53c2\u6570\u8bbe\u4e3a",(0,t.jsx)(n.code,{children:"false"}),"\uff0c\u8fd9\u6837\u5c31\u53ea\u4f1a\u8f93\u51fa\u7b2c\u4e00\u4e2a\u5206\u7c7b\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u4e9b\u65b9\u6cd5\u90fd\u53ef\u4ee5\u5b9e\u73b0\u53ea\u8f93\u51fa\u7b2c\u4e00\u4e2a\u5206\u7c7b\u7684\u76ee\u7684\u3002\u9009\u62e9\u54ea\u79cd\u65b9\u6cd5\u53d6\u51b3\u4e8e\u60a8\u7684\u5177\u4f53\u9700\u6c42\u548c\u4ee3\u7801\u7ed3\u6784\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u6587\u7ae0\u6ca1\u6709\u5206\u914d\u4efb\u4f55\u5206\u7c7b\uff0c\u8fd9\u4e9b\u4ee3\u7801\u90fd\u4e0d\u4f1a\u8f93\u51fa\u4efb\u4f55\u5185\u5bb9\u3002\u60a8\u53ef\u80fd\u9700\u8981\u6dfb\u52a0\u989d\u5916\u7684\u68c0\u67e5\u6216\u9ed8\u8ba4\u503c\uff0c\u4ee5\u5904\u7406\u6ca1\u6709\u5206\u7c7b\u7684\u60c5\u51b5\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u60a8\u5e0c\u671b\u6211\u8be6\u7ec6\u89e3\u91ca\u5176\u4e2d\u7684\u4efb\u4f55\u4e00\u79cd\u65b9\u6cd5\u5417\uff1f"}),"\n",(0,t.jsx)(n.p,{children:"\u60a8\u63d0\u51fa\u4e86\u4e00\u4e2a\u5f88\u597d\u7684\u89c2\u70b9\u3002\u5728single.php\u4e2d\uff0c\u786e\u5b9e\u53ef\u80fd\u4e0d\u9700\u8981\u8fdb\u884c\u989d\u5916\u7684\u68c0\u67e5\u3002\u8ba9\u6211\u89e3\u91ca\u4e00\u4e0b\u539f\u56e0\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5355\u7bc7\u6587\u7ae0\u9875\u9762\uff08single.php\uff09\u901a\u5e38\u662f\u7528\u6765\u663e\u793a\u4e00\u7bc7\u5b8c\u6574\u7684\u6587\u7ae0\u7684\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'\u5728WordPress\u7684\u9ed8\u8ba4\u8bbe\u7f6e\u4e2d\uff0c\u6bcf\u7bc7\u6587\u7ae0\u81f3\u5c11\u5e94\u8be5\u5c5e\u4e8e\u4e00\u4e2a\u5206\u7c7b\u3002\u5373\u4f7f\u7528\u6237\u6ca1\u6709\u660e\u786e\u9009\u62e9\u5206\u7c7b\uff0c\u6587\u7ae0\u4e5f\u4f1a\u88ab\u5206\u914d\u5230\u9ed8\u8ba4\u5206\u7c7b\uff08\u901a\u5e38\u662f"\u672a\u5206\u7c7b"\u6216"Uncategorized"\uff09\u3002'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u5728\u7406\u8bba\u4e0a\uff0csingle.php \u4e2d\u663e\u793a\u7684\u6587\u7ae0\u5e94\u8be5\u603b\u662f\u6709\u81f3\u5c11\u4e00\u4e2a\u5206\u7c7b\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u57fa\u4e8e\u8fd9\u4e9b\u8003\u8651\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u4ee5\u4e0b\u4ee3\u7801\u800c\u4e0d\u8fdb\u884c\u989d\u5916\u68c0\u67e5\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"$categories = get_the_category();\necho esc_html($categories[0]->name);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6216\u8005\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"the_category(', ', '', false);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u4e24\u79cd\u65b9\u6cd5\u90fd\u5e94\u8be5\u80fd\u591f\u6b63\u5e38\u5de5\u4f5c\uff0c\u800c\u4e0d\u4f1a\u4ea7\u751f\u9519\u8bef\u6216\u8b66\u544a\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f46\u662f\uff0c\u6211\u8fd8\u662f\u5efa\u8bae\u60a8\u8003\u8651\u4ee5\u4e0b\u51e0\u70b9\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u81ea\u5b9a\u4e49\u6587\u7ae0\u7c7b\u578b\uff1a\u5982\u679c\u60a8\u7684\u7f51\u7ad9\u4f7f\u7528\u4e86\u81ea\u5b9a\u4e49\u6587\u7ae0\u7c7b\u578b\uff0c\u5b83\u4eec\u53ef\u80fd\u4e0d\u4e00\u5b9a\u4f7f\u7528\u6807\u51c6\u7684\u5206\u7c7b\u7cfb\u7edf\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u63d2\u4ef6\u5f71\u54cd\uff1a\u67d0\u4e9b\u63d2\u4ef6\u53ef\u80fd\u4f1a\u6539\u53d8WordPress\u7684\u9ed8\u8ba4\u884c\u4e3a\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u672a\u6765\u7684\u7ef4\u62a4\u6027\uff1a\u867d\u7136\u73b0\u5728\u53ef\u80fd\u4e0d\u9700\u8981\u68c0\u67e5\uff0c\u4f46\u5c06\u6765\u5982\u679c\u7f51\u7ad9\u7ed3\u6784\u53d1\u751f\u53d8\u5316\uff0c\u6709\u68c0\u67e5\u53ef\u80fd\u4f1a\u66f4\u5b89\u5168\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4ee3\u7801\u590d\u7528\uff1a\u5982\u679c\u8fd9\u6bb5\u4ee3\u7801\u5c06\u6765\u53ef\u80fd\u88ab\u590d\u5236\u5230\u5176\u4ed6\u5730\u65b9\u4f7f\u7528\uff0c\u6709\u68c0\u67e5\u4f1a\u4f7f\u5b83\u66f4\u52a0\u901a\u7528\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u60a8\u786e\u5b9a\u5728\u60a8\u7684\u5177\u4f53\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u8fd9\u79cd\u68c0\u67e5\uff0c\u90a3\u4e48\u76f4\u63a5\u4f7f\u7528\u4e0a\u8ff0\u4ee3\u7801\u662f\u5b8c\u5168\u53ef\u4ee5\u7684\u3002\u8fd9\u6837\u53ef\u4ee5\u4f7f\u4ee3\u7801\u66f4\u7b80\u6d01\uff0c\u4e5f\u53ef\u80fd\u7565\u5fae\u63d0\u9ad8\u6027\u80fd\uff08\u5c3d\u7ba1\u5dee\u5f02\u53ef\u80fd\u5fae\u4e0d\u8db3\u9053\uff09\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u7ec8\uff0c\u8fd9\u662f\u4e00\u4e2a\u5173\u4e8e\u4ee3\u7801\u98ce\u683c\u548c\u4e2a\u4eba\u504f\u597d\u7684\u51b3\u5b9a\u3002\u5728\u786e\u4fdd\u529f\u80fd\u6b63\u5e38\u7684\u524d\u63d0\u4e0b\uff0c\u9009\u62e9\u60a8\u8ba4\u4e3a\u6700\u9002\u5408\u60a8\u9879\u76ee\u7684\u65b9\u5f0f\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var r=s(96540);const t={},l=r.createContext(t);function c(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(l.Provider,{value:n},e.children)}},87529:e=>{e.exports=JSON.parse('{"permalink":"/blog/single.php\u91cc\u663e\u793a\u5206\u7c7b\u540d","editUrl":"https://github.com/frankelinli/frankelinli.github.io/edit/main/blog/2024/07-20-single.php\u91cc\u663e\u793a\u5206\u7c7b\u540d.md","source":"@site/blog/2024/07-20-single.php\u91cc\u663e\u793a\u5206\u7c7b\u540d.md","title":"single.php\u91cc\u663e\u793a\u5206\u7c7b\u540d","description":"WordPress\u4e3b\u9898\u5f00\u53d1\u4e2d\u5e38\u7528\u7684\u4e00\u4e2a\u51fd\u6570the_category()\u3002\u8ba9\u6211\u89e3\u91ca\u4e00\u4e0b\u8fd9\u4e2a\u51fd\u6570\u7684\u7528\u6cd5\u548c\u60a8\u63d0\u5230\u7684\u60c5\u51b5\uff1a","date":"2024-07-20T19:31:00.000Z","tags":[],"readingTime":4.045,"hasTruncateMarker":true,"authors":[],"frontMatter":{"date":"2024-07-20 19:31","slug":"single.php\u91cc\u663e\u793a\u5206\u7c7b\u540d"},"unlisted":false,"lastUpdatedAt":1721571889000,"prevItem":{"title":"\u4e3a\u4f55\u6211\u5236\u4f5c\u7684\u4e3b\u9898\u4e2d\u4e0d\u663e\u793aadmin bar","permalink":"/blog/\u4e3a\u4f55\u6211\u5236\u4f5c\u7684\u4e3b\u9898\u4e2d\u4e0d\u663e\u793aadmin bar"},"nextItem":{"title":"header.php\u548cfooter.php\u5fc5\u987b\u8981\u5305\u542bwp_head\u548cwp_footer\u51fd\u6570","permalink":"/blog/header.php\u548cfooter.php\u5fc5\u987b\u8981\u5305\u542bwp_head\u548cwp_footer\u51fd\u6570"}}')}}]);