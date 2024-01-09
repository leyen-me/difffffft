```js
// 监听窗口的变化
window.addEventListener("resize", () => {
    width = window.innerWidth
    height = window.innerHeight
    renderer.setSize(width, height)
    camera.aspect = width / height

    //更新相机投影矩阵
    camera.updateProjectionMatrix()
})
```