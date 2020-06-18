<template>
    <div class="flex">
        <input
                :name="name"
                type="checkbox"
                ref="checkBox"
                @change="(e) => $emit('input', e.target.checked)"
                v-bind="$attrs"
                v-on="$listeners"
                :value="model"
                :checked="model === true || model === 'on'"
                class="p-2 w-4 h-4 appearance-none bg-white rounded outline-none focus:shadow-outline border-2 border-gray-300"
                :class="{
                    'error': hasError,
                    'bg-gray-600': model,
                    'cursor-not-allowed opacity-25': isDisabled
                }"
        />
        <slot></slot>
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        props: ["hasError", "name", "model", "disabled"],
        model: {
            prop: "model",
            event: "input"
        },
        computed: {
            isDisabled() {
                return typeof this.disabled !== 'undefined' && this.disabled !== false;
            },
        }
    }
</script>
