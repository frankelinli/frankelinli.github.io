import React from "react";

export default function WelcomeBanner() {
    return (
        <div style={{
            background: "linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)",
            padding: "2rem",
            borderRadius: "12px",
            textAlign: "center",
            marginBottom: "2rem"
        }}>
            <h2 style={{ margin: 0, color: "#d35400" }}>欢迎来到我的花式页面！</h2>
            <p style={{ color: "#555" }}>这里是一个炫酷的欢迎横幅区块。</p>
        </div>
    );
}
