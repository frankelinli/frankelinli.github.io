import React from "react";

export default function ButtonGroup() {
    return (
        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
            <button style={{
                padding: "0.6rem 1.4rem",
                background: "#ff6a00",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer"
            }}>点赞</button>
            <button style={{
                padding: "0.6rem 1.4rem",
                background: "#43cea2",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer"
            }}>收藏</button>
            <button style={{
                padding: "0.6rem 1.4rem",
                background: "#185a9d",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer"
            }}>分享</button>
        </div>
    );
}
