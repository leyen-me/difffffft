# Vue3命令式弹窗

## 安装和配置插件
```sh
npm i @vitejs/plugin-vue-jsx -D
```

```js
import vueJsx from "@vitejs/plugin-vue-jsx"; // 配置vue使用jsx

export default defineConfig({
  plugins: [vue(), vueJsx()],
});
```

## 封装

```jsx
import { ref } from "vue";
import { ElMessageBox, ElForm, ElFormItem, ElInput } from "element-plus"

const form = ref({
    name:""
})

const showMessageBox = ({
    form,
}) => {
    const formRef = ref()
    const rules = ref({
        name: [
            { required: true, message: "名称必填", trigger: true }
        ]
    })
    ElMessageBox.confirm("MessageBox", "表单提交", {
        showCancelButton: true,
        closeOnPressEscape: false,
        message: () => {
            return <ElForm
                ref={formRef}
                model={form}
                labelWidth="60px"
                rules={rules}
            >
                <ElFormItem label="姓名" prop="name">
                    <ElInput v-model={form.value.name}></ElInput>
                </ElFormItem>
            </ElForm>
        },
        beforeClose: (action, _, done) => {
            if (action === "cancel" || action === "close") {
                done()
            } else {
                formRef.value.validate((valid) => {
                    if (valid) {
                        console.log("submit!", form)
                        done()
                    } else {
                        console.log(valid)
                    }
                })
            }
        }
    })
}

export default showMessageBox
```

## 调用

```js
import showMessageBox from '@/components/Dialog'

showMessageBox({form})
```