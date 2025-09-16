import React from "react";

export default function ProfileCard() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            background: "#f7cac9",
            borderRadius: "12px",
            padding: "1.2rem 2rem",
            marginBottom: "2rem",
            boxShadow: "0 2px 8px rgba(247,202,201,0.12)"
        }}>
            <img src="https://i.pravatar.cc/60?img=3" alt="头像" style={{ borderRadius: "50%", marginRight: "1.2rem" }} />
            <div>
                <strong>Frankelin Li</strong>
                <div style={{ color: "#555" }}>前端开发者 & 博主</div>
            </div>
        </div>
    );
}
