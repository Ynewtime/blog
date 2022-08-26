---
title: Daily Notes
date: 2022-08-24
author: Stephen Tseng
gravatar: 41d81fdc8f8d5e887f6332b8d4a379e6
twitter: '@Ynewtime'
---

2022-08-27

+ [ ] 与大猛哥、波哥过肯尼亚收入
+ [ ] 双周例会会议纪要
+ [ ] 新加坡开发态部署
+ [ ] 与舒杰确认双算编码配置的问题

2022-08-26

+ [ ] 更新 Order Report / Waiter Report => Brian
+ [ ] 配置 public.bingo.login.url 的内置系统参数 => 勇刚，待确认，当前毛球没有这个内置参数
+ [ ] Homepage 首页 Banner 加载不出来 => Cavid
+ [ ] 菜品种类图片上传 403 错误 => 勇刚
+ [x] 坦桑的两台资产转给陈安民

2022-08-25

+ [x] 09:00 病毒扫描
+ [x] 09:15 DHL快递
+ [x] 09:20 经营公式
+ [x] 10:30 创新内部会议
+ [x] 11:00 土研下半年业务KPI确认

2022-08-24
+ [x] 上午 问题记录、定位和处理
+ [x] 17:00 现有需求分析与拆解
+ [x] 20:30 Q3经营分析

2022-08-23
+ [x] 11:00 零码内部演示
+ [x] 12:00 工卡认证系统胶片分享

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

AppCube问题记录
1. 接口报错【接口未开放】: 原因是尚未配置业务权限凭证，1.3.10新特性
2. 软件包安装报错【解析结果失败】: 华为云WAF规则误判，联系安全运维马磊(wx791372)或易建华(00574162)修复
