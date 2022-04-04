---
title: 文件式路由
---

## 文件式路由

区别于页面式路由，文件式路由不需要手动配置路由，pages 目录下的文件结构即是路由

**配置 fileRouter 为 true 即可转为文件式路由**

比如以下目录结构

```
└── pages
    └── test
      └── index.js
    └── index.js
    └── home.js
```

那就会映射为以下路由

| url   | 展示          |
| ----- | ------------- |
| /     | index.js      |
| /home | home.js       |
| /test | test/index.js |

## 动态路由

被`[ ]`或`[ $]`包裹的文件或目录会被映射为动态路由

比如以下目录结构

```
  └── pages
      └── demo
          └── [id].js
          └── index.js
      └── test
          └── detail
              └── [id$].js
          └── index.js
```

那就对应以下路由

| url            | 展示                   |
| -------------- | ---------------------- |
| /demo          | `demo/index.js `       |
| /demo/1        | `demo/[id].js `        |
| /test          | `test/index.js`        |
| /test/detail   | `test/detail/[id$].js` |
| /test/detail/2 | `test/detail/[id$].js` |

其中 `demo/[id].js` 和 `test/detail/[id$].js` 中可通过 props.match 拿到路由匹配信息

```jsx | pure
// test/detail/[id$].js
export default function Detail({ match }) {
  console.log(match.params.id) // 拿到id
  return <div>detail</div>
}
```

## 嵌套路由

以`_layout`命名的文件会被映射为当前路由下的布局容器，需要通过 props.children 渲染子组件

比如以下目录结构

```
└── pages
    └── demo
        ├── _layout.js
        ├── index.js
        └── list.js
```

那么 `/demo` 和 `/demo/list` 渲染的内容会被 `_layout` 包裹,其中 `layout`中必须通过 props.children 来渲染子组件

```jsx | pure
// demo/_layout.js
export default function DemoLauout({ children }) {
  return (
    <div>
      <h1>demo-layout</h1>
      <div>{children}</div>
    </div>
  )
}
```

## 404 路由

约定 src/pages/404.js 为 404 页面，当路由未匹配到即显示该页面

## 注意点

注意以下文件或目录不会被映射为路由

- `components` 和 `component` 目录
- `utils` 和 `util` 目录
- `tests` 和 `test` 目录
- 命名包含大写字母的文件
- 以 `store`、`api`、`test`、`tests` 命名的文件
- 带 `.` 或 `_` 符号的目录

所以建目录或文件时需注意不要随心所欲的建，比如你建立的目录不想成为路由，只是当做组件使用，那么可以放在 components 目录下或者大写字母开头
