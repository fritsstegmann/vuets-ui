<template>
    <div class="flex">
        <input
            :name="name"
            type="radio"
            ref="checkBox"
            :value="value"
            @change="$emit('input', $event.target.value)"
            v-bind="$attrs"
            v-on="$listeners"
            class="p-2 w-4 h-4 appearance-none outline-none focus:shadow-outline  bg-white rounded-full border-gray-300 border-2 border-white"
            :class="{'error': hasError, 'bg-gray-600': model === value, 'cursor-not-allowed opacity-25': isDisabled}"
            :checked="this.model === this.value"
        />

        <slot></slot>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: [
        'hasError',
        'name',
        'checked',
        'value',
        'model',
        'disabled'
    ],
    model: {
        prop: 'model',
        event: 'input'
    },
    computed: {
        isDisabled() {
            return typeof this.disabled !== 'undefined' && this.disabled !== false
        }
    }
}
</script>

<style scoped lang="scss">
</style>
