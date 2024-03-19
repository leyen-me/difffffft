# DML数据操作

## 增数据
```sql
insert into 表名 (列名1, 列名2, 列名3...) values (值1, 值2, 值3...);
```

```sql
insert into 表名 (值1, 值2, 值3...);
```

## 删数据

### 删除单条数据

```sql
-- 删除表中符合条件的数据
delete from 表名 where 条件
```

### 清空所有数据

:::tip delete和truncate的区别
DELETE属于DML语句
TRUNCATE属于DDL语句

DELETE清空表性能差，逐行删除，每次删除都会有事务日志
TRUNCATE是一次性删除，性能好

DELETE删除数据之后，索引不会重建或压缩，空间不会自动释放回数据库。
TRUNCATE操作会删除数据，并可能重建索引和释放空间回数据库。
:::

```sql
-- 清空所有数据
delete from 表名
truncate table 表名
truncate 表名
```

## 改数据

```sql
update 表名 set 字段1 = 值, 字段2 = 值, ... wthere 条件;
```

