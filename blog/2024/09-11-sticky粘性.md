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



## 2️⃣ 保证父容器高度足够

- 你的 `<aside class="docs-sidebar">` 可能在文章内容容器里
- sticky 只会在父容器高度范围内滚动，如果父容器太矮，侧边栏不会完全粘住
- Astra 主题文章通常用 `.entry-content` 包裹，你可以用 CSS 让其 `display: flex;` 并让侧边栏粘性：

### 关键点：

:::tip

1. **`position: sticky` 的粘性只在父元素范围内生效**
   - 也就是说 `<aside class="docs-sidebar">` 只能在它的直接或间接父元素（这里是 `.ast-container`）内“粘住”
   - 一旦滚动超出了父元素的底部，它就不再固定，而是跟随父元素自然停止
2. **为什么会这样**
   - `sticky` 并不是固定在整个窗口，而是“相对父容器的相对定位”
   - 父容器边界就是它的限制范围

:::
