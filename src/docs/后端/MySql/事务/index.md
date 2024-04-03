## 事务

事务（Transaction）是指数据库管理系统（DBMS）中的一个逻辑工作单位，它代表了一系列数据库操作，这些操作**要么全部成功执行，要么全部不执行**，从而保持数据库的一致性。

事务是回滚的操作，不是回滚的数据库，一旦数据库发生变更。回滚将不在

## 事务的四大特性

1. 原子性（Atomicity）：事务是一个原子操作单元，要么全部执行，要么全部不执行。如果一个事务操作失败，数据库将回滚到事务开始之前的状态。

2. 一致性（Consistency）：事务执行的结果必须使数据库从一个一致性状态转变到另一个一致性状态。这意味着事务执行后，数据库的约束和规则依然有效，数据库内部的完整性约束不会被破坏。

3. 隔离性（Isolation）：事务的执行不受其他事务的影响，即事务的执行在逻辑上是独立的，各个事务之间相互隔离，互不干扰。

4. 持久性（Durability）：一旦事务提交，则其所做的修改将永久保存在数据库中，即使系统发生故障，数据也不会丢失。

## 查看/设置事务提交方式

```sql
-- 事务
SELECT @@autocommit;


-- 手动提交事务
SET @@autocommit = 0;
```

## 手动提交事务

```sql
START TRANSACTION; 或者 BEGIN;
```

## 提交事务

```sql
COMMIT;
```

## 回滚

```sql
ROLLBACK;
```

## 示例

正常不加ROLLBACK的前提下，报错会直接修改数据库

加了ROLLBACK，语句错误，会执行ROLLBACK;

```sql
BEGIN;
UPDATE user SET salary = salary - 10 WHERE id = 2;
554
UPDATE user SET salary = salary + 10 WHERE id = 1;
ROLLBACK;
```