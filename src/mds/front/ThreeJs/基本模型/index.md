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