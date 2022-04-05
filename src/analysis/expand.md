---
title: 配置拓展
---

[拓展配置](/cli/config#configset)

### babel 拓展

```js
// babel.config.js
const { configSet } = require('./getProjectConfig')()
const { babel } = configSet

const babelConfig = {
  presets: [],
  plugins: [],
}
if (babel) {
  babel({ dev: isDev, config: babelConfig })
}
module.exports = babelConfig
```

### webapck 拓展

```js
// webpack.config.js
const { configSet } = require('./getProjectConfig')()
const { webpack } = configSet

let webpackDevConfig = {
  entry: 'xxx',
  output: 'xxx',
  // ...
}
if (webpack) {
  const res = webpack({ dev: isDev, config: webpackDevConfig })
  if (res) {
    webpackDevConfig = merge(webpackDevConfig, res)
  }
}
module.exports = webpackDevConfig
```

### postcss 拓展

```js
// postcss.config.js
const { configSet } = require('./getProjectConfig')()
const { postcss } = configSet

const postcssConfig = {
  plugins: defaultPlugins,
}
if (postcss) {
  postcss({ dev: isDev, config: postcssConfig })
}
module.exports = postcssConfig
```
