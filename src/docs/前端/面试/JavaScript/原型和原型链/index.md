在JavaScript中，每个对象都有一个原型（prototype）。原型是一个对象，其他对象可以通过它实现属性和方法的继承。当访问一个对象的属性或方法时，JavaScript引擎会首先查找对象本身是否有这个属性或方法，如果没有，它会去查找对象的原型，以此类推，直到找到或者到达原型链的末尾。

### 特点：

1. **原型：**
   - 每个对象都有一个原型对象，通过 `Object.prototype` 访问。
   - 通过对象字面量创建的对象的原型是 `Object.prototype`。
   - 可以通过 `Object.create()` 方法创建具有指定原型的新对象。

   ```javascript
   var obj = {}; // 原型是 Object.prototype
   var newObj = Object.create(obj); // 新对象的原型是 obj
   ```

2. **原型链：**
   - 如果一个对象的原型不是 `Object.prototype`，那么它的原型也有可能有自己的原型，这样就形成了原型链。
   - 原型链是由对象的原型属性形成的链状结构，最终指向 `Object.prototype`，形成一个原型链。

   ```javascript
   var obj = {}; // 原型是 Object.prototype
   var newObj = Object.create(obj); // 新对象的原型是 obj，形成原型链
   ```

3. **继承：**
   - 原型链实现了对象之间的继承关系。一个对象可以继承其原型对象的属性和方法。
   - 当访问一个对象的属性或方法时，如果对象本身没有，JavaScript引擎会沿着原型链向上查找，直到找到对应的属性或方法或者到达原型链的末尾。

   ```javascript
   function Animal(name) {
       this.name = name;
   }

   Animal.prototype.sayHello = function() {
       console.log("Hello, I'm " + this.name);
   };

   function Dog(name, breed) {
       Animal.call(this, name);
       this.breed = breed;
   }

   Dog.prototype = Object.create(Animal.prototype);

   var myDog = new Dog("Buddy", "Golden Retriever");
   myDog.sayHello(); // 继承自 Animal 的方法
   ```

4. **构造函数和原型的关系：**
   - 每个函数都有一个 `prototype` 属性，它指向一个对象，这个对象就是该函数的原型。
   - 在使用构造函数创建对象时，对象的 `__proto__` 指向构造函数的 `prototype`。

   ```javascript
   function Person(name) {
       this.name = name;
   }

   var john = new Person("John");
   console.log(john.__proto__ === Person.prototype); // true
   ```

原型和原型链是JavaScript中实现继承和对象间共享属性的基础概念。通过理解原型和原型链，可以更好地利用JavaScript的面向对象特性。