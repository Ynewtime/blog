---
title: Daily Notes
date: 2022-08-23
author: Stephen Tseng
gravatar: 41d81fdc8f8d5e887f6332b8d4a379e6
twitter: '@Ynewtime'
---

2022-08-23
+ [x] 11:00 零码内部演示
+ [x] 12:00 工卡认证系统胶片分享
+ [ ] 19:30 在线签约系统设计
+ [ ] 20:30 APP用户注册登录设计
+ [ ] 21:30 GDE工具的认证流程搬迁

2022-08-22
+ [x] 09:00 与郭小波、晓哥对齐数字化工具资源: 准备一个数字化工具开发需求清单
+ [x] 09:15 进销存需求沟通准备
+ [x] 11:00 与包钰、Kubra 对齐进销存需求
+ [x] 11:40 与汤勇刚对齐扫码点餐环境搬迁: 除了之前文档里面提及的，还有没有类似打印机小工具这样的代码
+ [x] 15:30 Homepage 安装: 装到 18:00，仍有问题遗留（开发环境，接口配置 Anonymous 权限）
+ [x] 19:00 工卡认证系统胶片
+ [x] 21:40 经营系统数据校正

---

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

经营系统数据校正
+ 如果代表处的收入预测值与其他各个维度的收入预测值都不同，但是订货和成本都相同，主要原因可能是某个项目的代表处为空或者放到了南部非洲地区部总部，此时需要分月排查收入预测值误差，然后筛选出对应的项目预测条目，看代表处有没有放错

零码内部演示
1. 演示部分增加客户互动
2. 新增 Process 流程类应用展示
3. 演示时间较短，可以多拓展一下，如问卷调查表单在编辑的时候，可以多看一些组件
