---
title: 项目优化
---

> 1.  webapck5，配置 `cache: {type: 'filesystem'}`。
> 2.  webapck5，配置 `optimization: {runtimeChunk: 'true'}`,打包时生成一个体积很小 runtime.xxx.js 文件，用作映射其他 chunk 文件，目的是更新后，以较小的代价利用缓存，提升页面加载速度。生产环境，内联到 html 中，减少 http 请求。
> 3.  webapck5，配置 `optimization`,简单的来说就是 Webpack 中一个提取或分离代码的插件，主要作用是提取公共代码，防止代码被重复打包，拆分过大的 js 文件，合并零散的 js 文件。

```js
     splitChunks: {
            chunks: 'all',
            cacheGroups: {
              antd: {
                name: 'chunk-antd',
                test: (module) =>
                  [/antd/, /rc-/, /@ant-design/].some((item) => item.test(module.context)),
                enforce: true,
                priority: 1,
              },
              sd: {
                name: 'chunk-sd',
                test: (module) => [/@sd/, /nprogress/].some((item) => item.test(module.context)),
                enforce: true,
                priority: 1,
              },
        }
```

> 4.  webapck5，配置 `externals : {splitChunks: {...}}`,通过这种方式引入的依赖库，不需要 webpack 处理，编译进文件中，在我们需要，使用它的时候可以通过 CMD、AMD、或者 window 全局方式访问。

```js
// html
;<script
  src="https://code.jquery.com/jquery-3.1.0.js"
  integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk="
  crossorigin="anonymous"
></script>

// webpack.config.js
module.exports = {
  //...
  externals: {
    jquery: 'jQuery',
  },
}

// 使用
import $ from 'jquery'
$('.my-element').animate(/* ... */)
```
