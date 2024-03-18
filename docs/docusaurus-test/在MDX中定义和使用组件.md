```jsx
export const ImageWithText = ({ imageSrc, altText, text }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={imageSrc} alt={altText} style={{ width: '200px', marginRight: '20px' }} />
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

<ImageWithText
  imageSrc="https://images.prismic.io/wdr-test-icti/ef1a9cdde08d7249de7b4273bfc90d10c4e7d018_status_certified.png?auto=compress,format"
  altText="图片的替代文本"
  text="要获认证 (Certified)   
  此证书有效期为12个月完全合规的工厂"
/>

<ImageWithText
  imageSrc="https://images.prismic.io/wdr-test-icti/ef1a9cdde08d7249de7b4273bfc90d10c4e7d018_status_certified.png?auto=compress,format"
  altText="图片的替代文本"
  text='dfadsfd'
/>
```












export const ImageWithText = ({ imageSrc, altText, text }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={imageSrc} alt={altText} style={{ width: '200px', marginRight: '20px' }} />
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

<ImageWithText
  imageSrc="https://images.prismic.io/wdr-test-icti/ef1a9cdde08d7249de7b4273bfc90d10c4e7d018_status_certified.png?auto=compress,format"
  altText="图片的替代文本"
  text="要获认证 (Certified)此证书有效期为12个月完全合规的工厂"
/>

<ImageWithText
  imageSrc="https://images.prismic.io/wdr-test-icti/ef1a9cdde08d7249de7b4273bfc90d10c4e7d018_status_certified.png?auto=compress,format"
  altText="图片的替代文本"
  text='dfadsfd'
/>