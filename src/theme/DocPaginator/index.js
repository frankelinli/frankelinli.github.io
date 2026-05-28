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
        <p style={{margin: 0}}>这是显示在“上一篇/下一篇”分页按钮上方的自定义文字。</p>
      </div>
      <DocPaginator {...props} />
    </>
  );
}
