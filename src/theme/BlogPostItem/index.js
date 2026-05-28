import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <div style={{borderLeft: '4px solid #00b894', paddingLeft: '10px', marginBottom: '10px', fontSize: '0.8rem'}}>
        [BlogPostItem 包装器占位符 - 博客文章顶部]
      </div>
      <BlogPostItem {...props} />
    </>
  );
}
