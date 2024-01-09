## React副作用进行网络请求

```jsx
useEffect(()=>{   
    async function fetchData(){      
       const res = await axios.get('http://geek.itheima.net/v1_0/channels')
       console.log(res)   
    } 
},[])
```