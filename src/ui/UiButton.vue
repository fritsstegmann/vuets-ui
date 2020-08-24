<template>
    <button
        v-bind="$attrs"
        :class="{
                'py-1 px-2': size === 'xs',
                'py-5 px-8': size === 'lg',
                'py-2 px-4': size === 'sm',
                'py-3 px-6': size === 'normal',
                'bg-gray-800 text-gray-100 hover:bg-gray-600': kind === 'primary' || kind === 'p',
                'bg-gray-100 text-gray-800 hover:bg-gray-300': kind === 'secondary' || kind === 's',
                'bg-transparent px-2 py-1 shadow-none border-none hover:underline': kind === 'link' || kind === 'l',
                'bg-red-700 text-gray-100 hover:bg-red-500': kind === 'destructive' || kind === 'd',
                'cursor-not-allowed opacity-25': isButtonDisabled,
                [className]: hasClassName,
            }"
        class="focus:shadow-outline whitespace-no-wrap font-semibold leading-none rounded shadow outline-none"
        v-on="$listeners"
    >
        <slot/>
    </button>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        kind: {
            required: true,
            type: String,
            validator(value) {
                return ['primary', 'p', 'secondary', 's', 'link', 'l', 'destructive', 'd'].indexOf(value) !== -1
            }
        },
        size: {
            required: false,
            type: String,
            default: 'normal',
            validator(value) {
                return ['lg', 'sm', 'xs', 'normal'].indexOf(value) !== -1
            }
        },
        className: {
            required: false
        },
        disabled: {
            required: false
        }
    },
    computed: {
        isButtonDisabled() {
            return typeof this.$props.disabled !== 'undefined' && this.$props.disabled !== false
        },
        hasClassName() {
            return this.className !== undefined
        }
    }
}
</script>
