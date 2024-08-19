import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    
  {
    title: '',
    imgSrc: require('@site/static/img/VBA-logo.webp').default,
    description: (
      <>
        VBA是我接触的第一个编程语言，惊为天人。学会了自动化操作excel、word。从此步入编程的精彩世界
      </>
    ),
    to:'VBA'  //指向docs里的VBA文件夹
  },

  {
    title: 'Docusaurus实践',
    // imgSrc: require('@site/static/img/logo-cwap.png').default,
    imgSrc: 'https://docusaurus.io/img/docusaurus_keytar.svg',
    description: (
      <>
        Docusaurus建站和使用的经验总结
      </>
    ),
    to:'docusaurus-test'
  },

  {
    title: '博客',
    imgSrc: require('@site/static/img/blog.png').default,
    description: (
      <>
        随写，博客。雁过留痕，好过一毛不留。<br/>
        折腾WordPress，html， CSS，Docusaurus等等，结果十几年了，一个博客还有没有留下，那你到低在干啥?。<br/>
      </>
    ),
    to:'/blog'
  },

  {
    title: 'WordPress Astra主题',
    imgSrc: require('@site/static/img/astra-logo.jpg').default,
    description: (
      <>
        WordPress Astra主题使用备忘录<br/>
      </>
    ),
    to:'/wordpress-astra-theme'
  },
  


];

function Feature({imgSrc, title, description, to}) {
  return (
    <div className={clsx('col col--4', styles.featureLink)}>
      <a href={to}>
        <div className="text--center">
          <img className={styles.featureImg} src={imgSrc} alt={title} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p className='text--left'>{description}</p>
        </div>
      </a>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>      
    </section>
    
  );
}
