import React from "react";

export default function Timeline() {
    return (
        <div style={{
            borderLeft: "4px solid #6dd5ed",
            paddingLeft: "1.5rem",
            marginBottom: "2rem"
        }}>
            <div style={{ marginBottom: "1rem" }}>
                <span style={{ color: "#6dd5ed", fontWeight: "bold" }}>2022</span> - 启动个人博客
            </div>
            <div style={{ marginBottom: "1rem" }}>
                <span style={{ color: "#6dd5ed", fontWeight: "bold" }}>2023</span> - 学习React与Docusaurus
            </div>
            <div>
                <span style={{ color: "#6dd5ed", fontWeight: "bold" }}>2024</span> - 持续创作与分享
            </div>
        </div>
    );
}
