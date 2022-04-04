---
title: 闪电出行-新手指南
order: 10
hero:
  title: 新手指南
  desc: 包含脚手架、组件库、工具等文档
  actions:
    - text: 快速上手
      link: /cli
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: 友好
    desc: 帮助新手尽快熟悉公司业务，减少学习的成本，对新手友好
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: 快速
    desc: 各种知识、问题、前辈走过的坑全部都有，帮助大家快速解决
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: 共同参与
    desc: 让大家共同参数开发维护，包括文档的书写、让大家共同进步
footer: 闪电出行 | 前端
---

## 快速开发

快速创建一个新工程

```bash
// 设置 npm 源
npm set registry http://npm.shandiantech.com

yarn config set registry http://npm.shandiantech.com

// 全局安装 @sd/cli
$ npm i @sd/cli -g

// 创建工程
$ sd create project-name

// 启动工程
$ cd project-name && npm start
```

## 开发维护

由闪电出行前端团队共同维护开发