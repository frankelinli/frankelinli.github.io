import React, {useEffect, useState} from 'react';

const SITE_URL = 'https://haoyelaiga.com';
const API_USERNAME = 'haoye';
const API_PASSWORD = 'ovEd oyLZ Bghq 0mAo AY0R FmE7';

export default function WordPressLatestPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const credentials = btoa([API_USERNAME, API_PASSWORD].join(':'));

    async function loadPosts() {
      try {
        setLoading(true);
        setError('');

        const requestUrl =
          SITE_URL +
          '/wp-json/wp/v2/posts?per_page=5&status=publish&orderby=date&order=desc&_fields=id,link,title,excerpt,date';

        const response = await fetch(requestUrl, {
          headers: {
            Authorization: 'Basic ' + credentials,
          },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('请求失败：' + response.status + ' ' + response.statusText);
        }

        const data = await response.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || '加载 WordPress 文章失败');
        }
      } finally {
        setLoading(false);
      }
    }

    loadPosts();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <p>正在加载最近 5 篇文章...</p>;
  }

  if (error) {
    return (
      <div
        style={{
          border: '1px solid #ef4444',
          borderRadius: '12px',
          background: '#fef2f2',
          color: '#991b1b',
          padding: '16px',
        }}
      >
        {error}
      </div>
    );
  }

  return (
    <div style={{display: 'grid', gap: '16px'}}>
      {posts.map((post) => (
        <article
          key={post.id}
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            padding: '20px',
            background: '#ffffff',
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
          }}
        >
          <h3 style={{marginTop: 0, marginBottom: '12px'}}>
            <a href={post.link} target="_blank" rel="noreferrer">
              {post.title && post.title.rendered ? post.title.rendered : '未命名文章'}
            </a>
          </h3>
          <div
            style={{lineHeight: 1.8, color: '#4b5563'}}
            dangerouslySetInnerHTML={{
              __html:
                post.excerpt && post.excerpt.rendered
                  ? post.excerpt.rendered
                  : '<p>暂无摘要。</p>',
            }}
          />
        </article>
      ))}
    </div>
  );
}
