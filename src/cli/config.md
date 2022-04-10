---
title: 脚手架配置
---

**有时可能默认配置不满足需求，这时可以自定义配置**

## 配置方式

在项目根目录下新建 `lv.config.js` 来定义配置项，通过 `module.exports` 导出



```js
const defineSdConfig = require('@lvxiaowu/admin/lib/defineSdConfig')

module.exports = defineSdConfig((env) => {
  return {
    eslint: false,
    // ...
  }
})

```

## 配置项

### ext

- 类型: `object`
- 默认: `{}`
- 描述: 会注入到工程的额外参数，在工程里通过**EXT**变量获取
- port: 3000，本地开发时启用的端口号

### publicPath

- 类型: `string`
- 默认: `/`
- 描述: 对应 webpack 的 publicPath，cdn 部署时常用

### useFileRouter

- 类型: `Boolean | FileRouter`
- 默认: `false`
- 描述: 是否使用文件系统路由,默认启用,请参考[文件式路由](/cli/file-router)

```ts
interface FileRouter {
  /**
   * 文件式路由的默认前置路由路径,
   * 比如文件结构是/home/index.js
   * 最后生成的真实路由路径是/base/home
   */
  base?: string
  /**
   *忽略的文件名，不会被当做路由
   */
  ignore?: Array<string>
}
/**
 * 当前项目是否注册为一个微服务系统,production环境下起效
 * 注意：
 * 1：被作为微前端的应用，打包时会将pages目录下的所有文件式路由的目录（除去ignore忽略的目录）作为微应用的模块暴露出去。
 * 2：特别要注意在（仅微前端应用中）上述所有被暴露出去的模块代码中，不得使用__EXT__常量作为业务逻辑写入，因为__EXT__在编译时
 *   就已经确定了值，比如contextId在编译时就已经确定为一个值了比如是pms，那其他使用该微应用的系统，不管是哪个系统，
 *   远程代码中这个值都是pms，因为远程代码是已经编译打包好的，不会被再次编译。
 *   理论上__ENV__也同样，不过通过publicPath能保证当前系统和访问的远程代码始终在同一个环境，所以值始终相同。
 * 3：如果你想在微前端应用代码中想判断当前是哪个系统访问了该微应用从而做不同的业务逻辑处理，那目前暂时只能通过window.location自己去做判断了，
 *    应该尽量避免这样做，正确的做法是，1：将这个路由模块单独在你自己的系统中覆盖重写，因为是你的系统中独有的业务功能，2：或者在你的系统中单独建路由
 *    然后用const MicroModule=import('microName/some/route/path')然后传递属性给MicroModule组件，不过这里如果用到了params等路由参数，还得将params
 *    传入组件，完全的写法如下：
 *    const MicroModule=React.lazy(()=>import('microName/some/route/path'))
 *
 *    export default function(pageProps){
 *      return <MicroModule {...pageProps} otherProp="other"/>
 *    }
 */
```

### microApp

- 类型: `false | MicroApp`
- 默认: `false`
- 描述: 是否编译成微应用,production 环境下起效

```js
interface MicroApp {
  /**
   * 微服务的名称，必须唯一
   */
  name: string
  /**
   * 微服务的地址
   */
  publicPath: string
  shared?: any
  /**
   * 微应用的包装
   */
  wrapper?: string
  /**
   *忽略的文件名，不会被当微路由
   */
  ignore?: Array<string>
}
/**
 * 当前项目需要使用哪些微服务系统，这些微服务必须是经过注册过的
 * 即被 microApp 配置过的服务就是已注册过的微服务
 * 使用了该配置后，需要注意当前项目的package.json中的name最好不要出现数字，中文，- 等特殊字符，有共享模块时，可能会报错
 */
```

### useMicroApps

- 类型: `Array<MicroAppConfig>`
- 默认: `[]`
- 描述: 使用微服务的配置

```js
interface MicroAppConfig {
  /**
   * 微服务的名称
   */
  name: string
  /**
   * 微服务的地址
   */
  publicPath: string
  /**
   * 该微服务是否自动转换成路由与当前项目的路由合并
   */
  autoRouter?: boolean
}
/**
 * 当前项目需要使用哪些微服务系统，这些微服务必须是经过注册过的
 * 即被 microApp 配置过的服务就是已注册过的微服务
 * 使用了该配置后，需要注意当前项目的package.json中的name最好不要出现数字，中文，- 等特殊字符，有共享模块时，可能会报错
 */
```

### microAppShared

- 类型: `undefined`
- 默认: `undefined`
- 描述: 微应用共享的模块

### eslint

- 类型: `boolean`
- 默认: `true`
- 描述: 是否启用 eslint 检测

### sourceMap

- 类型: `boolean`
- 默认: `false`
- 描述: 是否生成 sourceMap 文件

### proxy

- 类型: `Object`
- 默认: `{}`
- 描述: http 代理

```js
// 示例
{
  "/apl": "https://www/example.com"
}
```

### shouldCheckUpdate

- 类型: `boolean`
- 默认: `false`
- 描述: 每次启动是否去检测更新

### externals

- 类型: `object | Externals`
- 默认: `null`
- 描述: 对应 webpack 的 externals

```js
interface ExternalsValue {
  name?: string
  script: string | Script
}
interface Externals {
  [propName: string]: ExternalsValue

}

// 示例：

// 其中 "react" 表示模块的包名（即 import React from "react"中的 react）
// name 表示 react 暴露出的全局变量名，cdn 就是对应的 cdn 链接，会自动被注入 html 中

{
  "react": {
    "name": "React",
    "cdn": "https://unpkg.com/react@16/umd/react.production.min.js"
  }
}

```

### bmsLib

- 类型: `boolean|BMSLib`
- 默认: `false`
- 描述: 是否外部化后台管理系统必备的几个库 antd,mobx,axios

```js

interface BMSLib {
  antd?: boolean | 3 | 4
  mobx?: boolean
  axios?: boolean
  moment?: boolean
}

```

### px2viewport

- 类型: `boolean|Px2Viewport`
- 默认: `false`
- 描述: 是否 px 转 vw|vh，手机端项目使用

```js
// 当配置为 `true` 时，相当于如下配置:
interface Px2Viewport {
  unitToConvert?: 'px'
  viewportWidth?: number
  propList?: Array<string>
  viewportUnit?: string
  selectorBlackList?: Array<any>
  fontViewportUnit?: string
  mediaQuery?: boolean
  landscape?: boolean
  landscapeUnit?: string
  landscapeWidth?: number
  [propName: string]: any
}
// 示列
{
  "px2viewport": {
    "viewportWidth": 375
  }
}
  // 具体配置请参考[postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport)

```

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

### globalLessVars

- 类型: `object | undefined`
- 默认: `undefined`
- 描述: 定义 less 变量

### modifyLessVars

- 类型: `object | undefined`
- 默认: `undefined`
- 描述: 修改 less 变量

### configSet

- 类型: `object`
- 默认: `null`
- 描述: webpack、babel、postcss 等配置

```js
import { Configuration } from 'webpack/types'

interface ConfigSet {
  webpack?(options: WebpackConfigParams): Configuration | void
  babel?(options: BabelConfigParams)
  postcss?(options: PostcssConfigParams)
}
interface WebpackConfigParams {
  dev: boolean
  config: Configuration
}
interface BabelConfigParams {
  dev: boolean
  config: {
    presets: Array<any>
    plugins: Array<any>
  }
}
interface PostcssConfigParams {
  dev: boolean
  config: { plugins: object; [propName: string]: any }
}
```
