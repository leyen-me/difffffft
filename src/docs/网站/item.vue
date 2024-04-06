<template>
    <a class="_container" :href="href" target="_blank">
        <span class="_title">
            {{ title }}
        </span>
        <br>
        <span class="_desc">
            {{ desc }}
        </span>
    </a>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    },
})
</script>

<style scoped>
._container {
    width: 100%;
    display: block;
    border: 1px solid;
    padding: 12px 24px;
    border-color: #F6F6F7;
    background-color: #F6F6F7;
    border-radius: 8px;
    text-decoration: none;
    margin-top: 12px;
}

._container:last-child {
    margin-right: 0;
}

._title {
    font-weight: 700;
    color: var(--vp-c-text-1)
}

._desc {
    font-size: 14px;
    color: var(--vp-c-text-2);
    white-space: nowrap;
}

.dark ._container{
    border-color: #202127;
    background-color: #202127;
}

.dark ._container:hover ._title{
    color: slateblue
}

._container:hover{
    border-color: slateblue;
}
</style>