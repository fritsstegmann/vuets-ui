<template>
    <div class="flex">
        <input
                :name="name"
                type="checkbox"
                ref="checkBox"
                @change="check"
                v-bind="$attrs"
                :checked="model === true"
                class="p-2 mt-0 m-2 w-4 h-4 appearance-none bg-white rounded outline-none focus:shadow-outline border-2 border-gray-300"
                :class="{'error': hasError, 'bg-gray-600': model, 'cursor-not-allowed opacity-25': typeof disabled !== 'undefined'}"
        />
        <slot></slot>
    </div>
</template>

<script>
    export default {
        components: {},
        inheritAttrs: false,
        props: ["hasError", "name", "model", "disabled"],
        model: {
            prop: "model",
            event: "change"
        },
        methods: {
            check() {
                // @ts-ignore
                this.$emit("change", this.$refs.checkBox.checked);
            }
        },
        mounted() {
            this.check();
        }
    }
</script>
