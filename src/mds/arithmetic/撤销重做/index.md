### 简单

```vue
<script setup>
import { ref, shallowReactive } from 'vue'

const history = shallowReactive([[]])
const index = ref(0)
const data = ref([])

function push() {
	data.value.push({ text: 1 })
	index.value++
	history.push(clone(data.value))
}

function undo() {
	data.value = clone(history[--index.value])
}

function redo() {
	data.value = clone(history[++index.value])
}

function clone(circles) {
	return circles.map(c => ({ ...c }))
}
</script>

<template>
	<div>
		<button @click="undo" :disabled="index <= 0">Undo</button>
		<button @click="redo" :disabled="index >= history.length - 1">Redo</button>
		<button @click="push">Add</button>
		<p>
			{{ history }}
		</p>
		<p>
			{{ data }}
		</p>
	</div>
</template>
```

### 复杂

useHistory.js

```js
/**
 * 命令模式涉及将所有操作（如添加、删除、修改）封装为命令对象。每个命令对象需要具备执行（execute）和撤销（undo）方法。
 * class Command {
 *  constructor() {}
 *  execute() {}
 *  undo() {}
 * }
 */

/**
 * 维护两个堆栈：一个用于撤销（undo stack），一个用于重做（redo stack）。
 *
 * 当用户执行一个操作时，将对应的命令对象压入撤销堆栈，并清空重做堆栈。
 * 撤销操作时，从撤销堆栈中弹出命令对象，调用其 undo 方法，然后将该命令压入重做堆栈。
 * 重做操作时，从重做堆栈中弹出命令对象，调用其 execute 方法，然后将该命令压入撤销堆栈。
 */
class History {
	constructor() {
		this.undoStack = []
		this.redoStack = []
	}

	executeCommand(command) {
		command.execute()
		this.undoStack.push(command)
		this.redoStack.length = 0
	}

	undo() {
		const command = this.undoStack.pop()
		if (command) {
			command.undo()
			this.redoStack.push(command)
		}
	}

	redo() {
		const command = this.redoStack.pop()
		if (command) {
			command.execute()
			this.undoStack.push(command)
		}
	}
}

const useHistory = () => {
	const history = new History()
	const execute = command => {
		history.executeCommand(command)
	}
	const undo = () => {
		history.undo()
	}
	const redo = () => {
		history.redo()
	}
	return { history, undo, redo, execute }
}

export default useHistory
```

index.vue

```vue
<script setup>
import { ref } from 'vue'
import useHistory from './useHistory'

const data = ref([])
class AddCommand {
	constructor(item) {
		this.item = item
	}

	execute() {
		data.value.push(this.item)
	}

	undo() {
		data.value.pop()
	}
}

const { history, undo, redo, execute } = useHistory()
const add = () => {
	const command = new AddCommand('1')
	execute(command)
}
</script>

<template>
	<div>
		<button @click="undo" :disabled="history.undoStack.length === 0">Undo</button>
		<button @click="redo" :disabled="history.redoStack.length === 0">Redo</button>
		<button @click="add">Add</button>
		<p>{{ data }}</p>
	</div>
</template>
```
