## React副作用

useEffect用于在React组件中创建不是由事件引起，而是由渲染本身引起的操作，比如发送AJAX请求，更改DOM元素。

```jsx
import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
 
  useEffect(()=>{
    // dom操作
    document.title = `当前已点击了${count}次`
  })
  return (
    <button onClick={() => { setCount(count + 1) }}>{count}</button>
  )
}

export default App
```

```jsx
// 组件首次渲染执行一次
// 以及不管是哪个状态更改引起组件更新时都会重新执行
useEffect(()=>{
    console.log('副作用执行了')
})
```

```
// 组件只在首次渲染时执行一次
useEffect(()=>{
	 console.log('副作用执行了')
},[])
```

```jsx
// 副作用函数在首次渲染时执行，在依赖项发生变化时重新执行
function App() {  
    const [count, setCount] = useState(0)  
    const [name, setName] = useState('zs') 
    
    useEffect(() => {    
        console.log('副作用执行了')  
    }, [count])  
    
    return (    
        <>      
         <button onClick={() => { setCount(count + 1) }}>{count}</button>      
         <button onClick={() => { setName('cp') }}>{name}</button>    
        </>  
    )
}
```