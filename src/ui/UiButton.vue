<template>
    <button
            v-bind="$attrs"
            ref="button"
            :class="{
                'py-1 px-2': isXs,
                'py-5 px-8': isLg,
                'py-2 px-4': isSm,
                'py-3 px-6': isNormal,
                'bg-gray-800 text-gray-100 hover:bg-gray-600': type === 'primary',
                'bg-gray-100 text-gray-800 hover:bg-gray-300': type === 'secondary',
                'bg-transparent font-bold px-2 py-1 shadow-none border-none hover:underline': type === 'link',
                'bg-red-700 text-gray-100 hover:bg-red-500': type === 'destructive',
                [className]: hasClassName,
                'cursor-not-allowed opacity-25': disabled
            }"
            class="focus:shadow-outline leading-none rounded shadow outline-none" @click="$emit('click', event)">
        <slot/>
    </button>
</template>

<script lang="ts">
    import {Component, Ref, Vue, Watch} from "vue-property-decorator";

    @Component({
        inheritAttrs: false,
        props: ['type', 'lg', 'sm', 'xs', 'className'],
        data() {
            return {
                disabled: false
            }
        }
    })
    export default class UiButton extends Vue {
        get isLg() {
            return this.$props.lg !== undefined;
        }
        get isSm() {
            return this.$props.sm !== undefined;
        }
        get isXs() {
            return this.$props.xs !== undefined;
        }
        get isNormal() {
            return !this.isLg && !this.isSm && !this.isXs;
        }
        get hasClassName() {
            return this.$props.className !== undefined;
        }

        @Ref()
        private button?: any;

        private disabled?: boolean;

        mounted() {
            this.disabled = this.button.disabled;
        }
    }
</script>

<style scoped lang="scss">
</style>