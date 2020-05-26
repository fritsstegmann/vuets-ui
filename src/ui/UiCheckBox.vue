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
                :class="{'error': hasError, 'bg-gray-600': model, 'cursor-not-allowed opacity-25': disabled}"
        />
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Ref, Vue} from "vue-property-decorator";

    @Component({
        components: {},
        inheritAttrs: false,
        props: ["hasError", "name", "model"],
        model: {
            prop: "model",
            event: "change"
        },
        data() {
            return {
                disabled: null,
            };
        }
    })
    export default class UiCheckBox extends Vue {

        @Prop()
        private model: any;

        @Prop()
        private name?: string;

        @Prop()
        private hasError?: boolean;

        private disabled?: boolean;

        @Ref()
        private checkBox?: any | null;

        public check() {
            // @ts-ignore
            this.$emit("change", this.$refs.checkBox.checked);
        }

        mounted() {
            this.disabled = this.checkBox.disabled;
            this.check();
        }
    }
</script>

<style scoped lang="scss">
</style>