import React from "react";

export default function GradientCard() {
    return (
        <div style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "#fff",
            padding: "1.5rem",
            borderRadius: "16px",
            boxShadow: "0 4px 16px rgba(118,75,162,0.15)",
            marginBottom: "2rem"
        }}>
            <h3>渐变卡片</h3>
            <p>这是一个带有渐变背景和阴影效果的卡片组件。</p>
        </div>
    );
}
