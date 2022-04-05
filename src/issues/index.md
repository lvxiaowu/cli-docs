---
title: 介绍
order: 1
nav:
  title: issues
  order: 4
---

1. contenthash 的长度，数字不能太短，可能会产生冲突

```js
output: {
  publicPath,
  // 这里将 runtime 不做 hash 处理是因为方便之后寻找到它，将其内联到 html 中
  filename: (pathData) => {
    return pathData.chunk.name === 'runtime' ? 'js/[name].js' : 'js/[name].[contenthash].js'
  },
  chunkFilename: 'js/[name].[contenthash].js',
  //contenthash 的长度，数字不能太短，可能会产生冲突，参考https://github.com/webpack/webpack/issues/13398
  hashDigestLength: 10,
  clean: true,
},
```

2. 当配置 microApp 时，不能配置 runtimeChunk，否则会报如下错误：ScriptExternalLoadError: Loading script failed

```js
  ...(microApp
      ? {}
      : {
          runtimeChunk: {
            name: RUN_TIME,
          },)
```

3. 微服务`entry.js`缓存问题

```js
if (useMicroApps) {
  const remotes = {}
  useMicroApps.forEach((item) => {
    const { name, publicPath } = item
    // remotes[name] = `${name}@${publicPath}entry.js`
    remotes[name] = `promise new Promise(resolve => {
      const remoteUrl = '${publicPath}entry.js?now='+Date.now()
      const script = document.createElement('script')
      script.src = remoteUrl
      script.onload = () => {
        const proxy = {
          get: (request) => window.${name}.get(request),
          init: (arg) => {
            try {
              return window.${name}.init(arg)
            } catch(e) {
              console.log(e)
            }
          }
        }
        resolve(proxy)
      }
      document.head.appendChild(script)
    })`
  })
```
