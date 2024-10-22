# MySql 运算符

## 算数运算符

| 算术运算符 | 说明           |
| ---------- | -------------- |
| +          | 加法           |
| -          | 减法           |
| *          | 乘法           |
| /          | 除法           |
| % 或 MOD   | 取模，即求余数 |

## 比较运算符

| 比较运算符      | 说明                                   |
| --------------- | -------------------------------------- |
| =               | 等于                                   |
| <               | 小于                                   |
| <=              | 小于等于                               |
| >               | 大于                                   |
| >=              | 大于等于                               |
| <> 或 !=        | 不等于                                 |
| <=>             | 安全等于（NULL-safe equal to）         |
| LIKE            | 模式匹配，%匹配任意字符，_匹配单个字符 |
| NOT LIKE        | 不符合模式匹配                         |
| IN              | 在指定集合内                           |
| NOT IN          | 不在指定集合内                         |
| BETWEEN AND     | 在两个值之间                           |
| NOT BETWEEN AND | 不在两个值之间                         |
| IS NULL         | 为 NULL                                |
| IS NOT NULL     | 不为 NULL                              |
| LEAST           | 两个和多个参数值，返回最小值           |
| GREATEST        | 两个和多个参数值，返回最小值           |
| REGEXP          | 正则表达式匹配                         |

## 逻辑运算符

| 逻辑运算符 | 说明                             |
| ---------- | -------------------------------- |
| AND        | 逻辑与，当所有条件都为真时返回真 |
| OR         | 逻辑或，当任一条件为真时返回真   |
| NOT        | 逻辑非，逆转条件的结果           |
| XOR        | 逻辑异或，当条件结果不同时返回真 |
| &&         | 等同于 AND                       |
| \|\|       | 等同于 OR                        |

## 位运算符

:::tip 常用地方
权限设计
:::

| 位运算符 | 说明            |
| -------- | --------------- |
| &        | 按位与（AND）   |
| \|       | 按位或（OR）    |
| ^        | 按位异或（XOR） |
| ~        | 按位取反（NOT） |
| <<       | 左移            |
| >>       | 右移            |