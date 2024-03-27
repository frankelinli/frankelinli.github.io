---
date: 2024-03-27 16:01
---
export const BoldItal = ({children, color}) => (
<span
style={{
fontSize: 24,
fontStyle: "italic",
borderRadius: '2px',
padding: '0.2rem',
}}>
{children}
</span>
);

# The Visual API

<BoldItal color="#25c2a0">A new standard for state-based, testable, visual automation</BoldItal>
<br />

---

***A new standard for state-based, testable, visual automation***

## Abstract

Large visual automation applications are rarely developed due to the complexity 
required for a robust application and the inability to test the codebase. 
This paper explores the reasons for the complexity and the inability to test, 
and in doing so, finds solutions to both. The concept of the visual API is 
proposed as a new standard for developing visual automation and a new 
open-source framework is introduced that streamlines the process of building a visual API.


```jsx
export const BoldItal = ({children, color}) => (
<span
style={{
fontSize: 24,
fontStyle: "italic",
borderRadius: '2px',
padding: '0.2rem',
}}>
{children}
</span>
);

# The Visual API

<BoldItal color="#25c2a0">A new standard for state-based, testable, visual automation</BoldItal>
<br />

---
```