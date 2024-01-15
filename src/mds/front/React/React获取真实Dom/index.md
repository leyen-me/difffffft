## React获取真实Dom

```jsx
// 函数组件由于没有实例，不能使用ref获取，如果想获取组件实例，必须是类组件
import { useEffect, useRef } from 'react'
function App() {  
    const h1Ref = useRef(null)  
    useEffect(() => {    
        console.log(h1Ref)  
    },[])  
    return (    
        <div>      
            <h1 ref={ h1Ref }>this is h1</h1>    
        </div>  
    )
}
export default App
```