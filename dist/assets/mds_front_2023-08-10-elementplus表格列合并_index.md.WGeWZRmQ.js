import{_ as n,o as s,c as a,R as p}from"./chunks/framework.vVZmquDz.js";const x=JSON.parse('{"title":"ElementPlus表格列合并","description":"","frontmatter":{"title":"ElementPlus表格列合并","date":"2023-08-10","categories":["前端"]},"headers":[],"relativePath":"mds/front/2023-08-10-elementplus表格列合并/index.md","filePath":"mds/front/2023-08-10-elementplus表格列合并/index.md","lastUpdated":1704444471000}'),e={name:"mds/front/2023-08-10-elementplus表格列合并/index.md"},l=p(`<p>对特定的列，值相同的列进行合并处理</p><p>前提：排序之后使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const arraySpanMethod = (tableData) =&gt; {</span></span>
<span class="line"><span>  return ({ row, column, rowIndex, columnIndex }) =&gt; {</span></span>
<span class="line"><span>    if (columnIndex === 0) {</span></span>
<span class="line"><span>      // 获取当前单元格的值</span></span>
<span class="line"><span>      const currentValue = row[column.property];</span></span>
<span class="line"><span>      // 获取上一行相同列的值</span></span>
<span class="line"><span>      const preRow = tableData[rowIndex - 1];</span></span>
<span class="line"><span>      const preValue = preRow ? preRow[column.property] : null;</span></span>
<span class="line"><span>      // 如果当前值和上一行的值相同，则将当前单元格隐藏</span></span>
<span class="line"><span>      if (currentValue === preValue) {</span></span>
<span class="line"><span>        return { rowspan: 0, colspan: 0 };</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        // 否则计算当前单元格应该跨越多少行</span></span>
<span class="line"><span>        let rowspan = 1;</span></span>
<span class="line"><span>        for (let i = rowIndex + 1; i &lt; tableData.length; i++) {</span></span>
<span class="line"><span>          const nextRow = tableData[i];</span></span>
<span class="line"><span>          const nextValue = nextRow[column.property];</span></span>
<span class="line"><span>          if (nextValue === currentValue) {</span></span>
<span class="line"><span>            rowspan++;</span></span>
<span class="line"><span>          } else {</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return { rowspan, colspan: 1 };</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,3),t=[l];function c(o,i,r,d,u,_){return s(),a("div",null,t)}const f=n(e,[["render",c]]);export{x as __pageData,f as default};
