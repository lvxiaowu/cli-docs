---
title: Http
---

Http 封装发送请求相关，是基于 [axios](https://github.com/axios/axios/blob/master/README.md) 封装的

## 用法

```js
import { http } from '@sd/utils'
function getList() {
  http({
    method: 'get', // post|delete|put 等，默认是get
    url: '/api/xxx',
    data: { name: 'aaa' },
  }).then((res) => {
    console.log(res)
  })
}
// 或者用async/await
async function getList() {
  const res = await http({ url: '/api/xxx', data: { name: 'aaa' } })
  console.log(res)
}
```

## 全局配置

通过 setConfig 设置全局配置，全局配置会作用于每一个请求

```js
http.setConfig({
  // ...全局配置属性
})
```

### baseURL

- 类型: `string|function`
- 默认: ''
- 描述: 设置 url 的前缀,最后会被拼接到每个请求的 url 的前面

示例：

```js
http.setConfig({
  baseURL: 'https://www.dev.com/api',
})
// 可以是一个函数，返回url前缀
http.setConfig({
  baseURL() {
    return {
      dev: 'https://www.dev.com/api',
      pre: 'https://www.pre.com/api',
      prod: 'https://www.prod.com/api',
    }[__ENV__]
  },
})
```

### setHeaders

- 类型: `object|function`
- 默认: `{}`
- 描述: 设置请求的 headers

示例：

```js
http.setConfig({
  setHeaders: {
    token: 'xxx',
  },
})
// 可以是一个函数，返回一个对象
http.setConfig({
  setHeaders() {
    return {
      token: 'xxx',
    }
  },
})
```

### setTimeout

- 类型: `number|function`
- 默认: `6000`
- 描述: 设置请求的超时时间 单位 ms

示例：

```js
http.setConfig({
  setTimeout: 3000,
})
// 可以是一个函数，返回一个时间毫秒数
http.setConfig({
  setTimeout() {
    return 3000
  },
})
```

### timeoutRetry

- 类型: `boolean|number`
- 默认: `false`
- 描述: 请求超时时是否重新请求

示例：

```js
http.setConfig({
  timeoutRetry: true,
})
// 当设置一个数字时，表示重新请求的次数
http.setConfig({
  timeoutRetry: 2,
})
```

### transformResult

- 类型: `function(res):any`
- 默认: `undefine`
- 描述: 表示将请求成功后的结果转换之后再返回

示例：

```js
http.setConfig({
  transformResult(res) {
    const { code, data, msg } = res.data
    if (code === 200) {
      return data
    }
    return Promise.reject(msg)
  },
})
```

### error

- 类型: `function(e)`
- 默认: `undefine`
- 描述: 请求失败时调用

示例：

```js
http.setConfig({
  error(e) {
    alert(e.message)
  },
})
```

### withCredentials

- 类型: `boolean`
- 默认: `false`
- 描述: 表示跨域请求时是否需要使用凭证，请参考 axios 的 withCredentials

示例：

```js
http.setConfig({
  withCredentials: false,
})
```

## 单独配置

上诉的全局配置会作用于每一个请求，但是某些请求可能不想走全局配置，这时候可以单独配置

上面的全局配置都可以在每一个请求中再次配置，这样就会以单独配置为准

```js
http({
  url: '/api/xxx',
  timeoutRetry: 3,
})
```

### headers

单独配置 headers 不会覆盖全局配置中 setHeaders 设置的 headers，而是合并 headers
示例：

```js
http.setConfig({
  setHeaders: {
    token: 'xxx',
  },
})
http({
  url: '/api/xxx',
  headers: {
    name: 'aaa',
  },
})
// 最终headers是{token:'xxx',name:'aaa'}
```

### mock

- 类型: `boolean|string|object`
- 默认: `false`
- 描述: 配置请求是否走 mock，一旦配置了，那么该请求就会在项目根目录下的 /mock 目录下
  寻找对应的 mock 数据，并返回

示例：

配置 `true` 时，会在/mock 目录下去匹配 url 为 /api/getList 的 GET 请求

```js
http({
  url: '/api/getList',
  mock: true,
})
// /mock/xx.js
module.exports = {
  'GET:/api/getList': {
    code: 200,
    data: [{ id: 1 }],
    msg: 'success',
  },
}
```

配置 `string` 时，相当于给当前请求设置一个 mock **别名**，然后就会在/mock 目录下去匹配 **该别名** 的对应方式的请求

```js
http({
  method: 'post',
  url: '/api/updateList',
  mock: 'updateList',
})
// /mock/xx.js
module.exports = {
  'POST:updateList': {
    code: 200,
    msg: 'success',
  },
}
```

配置 `object` 时，可以设置该 mock 的额外信息，比如延迟时间、mock 别名、响应状态码

```js
http({
  url: '/api/getList',
  mock: {
    name: 'getList',
    delay: 3000,
    status: 500,
  },
})
```
