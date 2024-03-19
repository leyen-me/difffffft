## React组件状态

useState是用来声明状态变量的一个东西。和普通JS变量不同的是，状态变量一旦发生变化，组件的视图UI也会跟着变化。（数据驱动视图）

在React中，状态被认为是只读的，我应该始终替换它，而不是修改它。直接修改并不能触发更新。

```jsx
import { useState } from 'react'

function App() {
  // 参数：状态初始值比如,传入 0 表示该状态的初始值为 0
  // 返回值：数组,包含两个值：1 状态值（state） 2 修改该状态的函数（setState）
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => { setCount(count + 1) }}>{count}</button>
  )
}
export default App
```