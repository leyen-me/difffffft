## 跨组件通信

```jsx
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