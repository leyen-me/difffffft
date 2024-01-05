---
title: "ElementPlus多表单同时验证"
date: "2023-08-23"
categories: 
  - "前端"
---

## 1.用Promise创建验证规则

核心原理是利用Promise.all

const ruleVerify = ({ruleFromRef, index, errMessage = ""}) => {  
  return new Promise((resolve, reject) => {  
    if (!ruleFromRef) return  
    ruleFromRef.validate((valid, fields) => {  
      if (!valid) {  
        for (const key in fields) {  
          if (_Object_.prototype.hasOwnProperty.call(fields, key)) {  
            let element = fields\[key\]\[0\]  
            errMessage += '第' + (index + 1) + '行的'  
            errMessage += element.message  
            reject(new _Error_(errMessage))  
            break  
          }  
        }  
      } else {  
        resolve(errMessage)  
      }  
    })  
  })  
}

## 2.创建集合开始验证

const ruleVerifyPromiseList = \[\]  
  
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
  await _Promise_.all(ruleVerifyPromiseList)  
} catch (e) {  
  _ElMessage_.error(e.message)  
  return  
}
