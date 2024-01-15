## React插槽

```jsx
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