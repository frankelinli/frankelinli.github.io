import React from 'react';
import DocPaginator from '@theme-original/DocPaginator';


export default function DocPaginatorWrapper(props) {
  return (
    <>
      <div style={{
        marginTop: '2rem',
        marginBottom: '1rem',
        padding: '1.5rem',
        border: '1px dashed var(--ifm-color-primary)',
        borderRadius: '8px',
        backgroundColor: 'var(--ifm-color-primary-lighter)',
        color: 'var(--ifm-color-primary-darker)',
      }}>
        <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>温馨提示：</p>
        <p style={{margin: 0}}>这是显示在“上一篇/下一篇”分页按钮上方的自定义文字。作用：对原始 DocPaginator 组件进行包装。
特点：在分页按钮上方加了一个带虚线边框和背景色的提示块，内容为“温馨提示：这是显示在‘上一篇/下一篇’分页按钮上方的自定义文字。”，下方渲染原组件。</p>
      </div>
      <DocPaginator {...props} />
    </>
  );
}
