# DQL查询

## 基本语法

```sql
select * | 列名 from 表名 where 条件;
```

## 表别名
```sql
select * from 表名 as 表别名;
```

## 列别名
```sql
select 列名 as 列别名 from 表名 
```

## 数据去重
```sql
-- 列名是组合重复，有点像联合主键
select distinct 列名 from 表名 
```

## 结果数据处理
```sql
select 列名1, 列名2+10 from 表名 
```

## 排序
```sql
-- asc为升序，记忆a就是升，1-10...
select 列名 from 表名 order by 字段名1 [asc,desc], order by 字段名2 [asc,desc] 
```