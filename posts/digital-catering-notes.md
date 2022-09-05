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
