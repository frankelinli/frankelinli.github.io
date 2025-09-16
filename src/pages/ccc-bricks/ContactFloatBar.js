import React, { useState } from "react";

const popups = [
    {
        label: "电话",
        content: <div style={{ padding: "1rem" }}><strong>电话：</strong> 138-0000-0000</div>
    },
    {
        label: "微信",
        content: <div style={{ padding: "1rem" }}><img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=weixinid" alt="微信二维码" style={{ width: 120, height: 120 }} /><div style={{ marginTop: "0.5rem" }}>微信号：weixinid</div></div>
    },
    {
        label: "邮箱",
        content: <div style={{ padding: "1rem" }}><strong>邮箱：</strong> frankelinli@example.com</div>
    }
];

export default function ContactFloatBar() {
    const [active, setActive] = useState(null);

    return (
        <>
            <div
                style={{
                    position: "fixed",
                    right: "2rem",
                    bottom: "2rem",
                    zIndex: 9999,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem"
                }}
            >
                {popups.map((item, idx) => (
                    <div
                        key={item.label}
                        style={{
                            background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
                            color: "#fff",
                            borderRadius: "12px",
                            boxShadow: "0 2px 8px rgba(67,206,162,0.15)",
                            padding: "0.8rem 1.2rem",
                            cursor: "pointer",
                            fontWeight: "bold",
                            fontSize: "1.1rem",
                            transition: "transform 0.15s",
                            userSelect: "none"
                        }}
                        onMouseEnter={() => setActive(idx)}
                        onMouseLeave={() => setActive(null)}
                        onClick={() => setActive(idx)}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
            {active !== null && (
                <div
                    style={{
                        position: "fixed",
                        right: "8rem",
                        bottom: `${2 + active * 4}rem`,
                        background: "#fff",
                        borderRadius: "12px",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                        zIndex: 10000,
                        minWidth: "180px",
                        minHeight: "80px",
                        animation: "fadeIn 0.2s"
                    }}
                >
                    {popups[active].content}
                </div>
            )}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </>
    );
}
