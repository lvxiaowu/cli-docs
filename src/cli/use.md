---
title: 安装使用
---

## 安装

> 安装前必须先将 npm 或 yarn 的源设置为公司私库

```shell script

npm i @lvxiaowu/cli -g
```

检查是否安装成功

```shell script
lv -v
```

安装成功之后就可以全局使用 lv 命令了

## 创建工程

> 创建一个新工程使用 `create` 命令，创建时有不同类型模板可以选择
> 目前有**管理后台模板**和**手机端模板**

```shell script
lv create
```

## 初始化工程

> 使用 `init` 命令将一个工程初始化为脚手架工程
> 一般都在一个空的文件夹运行 `init` 命令进行初始化

```shell script
lv init
```

## 本地运行项目

> 项目根目录下执行 `npm start` 或 `yarn start `来运行项目
> 运行之后会自动打开浏览器，默认端口号是 3000

```shell script
npm start
```

## 打包项目

> 项目根目录下执行 `npm run build`或`yarn build` 来打包项目
> 成功后，资源会被打包到**dist**目录下

```shell script
npm run build
```

## 更新脚手架

> 当脚手架有更新的时候，会提示用户，然后在项目根目录下可以执行`lv update`
> 就可以更新脚手架配置

```shell script
lv update
```

## @lvxiaowu/admin

> 创建后的工程会由另一个模块 [@lvxiaowu/admin](/cli/admin) 统一管理
