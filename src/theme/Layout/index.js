import React from 'react';
import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <div style={{
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: 'var(--ifm-footer-background-color)',
        color: 'var(--ifm-footer-color)',
        fontSize: '0.8rem',
        borderTop: '1px solid var(--ifm-color-emphasis-200)'
      }}>
        <p style={{margin: 0}}>这是通过 Docusaurus Wrapping 统一添加的底部文字内容。</p>
        <p>ddddddd</p>
      </div>
    </>
  );
}
