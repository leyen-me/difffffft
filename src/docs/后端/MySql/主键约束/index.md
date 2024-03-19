# 主键约束

## 描述

- 一个列或者多个列的组合，提高查询效率

- 主键也附带唯一约束和非空约束

- 每个表只能有一个主键

- 会创建唯一索引

## 单列主键

```sql
-- 方式一
create table if not exists students (
	id bigint primary key,
    name varchar(255)
)

-- 方式二
create table if not exists students (
	id bigint,
    name varchar(255),
	constraint pk1 primary key(id) -- constraint pk1可以省略
)
```

## 联和主键

```sql
-- id和age共同作用，作为唯一标识
create table if not exists students (
	id bigint,
	age int,
    name varchar(255),
	primary key(id, age)
)
```