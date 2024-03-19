## 什么是子查询

子查询是指在一个查询语句内部嵌套另一个查询语句的查询结构。在关系型数据库管理系统（RDBMS）中，子查询通常用于在主查询的条件或表达式中使用另一个查询的结果。

子查询可以出现在 SELECT、FROM、WHERE 或 HAVING 子句中，具体取决于查询的需求。子查询的结果可以是单个值、单列值集合、多列值集合或表格。

## 子查询分类

| 名称       | 描述     |
| ---------- | -------- |
| 标量子查询 | 一行一列 |
| 列子查询   | 一列     |
| 行子查询   | 一行     |
| 表子查询   | 多行多列 |

## 标量子查询

```sql
SELECT * FROM user WHERE user.dept_id = (SELECT id FROM dept WHERE dept.`name` = '天津')
```

## 列子查询

```sql
SELECT * FROM user WHERE user.dept_id IN (SELECT id FROM dept)

SELECT * FROM user WHERE salary > all(SELECT salary FROM user WHERE dept_id = (SELECT id FROM dept WHERE `name` = '天津'))

SELECT * FROM user WHERE salary > any(SELECT salary FROM user WHERE dept_id = (SELECT id FROM dept WHERE `name` = '天津'))

SELECT * FROM user WHERE salary > some(SELECT salary FROM user WHERE dept_id = (SELECT id FROM dept WHERE `name` = '天津'))
```

## 行子查询

```sql
SELECT * FROM user WHERE (dept_id,salary) = (SELECT dept_id,salary FROM user WHERE dept_id = 1 and salary = 40)
```

## 表子查询

```sql
SELECT * FROM user WHERE (dept_id,salary) IN (SELECT dept_id,salary FROM user WHERE dept_id = 1 or salary = 40)
```