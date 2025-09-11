---
date: 2025-09-11 22:44
slug: sticky粘性
---



## 1️⃣ 使用 CSS `position: sticky`

现代浏览器都支持 `position: sticky`，基本用法：

```
.docs-sidebar {
    position: sticky;
    top: 20px; /* 距离顶部 20px */
}
```

### 解释：

- `position: sticky;`：当滚动到这个元素时，会固定在父容器内
- `top: 20px;`：距离浏览器窗口顶部的距离
- 重要：**父容器不能有 `overflow: hidden` 或 `overflow: auto`**，否则 sticky 失效

<!-- truncate -->
