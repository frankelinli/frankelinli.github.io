import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import useGlobalData from "@docusaurus/useGlobalData";

export default function RecentPosts({ count = 5 }) {
  const globalData = useGlobalData();
  const blogPluginData =
    globalData["docusaurus-plugin-content-blog"]?.default;

  if (!blogPluginData) {
    return <p>No blog data found.</p>;
  }

  // 所有文章 metadata，按日期倒序
  const posts = blogPluginData.blogPosts
    .map((post) => post.metadata)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);

  return (
    <div className="recent-posts">
      <h3>📌 最近文章</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.permalink}>
            <Link to={post.permalink}>{post.title}</Link>
            <small style={{ marginLeft: "0.5rem", color: "#888" }}>
              {new Date(post.date).toLocaleDateString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}
