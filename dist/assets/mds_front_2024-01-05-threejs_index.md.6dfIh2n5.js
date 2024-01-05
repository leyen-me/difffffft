import{_ as s,o as n,c as a,R as p}from"./chunks/framework.vVZmquDz.js";const m=JSON.parse('{"title":"ThreeJs","description":"","frontmatter":{"title":"ThreeJs","date":"2024-01-05","categories":["前端"]},"headers":[],"relativePath":"mds/front/2024-01-05-threejs/index.md","filePath":"mds/front/2024-01-05-threejs/index.md","lastUpdated":1704444471000}'),e={name:"mds/front/2024-01-05-threejs/index.md"},l=p(`<p>安装依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm i three</span></span>
<span class="line"><span>pnpm i @types/three -D</span></span></code></pre></div><p>导入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import * as THREE from &quot;three&quot;</span></span></code></pre></div><p>随界面改变而改变</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 监听窗口的变化</span></span>
<span class="line"><span>window.addEventListener(&quot;resize&quot;, () =&gt; {</span></span>
<span class="line"><span>    width = window.innerWidth</span></span>
<span class="line"><span>    height = window.innerHeight</span></span>
<span class="line"><span>    renderer.setSize(width, height)</span></span>
<span class="line"><span>    camera.aspect = width / height</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //更新相机投影矩阵</span></span>
<span class="line"><span>    camera.updateProjectionMatrix()</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>GUI</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>et eventObj = {</span></span>
<span class="line"><span>    Fullscreen: () =&gt; {</span></span>
<span class="line"><span>        document.body.requestFullscreen()</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    ExitFullscreen: () =&gt; {</span></span>
<span class="line"><span>        document.exitFullscreen()</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    Wireframe: () =&gt; {</span></span>
<span class="line"><span>        const show = (arr) =&gt; {</span></span>
<span class="line"><span>            arr.children.forEach(item =&gt; {</span></span>
<span class="line"><span>                if (item.children.length &gt; 0) {</span></span>
<span class="line"><span>                    show(item)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                item.material.wireframe = !item.material.wireframe</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        show(scene)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const gui = new GUI()</span></span>
<span class="line"><span>gui.add(eventObj, &quot;Fullscreen&quot;).name(&quot;全屏&quot;)</span></span>
<span class="line"><span>gui.add(eventObj, &quot;ExitFullscreen&quot;).name(&quot;退出全屏&quot;)</span></span>
<span class="line"><span>gui.add(eventObj, &quot;Wireframe&quot;).name(&quot;线框&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// const folder1 = gui.addFolder(&quot;立方体1&quot;)</span></span>
<span class="line"><span>// folder1.addColor({ cubeColor: &quot;#FF0000&quot; }, &quot;cubeColor&quot;).name(&quot;颜色&quot;).onChange((value: any) =&gt; {</span></span>
<span class="line"><span>//     cube.material.color.set(value)</span></span>
<span class="line"><span>// })</span></span>
<span class="line"><span>// folder1.add(cube.position, &quot;x&quot;).min(-10).max(10).step(1)</span></span>
<span class="line"><span>// folder1.add(cube.position, &quot;y&quot;).min(-10).max(10).step(1)</span></span>
<span class="line"><span>// folder1.add(cube.position, &quot;z&quot;).min(-10).max(10).step(1)</span></span></code></pre></div><p>射线碰撞</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const raycaster = new THREE.Raycaster()</span></span>
<span class="line"><span>const mouse = new THREE.Vector2()</span></span>
<span class="line"><span>const historyColor = { value: null, flag: false }</span></span>
<span class="line"><span>window.addEventListener(&quot;click&quot;, (event) =&gt; {</span></span>
<span class="line"><span>    const x = event.clientX</span></span>
<span class="line"><span>    const y = event.clientY</span></span>
<span class="line"><span>    mouse.x = (x / window.innerWidth) * 2 - 1</span></span>
<span class="line"><span>    mouse.y = (y / window.innerHeight) * 2 - 1</span></span>
<span class="line"><span>    raycaster.setFromCamera(mouse, camera)</span></span>
<span class="line"><span>    const arr = raycaster.intersectObjects([cube1, cube2])</span></span>
<span class="line"><span>    if (arr.length &gt; 0) {</span></span>
<span class="line"><span>        // 被点击过，需要还原</span></span>
<span class="line"><span>        if(historyColor.flag){</span></span>
<span class="line"><span>            historyColor.flag = false</span></span>
<span class="line"><span>            arr[0].object.material.color.set(historyColor.value)</span></span>
<span class="line"><span>            return</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        historyColor.value = arr[0].object.material.color.getHex()</span></span>
<span class="line"><span>        historyColor.flag = true</span></span>
<span class="line"><span>        arr[0].object.material.color.set(0xff0000)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>轨道控制器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 添加轨道控制器, 轨道可是是其他元素</span></span>
<span class="line"><span>const controls = new OrbitControls(camera, renderer.domElement)</span></span>
<span class="line"><span>// 阻尼效果</span></span>
<span class="line"><span>controls.enableDamping = true</span></span>
<span class="line"><span>// 阻尼系数</span></span>
<span class="line"><span>controls.dampingFactor = 0.05</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 动起来，逐帧渲染</span></span>
<span class="line"><span>function animate() {</span></span>
<span class="line"><span>    controls.update()</span></span>
<span class="line"><span>    requestAnimationFrame(animate)</span></span>
<span class="line"><span>    renderer.render(scene, camera)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>世界坐标助手</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const axesHelper = new THREE.AxesHelper(5)</span></span>
<span class="line"><span>scene.add(axesHelper)</span></span></code></pre></div><p>ExrLoader（通常用来加载场景）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { EXRLoader } from &#39;three/addons/loaders/EXRLoader.js&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const pmremGenerator = new THREE.PMREMGenerator(renderer);</span></span>
<span class="line"><span>pmremGenerator.compileEquirectangularShader();</span></span>
<span class="line"><span>const loader = new EXRLoader();</span></span>
<span class="line"><span>loader.load(&#39;./assets/kloppenheim_02_4k.exr&#39;, function (texture: any) {</span></span>
<span class="line"><span>    const envMap = pmremGenerator.fromEquirectangular(texture).texture;</span></span>
<span class="line"><span>    envMap.mapping = THREE.EquirectangularReflectionMapping</span></span>
<span class="line"><span>    scene.environment = envMap;</span></span>
<span class="line"><span>    scene.background = envMap;</span></span>
<span class="line"><span>    pmremGenerator.dispose();</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>GLTFLoader（通常用来加载模型）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const gltfLoader = new GLTFLoader()</span></span>
<span class="line"><span>gltfLoader.load(</span></span>
<span class="line"><span>    &quot;./assets/gltf/Nefertiti/Nefertiti.glb&quot;,</span></span>
<span class="line"><span>    (gltf) =&gt; {</span></span>
<span class="line"><span>        gltf.scene.scale.set(4, 4, 4)</span></span>
<span class="line"><span>        scene.add(gltf.scene)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>scene.background = new THREE.Color(0x999999)</span></span></code></pre></div><p>模型 = 几何 + 材质</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const loader1 = new THREE.TextureLoader();</span></span>
<span class="line"><span>const textur1 = loader1.load(&#39;./assets/jpg/rocks_ground_01_diff_4k.jpg&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const geometry1 = new THREE.SphereGeometry(1, 32, 32)</span></span>
<span class="line"><span>const material1 = new THREE.MeshBasicMaterial({ map: textur1 })</span></span>
<span class="line"><span>const cube1 = new THREE.Mesh(geometry1, material1)</span></span>
<span class="line"><span>cube1.position.x = -2</span></span>
<span class="line"><span>cube1.scale.set(0.5, 0.5, 0.5)</span></span>
<span class="line"><span>scene.add(cube1)</span></span></code></pre></div><p>补间动画</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import TWEEN from &#39;three/addons/libs/tween.module.js&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tween = new TWEEN.Tween(earth.position)</span></span>
<span class="line"><span>tween.to({ y: 4 }, 1000)</span></span>
<span class="line"><span>// 重复</span></span>
<span class="line"><span>// tween.repeat(Infinity)</span></span>
<span class="line"><span>// 反向</span></span>
<span class="line"><span>// tween.yoyo(true)</span></span>
<span class="line"><span>// 延迟</span></span>
<span class="line"><span>// tween.delay(1000)</span></span>
<span class="line"><span>// 曲线</span></span>
<span class="line"><span>tween.easing(TWEEN.Easing.Quadratic.InOut)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tween2 = new TWEEN.Tween(earth.position)</span></span>
<span class="line"><span>tween2.to({ y: -4 }, 1000)</span></span>
<span class="line"><span>tween.chain(tween2)</span></span>
<span class="line"><span>tween2.chain(tween)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 开始</span></span>
<span class="line"><span>tween.start()</span></span></code></pre></div><p>法向量辅助器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const sunVertexNormalsHelper = new VertexNormalsHelper(sun, 0.2, 0x00ff00)</span></span>
<span class="line"><span>scene.add(sunVertexNormalsHelper)</span></span></code></pre></div>`,24),t=[l];function i(c,o,r,d,u,h){return n(),a("div",null,t)}const v=s(e,[["render",i]]);export{m as __pageData,v as default};
