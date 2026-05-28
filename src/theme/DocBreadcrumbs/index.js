import React from 'react';
import DocBreadcrumbs from '@theme-original/DocBreadcrumbs';

export default function DocBreadcrumbsWrapper(props) {
  return (
    <>
      <div style={{color: '#6c5ce7', fontSize: '0.7rem'}}>
        [DocBreadcrumbs 包装器占位符 - 面包屑上方]
      </div>
      <DocBreadcrumbs {...props} />
    </>
  );
}
