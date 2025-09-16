import React from "react";

export default function ImageShowcase() {
    return (
        <div style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            marginBottom: "2rem"
        }}>
            <img src="https://picsum.photos/120/80?random=1" alt="示例1" style={{ borderRadius: "8px", boxShadow: "0 2px 8px #aaa" }} />
            <img src="https://picsum.photos/120/80?random=2" alt="示例2" style={{ borderRadius: "8px", boxShadow: "0 2px 8px #aaa" }} />
            <img src="https://picsum.photos/120/80?random=3" alt="示例3" style={{ borderRadius: "8px", boxShadow: "0 2px 8px #aaa" }} />
        </div>
    );
}
