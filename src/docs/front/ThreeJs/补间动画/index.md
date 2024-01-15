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