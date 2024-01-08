---
title: "ThreeJs"
date: "2024-01-05"
categories: 
  - "前端"
---

安装依赖

```shell
pnpm i three
pnpm i @types/three -D
```

导入

```js
import * as THREE from "three"
```

随界面改变而改变

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

GUI

```js
et eventObj = {
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

射线碰撞

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

轨道控制器

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

世界坐标助手

```js
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)
```

ExrLoader（通常用来加载场景）

```js
import { EXRLoader } from 'three/addons/loaders/EXRLoader.js';

const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();
const loader = new EXRLoader();
loader.load('./assets/kloppenheim_02_4k.exr', function (texture: any) {
    const envMap = pmremGenerator.fromEquirectangular(texture).texture;
    envMap.mapping = THREE.EquirectangularReflectionMapping
    scene.environment = envMap;
    scene.background = envMap;
    pmremGenerator.dispose();
});
```

GLTFLoader（通常用来加载模型）

```js
const gltfLoader = new GLTFLoader()
gltfLoader.load(
    "./assets/gltf/Nefertiti/Nefertiti.glb",
    (gltf) => {
        gltf.scene.scale.set(4, 4, 4)
        scene.add(gltf.scene)
    }
)
scene.background = new THREE.Color(0x999999)
```

模型 = 几何 + 材质

```js
const loader1 = new THREE.TextureLoader();
const textur1 = loader1.load('./assets/jpg/rocks_ground_01_diff_4k.jpg');

const geometry1 = new THREE.SphereGeometry(1, 32, 32)
const material1 = new THREE.MeshBasicMaterial({ map: textur1 })
const cube1 = new THREE.Mesh(geometry1, material1)
cube1.position.x = -2
cube1.scale.set(0.5, 0.5, 0.5)
scene.add(cube1)
```

补间动画

```js
import TWEEN from 'three/addons/libs/tween.module.js';

const tween = new TWEEN.Tween(earth.position)
tween.to({ y: 4 }, 1000)
// 重复
// tween.repeat(Infinity)
// 反向
// tween.yoyo(true)
// 延迟
// tween.delay(1000)
// 曲线
tween.easing(TWEEN.Easing.Quadratic.InOut)


const tween2 = new TWEEN.Tween(earth.position)
tween2.to({ y: -4 }, 1000)
tween.chain(tween2)
tween2.chain(tween)

// 开始
tween.start()
```

法向量辅助器

```js
const sunVertexNormalsHelper = new VertexNormalsHelper(sun, 0.2, 0x00ff00)
scene.add(sunVertexNormalsHelper)
```

包围盒辅助器

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

多个物体的包围盒

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

边缘几何体展示线框
```js

```