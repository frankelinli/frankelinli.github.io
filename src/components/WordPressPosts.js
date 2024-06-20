import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AggregatedContent.css';

const AggregatedContent = () => {
const [siteContent, setSiteContent] = useState([]);
const [loading, setLoading] = useState(true);
const [viewedPosts, setViewedPosts] = useState(new Set());

const wordpressSites = [
    { name: 'Site 1', url: 'https://csrwiki.com' },
    { name: 'Site 2', url: 'https://www.wp-diary.com' },
    { name: 'Wrap', url: 'https://wrapcompliance.org' },
    { name: 'APSCA', url: 'https://www.theapsca.org/' },
    // 添加更多 WordPress 站点的 URL 和名称
];

useEffect(() => {
    // 从 Local Storage 中读取已查看的文章 ID
    const viewedPostsFromStorage = JSON.parse(localStorage.getItem('viewedPosts')) || [];
    setViewedPosts(new Set(viewedPostsFromStorage));

    const fetchContent = async () => {
    try {
        const requests = wordpressSites.flatMap(site => [
        axios.get(`${site.url}/wp-json/wp/v2/posts?per_page=10`),
        axios.get(`${site.url}/wp-json/wp/v2/pages?per_page=10`)
        ]);

        const responses = await Promise.all(requests);
        let allContent = wordpressSites.map((site, index) => {
        const sitePosts = responses[index * 2].data;
        const sitePages = responses[index * 2 + 1].data;
        return { siteName: site.name, posts: [...sitePosts, ...sitePages] };
        });

        // 按发布时间排序每个站点的内容
        allContent = allContent.map(site => ({
        ...site,
        posts: site.posts.sort((a, b) => new Date(b.date) - new Date(a.date))
        }));

        setSiteContent(allContent);
    } catch (error) {
        console.error('Error fetching content:', error);
    } finally {
        setLoading(false);
    }
    };

    fetchContent();
}, []);

const handlePostClick = (postId) => {
    const updatedViewedPosts = new Set(viewedPosts);
    updatedViewedPosts.add(postId);
    setViewedPosts(updatedViewedPosts);
    localStorage.setItem('viewedPosts', JSON.stringify(Array.from(updatedViewedPosts)));
};

if (loading) {
    return <p>Loading...</p>;
}

return (
    <div>
    <h1>Aggregated WordPress Content</h1>
    {siteContent.map((site, index) => (
        <div key={index} className="site-section">
        <h2>{site.siteName}</h2>
        <ul>
            {site.posts.map(post => (
            <li key={post.id} className="post-item">
                <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePostClick(post.id)}
                >
                {post.title.rendered}
                </a>
                {!viewedPosts.has(post.id) && <span className="new-badge">New</span>} - <em>{post.type}</em>
            </li>
            ))}
        </ul>
        </div>
    ))}
    </div>
);
};

export default AggregatedContent;