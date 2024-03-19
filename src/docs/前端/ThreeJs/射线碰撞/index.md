```js
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
const historyColor = { value: null, flag: false }
window.addEventListener("click", (event) => {
    const x = event.clientX
    const y = event.clientY
    mouse.x = (x / window.innerWidth) * 2 - 1
    mouse.y = (y / window.innerHeight) * 2 - 1
    raycaster.setFromCamera(mouse, camera)
    const arr = raycaster.intersectObjects([cube1, cube2])
    if (arr.length > 0) {
        // 被点击过，需要还原
        if(historyColor.flag){
            historyColor.flag = false
            arr[0].object.material.color.set(historyColor.value)
            return
        }
        historyColor.value = arr[0].object.material.color.getHex()
        historyColor.flag = true
        arr[0].object.material.color.set(0xff0000)
    }
})
```