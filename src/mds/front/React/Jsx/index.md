## Jsx

使用Html原生声明式写法，也想拥有JS的编程能力。Jsx是Js的语法扩展。

## Jsx列表渲染

```jsx
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

```jsx
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