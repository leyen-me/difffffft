```js
// 方式一
let box = new THREE.Box3()
let arr = [sun, earth]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    element.geometry.computeBoundingBox()
    element.updateWorldMatrix(true, true)
    element.geometry.boundingBox?.applyMatrix4(element.matrixWorld)
    box.union(element.geometry.boundingBox)
}
let boxHelper = new THREE.Box3Helper(box, 0xff0000)
scene.add(boxHelper)

// 方式二
let box = new THREE.Box3()
let arr = [sun, earth]
for (let i = 0; i < arr.length; i++) {
    box.union(new THREE.Box3().setFromObject(arr[i]))
}
let boxHelper = new THREE.Box3Helper(box, 0xff0000)
scene.add(boxHelper)
```