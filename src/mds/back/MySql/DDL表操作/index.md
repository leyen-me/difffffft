# DDL表操作

## 增表

```sql
-- 使用数据库
use mydb1;

-- 创建表
create table if not exists 表名 (
    字段名1 类型[(宽度)] [约束条件] [comment '字段说明'],
    字段名2 类型[(宽度)] [约束条件] [comment '字段说明'],
    字段名3 类型[(宽度)] [约束条件] [comment '字段说明'],
    ...
) [表的配置];
```

## 删表

```sql
drop table 表名;

-- 条件删除
drop table if exists 表名;
```

## 改表

### 对表进行操作
```sql
-- 改表名
rename table 表名 to 新表名;
```

### 对列进行操作
```sql
-- 增列
alter table 表名 add 列名 类型（长度）[约束];

-- 删列
alter table 表名 drop 列名;

-- 改列
alter table 表名 change 旧列名 新列名 类型（长度） [约束];
```

## 查表
```sql

-- 查询所有表
show tables;

-- 查询表的创建语句
show create table 表名;

-- 查看表结构
desc 表名;
```