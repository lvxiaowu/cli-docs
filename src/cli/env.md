---
title: 环境变量
---

## 环境变量

在项目中只有两个环境变量 `__MODE__` 和 `___ENV__`

### \_\_MODE\_\_

表示构建模式

| \_\_MODE\_\_ | 构建模式     |
| ------------ | ------------ |
| start        | 本地开发模式 |
| build        | 打包构建模式 |

可以用来判断哪些代码只在本地开发时运行

```js | pure
if (__MODE__ === 'start') {
  // ...
} else {
  // ...
}
```

### \_\_ENV\_\_

表示运行环境,默认是 `dev`

| \_\_ENV\_\_ | 运行环境   |
| ----------- | ---------- |
| dev         | 开发环境   |
| test        | 测试环境   |
| pre         | 预发布环境 |
| prod        | 线上环境   |

其中 `dev`、`test`、`pre`、`prod` 这些值是命令参数决定的，比如运行 npm run build env=test 那么`__ENV__`的值就是 test

可以在打包部署的机器上（比如 Jenkins）传入这些参数，没有特殊情况，就用上面四个环境即可

可以用来区分不同环境下的接口域名

```js | pure
const apiBaseUrl = {
  dev: 'https://dev.com/api',
  test: 'https://test.com/api',
  pre: 'https://pre.com/api',
  prod: 'https://prod.com/api',
}[__ENV__]
```
