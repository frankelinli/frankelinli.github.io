import React from "react";

export default function FunFactCard() {
    return (
        <div style={{
            background: "#e0c3fc",
            backgroundImage: "linear-gradient(315deg, #e0c3fc 0%, #8ec5fc 74%)",
            padding: "1.5rem",
            borderRadius: "14px",
            color: "#333",
            marginBottom: "2rem",
            boxShadow: "0 2px 8px rgba(160,120,255,0.12)"
        }}>
            <h4>有趣小知识</h4>
            <p>React 组件其实就是函数！</p>
        </div>
    );
}
