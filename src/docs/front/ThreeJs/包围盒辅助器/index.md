```js
// 计算包围盒
earth.geometry.computeBoundingBox()
// 拿到包围盒
const box = earth.geometry.boundingBox
// 更新世界矩阵
sun.updateWorldMatrix(true, true)
// 应用世界矩阵
box.applyMatrix4(earth.matrixWorld)
// 创建包围盒的辅助器
const boxHelper = new THREE.Box3Helper(box, 0xff0000)
// 显示包围盒
scene.add(boxHelper)
```