import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <div style={{borderLeft: '4px solid #00b894', paddingLeft: '10px', marginBottom: '10px', fontSize: '0.8rem'}}>
        [BlogPostItem 包装器占位符 - 博客文章顶部，
        作用：对原始 BlogPostItem 组件进行包装。
特点：在博客文章顶部加了一个带绿色左边框的提示条，内容为“[BlogPostItem 包装器占位符 - 博客文章顶部]”，下方渲染原组件。]
      </div>
      <BlogPostItem {...props} />
    </>
  );
}
