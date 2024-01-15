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