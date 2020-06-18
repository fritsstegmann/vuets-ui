<template>
    <button class="w-full border-none shadow-none focus:outline-none outline-none" @click="$emit('input', value)">
        <div class="shadow bg-white outline-none rounded overflow-hidden border-2 border-white"
             :class="{'border-gray-500': isSelected}">
            <div class="flex justify-between">
                <slot name="header">
                    <UiCardHeader :title="title" :sub-title="subTitle"></UiCardHeader>
                </slot>
                <div class="flex items-center mr-4">
                    <div class="rounded-full w-6 h-6 border" :class="{'bg-gray-300': isSelected}">
                        <svg v-if="isSelected" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="m-1 fill-current text-gray-700">
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <slot>
            </slot>
            <slot slot="name"></slot>
        </div>
    </button>
</template>

<script>
    import UiCardHeader from "./UiCardHeader.vue";

    export default {
        props: ['title', 'subTitle', 'value', 'model'],
        model: {
            prop: "model",
            event: "input"
        },
        components: {UiCardHeader},
        computed: {
            isSelected() {
                return this.value === this.model;
            }
        }
    }
</script>

<style scoped lang="scss">
</style>
