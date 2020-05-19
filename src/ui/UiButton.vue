<template>
    <button
            :class="{
                'py-2 px-6': inCard,
                'bg-gray-700 text-gray-100 hover:bg-gray-500': type === 'primary',
                'bg-gray-300 text-gray-700 hover:bg-gray-100': type === 'secondary',
                'bg-transparent font-bold px-2 py-1 shadow-none border-none hover:underline': type === 'link',
                'bg-red-700 text-gray-100 hover:bg-red-500': type === 'destructive',
            }"
            v-bind="$attrs"
            class="py-2 px-6 disabled:cursor-not-allowed btn focus:shadow-outline rounded shadow outline-none" @click="$emit('click', event)">
        <slot/>
    </button>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        inheritAttrs: false,
        props: ['type', 'card'],
    })
    export default class UiButton extends Vue {
        get inCard() {
            return this.$props.card !== undefined;
        }
    }
</script>

<style scoped lang="scss">
</style>