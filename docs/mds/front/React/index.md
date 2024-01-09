
## React路由传参

```
// query参数，用?和&拼接的参数
let [ params ] = useSearchParams()
let id = params.get('id')

// params路径参数
let params = useParams()
let id = params.id
```

## React嵌套路由

```
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      layout
      { /* 二级路由的path等于 一级path + 二级path  */ }
      <Link to="/board">board</Link>
      <Link to="/article">article</Link>
      { /* 二级路由出口 */ }
      <Outlet/>
    </div>
  )
}
export default Layout



<Routes>
  <Route path="/"  element={<Layout/>}>
    <Route path="board" element={ <Board/> } />
    <Route path="article" element={ <Article/> } />
  </Route>
   { /* 省略部分  */ }
</Routes>
```

## React404

```
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Board />} />
      <Route path="article" element={<Article />} />
    </Route>
    <Route path="*" element={<NotFound />}></Route>
  </Routes>
</BrowserRouter>
```

## React集中式路由

```
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'

import Layout from './pages/Layout'
import Board from './pages/Board'
import Article from './pages/Article'
import NotFound from './pages/NotFound'

// 1. 准备一个路由数组 数组中定义所有的路由对应关系
const routesList = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <Board />,
        index: true, // index设置为true 变成默认的二级路由
      },
      {
        path: 'article',
        element: <Article />,
      },
    ],
  },
  // 增加n个路由对应关系
  {
    path: '*',
    element: <NotFound />,
  },
]

// 2. 使用useRoutes方法传入routesList生成Routes组件
function WrapperRoutes() {
  let element = useRoutes(routesList)
  return element
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* 3. 替换之前的Routes组件 */}
        <WrapperRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
```

## React全局状态管理**Zustand**

```
import create from 'zustand'

const useCounterStore = create((set) => ({
  // 数据
  count: 0,
  // 修改数据的方法
  increase: () => set(state => ({ count: state.count + 1 })),
  decrease: () => set(state => ({ count: state.count - 1 }))
}))


export default useCounterStore
```

## React全局状态绑定到组件

```
import useCounterStore from './store'

const App = () => {
  const count = useCounterStore((state) => state.count)
  const decrease = useCounterStore((state) => state.increase)
  const increase = useCounterStore((state) => state.decrease)
  return (
    <div>
      <button onClick={decrease}>+</button>
      <span>{count}</span>
      <button onClick={increase}>-</button>
    </div>
  )
}

export default App
```

## 异步支持

```
import { useEffect } from 'react'
import useListStore from './store'

const App = () => {
  const list = useListStore((state) => state.list)
  const fetchList = useListStore((state) => state.fetchList)
  useEffect(() => {
    fetchList()
  }, [])
  return (
    <div>
      {JSON.stringify(list)}
    </div>
  )
}

export default App
```

## React中使用Redux

在React中使用Redux，官方要求安装两个其他插件，Redux Toolkit（RTK），React-redux。

安装

```
pnpm i @reduxjs/toolkit react-redux
```

设计目录

![](images/image.png)

编写

```
import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
    name:'user',
    initialState:{
        username: '张三'
    },
    reducers:{
        changeUsername(state, action){
            state.username = action.payload
        }
    }
})

// 方法暴露
export const { changeUsername } = userStore.actions

// reducer暴露
export default userStore.reducer
```

注册

store/index.ts

```
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/userStore";

const store = configureStore({
    reducer:{
        userReducer
    }
})

export default store
```

main.ts

```
<Provider store={store}>
  <App />
</Provider>
```

组件中的使用

```
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeUsername } from './store/modules/userStore'


function A() {
  const { username } = useSelector(state => state.userReducer)
  return <div>{username}</div>
}

function App() {
  const dispatcher = useDispatch()
  return (
    <>
      <A></A>
      <button onClick={ ()=> dispatcher(changeUsername('李四')) }>修改</button>
    </>
  )
}

export default App
```
