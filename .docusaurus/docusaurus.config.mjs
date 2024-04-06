/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Frankelin Docs & Blog",
  "tagline": "道阻且长，行则将至",
  "favicon": "/img/favicon.ico",
  "url": "https://frankelinli.github.io",
  "baseUrl": "/",
  "organizationName": "frankelinli",
  "projectName": "frankelinli.github.io",
  "deploymentBranch": "gh-pages",
  "trailingSlash": false,
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "i18n": {
    "defaultLocale": "zh",
    "locales": [
      "zh"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "scripts": [
    {
      "src": "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4116228001844410",
      "async": true,
      "crossorigin": "anonymous"
    }
  ],
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "C:\\Users\\wingxu\\Desktop\\frankelinli.github.io\\sidebars.js",
          "path": "docs/doc1",
          "routeBasePath": "doc1",
          "breadcrumbs": false,
          "showLastUpdateTime": true
        },
        "blog": {
          "showReadingTime": true,
          "routeBasePath": "/blog",
          "blogTitle": "frankelinle blog!",
          "blogDescription": "个人博客和总结文档库!",
          "postsPerPage": 3,
          "blogSidebarCount": 10,
          "showLastUpdateTime": true
        },
        "theme": {
          "customCss": "C:\\Users\\wingxu\\Desktop\\frankelinli.github.io\\src\\css\\custom.css"
        },
        "gtag": {
          "trackingID": "G-V43TVFFWC5",
          "anonymizeIP": true
        }
      }
    ]
  ],
  "plugins": [
    "docusaurus-plugin-image-zoom",
    "@docusaurus/theme-live-codeblock",
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "VBA",
        "path": "docs/VBA",
        "routeBasePath": "VBA",
        "sidebarPath": "C:\\Users\\wingxu\\Desktop\\frankelinli.github.io\\sidebars.js",
        "breadcrumbs": true
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "docusaurus-test",
        "path": "docs/docusaurus-test",
        "routeBasePath": "docusaurus-test",
        "sidebarPath": "C:\\Users\\wingxu\\Desktop\\frankelinli.github.io\\sidebars.js",
        "breadcrumbs": false,
        "showLastUpdateTime": true
      }
    ]
  ],
  "themeConfig": {
    "image": "img/facicon.ico",
    "liveCodeBlock": {
      "playgroundPosition": "bottom"
    },
    "zoom": {
      "selector": ".markdown img",
      "options": {
        "margin": 24,
        "background": "#BADA55",
        "scrollOffset": 0,
        "container": "#zoom-container",
        "template": "#zoom-template"
      }
    },
    "docs": {
      "sidebar": {
        "hideable": true,
        "autoCollapseCategories": true
      },
      "versionPersistence": "localStorage"
    },
    "navbar": {
      "title": "Home",
      "hideOnScroll": false,
      "logo": {
        "alt": "首页",
        "src": "img/logo.png"
      },
      "items": [
        {
          "to": "/docusaurus-test",
          "label": "Docusaurua实践",
          "position": "left"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "to": "/friend-link",
          "label": "友情链接",
          "position": "left"
        },
        {
          "type": "dropdown",
          "label": "更多",
          "position": "left",
          "items": [
            {
              "label": "Facebook",
              "href": "https://www.facebook.com"
            }
          ]
        },
        {
          "href": "https://github.com/facebook/docusaurus",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Tutorial",
              "href": "http://www.baidu.com"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2024"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [
        "batch"
      ],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 5
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "metadata": []
  },
  "baseUrlIssueBanner": true,
  "onBrokenAnchors": "warn",
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "themes": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "format": "mdx",
    "mermaid": false,
    "mdx1Compat": {
      "comments": true,
      "admonitions": true,
      "headingIds": true
    }
  }
};
