import React from 'react';
import Footer from '@theme-original/Footer';

export default function FooterWrapper(props) {
  return (
    <>
      <div
        style={{
          background: 'linear-gradient(90deg, #ff7675 0%, #ffeaa7 100%)',
          color: '#2d3436',
          textAlign: 'center',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          padding: '48px 0',
          letterSpacing: '2px',
          boxShadow: '0 4px 24px rgba(250, 177, 160, 0.3)',
          marginBottom: '32px',
        }}
      >
        🚀 限时优惠！立即注册，享受专属折扣和独家福利！<br />
        <a
          href="https://your-promo-link.com"
          style={{
            display: 'inline-block',
            marginTop: '24px',
            padding: '16px 48px',
            background: '#00b894',
            color: '#fff',
            borderRadius: '32px',
            fontSize: '1.5rem',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 2px 8px rgba(0, 184, 148, 0.2)',
            transition: 'background 0.2s',
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          立即抢购
        </a>
      </div>
      <Footer {...props} />
    </>
  );
  }
