"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4731],{6119:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var i=t(4848),o=t(8453);const r={},p=void 0,a={permalink:"/blog/\u7528python\u628a\u591a\u4e2apdf\u5408\u5e76\u4e3a\u4e00\u4e2aPDF\u5e76\u81ea\u52a8\u6dfb\u52a0\u4e66\u7b7e",editUrl:"https://github.com/frankelinli/frankelinli.github.io/edit/main/blog/\u7528python\u628a\u591a\u4e2apdf\u5408\u5e76\u4e3a\u4e00\u4e2aPDF\u5e76\u81ea\u52a8\u6dfb\u52a0\u4e66\u7b7e.md",source:"@site/blog/\u7528python\u628a\u591a\u4e2apdf\u5408\u5e76\u4e3a\u4e00\u4e2aPDF\u5e76\u81ea\u52a8\u6dfb\u52a0\u4e66\u7b7e.md",title:"\u7528python\u628a\u591a\u4e2apdf\u5408\u5e76\u4e3a\u4e00\u4e2aPDF\u5e76\u81ea\u52a8\u6dfb\u52a0\u4e66\u7b7e",description:"\u8fd9\u662f\u4ee5\u524d\u7684\u4e00\u4e2apython\u5c0f\u7a0b\u5e8f\u3002\u5047\u5982\u6587\u4ef6\u5939\u4e0b\u67095\u4e2aPDF\u6587\u4ef6\uff0c\u4ed6\u4eec\u7684\u540d\u5b57\u5206\u522b\u662f\uff1a",date:"2024-03-20T04:58:59.000Z",formattedDate:"March 20, 2024",tags:[],readingTime:2.17,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"\u5927\u5316\u7476\u65cf",permalink:"/blog/\u5927\u5316\u7476\u65cf"},nextItem:{title:"20240320",permalink:"/blog/2024/03/20/20240320"}},l={authorsImageUrls:[]},s=[];function d(e){const n={admonition:"admonition",code:"code",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u8fd9\u662f\u4ee5\u524d\u7684\u4e00\u4e2apython\u5c0f\u7a0b\u5e8f\u3002\u5047\u5982\u6587\u4ef6\u5939\u4e0b\u67095\u4e2aPDF\u6587\u4ef6\uff0c\u4ed6\u4eec\u7684\u540d\u5b57\u5206\u522b\u662f\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"hello"}),"\n",(0,i.jsx)(n.li,{children:"world"}),"\n",(0,i.jsx)(n.li,{children:"nihao"}),"\n",(0,i.jsx)(n.li,{children:"shijie"}),"\n",(0,i.jsx)(n.li,{children:"thankyou"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"\u628a\u4ed6\u4eec\u5408\u5e76\u5230\u6210\u4e00\u4e2ajieshao.pdf\u6587\u4ef6\uff0c\u5e76\u4e14\u7528\u4e0a\u97625\u4e2a\u6587\u4ef6\u7684\u540d\u5b57\u6765\u4f5c\u4e3ajieshao.pdf\u7684\u4e66\u7b7e\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u8fd9\u4e2a\u51fd\u6570\u4f1a\u904d\u5386\u8981\u6c42\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\uff0c\u5c06\u4ee5  .pdf \u7ed3\u5c3e\u7684\u6240\u6709pdf\u5408\u5e76\u6210\u4e00\u4e2a\u65b0\u7684pdf\uff0c\u5e76\u4fdd\u5b58\u5728 file_dir \u76ee\u5f55\u4e0b"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import os\nimport os.path\nfrom PyPDF2 import PdfFileReader, PdfFileWriter\nimport time\n\n##########################\u627e\u5230 filepath \u4e0b\u7684\u6240\u6709pdf\uff0c\u5c06\u5730\u5740\u8fd4\u56de########################\ndef getFileName(filepath):\n    list1=[]\n    for root, dirs, files in os.walk(filepath, topdown=False):\n        for name in files:\n            if name.endswith(".pdf"):\n                list1.append(os.path.join(root, name))\n    return list1\n\n##########################\u5408\u5e76\u540c\u4e00\u4e2a\u6587\u4ef6\u5939\u4e0b\u6240\u6709PDF\u6587\u4ef6########################\ndef MergePDF(filepath, outfile):\n    output = PdfFileWriter()\n    outputPages = 0\n    pdf_fileName = getFileName(filepath)\n    for each_file in pdf_fileName:\n        print("adding %s" % each_file)\n        # \u8bfb\u53d6\u6e90pdf\u6587\u4ef6\n        input = PdfFileReader(open(each_file, "rb"))\n\n        # \u5982\u679cpdf\u6587\u4ef6\u5df2\u7ecf\u52a0\u5bc6\uff0c\u5fc5\u987b\u9996\u5148\u89e3\u5bc6\u624d\u80fd\u4f7f\u7528pyPdf\n        if input.isEncrypted == True:\n            input.decrypt("map")\n\n        # \u83b7\u5f97\u6e90pdf\u6587\u4ef6\u4e2d\u9875\u9762\u603b\u6570\n        pageCount = input.getNumPages()\n        outputPages += pageCount\n        print("%s has %d pages" % (each_file, pageCount))\n\n        # \u5206\u522b\u5c06page\u6dfb\u52a0\u5230\u8f93\u51faoutput\u4e2d\n        for iPage in range(pageCount):\n            output.addPage(input.getPage(iPage))\n\n        # \u6dfb\u52a0\u4e66\u7b7e,\u4ee5pdf\u540d\u5b57\u547d\u540d\u4e66\u7b7e,\u5e76\u4e14\u6709\u4e66\u7b7e\u540d\u4e2d\u5e26\u9875\u7801\u8303\u56f4\n        x=outputPages-pageCount  #\u5f53\u524dPDF\u5230\u4e86\u7b2c\u51e0\u9875\n        output.addBookmark(\n            title=each_file.split("\\\\")[-1]+str(x+1)+\'-\'+str(x+pageCount),pagenum=x)\n\n    print("All Pages Number: " + str(outputPages))\n    # \u6700\u540e\u5199pdf\u6587\u4ef6\n    outputStream = open(os.path.join(filepath, outfile), "wb")\n    output.write(outputStream)\n    outputStream.close()\n    print("finished")\n\n\nif __name__ == \'__main__\':\n    time1 = time.time()\n    # \u8fd9\u91cc\u4fdd\u5b58pdf\u6587\u4ef6\u7684\u76ee\u5f55    \n    file_dir =r\'C:\\Users\\frankelin\\Documents\\\u6e56\u5357\u91b4\u9675\u65c5\u6e38\' \n    # \u8fd9\u91cc\u4fdd\u5b58\u751f\u6210\u6587\u4ef6\u7684\u540d\u5b57\n    out = u"jieshao.pdf" \n    #\u8fd9\u4e2a\u51fd\u6570\u4f1a\u904d\u5386\u8981\u6c42\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\uff0c\u5c06\u4ee5  .pdf \u7ed3\u5c3e\u7684\u6240\u6709pdf\u5408\u5e76\u6210\u4e00\u4e2a\u65b0\u7684pdf\uff0c\u5e76\u4fdd\u5b58\u5728 file_dir \u76ee\u5f55\u4e0b\n    MergePDF(file_dir, out)\n    time2 = time.time()\n    print(u\'\u603b\u5171\u8017\u65f6\uff1a %.4f s\' % (time2 - time1))\n\n'})})]})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>p,x:()=>a});var i=t(6540);const o={},r=i.createContext(o);function p(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:p(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);