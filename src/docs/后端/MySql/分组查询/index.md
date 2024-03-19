# 分组查询

```sql
select 字段 from 表名 group by 列名;
```

## 分组之后的条件筛选

```sql
-- 对分组结果进行条件筛选，必须使用having不能使用where
select 字段 from 表名 group by 列名 having 分组条件;
```