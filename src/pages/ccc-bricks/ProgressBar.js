import React from "react";

export default function ProgressBar() {
    return (
        <div style={{ width: "100%", marginBottom: "2rem" }}>
            <div style={{
                background: "#eee",
                borderRadius: "8px",
                overflow: "hidden"
            }}>
                <div style={{
                    width: "70%",
                    height: "18px",
                    background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)"
                }} />
            </div>
            <span style={{ fontSize: "0.95rem", color: "#888" }}>进度：70%</span>
        </div>
    );
}
