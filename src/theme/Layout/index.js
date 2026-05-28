import React from 'react';
import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <section
        style={{
          textAlign: 'center',
          padding: '2rem 1rem',
          background: 'linear-gradient(90deg, #ff9800 0%, #ffc107 100%)',
          color: '#222',
          fontSize: '1.1rem',
          borderTop: '4px solid #ff5722',
          fontWeight: 'bold',
          letterSpacing: '1px',
          boxShadow: '0 -2px 16px 0 rgba(0,0,0,0.08)'
        }}
      >
        <p style={{ margin: 0, fontSize: '1.2em' }}>这是通过 Docusaurus Wrapping 统一添加的底部文字内容。</p>
        <p style={{ margin: '0.5em 0 0 0', fontSize: '1em', opacity: 0.85 }}>ddddddd</p>
      </section>
    </>
  );
}
