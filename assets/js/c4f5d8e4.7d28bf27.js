"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2634],{7373:(e,s,t)=>{t.r(s),t.d(s,{default:()=>x});var r=t(6540),a=t(4164),n=(t(8774),t(4586)),i=t(1217);const c={features:"features_t9lD",featureLink:"featureLink_pdvy",featureImg:"featureImg_d9Ri"};var l=t(4848);const o=[{title:"",imgSrc:t(1600).A,description:(0,l.jsx)(l.Fragment,{children:"VBA\u662f\u6211\u63a5\u89e6\u7684\u7b2c\u4e00\u4e2a\u7f16\u7a0b\u8bed\u8a00\uff0c\u60ca\u4e3a\u5929\u4eba\u3002\u5b66\u4f1a\u4e86\u81ea\u52a8\u5316\u64cd\u4f5cexcel\u3001word\u3002\u4ece\u6b64\u6b65\u5165\u7f16\u7a0b\u7684\u7cbe\u5f69\u4e16\u754c"}),to:"VBA"},{title:"Docusaurus\u5b9e\u8df5",imgSrc:"https://docusaurus.io/img/docusaurus_keytar.svg",description:(0,l.jsx)(l.Fragment,{children:"Docusaurus\u5efa\u7ad9\u548c\u4f7f\u7528\u7684\u7ecf\u9a8c\u603b\u7ed3"}),to:"docusaurus-test"},{title:"\u535a\u5ba2",imgSrc:t(1976).A,description:(0,l.jsxs)(l.Fragment,{children:["\u968f\u5199\uff0c\u535a\u5ba2\u3002\u96c1\u8fc7\u7559\u75d5\uff0c\u597d\u8fc7\u4e00\u6bdb\u4e0d\u7559\u3002",(0,l.jsx)("br",{}),"\u6298\u817eWordPress\uff0chtml\uff0c CSS\uff0cDocusaurus\u7b49\u7b49\uff0c\u7ed3\u679c\u5341\u51e0\u5e74\u4e86\uff0c\u4e00\u4e2a\u535a\u5ba2\u8fd8\u6709\u6ca1\u6709\u7559\u4e0b\uff0c\u90a3\u4f60\u5230\u4f4e\u5728\u5e72\u5565?\u3002",(0,l.jsx)("br",{})]}),to:"/blog"}];function d(e){let{imgSrc:s,title:t,description:r,to:n}=e;return(0,l.jsx)("div",{className:(0,a.A)("col col--4",c.featureLink),children:(0,l.jsxs)("a",{href:n,children:[(0,l.jsx)("div",{className:"text--center",children:(0,l.jsx)("img",{className:c.featureImg,src:s,alt:t})}),(0,l.jsxs)("div",{className:"text--center padding-horiz--md",children:[(0,l.jsx)("h3",{children:t}),(0,l.jsx)("p",{className:"text--left",children:r})]})]})})}function m(){return(0,l.jsx)("section",{className:c.features,children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:o.map(((e,s)=>(0,l.jsx)(d,{...e},s)))})})})}var h=t(4335);const u=()=>{const[e,s]=(0,r.useState)([]),[t,a]=(0,r.useState)(!0),[n,i]=(0,r.useState)(new Set),c=[{name:"Site 1",url:"https://csrwiki.com"},{name:"Site 2",url:"https://www.wp-diary.com"},{name:"Wrap",url:"https://wrapcompliance.org"},{name:"APSCA",url:"https://www.theapsca.org/"}];(0,r.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("viewedPosts"))||[];i(new Set(e));(async()=>{try{const e=c.flatMap((e=>[h.A.get(`${e.url}/wp-json/wp/v2/posts?per_page=10`),h.A.get(`${e.url}/wp-json/wp/v2/pages?per_page=10`)])),t=await Promise.all(e);let r=c.map(((e,s)=>{const r=t[2*s].data,a=t[2*s+1].data;return{siteName:e.name,posts:[...r,...a]}}));r=r.map((e=>({...e,posts:e.posts.sort(((e,s)=>new Date(s.date)-new Date(e.date)))}))),s(r)}catch(e){console.error("Error fetching content:",e)}finally{a(!1)}})()}),[]);return t?(0,l.jsx)("p",{children:"Loading..."}):(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Aggregated WordPress Content"}),e.map(((e,s)=>(0,l.jsxs)("div",{className:"site-section",children:[(0,l.jsx)("h2",{children:e.siteName}),(0,l.jsx)("ul",{children:e.posts.map((e=>(0,l.jsxs)("li",{className:"post-item",children:[(0,l.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",onClick:()=>(e=>{const s=new Set(n);s.add(e),i(s),localStorage.setItem("viewedPosts",JSON.stringify(Array.from(s)))})(e.id),children:e.title.rendered}),!n.has(e.id)&&(0,l.jsx)("span",{className:"new-badge",children:"New"})," - ",(0,l.jsx)("em",{children:e.type})]},e.id)))})]},s)))]})},p={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};function g(){const{siteConfig:e}=(0,n.A)();return(0,l.jsx)("header",{className:(0,a.A)("hero hero--primary",p.heroBanner),children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("h1",{className:"hero__title",children:e.title}),(0,l.jsx)("p",{className:"hero__subtitle",children:e.tagline})]})})}function x(){const{siteConfig:e}=(0,n.A)();return(0,l.jsxs)(i.A,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />",children:[(0,l.jsx)(g,{}),(0,l.jsxs)("main",{children:[(0,l.jsx)(m,{}),(0,l.jsx)(u,{})]})]})}},1600:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/VBA-logo-ba392de91671b044f8b17d7697aefe5b.webp"},1976:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/blog-1756a0943c6421b84c68e750f3e850aa.png"}}]);