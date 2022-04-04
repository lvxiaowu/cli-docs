---
title: 状态管理（mobx）
---

现在 react 状态管理主要有两种，

- 1：[redux](https://redux.js.org/)
- 2：[mobx](https://cn.mobx.js.org/)

我们选择用 `mobx` 来做状态管理,原因：

- 相对于 redux，mobx 使用简单很多

- 代码清晰，样板代码少

- 不需要额外的库来做中间件

- 修改状态不需要像 redux 那样处理不可变数据

> 虽然 mobx 官方已经很详细的介绍了 mobx 的用法，但为了减少大家的学习成本，这里介绍 mobx 的主要用法
> 也是项目中最常用的，掌握了这里介绍的，基本就能在项目中灵活运用了，至于一些高级用法，再去看官方文档

## 基本案例

```jsx
/**
 * title: 最简单的例子
 */
import React from 'react'
import { observer } from 'mobx-react'
import { makeAutoObservable } from 'mobx'

class Store {
  constructor() {
    makeAutoObservable(this)
  }
  count = 0
  setCount = () => {
    this.count++
  }
}
const store = new Store()

function Test() {
  const { count } = store
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={store.setCount} style={{ height: 35 }}>
        点击 + 1
      </button>
    </div>
  )
}

export default observer(Test)
```

上面案例中演示了 mobx 的最简单用法

## store

TODO
