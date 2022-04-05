---
title: mock数据
---

> 1.  开发环境脚手架启动，开启静态服务`new WebpackDevServer(devOptions, compiler)`![alt ](https://raw.githubusercontent.com/lvxiaowu/resources/main/img/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20220405141243.png)

> 2. 对项目根目录下的`mock`文件夹的所有`js`文件，经行监听。![alt ](https://raw.githubusercontent.com/lvxiaowu/resources/main/img/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20220405143105.png)

> 3. 对所有的请求路径前缀拼接上`/__mock__:`，对请求结果`Mock.mock(value)` ![alt ](https://raw.githubusercontent.com/lvxiaowu/resources/main/img/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20220405142043.png)

> 4. 使用`@lvxiaowu/utils`的`http`库根据条件劫持请求， ![alt ](https://raw.githubusercontent.com/lvxiaowu/resources/main/img/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20220405142735.png)
