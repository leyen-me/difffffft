# 外键约束

约束值的范围是主表的主键范围内

## 创建外键约束

```sql
-- 主表

create table if not exists dept(
    deptno varchar(20) primary key, -- 部门编号
    name varchar(20) --部门名称
)

-- 从表
create table if not exists emp(
    eid varchar(20) primary key, -- 员工编号
    ename varchar(20), -- 员工名字
    age int, -- 员工年龄
    dept_id varchar(20), -- 员工部门
    constraint emp_fk foreign key (dept_id) references dept (deptno) -- 外键约束
)
```

## 修改外键约束

```sql
-- 修改的方式
alter table emp add constraint emp_fk foreign key (dept_id) references dept (deptno)

-- 删除外键约束
alter table emp drop foreign key (emp_fk)
```

## 删除注意事项

```
主表不能随便删除，从表可以随意删除
```