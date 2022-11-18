---
title: 创新开发笔记
date: 2022-09-05
author: Stephen Tseng
gravatar: 41d81fdc8f8d5e887f6332b8d4a379e6
twitter: '@Ynewtime'
---

根据 Merchant Name 重置密码
1. query `CA_MC__Merchant__CST`，获得 `PortalUserId=CA_MC__Owner__CST`
2. query `PortalUser`，获得 `IdentityId=usrName`
3. 使用 `resetPassword` 脚本重置密码

根据 IdentityId 获得登录账号
1. query `CA_CM_LoginAccount`，获得 `name`

数字化工具开发需求清单
1. 区域 EOX 局点在线维护工具（构建一个 EOX 维护工具，支持 EOX 信息录入、在线可视和权限管控）
2. 现有运维大屏、合营看板和资源平台的日常维护（不涉及新的重需求开发，主要围绕现有工具的维护和数据刷新）

进销存需求沟通准备
1. PSI System: Purchase Sales Inventory
2. [Stock Management] + [Materials-to-Dishes binding System]
3. Item: aka. Material, which is the raw meterials used in the Dishes
4. Bill of Material: Materials-to-Dishes

Homepage 安装
1. Operation Center
2. Homepage

Order Delete 权限
1. 只允许配置 Manager，Cashier 和 Waiter 都禁用掉
2. Order Delete 权限是 Order Manage 权限的子集，只禁用 Delete 权限而不禁用 Manage 权限是错误的

零码内部演示
1. 演示部分增加客户互动
2. 新增 Process 流程类应用展示
3. 演示时间较短，可以多拓展一下，如问卷调查表单在编辑的时候，可以多看一些组件

AppCube问题记录
1. 接口报错【接口未开放】: 原因是尚未配置业务权限凭证，1.3.10新特性
2. 软件包安装报错【解析结果失败】: 华为云WAF规则误判，联系安全运维马磊(wx791372)或易建华(00574162)修复

肯尼亚和土研所团队的缺陷和需求管理
+ 后续统一用 P-Link 系统承载

### 2022-05-27

AppCube 总结 from 汤勇刚

1. 时区: 租户、公司、局点

### 2022-05-09

1. [JavaScript 数组的 reverse 和 sort 方法会改变原有的数组，在函数式编程中要规避](https://vuejs.org/guide/essentials/list.html#displaying-filtered-sorted-results)
2. [watchEffect only tracks dependencies during its synchronous execution. When using it with an async callback, only properties accessed before the first await tick will be tracked.](https://vuejs.org/guide/essentials/watchers.html#watcheffect)

### 2022-05-04

1、使用 VS Code 的 Rest 插件上传 Binary

```
POST {{url}}
Content-Type: image/png
Access-Token: {{token}}

< {{local_file_path}}
```

2、使用 VS Code 的 Rest 插件上传 Form Data

假定上传的 Form Data 包含 name 和 file 字段

```
###
POST {{url}}
Access-Token: {{token}}
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file"; filename="1.png"

< {{local_file_path}}
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="name"

{{file_name}}
------WebKitFormBoundary7MA4YWxkTrZu0gW--
```

3、[RFC for useEvent](https://twitter.com/dan_abramov/status/1521908613656289286)

### 2022-04-27

[React v18.0](https://reactjs.org/blog/2022/03/29/react-v18.html)

### 2022-04-13

React 性能优化技巧

1. 使用批量更新来减少 render 的次数
   1. 合并 state
   2. 使用 unstable_batchedUpdates
2. 按优先级更新，及时响应用户
   1. 使用 setTimeout 将耗时任务移动到下一个宏任务执行
3. 动画库直接修改 DOM 属性，跳过组件 Render 阶段
4. Immutable 的优点
   1. 降低了 Mutable 带来的复杂度
   2. 结构共享，节省内存
   3. 时间旅行（因为每次数据都是不一样的，只要把这些数据放到一个数组里储存起来，想回退到哪里就拿出对应数据即可，很容易开发出撤销重做这种功能）
   4. 拥抱函数式编程，方便调试和组装

### 2022-04-07

下来研究一下[这篇文章](http://3ms.huawei.com/km/blogs/details/9880459#:~:text=%E5%A6%82%E6%9E%9C%E8%B0%83%E7%94%A8%E7%A4%BE%E5%8C%BA3ms%E6%8E%A5%E5%8F%A3%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8liveServer%E7%9A%84%E4%BB%A3%E7%90%86%E5%8A%9F%E8%83%BD)

还有一个问题，如何在页面重定向前拦截页面所有 Network 请求？

### 2022-03-29

[2021 年当我们聊前端部署时，我们在聊什么][4]

![前端发布服务实现与设计][5]

### 2022-03-28

- [S2][3]: 蚂蚁金融体验技术部又一轮子，面向可视分析领域的数据驱动的表可视化引擎

### 2022-03-21

1. [打磨产品、提升体验][2]
2. GDE 的 RunScript 脚本也支持引入第三方库！

### 2022-03-18

- ✨ feat
- 🔨 opt
- 💢 fix

### 2022-03-16

1. [Specifying a string as a parameter][1]
   1. 对于 JavaScript 的 replace 方法，可以在 replacement 中书写特定的表达式以实现更丰富的 replace 能力
   2. 比如复制匹配到的子串: `"abc".replace("abc", "$&$&")` => `abcabc`
   3. 或者复制匹配到的子串前的字符串: "123abc".replace("abc", "$`") => 123123
   4. 或者复制匹配到的子串后的字符串: "123abc456".replace("abc", "$'") => `123456456`

---

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_a_parameter
[2]: http://xinsheng.huawei.com/cn/index.php?app=forum&mod=Detail&act=index&id=7622627#:~:text=%E4%B8%8A%E5%8D%8A%E5%B9%B4%EF%BC%8C%E8%BF%9B%E4%B8%80%E6%AD%A5%E6%8A%8A%E2%80%9C-,%E6%89%93%E7%A3%A8%E4%BA%A7%E5%93%81%E3%80%81%E6%8F%90%E5%8D%87%E4%BD%93%E9%AA%8C,-%E2%80%9D%E4%BD%9C%E4%B8%BATOP1%E7%9A%84
[3]: https://s2.antv.vision/en/docs/manual/introduction/
[4]: https://juejin.cn/post/7017710911443959839#heading-21
[5]: https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f166c3371c854c878d2bce8c1450500e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp
