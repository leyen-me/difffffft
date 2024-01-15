对特定的列，值相同的列进行合并处理

前提：排序之后使用

```js
const arraySpanMethod = (tableData) => {
  return ({ row, column, rowIndex, columnIndex }) => {
    if (columnIndex === 0) {
      // 获取当前单元格的值
      const currentValue = row[column.property];
      // 获取上一行相同列的值
      const preRow = tableData[rowIndex - 1];
      const preValue = preRow ? preRow[column.property] : null;
      // 如果当前值和上一行的值相同，则将当前单元格隐藏
      if (currentValue === preValue) {
        return { rowspan: 0, colspan: 0 };
      } else {
        // 否则计算当前单元格应该跨越多少行
        let rowspan = 1;
        for (let i = rowIndex + 1; i < tableData.length; i++) {
          const nextRow = tableData[i];
          const nextValue = nextRow[column.property];
          if (nextValue === currentValue) {
            rowspan++;
          } else {
            break;
          }
        }
        return { rowspan, colspan: 1 };
      }
    }
  }
}
```
