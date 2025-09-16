
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useGlobalData from '@docusaurus/useGlobalData';

export default function BlogListPage() {
  const globalData = useGlobalData();
    const detection = useMemo(() => detectBlogPlugin(globalData), [globalData]);
    const blogPluginData = detection?.data;

    // 典型结构： blogPluginData.default.blogPosts
    const blogPosts = blogPluginData?.default?.blogPosts ?? [];


console.log('GLOBAL DATA KEYS:', Object.keys(globalData));
console.log('RAW GLOBAL DATA:', globalData);
  return (
    <main style={{padding: '2rem 1rem', maxWidth: 800, margin: '0 auto'}}>
      <h1>博客文章列表</h1>
      <ul>
        {blogPosts.map((post, idx) => {
          const {title, permalink, date} = post.metadata;
          return (
            <li key={idx}>
              <a href={permalink}>{title}</a> <small>{date}</small>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
  // 尝试自动探测 blog 插件 key（兼容不同版本或多实例）
  function detectBlogPlugin(globalData) {
    if (!globalData) return undefined;
    // 先尝试标准 key
    if (globalData['plugin-content-blog']) return {key: 'plugin-content-blog', data: globalData['plugin-content-blog']};
    // 可能存在诸如 'plugin-content-blog-default' 或包含 blog 的 key
    const dynamicKey = Object.keys(globalData).find(k => k.includes('blog'));
    if (dynamicKey) return {key: dynamicKey, data: globalData[dynamicKey]};
    return undefined;
  }
  import React, {useMemo} from 'react';
