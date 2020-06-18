<template>
    <div class="p-4" v-if="title" slot="header">
        <div class="flex justify-between">
            <div>
                <div class="font-bold text-left truncate">{{ title }}</div>
                <div class="text-sm text-left text-gray-700 truncate" v-if="subTitle">{{ subTitle }}</div>
            </div>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'subTitle'],
    }
</script>
