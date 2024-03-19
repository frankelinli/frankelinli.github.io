// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '富兰克林李',
  tagline: '一生上进爱自由',
  favicon: '/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://frankelinli.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'frankelinli', // Usually your GitHub org/user name.
  projectName: 'frankelinli.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en', //及时不用多语言网站，设置这个zh，可以是docusaurus页面呈现中文UI；
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          path: "docs/doc1",
          routeBasePath: "doc1",
          breadcrumbs: false,
          showLastUpdateTime: true,
          editUrl: ({versionDocsDirPath, docPath}) =>
          `https://github.com/frankelinli/frankelinli.github.io/edit/main/${versionDocsDirPath}/${docPath}`,
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'frankelinle blog!',
          blogDescription: 'A Docusaurus powered blog!',
          postsPerPage: 3,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({locale, blogDirPath, blogPath, permalink}) =>
          `https://github.com/frankelinli/frankelinli.github.io/edit/main/${blogDirPath}/${blogPath}`,
        },
        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          
        },
        gtag: {
          trackingID: 'G-V43TVFFWC5',
          anonymizeIP: true,
        },
        
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-image-zoom', //图片放大缩小插件
    '@docusaurus/theme-live-codeblock', //实时呈现代码插件
    // //doc2文档
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'docusaurus-test',
    //     path: 'docs/docusaurus-test',
    //     routeBasePath: '',
    //     sidebarPath: require.resolve('./sidebars.js'),
    //     breadcrumbs: true,
    //   }, 
    // ],    

    //测试用，index.js首页没有添加卡片连接，需要手动在地址栏里输入
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docusaurus-test',
        path: 'docs/docusaurus-test',
        routeBasePath: 'docusaurus-test',
        sidebarPath: require.resolve('./sidebars.js'),
        breadcrumbs: false,
        editUrl: ({versionDocsDirPath, docPath}) =>
        `https://github.com/frankelinli/frankelinli.github.io/edit/main/${versionDocsDirPath}/${docPath}`,
      },   
    ],

    

  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/facicon.ico',

      //配置liveCodeBlock
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
      
      //图片放大缩小插件
      zoom: {
        // CSS selector to apply the plugin to, defaults to '.markdown img'
        selector: '.markdown img',
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          margin: 24,
          background: '#BADA55',
          scrollOffset: 0,
          container: '#zoom-container',
          template: '#zoom-template',
        },
      },

      //设置侧边栏可以隐藏
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      
      navbar: {
        title: 'Home',
        hideOnScroll: false, //自动隐藏导航栏
        logo: {
          alt: '首页',
          src: 'img/logo.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'zidongSidebar',
          //   position: 'left',
          //   label: 'apple',
          // },

          // {
          //   docsPluginId:'wrap',
          //   type: 'docSidebar',            
          //   sidebarId: 'zidongSidebar',
          //   label: 'orange',
          // },
          {to: '/docusaurus-test', label: 'Docusaurua实践', position: 'left'},

          // {
          //   docsPluginId:'test',
          //   type: 'docSidebar',            
          //   sidebarId: 'zidongSidebar',
          //   label: 'Docusaurua实践',
          //   // target: '_blank'
          // },

          {to: '/blog', label: 'Blog', position: 'left'},
          
          //顶部导航栏的下拉二级菜单
          {
            type: 'dropdown',
            label: '更多',
            position: 'left',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com',
              },          
            ],
          },

          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          }, 

        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                //to: '/docs/abc/简介',
                href: 'http://www.baidu.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} csrwiki.com   <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">粤ICP备2023098295号</a>`  ,
        
      },

      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },      

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },


    }),
};

export default config;
