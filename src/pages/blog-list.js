
import React, {useEffect, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// 通过 Docusaurus Blog Plugin 自动生成的 JSON Feed (/blog/feed.json) 获取文章列表
// 需要在 docusaurus.config.js 中配置 blog plugin 的 feedOptions，使其包含 type: 'all' 或包含 'json'
// JSON Feed 规范: https://www.jsonfeed.org/version/1.1/

export default function BlogListPage() {
  const {siteConfig} = useDocusaurusContext();
  const baseUrl = siteConfig?.baseUrl || '/';
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [source, setSource] = useState('');

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        // 1) JSON Feed
        try {
          const jsonFeedUrl = withBase(baseUrl, 'blog/feed.json');
          const respJson = await fetch(jsonFeedUrl, {cache: 'no-store'});
          if (!respJson.ok) throw new Error('HTTP ' + respJson.status);
          const data = await respJson.json();
          if (!cancelled) {
            const items = Array.isArray(data.items) ? data.items : [];
            const mapped = items.map(item => ({
              id: item.id || item.url || item.guid || item.title,
              title: item.title || '(无标题)',
              permalink: item.url || '#',
              date: item.date_published || item.date_modified || '',
              description: item.summary || item.content_text || stripHtml(item.content_html) || ''
            }));
            const sorted = mapped.sort((a,b) => new Date(b.date) - new Date(a.date));
            setPosts(sorted);
            setSource('JSON Feed');
            return; // 成功则直接返回
          }
        } catch (e) {
          // 继续尝试 RSS
          console.warn('[blog-list] JSON Feed 获取失败，尝试 RSS...', e);
        }

        // 2) RSS (rss.xml 或 feed.xml 常见)
        try {
          const rssUrlCandidates = ['blog/rss.xml','blog/feed.xml','blog/index.xml'];
          let rssText = null;
          let usedUrl = null;
          for (const c of rssUrlCandidates) {
            const full = withBase(baseUrl, c);
            const r = await fetch(full, {cache: 'no-store'});
            if (r.ok) { rssText = await r.text(); usedUrl = full; break; }
          }
          if (rssText) {
            const parsed = parseRss(rssText);
            if (!cancelled && parsed.length) {
              setPosts(parsed.sort((a,b)=> new Date(b.date)-new Date(a.date)));
              setSource('RSS');
              return;
            }
          }
        } catch (e) {
          console.warn('[blog-list] RSS 获取失败，尝试 fallback...', e);
        }

        // 3) Fallback: static/data/blogPosts.json （如果存在）
        try {
          const fallbackUrl = withBase(baseUrl, 'data/blogPosts.json');
          const rf = await fetch(fallbackUrl, {cache: 'no-store'});
          if (rf.ok) {
            const arr = await rf.json();
            if (!cancelled && Array.isArray(arr)) {
              const sorted = [...arr].sort((a,b)=> new Date(b.date)-new Date(a.date));
              setPosts(sorted);
              setSource('Fallback JSON');
              return;
            }
          }
        } catch (e) {
          console.warn('[blog-list] fallback JSON 失败', e);
        }

        if (!cancelled) {
          throw new Error('无法获取任何数据源 (JSON Feed / RSS / Fallback)');
        }
      } catch (e) {
        if (!cancelled) setError(e.message || String(e));
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  return (
    <main style={{padding: '2rem 1rem', maxWidth: 820, margin: '0 auto'}}>
  <h1 style={{marginBottom: '0.5rem'}}>博客文章列表</h1>
  {source && <div style={{fontSize:'0.7rem',color:'#888',marginBottom:'1rem'}}>数据来源：{source}</div>}
      {loading && <p>加载中...</p>}
      {error && <p style={{color: 'red'}}>加载失败：{error}</p>}
      {!loading && !error && posts.length === 0 && <p>暂无文章。</p>}
      {!loading && !error && posts.length > 0 && (
        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
          {posts.map(p => (
            <li key={p.id} style={{marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #eee'}}>
              <a href={p.permalink} style={{fontSize: '1.05rem', fontWeight: 600}}>{p.title}</a>
              <div style={{fontSize: '0.8rem', color: '#666', marginTop: '0.25rem'}}>{new Date(p.date).toLocaleDateString()}</div>
              {p.description && <p style={{margin: '0.5rem 0 0', fontSize: '0.85rem', color: '#444'}}>{p.description}</p>}
            </li>
          ))}
        </ul>
      )}
      <section style={{marginTop: '2rem'}}>
        <h2 style={{fontSize: '1.1rem'}}>说明</h2>
        <ul style={{fontSize: '0.8rem', lineHeight: 1.5}}>
          <li>多级获取顺序：JSON Feed → RSS → Fallback JSON</li>
          <li>构建产物中才会出现 feed.json（源代码目录不生成）</li>
          <li>可在 <code>docusaurus.config.js</code> 中调整 <code>feedOptions</code> 影响 feed 内容</li>
          <li>若需限制条数：在 <code>setPosts</code> 前使用 <code>slice(0, N)</code></li>
          <li>可拓展：增加本地缓存、搜索或分页</li>
        </ul>
      </section>
    </main>
  );
}

// 简单去除 HTML 标签以提取纯文本
function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function withBase(base, path) {
  if (!base.endsWith('/')) base += '/';
  return base + path.replace(/^\//,'');
}

// 解析简单 RSS (非严格)
function parseRss(xmlText) {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlText, 'application/xml');
    const items = Array.from(doc.querySelectorAll('item'));
    return items.map(it => ({
      id: text(it,'guid') || text(it,'link') || text(it,'title'),
      title: text(it,'title') || '(无标题)',
      permalink: text(it,'link') || '#',
      date: text(it,'pubDate') || text(it,'dc\:date') || '',
      description: (text(it,'description') || '').trim()
    }));
  } catch (e) {
    console.warn('RSS parse error', e);
    return [];
  }
}

function text(parent, selector) {
  const el = parent.querySelector(selector);
  return el ? el.textContent : '';
}
