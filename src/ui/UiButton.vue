<template>
    <button
            v-bind="$attrs"
            ref="buttonRef"
            :class="{
                'py-1 px-2': isXs,
                'py-5 px-8': isLg,
                'py-2 px-4': isSm,
                'py-3 px-6': isNormal,
                'bg-gray-800 text-gray-100 hover:bg-gray-600': type === 'primary' || type === 'p',
                'bg-gray-100 text-gray-800 hover:bg-gray-300': type === 'secondary' || type === 's',
                'bg-transparent px-2 py-1 shadow-none border-none hover:underline': type === 'link' || type === 'l',
                'bg-red-700 text-gray-100 hover:bg-red-500': type === 'destructive' || type === 'd',
                'cursor-not-allowed opacity-25': typeof disabled != 'undefined',
                [className]: hasClassName,
            }"
            :disabled="disabled"
            class="focus:shadow-outline whitespace-no-wrap font-semibold leading-none rounded shadow outline-none"
            v-on="$listeners"
    >
        <slot/>
    </button>
</template>

<script>
    export default {
        inheritAttrs: false,
        props: ['type', 'lg', 'sm', 'xs', 'className', 'disabled'],
        computed: {
            isLg() {
                return this.$props.lg !== undefined;
            },
            isSm() {
                return this.$props.sm !== undefined;
            },
            isXs() {
                return this.$props.xs !== undefined;
            },
            isNormal() {
                return !this.isLg && !this.isSm && !this.isXs;
            },
            hasClassName() {
                return this.$props.className !== undefined;
            },
        },
    }
</script>

<style scoped lang="scss">
</style>