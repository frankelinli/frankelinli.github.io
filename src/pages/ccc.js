import React from "react";
import Layout from "@theme/Layout";

// 自动加载 ccc-bricks 目录下所有 .js 文件
const bricksContext = require.context("./ccc-bricks", false, /\.js$/);
const bricks = bricksContext
    .keys()
    .map((key) => {
        const Brick = bricksContext(key).default;
        return <Brick key={key} />;
    });

export default function Home() {
    return (
        <Layout title="My Site" description="My blog powered by Docusaurus">
            <div style={{ padding: "2rem" }}>
                {bricks}
            </div>
        </Layout>
    );
}
