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