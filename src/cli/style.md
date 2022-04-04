---
title: 样式与资源
---

## css | less

只能用 css 或 less，不支持 scss（很多同学会安装失败，所以干脆去掉，less 足够了）

## CSS Modules

会自动区分是否是 css modules，看引用 css 的方式，如下：

```jsx | pure
// CSS Modules
import styles from './style.less'

// 全局样式
import './style.less'
```

## 图片

有 cdn 的话尽量使用图片 cdn

- 直接相对路径引用

```jsx | pure
<img src="../images/bg.png" />
```

- require 方式

```jsx | pure
// 注意 require 后有.default
<img src={require('../images/bg.png').default} />
// 或者访问别名
<img src={require('@/src/images/bg.png').default} />
```

- import 方式

```jsx | pure
import bgImg from '../images/bg.png'

export default function Test() {
  return <img src={bgImg} />
}
```

- css 中引用

```css
.test {
  background: url('../images/bg.png');
}
/* 也支持别名，需要加 ~ 前缀 */
.test {
  background: url('~@/src/images/bg.png');
}
```
