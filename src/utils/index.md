---
title: 介绍
order: 1
nav:
  title: 工具库
  order: 3
---

工具库是对各种在业务中会频繁使用的功能进行的方法封装，便于大家在项目中快速实现非业务相关的功能

- 安装：

```shell script
yarn add @lvxiaowu/utils
```

- 使用：

> **@lvxiaowu/utils** 支持基于 ES modules 的 tree shaking

```jsx | pure
import { http } from '@lvxiaowu/utils'

http({
  url: '/api/xxx',
})
```
