import React from "react";

export default function InfoList() {
    return (
        <ul style={{
            background: "#f6f8fa",
            borderRadius: "10px",
            padding: "1.2rem 2rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            marginBottom: "2rem"
        }}>
            <li>🌟 支持自动加载组件</li>
            <li>🎨 样式多样，易于扩展</li>
            <li>⚡ 性能优秀，体验流畅</li>
        </ul>
    );
}
