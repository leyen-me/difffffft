在前端中处理业务级别的弹窗问题是非常麻烦的事情，调用的次数很多，代码也很多很混乱。

下面将介绍如何用Vue的Jsx的能力实现一行代码控制业务弹窗的显示，关闭，回调。

如果要在Vue中要使用Jsx

```sh
npm i @vitejs/plugin-vue-jsx -D
```

```js
import vueJsx from "@vitejs/plugin-vue-jsx"; // 配置vue使用jsx

export default defineConfig({
  plugins: [vue(), vueJsx()],
});
```

开始封装业务弹窗逻辑

src/hooks/useDialog.jsx

```jsx
import { createApp } from 'vue'
import { defineComponent, ref } from 'vue'
import { ElButton, ElDialog, ElInput } from 'element-plus'

/**
 * 组件
 */
const BaseDialog = defineComponent({
	/**
	 * 参数
	 */
	props: {
		title: {
			type: String,
			required: false,
			default: () => ''
		},
		msg: {
			type: String,
			required: false,
			default: () => ''
		},
		closeDialog: {
			type: Function,
			required: true,
			default: () => () => {}
		},
		onPass: {
			type: Function,
			required: false,
			default: () => () => {}
		},
		onReject: {
			type: Function,
			required: false,
			default: () => () => {}
		}
	},
	/**
	 * 业务逻辑
	 */
	setup(props) {
		const visible = ref(true)
		const opinions = ref('')
		const handleClose = () => {
			visible.value = false
			props.closeDialog()
		}
		const handlePass = () => {
			props.onPass(opinions.value)
			handleClose()
		}
		const handleReject = () => {
			props.onReject(opinions.value)
			handleClose()
		}

		return {
			visible,
			opinions,
			handleClose,

			handlePass,
			handleReject
		}
	},
	/**
	 * 组件
	 */
	render(props) {
		return (
			<ElDialog modelValue={props.visible} onClose={props.handleClose} title={props.title}>
				<ElInput
					autosize={{ minRows: 4, maxRows: 6 }}
					modelValue={props.opinions}
					onUpdate:modelValue={e => (props.opinions = e)}
					type='textarea'
					placeholder='审批意见'></ElInput>
				<div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
					<ElButton onClick={props.handleReject} type='danger' size='large'>
						驳回
					</ElButton>
					<ElButton onClick={props.handlePass} type='primary' size='large'>
						通过
					</ElButton>
				</div>
			</ElDialog>
		)
	}
})

/**
 * 显示弹窗
 * 调用方法：
 *    const onPass = data => {
 *        console.log('通过', data)
 *    }
 *    const onReject = data => {
 *        console.log('驳回', data)
 *    }
 *    const { showDialog, closeDialog } = useDialog({
 *        msg: 'Hello',
 *        title: '是否提交审核？',
 *        onPass,
 *        onReject
 *    })
 *    showDialog()
 */
const useDialog = props => {
	const mountNode = document.createElement('div')
	document.body.appendChild(mountNode)
	const closeDialog = () => {
		dialog.unmount()
		mountNode.remove()
	}
	const showDialog = () => {
		// 挂载显示
		dialog.mount(mountNode)
	}
	const dialog = createApp(BaseDialog, { ...props, closeDialog })
	return {
		showDialog,
		closeDialog
	}
}
export default useDialog
```

使用

```js
const onPass = data => {
  console.log('通过', data)
}
const onReject = data => {
  console.log('驳回', data)
}
const { showDialog, closeDialog } = useDialog({
  msg: 'Hello',
  title: '是否提交审核？',
  onPass,
  onReject
})
showDialog()
```

所以说由此可见，在React，天生处理弹窗的能力就非常强

Vue结合Jsx也非常强。但是Jsx学习成本问题，处理v-model的问题。这种方式更适合React和Vue都会的。
