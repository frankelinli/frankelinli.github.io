"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6963],{8561:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var t=r(4848),s=r(8453);const o={date:"2024-07-10 00:32",slug:"wordpress\u521b\u5efa\u4e00\u4e2a\u7ba1\u7406\u5458\u9875\u9762"},d=void 0,i={permalink:"/blog/wordpress\u521b\u5efa\u4e00\u4e2a\u7ba1\u7406\u5458\u9875\u9762",editUrl:"https://github.com/frankelinli/frankelinli.github.io/edit/main/blog/2024/07-10-wordpress\u521b\u5efa\u4e00\u4e2a\u7ba1\u7406\u5458\u9875\u9762.md",source:"@site/blog/2024/07-10-wordpress\u521b\u5efa\u4e00\u4e2a\u7ba1\u7406\u5458\u9875\u9762.md",title:"wordpress\u521b\u5efa\u4e00\u4e2a\u7ba1\u7406\u5458\u9875\u9762",description:"WordPress\u7ad9\u70b9\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u52a0\u8f7dwp-load\u73af\u5883\uff0c\u5236\u4f5c\u4e00\u4e2a\u7ba1\u7406\u5458\u4e13\u5c5e\u9875\u9762\uff0c\u53ea\u80fd\u7ba1\u7406\u5458\u6d4f\u89c8\u548c\u4f7f\u7528\u3002\u968f\u610f\u6dfb\u52a0\u5185\u5bb9\u3002\u5176\u4ed6\u7528\u6237\u548c\u8bbf\u5ba2\u770b\u4e0d\u5230\u3002",date:"2024-07-10T00:32:00.000Z",tags:[],readingTime:1.68,hasTruncateMarker:!0,authors:[],frontMatter:{date:"2024-07-10 00:32",slug:"wordpress\u521b\u5efa\u4e00\u4e2a\u7ba1\u7406\u5458\u9875\u9762"},unlisted:!1,lastUpdatedAt:1720591792e3,prevItem:{title:"\u4f7f\u7528WordPress\u771f\u5b9e\u6848\u4f8b\u6765\u8bb2\u89e3PHP\u8bed\u6cd5",permalink:"/blog/\u4f7f\u7528WordPress\u771f\u5b9e\u6848\u4f8b\u6765\u8bb2\u89e3PHP\u8bed\u6cd5"},nextItem:{title:"wp-load\u52a0\u8f7dWordPress\u73af\u5883",permalink:"/blog/wp-load\u52a0\u8f7dWordPress\u73af\u5883"}},p={authorsImageUrls:[]},a=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"WordPress\u7ad9\u70b9\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u52a0\u8f7dwp-load\u73af\u5883\uff0c\u5236\u4f5c\u4e00\u4e2a\u7ba1\u7406\u5458\u4e13\u5c5e\u9875\u9762\uff0c\u53ea\u80fd\u7ba1\u7406\u5458\u6d4f\u89c8\u548c\u4f7f\u7528\u3002\u968f\u610f\u6dfb\u52a0\u5185\u5bb9\u3002\u5176\u4ed6\u7528\u6237\u548c\u8bbf\u5ba2\u770b\u4e0d\u5230\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u5e0c\u671b\u8fdb\u4e00\u6b65\u9650\u5236\u8bbf\u95ee\u6743\u9650\uff0c\u4f8b\u5982\u4ec5\u5141\u8bb8\u7ba1\u7406\u5458\u8bbf\u95ee\uff0c\u53ef\u4ee5\u6dfb\u52a0\u989d\u5916\u7684\u89d2\u8272\u68c0\u67e5\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"<?php\n// \u52a0\u8f7d WordPress \u73af\u5883\nrequire('wp-load.php');\n\n// \u68c0\u67e5\u7528\u6237\u662f\u5426\u5df2\u767b\u5f55\nif (!is_user_logged_in()) {\n    // \u5982\u679c\u7528\u6237\u672a\u767b\u5f55\uff0c\u91cd\u5b9a\u5411\u5230\u767b\u5f55\u9875\u9762\n    wp_redirect(wp_login_url());\n    exit;\n}\n\n// \u83b7\u53d6\u5f53\u524d\u767b\u5f55\u7528\u6237\u4fe1\u606f\n$current_user = wp_get_current_user();\n\n// \u68c0\u67e5\u7528\u6237\u89d2\u8272\nif (!in_array('administrator', $current_user->roles)) {\n    // \u5982\u679c\u7528\u6237\u4e0d\u662f\u7ba1\u7406\u5458\uff0c\u663e\u793a\u9519\u8bef\u6d88\u606f\u5e76\u9000\u51fa\n    wp_die('\u60a8\u6ca1\u6709\u6743\u9650\u8bbf\u95ee\u6b64\u9875\u9762\u3002');\n}\n\necho 'Hello, ' . $current_user->user_login;\n\n?>\n\n<div id=\"main-content\">\n    <h1>\u6b22\u8fce\u8bbf\u95ee\u6211\u7684\u81ea\u5b9a\u4e49\u9875\u9762</h1>\n    <p>\u8fd9\u662f\u4e00\u4e2a\u4f7f\u7528 WordPress \u73af\u5883\u52a0\u8f7d\u7684\u81ea\u5b9a\u4e49\u9875\u9762\u3002</p>\n</div>\n\n<h1>User List</h1>\n<table border=\"1\">\n    <tr>\n        <th>ID</th>\n        <th>Username</th>\n        <th>Email</th>\n        <th>Role</th>\n    </tr>\n    <?php\n    // \u83b7\u53d6\u6240\u6709\u7528\u6237\n    $users = get_users();\n    foreach ($users as $user) : ?>\n        <tr>\n            <td><?php echo $user->ID; ?></td>\n            <td><?php echo $user->user_login; ?></td>\n            <td><?php echo $user->user_email; ?></td>\n            <td><?php echo implode(', ', $user->roles); ?></td>\n        </tr>\n    <?php endforeach; ?>\n</table>\n\n<?php get_footer(); ?>\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u4ee3\u7801\u4e0d\u4ec5\u68c0\u67e5\u7528\u6237\u662f\u5426\u5df2\u767b\u5f55\uff0c\u8fd8\u68c0\u67e5\u5f53\u524d\u7528\u6237\u662f\u5426\u5177\u6709\u7ba1\u7406\u5458\u89d2\u8272\u3002\u5982\u679c\u7528\u6237\u4e0d\u662f\u7ba1\u7406\u5458\uff0c\u4f1a\u663e\u793a\u9519\u8bef\u6d88\u606f\u5e76\u7ec8\u6b62\u811a\u672c\u6267\u884c\u3002"})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var t=r(6540);const s={},o=t.createContext(s);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);