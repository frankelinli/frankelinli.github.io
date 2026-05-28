import React from 'react';
import DocBreadcrumbs from '@theme-original/DocBreadcrumbs';

export default function DocBreadcrumbsWrapper(props) {
  return (
    <>
      <div style={{color: '#6c5ce7', fontSize: '0.7rem'}}>
        [DocBreadcrumbs 包装器占位符 - 面包屑上方，
        作用：对原始 DocBreadcrumbs 组件进行包装。
特点：在面包屑导航上方加了一个紫色小字提示条，内容为“[DocBreadcrumbs 包装器占位符 - 面包屑上方]”，下方渲染原组件。]
      </div>
      <DocBreadcrumbs {...props} />
    </>
  );
}
