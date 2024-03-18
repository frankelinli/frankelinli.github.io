import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    
  {
    title: '梅',
    imgSrc: 'https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/23422_138de.jpg',
    description: (
      <>
        文档预留
      </>
    ),
    to:'doc1'
  },

  {
    title: '兰',
    // imgSrc: require('@site/static/img/logo-wrap.png').default,
    imgSrc: 'https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/23422_138de.jpg',
    description: (
      <>
        pending
      </>
    ),
    to:'doc2'
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
