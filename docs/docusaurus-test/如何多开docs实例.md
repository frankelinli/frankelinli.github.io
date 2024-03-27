---
date: 2024-03-27 16:01
---


```js
plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: 'dev',
        path: "./dev", // Path to data on filesystem, relative to site dir.
        routeBasePath: "dev", // URL Route.
        include: ["**/*.md"],
        sidebarPath: require.resolve('./sidebarsDev.js'),
      },
    ],
    
    [
      "@docusaurus/plugin-content-docs",
      {
        id: 'support',
        path: "./support", // Path to data on filesystem, relative to site dir.
        routeBasePath: "support", // URL Route.
        include: ["**/*.md"],
        sidebarPath: require.resolve('./sidebarsSupport.js'),
      },
    ],
    
    [
      "@docusaurus/plugin-content-docs",
      {
        id: 'marketing',
        path: "./marketing", // Path to data on filesystem, relative to site dir.
        routeBasePath: "marketing", // URL Route.
        include: ["**/*.md"],
        sidebarPath: require.resolve('./sidebarsMarketing.js'),
      },
    ],
  ],
```

**[参考文章：来自github](https://github.com/facebook/docusaurus/issues/3299#:~:text=able%20to%20get%20three%20different%20%22docs%22%20sections%20added%20while%20running%20version%202.0.0%2Dalpha%2D64)**