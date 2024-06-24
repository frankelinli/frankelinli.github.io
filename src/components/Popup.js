// src/components/Popup.js
import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 1000); // 1秒后显示弹窗
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setShowPopup(false);
    };

    return (
        showPopup && (
            <div className="popup-overlay">
                <div className="popup-content">
                    <p>如果你继续这样浪费时间在无关紧要的代码上，你的网站永远不会成功。</p>
                    <p>你会永远停留在那种没有内容、没有用户、没有流量的恶性循环中。</p>
                    <p>别再自欺欺人了，醒过来，专注于内容创作吧！</p>
                    <p>现在就去写作，去创造，去填充那些空白的页面！</p>
                    <p>你的未来在你的笔下，而不是在那些无聊的代码里。💪</p>
                    <button onClick={handleClose}>关闭</button>
                </div>
            </div>
        )
    );
};

export default Popup;