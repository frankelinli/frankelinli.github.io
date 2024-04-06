import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '21c'),
    exact: true
  },
  {
    path: '/blog/2024/03/18/git命令操作合集简明版',
    component: ComponentCreator('/blog/2024/03/18/git命令操作合集简明版', '356'),
    exact: true
  },
  {
    path: '/blog/2024/03/19/docusaurus和腾讯云服务器的朴素沟通',
    component: ComponentCreator('/blog/2024/03/19/docusaurus和腾讯云服务器的朴素沟通', 'e30'),
    exact: true
  },
  {
    path: '/blog/2024/03/20/用python把多个pdf合并为一个PDF并自动添加书签',
    component: ComponentCreator('/blog/2024/03/20/用python把多个pdf合并为一个PDF并自动添加书签', '523'),
    exact: true
  },
  {
    path: '/blog/2024/03/21/docusaurus目前不适合做博客',
    component: ComponentCreator('/blog/2024/03/21/docusaurus目前不适合做博客', 'e07'),
    exact: true
  },
  {
    path: '/blog/2024/03/22/20240322',
    component: ComponentCreator('/blog/2024/03/22/20240322', '5f8'),
    exact: true
  },
  {
    path: '/blog/2024/03/24/用python自动化生成Markdown文件的yml头部信息',
    component: ComponentCreator('/blog/2024/03/24/用python自动化生成Markdown文件的yml头部信息', '1e4'),
    exact: true
  },
  {
    path: '/blog/2024/03/24/bat命令行脚本自动执行git commit和git push',
    component: ComponentCreator('/blog/2024/03/24/bat命令行脚本自动执行git commit和git push', '81f'),
    exact: true
  },
  {
    path: '/blog/2024/03/25/3月25号',
    component: ComponentCreator('/blog/2024/03/25/3月25号', '51c'),
    exact: true
  },
  {
    path: '/blog/2024/03/26/3月26号',
    component: ComponentCreator('/blog/2024/03/26/3月26号', 'cd0'),
    exact: true
  },
  {
    path: '/blog/2024/03/26/建设网站的成本流水账',
    component: ComponentCreator('/blog/2024/03/26/建设网站的成本流水账', '16c'),
    exact: true
  },
  {
    path: '/blog/2024/03/27/写公众号的烦恼',
    component: ComponentCreator('/blog/2024/03/27/写公众号的烦恼', '698'),
    exact: true
  },
  {
    path: '/blog/2024/03/27/用python给Markdown文件批量添加头部yaml信息',
    component: ComponentCreator('/blog/2024/03/27/用python给Markdown文件批量添加头部yaml信息', 'dbe'),
    exact: true
  },
  {
    path: '/blog/2024/03/28/20240328',
    component: ComponentCreator('/blog/2024/03/28/20240328', '267'),
    exact: true
  },
  {
    path: '/blog/2024/03/29/3月29号',
    component: ComponentCreator('/blog/2024/03/29/3月29号', 'c1e'),
    exact: true
  },
  {
    path: '/blog/2024/03/30/WordPress主题代码改动记录',
    component: ComponentCreator('/blog/2024/03/30/WordPress主题代码改动记录', '1ba'),
    exact: true
  },
  {
    path: '/blog/2024/04/01/2024年4月1日',
    component: ComponentCreator('/blog/2024/04/01/2024年4月1日', '270'),
    exact: true
  },
  {
    path: '/blog/2024/04/04/WordPress笔记',
    component: ComponentCreator('/blog/2024/04/04/WordPress笔记', '9ce'),
    exact: true
  },
  {
    path: '/blog/2024/04/06/Haha',
    component: ComponentCreator('/blog/2024/04/06/Haha', 'fbc'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'e34'),
    exact: true
  },
  {
    path: '/blog/page/2',
    component: ComponentCreator('/blog/page/2', '0d4'),
    exact: true
  },
  {
    path: '/blog/page/3',
    component: ComponentCreator('/blog/page/3', 'd3f'),
    exact: true
  },
  {
    path: '/blog/page/4',
    component: ComponentCreator('/blog/page/4', '3c3'),
    exact: true
  },
  {
    path: '/blog/page/5',
    component: ComponentCreator('/blog/page/5', '669'),
    exact: true
  },
  {
    path: '/blog/page/6',
    component: ComponentCreator('/blog/page/6', 'd94'),
    exact: true
  },
  {
    path: '/friend-link',
    component: ComponentCreator('/friend-link', '5d8'),
    exact: true
  },
  {
    path: '/doc1',
    component: ComponentCreator('/doc1', '3f2'),
    routes: [
      {
        path: '/doc1',
        component: ComponentCreator('/doc1', 'fae'),
        routes: [
          {
            path: '/doc1',
            component: ComponentCreator('/doc1', 'ba0'),
            routes: [
              {
                path: '/doc1/2024年1月/哈哈',
                component: ComponentCreator('/doc1/2024年1月/哈哈', '8cd'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/doc1/2024年3月/3.18号',
                component: ComponentCreator('/doc1/2024年3月/3.18号', '458'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/doc1/2024年3月/3.20号',
                component: ComponentCreator('/doc1/2024年3月/3.20号', '234'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/doc1/2024年4月/独立的',
                component: ComponentCreator('/doc1/2024年4月/独立的', 'ac7'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/doc1/测试',
                component: ComponentCreator('/doc1/测试', 'b5b'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/doc1/明天',
                component: ComponentCreator('/doc1/明天', 'dfc'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/doc1/新建 Markdown File',
                component: ComponentCreator('/doc1/新建 Markdown File', '1e5'),
                exact: true,
                sidebar: "zidongSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docusaurus-test',
    component: ComponentCreator('/docusaurus-test', 'd99'),
    routes: [
      {
        path: '/docusaurus-test',
        component: ComponentCreator('/docusaurus-test', '94e'),
        routes: [
          {
            path: '/docusaurus-test',
            component: ComponentCreator('/docusaurus-test', 'd7f'),
            routes: [
              {
                path: '/docusaurus-test',
                component: ComponentCreator('/docusaurus-test', 'b6d'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/docusaurus-test/把docusaurus一键发布到腾讯云服务器上',
                component: ComponentCreator('/docusaurus-test/把docusaurus一键发布到腾讯云服务器上', '95c'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/docusaurus-test/标题下面插入广告',
                component: ComponentCreator('/docusaurus-test/标题下面插入广告', '4f2'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/docusaurus-test/错误调试/不知何种原因无法build',
                component: ComponentCreator('/docusaurus-test/错误调试/不知何种原因无法build', '6d5'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/docusaurus-test/代码实时展现',
                component: ComponentCreator('/docusaurus-test/代码实时展现', 'faa'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/docusaurus-test/内部import',
                component: ComponentCreator('/docusaurus-test/内部import', 'fe9'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/docusaurus-test/其他',
                component: ComponentCreator('/docusaurus-test/其他', '1ef'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/docusaurus-test/如何多开docs实例',
                component: ComponentCreator('/docusaurus-test/如何多开docs实例', '28b'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/docusaurus-test/设置doc的默认启动页面',
                component: ComponentCreator('/docusaurus-test/设置doc的默认启动页面', 'faf'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/docusaurus-test/使用github action自动执行发布网站',
                component: ComponentCreator('/docusaurus-test/使用github action自动执行发布网站', 'a3e'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/docusaurus-test/预览PDF',
                component: ComponentCreator('/docusaurus-test/预览PDF', '6e4'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/docusaurus-test/在MDX中定义和使用组件',
                component: ComponentCreator('/docusaurus-test/在MDX中定义和使用组件', 'e8a'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/docusaurus-test/assests 外部资源/视频',
                component: ComponentCreator('/docusaurus-test/assests 外部资源/视频', 'f81'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/docusaurus-test/assests 外部资源/html文件',
                component: ComponentCreator('/docusaurus-test/assests 外部资源/html文件', '149'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/docusaurus-test/assests 外部资源/pdf',
                component: ComponentCreator('/docusaurus-test/assests 外部资源/pdf', '7f9'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/docusaurus-test/docusaurus建站和维护的知识点',
                component: ComponentCreator('/docusaurus-test/docusaurus建站和维护的知识点', '24e'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/docusaurus-test/front matter',
                component: ComponentCreator('/docusaurus-test/front matter', 'c47'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/docusaurus-test/sidebar.js配置',
                component: ComponentCreator('/docusaurus-test/sidebar.js配置', '6e3'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/docusaurus-test/src下可以直接用MD来制作页面',
                component: ComponentCreator('/docusaurus-test/src下可以直接用MD来制作页面', '567'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/docusaurus-test/youtube',
                component: ComponentCreator('/docusaurus-test/youtube', '58c'),
                exact: true,
                sidebar: "zidongSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/VBA',
    component: ComponentCreator('/VBA', 'f75'),
    routes: [
      {
        path: '/VBA',
        component: ComponentCreator('/VBA', '29d'),
        routes: [
          {
            path: '/VBA',
            component: ComponentCreator('/VBA', '4f7'),
            routes: [
              {
                path: '/VBA',
                component: ComponentCreator('/VBA', '51b'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/VBA/告别VBA学习资料',
                component: ComponentCreator('/VBA/告别VBA学习资料', 'e06'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/VBA/优质免费学习资源分享',
                component: ComponentCreator('/VBA/优质免费学习资源分享', 'bb7'),
                exact: true,
                sidebar: "zidongSidebar"
              },
              {
                path: '/VBA/todo',
                component: ComponentCreator('/VBA/todo', 'e33'),
                exact: true,
                sidebar: "zidongSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '32c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
