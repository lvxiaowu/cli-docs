---
title: 脚手架配置
---

**有时可能默认配置不满足需求，这时可以自定义配置**

## 配置方式

在项目根目录下新建 `sd.config.js` 来定义配置项，通过 `module.exports` 导出

```js
module.exports = {
  // ...
}
```

## 配置项

### port

- 类型: `Number`
- 默认: `3000`
- 描述: 本地开发时启用的端口号

### publicPath

- 类型: `String`
- 默认: `./`
- 描述: 对应 webpack 的 publicPath，cdn 部署时常用

### fileRouter

- 类型: `Boolean`
- 默认: `true`
- 描述: 是否启用文件式路由,默认启用,请参考[文件式路由](/cli/file-router)

### proxy

- 类型: `Object`
- 默认: `{}`
- 描述: http 代理

示例：

```json
{
  "/apl": "https://www/example.com"
}
```

### externals

- 类型: `Object`
- 默认: `null`
- 描述: 对应 webpack 的 externals

示例：

其中 "react" 表示模块的包名（即 import React from "react"中的 react）

name 表示 react 暴露出的全局变量名，cdn 就是对应的 cdn 链接，会自动被注入 html 中

```json
{
  "react": {
    "name": "React",
    "cdn": "https://unpkg.com/react@16/umd/react.production.min.js"
  }
}
```

### px2viewport

- 类型: `Boolean|Object`
- 默认: `false`
- 描述: 是否 px 转 vw|vh，手机端项目使用

当配置为 `true` 时，相当于如下配置:

```json
{
  "px2viewport": {
    "viewportWidth": 375
  }
}
```

具体配置请参考[postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport)

### alias

- 类型: `Object`
- 默认: `null`
- 描述: webpack 的 alias，设置访问别名，内置已经有以下访问别名

| alias       | 路径            |
| ----------- | --------------- |
| @           | 项目根目录      |
| @pages      | /src/pages      |
| @components | /src/components |
| @utils      | /src/utils      |
| @layout     | /src/layout     |

### babelImport

- 类型: `Object`
- 默认: `null`
- 描述: 配置 babel-plugin-import，后台项目默认对 antd 开启按需加载

示例：按需加载 antd-mobile 和 lodash

```json
{
  "antd-mobile": {
    "style": "css"
  },
  "lodash": {
    "libraryDirectory": "",
    "camel2DashComponentName": false
  }
}
```
