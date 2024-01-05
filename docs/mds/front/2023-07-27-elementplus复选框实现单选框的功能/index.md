---
title: "ElementPlus复选框实现单选框的功能"
date: "2023-07-27"
categories: 
  - "前端"
---

```
<el-checkbox-group v-model="status">
    <el-checkbox false-label="null" :true-label="1" name="status">启用</el-checkbox>
    <el-checkbox false-label="null" :true-label="2" name="status">禁用</el-checkbox>
</el-checkbox-group>
```
