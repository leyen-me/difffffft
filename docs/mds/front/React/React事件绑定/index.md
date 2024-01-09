## React事件绑定

```jsx
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