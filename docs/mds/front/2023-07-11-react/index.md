---
title: "React"
date: "2023-07-11"
categories: 
  - "前端"
---

## React脚手架

```
npx create-react-app react-basic
pnpm create vite
```

## Jsx

使用Html原生声明式写法，也想拥有JS的编程能力。Jsx是Js的语法扩展。

## Jsx列表渲染

```
function App(){
  // 列表渲染
  const hobbies = [
    {
      id: "1",
      title: "篮球",
    },
    {
      id: "2",
      title: "足球",
    },
  ];
  return (
    <div className="App">
      <ul>
        {hobbies.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
```

## Jsx条件渲染

```
const getHtag = (type) => {
  switch (type) {
    case 1:
      return <h1>{type}</h1>;
    case 2:
      return <h1>{type}</h1>;
    case 3:
      return <h1>{type}</h1>;
    default:
      return <h1>{type}</h1>;
  }
};

function App() {
  // 变量
  const name = "小明";

  // 函数，表达式
  const getAge = () => {
    return 18;
  };

  // 三元条件渲染
  const flag1 = false;

  // 逻辑与条件渲染
  const flag2 = false;

  return (
    <div className="App">
      <h1>姓名：{name}</h1>
      <h1>年龄： {getAge()}</h1>
      {flag1 ? <h1>嗜好：</h1> : null}
      {flag2 && <h1>嗜好：</h1>}
      {getHtag(1)}
    </div>
  );
}

export default App;
```

## React事件绑定

```
function App() {
  const onClick = (name: string, e: MouseEvent) => {
      console.log(name,e);
  }
  return (
    <>
      <button onClick={(e) => onClick('小明', e)}>点击</button>
    </>
  )
}
```

## React样式处理

```
import './App.css'

function App() {
  const name = "小明";
  return (
    <div className="App">
      <h1 style={{ color: "#F00" }} className="name">姓名：{name}</h1>
    </div>
  );
}

export default App;
```

## React幽灵组件

```
import "./App.css";

function App() {
  const name = "小明";
  return (
    <>
      <div className="App">
        <h1 style={{ color: "#F00" }} className="name">
          姓名：{name}
        </h1>
      </div>
    </>
  );
}

export default App;
```

## React组件声明

```
import React, { useState } from "react"
import "./App.css"

// 函数式组件
function H1 (props) {
  return <span style={{ fontSize: '16px', color: 'red' }} onClick={props.onClick}>{props.name}</span>
}

// 类式组件
class H2 extends React.Component {
  state = {
    name: "",
    onClick () { }
  }
  constructor(props) {
    super(props)
    this.state.name = props.name
    this.onClick = this.props.onClick
  }
  render () {
    return (
      <span
        style={{ fontSize: '16px', color: 'red' }}
        onClick={this.onClick}>
        {this.state.name}
      </span>
    )
  }
}

function App () {
  const [name, setName] = useState("小明")
  const onClick = () => {
    setName("张三")
  }
  return (
    <>
      <H1 name={name} onClick={onClick}></H1>
      <H2 name={name} onClick={onClick}></H2>
    </>
  )
}

export default App
```

## React组件状态

useState是用来声明状态变量的一个东西。和普通JS变量不同的是，状态变量一旦发生变化，组件的视图UI也会跟着变化。（数据驱动视图）

在React中，状态被认为是只读的，我应该始终替换它，而不是修改它。直接修改并不能触发更新。

```
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

## React动态Class之classnames

```
pnpm i classnames

className = { classNames('nav-item', { active : type === item.type }) }
```

## React获取DOM元素

```
const divRef = useRef(null)

<div ref={ divRef }></div>
```

## 跨组件通信

```
const MsgProvider = createContext("")

function A(props:any){
  return <div>{ props.children }</div>
}

function B(){
  const msg = useContext(MsgProvider)
  return <div>{ msg }</div>
}

function App() {
  const msg = "msg"
  return (
    <>
      <MsgProvider.Provider value={ msg }>
        <A>
          <B></B>
        </A>
      </MsgProvider.Provider>
    </>
  )
}
```

## React简单插槽

```
function Hello(props:any){
  return <span>Hello, { props.children }</span>
}

function App() {

  return (
    <>
      <Hello>
        <span>World!</span>
      </Hello>
    </>
  )
}
```

## 插槽

```
import React, { createContext, useState } from "react"
import "./App.css"

const { Provider, Consumer } = createContext()


function H2 () {
  return (
    <Consumer>
      {value => <span style={{ fontSize: '16px', color: 'red' }}>{value.name}</span>}
    </Consumer>
  )
}

function H1 ({ name, children }) {
  return (
    <Provider value={{ name }}>
      {children}
    </Provider>
  )
}

function App () {
  const [name, setName] = useState("小明")
  console.log(setName)
  return (
    <>
      <H1 name={name}>
        <H2></H2>
      </H1>
    </>
  )
}

export default App
```

## React组件参数默认值

```
function List({pageSize = 10}) {
  return (
    <div>
      此处展示props的默认值：{ pageSize }
    </div>
  )
}

// 不传入pageSize属性
<List />
```

## React副作用

useEffect用于在React组件中创建不是由事件引起，而是由渲染本身引起的操作，比如发送AJAX请求，更改DOM元素。

```
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

```
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

```
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

## React清理副作用

```
import { useEffect, useState } from "react"


const App = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => {
      // 用来清理副作用的事情
      clearInterval(timerId)
    }
  }, [count])
  return (
    <div>
      {count}
    </div>
  )
}

export default App
```

## React副作用进行网络请求

```
useEffect(()=>{   
    async function fetchData(){      
       const res = await axios.get('http://geek.itheima.net/v1_0/channels')                            console.log(res)   
    } 
},[])
```

## React获取真实Dom

```
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

## React路由

```
// 基础配置
// 引入必要的内置组件
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// 准备俩个路由组件

const Home = () => <div>this is home</div>
const About = () => <div>this is about</div>

function App() {
  return (
    <div className="App">
      {/* 按照规则配置路由 */}
      <BrowserRouter>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        
        {/* 满足条件的会被渲染到这里 */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
```

## React路由编程式导航

```
// 导入useNavigate函数
import { useNavigate } from 'react-router-dom'
const Home = () => {
  // 执行函数
  const navigate = useNavigate()
  return (
    <div>
      Home
      <button onClick={ ()=> navigate('/about') }> 跳转关于页 </button>
    </div>
  )
}

export default Home
```

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
