---
title: 目录结构
---

## 目录结构说明

> 脚手架创建的项目目录结构如下

```
project
└───mock
└───src
│   └───layout
│   └───pages
│   │   └───index
│   │   └───...
│   │───index.js
|   index.html
│   package.json
```

上面的目录结构是固定的，严格约束的

### index.js

> **src**下的**index.js** 这个文件是整个项目的入口文件，主要是做一些初始化配置，比如路由的形式，国际化相关的配置
> 请求的配置，默认内容如下，其中路由形式是必须配置的

```jsx | pure
import { BrowserRouter } from 'react-router-dom'

// children必须被路由包裹住
export default function App({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>
}
```

### layout

> 全局的布局目录，可以用来对整个项目结构进行布局

```jsx | pure
export default function Layout({ children }) {
  // children是真正的页面内容
  return (
    <div>
      <Header />
      <Sider />
      <Content>{children}</Content>
    </div>
  )
}
```

### pages

pages 目录下就是页面,不同 url 访问不同页面，请参考[路由](/cli/page-router)

### mock

mock 目录下的所有 js 文件都会被当做 mock 文件

> 所有的 mock 文件必须用 `module.exports` 导出,
> 其中 mock 数据是使用了 [mockjs](https://github.com/nuysoft/Mock/wiki/Getting-Started) 的规范

> 其中要开启 mock 必须使用 [@lvxiaowu/utils](/utils) 中 **http** 模块

```jsx | pure
import { http } from '@lvxiaowu/utils'
import { useEffect, useState } from 'react'

export default function Index() {
  const [list, setList] = useState([])
  useEffect(() => {
    http({
      url: '/api/getList',
      // 这里开启该请求的mock
      mock: true,
      // 也可以模拟该请求的延迟时间，状态码，接口别名
      // mock: {
      //   delay: 500,
      //   status: 404,
      //   name: 'getList',
      // },
    }).then((res) => {
      setList(res.list)
    })
  }, [])
  return 'index'
}
```

```js
// mock/user.js
module.exports = {
  /* 
  匹配请求方式是get，url为/api/getList或者接口别名为getList的请求，
  其中前缀GET:不写的话就默认是get请求
  另外还有post,put,delete请求
   */
  'GET:/api/getList': {
    code: 200,
    data: {
      // 返回数组list长度为20
      'list|20': [
        {
          // id从1开始每次自增1
          'id|+1': 1,
          // 随机一个中文姓名
          name: '@cname',
        },
      ],
    },
  },
}
```
