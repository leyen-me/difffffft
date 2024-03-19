## 准备语言

::: code-group

```js [src/locale/zhCn.js]
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

export default {
    ...zhCn,
    menus: {
        msg: '{msg} 你好',
        home: '首页'
    }
}
```

```js [src/locale/en.js]
import en from 'element-plus/dist/locale/en.mjs'

export default {
    ...en,
    menus: {
        msg: '{msg} hello',
        home: 'Home'
    }
}
```

:::

## 定义仓库

`src/store/useLocaleStore.js`

```js
import { ref, computed } from "vue"
import { createI18n } from 'vue-i18n'

import { defineStore } from 'pinia'

import zhCn from '@/locale/zhCn'
import en from '@/locale/en'

const useLocaleStore = defineStore('locale', () => {
    // 当前使用的语言
    const lang = ref(localStorage.getItem('lang') || 'zhCn')

    // 语言的集合
    const messages = {
        zhCn,
        en
    }

    const i18n = createI18n({
        legacy: false,
        // 全局模式，可以直接使用 $t
        globalInjection: true,
        locale: lang.value,
        messages,
    })

    // 切换国际化
    const setLocale = (locale) => {
        lang.value = locale
        localStorage.setItem('lang', locale)
        i18n.global.locale.value = locale
    }

    const get = (name) => {
        return i18n.global.t(name)
    }

    // 当前语言集
    const locale = computed(() => {
        return messages[lang.value]
    })

    return { i18n, lang, messages, locale, setLocale, get }
})

export default useLocaleStore
```

## 全局注册

```js{9,18-19}
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import useLocaleStore from "@/store/useLocaleStore"

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(ElementPlus)

// 注册i18n
const localeStore = useLocaleStore()
app.use(localeStore.i18n)

app.mount('#app')
```

## 开始使用
```vue
<script setup>
import useLocaleStore from "@/store/useLocaleStore"

const localeStore = useLocaleStore()

const handleGet = () => {
    console.log(localeStore.get('menus.home'))
}

const handleClick = () => {
    localeStore.setLocale(localeStore.lang === "en" ? "zhCn" : "en")
}
</script>

<template>
    <el-config-provider :locale="localeStore.locale">

        <!-- 直接使用 -->
        {{ $t('menus.home') }}

        <!-- 传入参数 -->
        {{ $t('menus.msg', { msg: 'xiaoming' }) }}

        <!-- ElementPlus组件适配 -->
        <el-date-picker type="date" />

        <!-- JS中使用 -->
        <el-button @click="handleGet">获取文字</el-button>

        <!-- 切换语言 -->
        <el-button @click="handleClick">切换</el-button>

    </el-config-provider>
</template>
```