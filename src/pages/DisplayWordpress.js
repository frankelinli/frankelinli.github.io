import React from 'react';
import Layout from '@theme/Layout';
import WordPressPosts from '../components/WordPressPosts';

/**
 * Home - 页面组件，作为站点首页的布局容器并渲染 WordPress 帖子列表。
 * 用途:
 * - 用作站点的首页或路由目标，提供页面标题与描述的 meta 标签支持；
 * - 在页面主体以内展示来自 WordPress 的文章列表。
 *
 * 注意事项:
 * - Layout 接收 title 为 "Home" 和 description 用于 <head> 中的 meta 描述；
 * - 主容器通过内联样式应用 2rem 的 padding。
 *
 * @component
 * @returns {JSX.Element} React 元素，表示组合后的首页内容。
 */
function Home() {
  return (
    <Layout title="Home" description="Description will go into a meta tag in <head />">
      <div style={{ padding: '2rem' }}>
        <WordPressPosts />
      </div>
    </Layout>
  );
}

export default Home;
