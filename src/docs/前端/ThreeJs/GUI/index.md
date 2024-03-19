```js
let eventObj = {
    Fullscreen: () => {
        document.body.requestFullscreen()
    },
    ExitFullscreen: () => {
        document.exitFullscreen()
    },
    Wireframe: () => {
        const show = (arr) => {
            arr.children.forEach(item => {
                if (item.children.length > 0) {
                    show(item)
                }
                item.material.wireframe = !item.material.wireframe
            })
        }
        show(scene)
    }
}
const gui = new GUI()
gui.add(eventObj, "Fullscreen").name("全屏")
gui.add(eventObj, "ExitFullscreen").name("退出全屏")
gui.add(eventObj, "Wireframe").name("线框")

// const folder1 = gui.addFolder("立方体1")
// folder1.addColor({ cubeColor: "#FF0000" }, "cubeColor").name("颜色").onChange((value: any) => {
//     cube.material.color.set(value)
// })
// folder1.add(cube.position, "x").min(-10).max(10).step(1)
// folder1.add(cube.position, "y").min(-10).max(10).step(1)
// folder1.add(cube.position, "z").min(-10).max(10).step(1)
```