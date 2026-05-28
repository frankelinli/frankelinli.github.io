import React from 'react';
import Footer from '@theme-original/Footer';

export default function FooterWrapper(props) {
  return (
    <>
      <div style={{backgroundColor: '#fab1a0', textAlign: 'center', fontSize: '0.8rem'}}>
        [Footer 包装器占位符 - 位于页脚上方]
      </div>
      <Footer {...props} />
    </>
  );
}
