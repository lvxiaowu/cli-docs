---
title: 其他
---

## react-refresh

默认支持 react-refresh（一种热更新方式,同时保持组件状态），但是目前还是有局限性，以下情况下无法保持组件状态

- class 组件都无法保持组件状态
- 匿名函数组件的时候

❌ Bad

```jsx | pure
export default function () {
  return <div>aa</div>
}
// 或者
export default () => {
  return <div>aa</div>
}
```

✅ Good

```jsx | pure
export default function Test() {
  return <div>aa</div>
}
// 或者
const Test = () => {
  return <div>aa</div>
}
export default Test
```

## typescript

不强制使用 ts ，但默认支持 ts，直接将文件改为 ts 或 tsx 即可
