/*! For license information please see ad8b20de.b3016e59.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8861],{49632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"youtube","title":"youtube","description":"<CodeBlock","source":"@site/docs/docusaurus-test/youtube.md","sourceDirName":".","slug":"/youtube","permalink":"/docusaurus-test/youtube","draft":false,"unlisted":false,"editUrl":"https://github.com/frankelinli/frankelinli.github.io/edit/main/docs/docusaurus-test/youtube.md","tags":[],"version":"current","lastUpdatedAt":1711541851000,"frontMatter":{"date":"2024-03-27 16:01"},"sidebar":"zidongSidebar","previous":{"title":"src\u4e0b\u53ef\u4ee5\u76f4\u63a5\u7528MD\u6765\u5236\u4f5c\u9875\u9762","permalink":"/docusaurus-test/src\u4e0b\u53ef\u4ee5\u76f4\u63a5\u7528MD\u6765\u5236\u4f5c\u9875\u9762"},"next":{"title":"\u4ee3\u7801\u5b9e\u65f6\u5c55\u73b0","permalink":"/docusaurus-test/\u4ee3\u7801\u5b9e\u65f6\u5c55\u73b0"}}');var c=n(74848),o=n(28453),r=n(13852),l=n(66186);const s={date:"2024-03-27 16:01"},i=void 0,u={},p=[];function d(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.A,{id:"vSvjj_XJAkk",playlist:!1}),"\n","\n",(0,c.jsx)(l.A,{language:"jsx",title:"/src/components/HelloCodeTitle.js",showLineNumbers:!0,children:"function HelloCodeTitle(props) {\nreturn <h1>Hello, {props.name}</h1>;\n}"})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d()}},13852:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(96540),c=function(){return c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},c.apply(this,arguments)};var o=a.forwardRef((function(e,t){var n=a.useState(!1),o=n[0],r=n[1],l=a.useState(!1),s=l[0],i=l[1],u=encodeURIComponent(e.id),p="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,d=e.title,m=e.poster||"hqdefault",f="&".concat(e.params)||0,h=e.muted?"&mute=1":"",b=e.announce||"Watch",y=e.webp?"webp":"jpg",g=e.webp?"vi_webp":"vi",w=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(g,"/").concat(p,"/").concat(m,".").concat(y):"https://i.ytimg.com/".concat(g,"/").concat(u,"/").concat(m,".").concat(y)),k=e.noCookie;k=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var v=e.playlist?"".concat(k,"/embed/videoseries?autoplay=1").concat(h,"&list=").concat(u).concat(f):"".concat(k,"/embed/").concat(u,"?autoplay=1&state=1").concat(h).concat(f),C=e.activatedClass||"lyt-activated",E=e.adNetwork||!1,j=e.aspectHeight||9,x=e.aspectWidth||16,N=e.iframeClass||"",A=e.playerClass||"lty-playbtn",F=e.wrapperClass||"yt-lite",I=e.onIframeAdded||function(){},S=e.rel?"prefetch":"preload",O=e.containerElement||"article";return a.useEffect((function(){s&&I()}),[s]),a.createElement(a.Fragment,null,a.createElement("link",{rel:S,href:w,as:"image"}),a.createElement(a.Fragment,null,o&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:k}),a.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),E&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),a.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),a.createElement(O,{onPointerOver:function(){o||r(!0)},onClick:function(){s||i(!0)},className:"".concat(F," ").concat(s?C:""),"data-title":d,style:c({backgroundImage:"url(".concat(w,")")},{"--aspect-ratio":"".concat(j/x*100,"%")})},a.createElement("button",{type:"button",className:A,"aria-label":"".concat(b," ").concat(d)}),s&&a.createElement("iframe",{ref:t,className:N,title:d,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:v})))}))}}]);