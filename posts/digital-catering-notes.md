---
title: Digital Catering Notes
date: 2022-09-05
author: Stephen Tseng
gravatar: 41d81fdc8f8d5e887f6332b8d4a379e6
twitter: '@Ynewtime'
---

根据 Merchant Name 重置密码
1. query `CA_MC__Merchant__CST`，获得 PortalUserId=CA_MC__Owner__CST
2. query `PortalUser`，获得 IdentityId=usrName
3. 使用 `resetPassword` 脚本重置密码

根据 IdentityId 获得登录账号
1. query `CA_CM_LoginAccount`，获得 name

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
