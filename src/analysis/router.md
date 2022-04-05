---
title: 文件式路由
---

> 1.  遍历**src/pages**下所有以`js|jsx|tsx`后缀结尾的文件![alt ](https://raw.githubusercontent.com/lvxiaowu/resources/main/img/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20220405102442.png)

> 2. 对动态路由路径进行替换![alt ](https://raw.githubusercontent.com/lvxiaowu/resources/main/img/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220405095928.png)

> 3. 在根目录`.admin`文件夹下，生成`routes.js`文件 ![alt ](https://raw.githubusercontent.com/lvxiaowu/resources/main/img/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20220405100629.png)

> 4. `webpack`打包入口，根组件`App`组件内，根据浏览器页面的`pathname` 去匹配`routes.js`下的路由，实现动态编译 ![alt ](https://raw.githubusercontent.com/lvxiaowu/resources/main/img/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20220405101419.png)

- 📦 简单方便，无需配置路由，无多余的配置
- 🚀 启动快速，不会随着页面多而启动变慢，会动态编译，访问哪个页面再编译哪个页面
- 🚀 `layout`递归嵌套
