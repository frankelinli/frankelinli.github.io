import React from "react";

export default function QuoteBlock() {
    return (
        <blockquote style={{
            background: "#fffbe6",
            borderLeft: "6px solid #f7b731",
            padding: "1.2rem 2rem",
            fontStyle: "italic",
            color: "#7f8c8d",
            borderRadius: "8px",
            marginBottom: "2rem"
        }}>
            “代码如诗，页面如画。”
        </blockquote>
    );
}
