import React, {type ReactNode} from 'react';
import Content from '@theme-original/BlogPostItem/Content';
import type ContentType from '@theme/BlogPostItem/Content';
import type {WrapperProps} from '@docusaurus/types';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

type Props = WrapperProps<typeof ContentType>;

// 博客列表页每篇文章摘要的最大字数
const SUMMARY_LENGTH = 50;

export default function ContentWrapper(props: Props): ReactNode {
  const {isBlogPostPage, metadata} = useBlogPost();

  // 文章详情页：保留原始完整内容渲染
  if (isBlogPostPage) {
    return <Content {...props} />;
  }

  // 博客列表页：只显示前 50 字纯文本摘要
  const description = metadata.description ?? '';
  const summary = description.slice(0, SUMMARY_LENGTH);
  const isTruncated = description.length > SUMMARY_LENGTH;

  return (
    <div className="markdown">
      <p>
        {summary}
        {isTruncated ? '...' : ''}
      </p>
    </div>
  );
}
