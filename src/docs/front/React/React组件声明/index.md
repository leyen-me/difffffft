## React组件声明

```jsx
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