# InsertIntoSelect

```sql
-- 将一张表的数据导入到另一张表中

insert into 目标表(字段1，字段2) select 字段1，字段2 原始表

insert into 目标表 select * 原始表
```