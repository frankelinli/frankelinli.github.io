import React, { useRef } from "react";

export default function FloatingFollowSection() {
    const sectionRef = useRef(null);
    const floatRef = useRef(null);

    // 鼠标移动时让漂浮物跟随
    const handleMouseMove = (e) => {
        const section = sectionRef.current;
        const float = floatRef.current;
        if (!section || !float) return;
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        float.style.transform = `translate(${x - 24}px, ${y - 24}px)`;
    };

    // 鼠标离开时让漂浮物消失
    const handleMouseLeave = () => {
        if (floatRef.current) {
            floatRef.current.style.transform = `translate(-9999px, -9999px)`;
        }
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                position: "relative",
                height: "220px",
                background: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
                borderRadius: "18px",
                marginBottom: "2rem",
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                cursor: "pointer"
            }}
        >
            <h3 style={{
                position: "absolute",
                left: "2rem",
                top: "1.2rem",
                color: "#fff",
                fontWeight: "bold"
            }}>鼠标跟随漂浮区块</h3>
            <span style={{
                position: "absolute",
                left: "2rem",
                top: "3.2rem",
                color: "#fff"
            }}>在此区域移动鼠标，感受漂浮效果！</span>
            <div
                ref={floatRef}
                style={{
                    position: "absolute",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle at 30% 30%, #fff 60%, #fda085 100%)",
                    boxShadow: "0 2px 12px #fda085",
                    pointerEvents: "none",
                    transition: "transform 0.12s cubic-bezier(.4,2,.3,1)",
                    zIndex: 2,
                    transform: "translate(-9999px, -9999px)"
                }}
            >
                {/* 可自定义为SVG或其他漂亮元素 */}
            </div>
        </section>
    );
}
