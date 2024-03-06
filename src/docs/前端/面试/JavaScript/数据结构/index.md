JavaScript中有许多常见的数据结构，它们用于存储和组织数据。以下是一些常见的JavaScript数据结构：

1. **数组（Array）：**
   - 描述：数组是一种有序的集合，可以存储多个元素。
   - 示例：
     ```javascript
     let myArray = [1, 2, 3, 4, 5];
     ```

2. **对象（Object）：**
   - 描述：对象是无序的键值对的集合。
   - 示例：
     ```javascript
     let myObject = { name: 'John', age: 25, city: 'New York' };
     ```

3. **栈（Stack）：**
   - 描述：栈是一种后进先出（LIFO）的数据结构，只允许在一端进行插入和删除操作。
   - 示例：
     ```javascript
     let myStack = [];
     myStack.push(1);
     myStack.push(2);
     let poppedElement = myStack.pop(); // 2
     ```

4. **队列（Queue）：**
   - 描述：队列是一种先进先出（FIFO）的数据结构，允许在一端添加元素，在另一端移除元素。
   - 示例：
     ```javascript
     let myQueue = [];
     myQueue.push(1);
     myQueue.push(2);
     let dequeuedElement = myQueue.shift(); // 1
     ```

5. **链表（Linked List）：**
   - 描述：链表是一种由节点组成的数据结构，每个节点包含数据和指向下一个节点的引用。
   - 示例：
     ```javascript
     class Node {
       constructor(data, next = null) {
         this.data = data;
         this.next = next;
       }
     }

     let myLinkedList = new Node(1, new Node(2, new Node(3)));
     ```

6. **集合（Set）：**
   - 描述：集合是一种无序且唯一的元素集合。
   - 示例：
     ```javascript
     let mySet = new Set([1, 2, 3, 3, 4]);
     ```

7. **映射（Map）：**
   - 描述：映射是一种键值对的集合，每个键唯一对应一个值。
   - 示例：
     ```javascript
     let myMap = new Map();
     myMap.set('name', 'John');
     myMap.set('age', 25);
     ```

这些是JavaScript中一些常见的数据结构，它们可以用于不同的场景和问题。