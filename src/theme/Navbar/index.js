import React from 'react';
import Navbar from '@theme-original/Navbar';

export default function NavbarWrapper(props) {
  return (
    <>
      <div style={{backgroundColor: '#ffeaa7', textAlign: 'center', fontSize: '0.8rem'}}>
        [Navbar 包装器占位符]
      </div>
      <Navbar {...props} />
    </>
  );
}
