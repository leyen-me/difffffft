
# 图解

![Alt text](images/1.png)

## 交叉连接查询

:::tip 注意
交叉连接会产生笛卡尔乘积
:::

```sql
-- 语法
select * from A,B;
```

## 内连接查询

```sql
-- 隐式内连接
select * from A,B where 条件

-- 显示内连接
select * from A inner join B on 条件 
```

## 外连接查询

```sql
-- 左外连接
select * from A left outer join B on 条件

-- 右外连接
select * from B left outer join A on 条件

-- 满外连接
select * from A full outer join B on 条件
```

## 自连接查询

```sql
-- 内连接实现
SELECT 克隆表.*, 本表.* FROM 克隆表, 本表 WHERE 本表.pid = 克隆表.id 

-- 外连接实现
SELECT 本表.*, 克隆表.name FROM 本表 LEFT JOIN 克隆表 on 本表.pid = 克隆表.id
```

## 联合查询

```sql
-- 条件，列数保持一致

-- 直接合并
select * from xxx
union all
select * from yyy


-- 合并后去重
select * from xxx
union
select * from yyy
```