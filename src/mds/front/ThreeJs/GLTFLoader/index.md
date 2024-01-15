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