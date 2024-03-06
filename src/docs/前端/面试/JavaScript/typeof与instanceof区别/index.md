`typeof` 和 `instanceof` 是 JavaScript 中用于检测变量类型的两个不同的操作符。

1. **typeof:**
   - `typeof` 是一个一元操作符，用于返回一个字符串，表示操作数的数据类型。
   - 它主要用于检测基本数据类型，如字符串、数字、布尔值、函数等。
   - `typeof` 对于对象类型（除了函数对象）返回 `"object"`，这可能导致一些混淆。

   ```javascript
   typeof 42;           // "number"
   typeof "hello";      // "string"
   typeof true;         // "boolean"
   typeof undefined;    // "undefined"
   typeof null;         // "object" (historical quirk, should be "object")
   typeof {};           // "object"
   typeof [];           // "object"
   typeof function(){}; // "function"
   ```

2. **instanceof:**
   - `instanceof` 是一个二元操作符，用于检测一个对象是否是某个构造函数的实例。
   - 它主要用于检测对象的原型链，判断一个对象是否属于某个类或继承自某个类。

   ```javascript
   var arr = [];
   arr instanceof Array;         // true
   arr instanceof Object;        // true (因为数组也是对象)

   function Person() {}
   var john = new Person();
   john instanceof Person;       // true
   john instanceof Object;       // true (所有对象都是 Object 的实例)
   ```

总体而言，`typeof` 用于检测数据类型，而 `instanceof` 用于检测对象的实例关系。需要注意的是，`typeof` 在处理对象时返回的结果是 "object"，而 `instanceof` 则可以更具体地检测对象是否是某个特定类型的实例。