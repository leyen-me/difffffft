# DDL

## 概念

DDL Data Definition Language，数据定义语言

## 作用

- 对数据库进行操作

- 对表结构进行操作

## 常见数据库操作

- 增库

```sql
create database if not exists mydb1 charset = utf8;
```

- 删库

```sql
drop database if exists mydb1;
```

- 修库

```sql
alter database mydb1 character set utf8;
```

- 查库

```sql
show databases;
```

- 使用库

```sql
use mydb1;
```




