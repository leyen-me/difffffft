```js
// 首先，要有光
const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)

// 渲染器要开始投影（全局控制）
renderer.shadowMap.enabled = true

// 光，默认是关了阴影投射的，要打开
directionalLight.castShadow = true
// 阴影模糊度
directionalLight.shadow.radius = 20
// 阴影细致
directionalLight.shadow.mapSize.set(4096, 4096)


// 物体，默认是关了投影的，要打开
sun.castShadow = true

// 投影，有那些物体能够接受阴影，就加上，平面可以接受投影，球也可以接受
// 比如日全食啥的
plane.receiveShadow = true
```