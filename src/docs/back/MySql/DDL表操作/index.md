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

-- 添加主键
alter table 表名 add primary key (字段1, 字段2, ...);

-- 删除主键
alter table 表名 drop primary key;

-- 修改自增长起始值
alter table 表名 auto_increment = 100;

-- 添加非空约束
alter table 表名 modify 字段 类型 not null;

-- 删除非空约束
alter table 表名 modify 字段 类型;

-- 添加唯一约束
alter table 表名 add constraint 约束名 unique(列);

-- 删除唯一约束
alter table 表名 drop index 约束名;

-- 添加默认约束
alter table 表名 modify 字段 类型 default 默认值;

-- 删除默认约束
alter table 表名 change column 字段 类型 default null;

-- 删除零值填充
alter table 表名 modify 字段 类型;
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