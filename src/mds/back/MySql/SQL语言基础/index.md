## SQL语言的概述

SQL（Structured Query Language，结构化查询语言）是一种特定目的编程语言，用于管理关系数据库管理系统（RDBMS），或在关系流数据管理系统（RDSMS）中进行流处理。


## SQL语言的标准

SQL在1986年成为美国国家标准学会（ANSI）的一项标准，在1987年成为国际标准化组织（ISO）标准。此后，这一标准经过了一系列的增订，加入了大量新特性。虽然有这一标准的存在，但大部分的SQL代码在不同的数据库系统中并不具有完全的跨平台性。


## SQL的特点

- 具有综合的统一性，不同的数据库的支持和SQL稍有不同
- 非过程化语言
- 语言简洁，用户容易接受
- 以一种语法结构提供的两种使用方式


## 语法特点
- SQL对关键字的大小写不敏感
::: warning
阿里巴巴规范：SQL代码中应用到的所有SQL关键字、保留字都需使用全大写或小写，例如select/SELECT、from/FROM、where/WHERE、and/AND、or/OR、union/UNION、insert/INSERT、delete/DELETE、group/GROUP、having/HAVING和count/COUNT等。不能使用大小写混合的方式，例如Select或seLECT等方式
:::
- SQL语句可以单行或者多行书写，以分行结束
- SQL的注释
```sql
-- Select all:
SELECT * FROM Customers;

SELECT * FROM Customers -- WHERE City='Berlin';

/*Select all the columns
of all the records
in the Customers table:*/
SELECT * FROM Customers;

SELECT * FROM Customers WHERE (CustomerName LIKE 'L%'
OR CustomerName LIKE 'R%' /*OR CustomerName LIKE 'S%'
OR CustomerName LIKE 'T%'*/ OR CustomerName LIKE 'W%')
AND Country='USA'
ORDER BY CustomerName;
```