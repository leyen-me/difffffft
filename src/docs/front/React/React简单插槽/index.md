## React简单插槽

```jsx
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