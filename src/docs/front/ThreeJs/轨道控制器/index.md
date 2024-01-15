```js
// 添加轨道控制器, 轨道可是是其他元素
const controls = new OrbitControls(camera, renderer.domElement)
// 阻尼效果
controls.enableDamping = true
// 阻尼系数
controls.dampingFactor = 0.05

// 动起来，逐帧渲染
function animate() {
    controls.update()
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
```