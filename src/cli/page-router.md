---
title: 页面式路由
---

## 页面式路由

即 pages 目录下每一个**第一级**目录就表示一个页面路由，就可以通过与目录名称相同的 url 访问

| url    | 展示           |
| ------ | -------------- |
| /      | index/index.js |
| /home  | home/index.js  |
| /other | other/index.js |

> 其中 index 页面是必须有的
> 它表示项目的主页即访问/的时候展示的

> 本地开发环境只有访问到 pages 下某个页面的时候 webpack 才去编译该页面下的代码
> 这样可以保证启动时只编译 layout 和/pages/index 下的代码，启动速度就不会随着项目变大而变慢

页面式路由只约定了 pages 下的第一级目录作为对应页面路由

如果某个页面下有二级或者多级路由，那需要手动配置路由，可以在这个页面下做路由映射

比如访问/user 展示用户列表，列表中点击又跳转到/user/detail/1 访问用户详情页

```jsx | pure
import { Route } from 'react-router-dom'
import List from './List'
import Detail from './Detail'

//pages/user/index.js
export default function User() {
  // 在这里做user页面的路由映射，其他页面也是如此
  return (
    <>
      <Route exact path="/user" component={List} />
      <Route exact path="/user/detail/:id" component={Detail} />
    </>
  )
}
```
