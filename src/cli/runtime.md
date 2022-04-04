---
title: 运行时配置
---

## 配置方式

在入口文件 `src/index.js` 中配置，直接挂载在入口组件上

比如 `src/index.js` 文件内容如下：

```jsx | pure
import { BrowserRouter } from 'react-router-dom'

export default function App({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>
}
// 配置直接挂载在App组件上
App.onRouteChange = (location) => {
  console.log(location)
}
```

## 配置项

### onRouteChange

路由变化时的回调

```js
App.onRouteChange = (location) => {
  console.log(location)
}
```

### lazyFallback

设置页面懒加载时的 fallback， 其实就是内部 Suspense 组件的 fallback

```js
App.lazyFallback = ({ location }) => {
  return <div> loading... </div>
}
```

运行时配置目前暂时只有这些，以后再慢慢增加
