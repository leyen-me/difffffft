## 1.用Promise创建验证规则

核心原理是利用Promise.all

```js
const ruleVerify = ({ruleFromRef, index, errMessage = ""}) => {  
  return new Promise((resolve, reject) => {  
    if (!ruleFromRef) return  
    ruleFromRef.validate((valid, fields) => {  
      if (!valid) {  
        for (const key in fields) {  
          if (Object.prototype.hasOwnProperty.call(fields, key)) {  
            let element = fields[key][0]  
            errMessage += '第' + (index + 1) + '行的'  
            errMessage += element.message  
            reject(new Error(errMessage))  
            break  
          }  
        }  
      } else {  
        resolve(errMessage)  
      }  
    })  
  })  
}
```

## 2.创建集合开始验证

```js
const ruleVerifyPromiseList = []  

for (const ruleFromRef of ruleFormRefs.value) {  
  const index = ruleFormRefs.value.indexOf(ruleFromRef);  
  ruleVerifyPromiseList.push(ruleVerify({  
    ruleFromRef,  
    index,  
    errMessage: ''  
  }))  
}  
  
// 多表单同时校验  
try {  
  await Promise.all(ruleVerifyPromiseList)  
} catch (e) {  
  ElMessage.error(e.message)  
  return  
}
```