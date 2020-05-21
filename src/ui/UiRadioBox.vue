<template>
    <div class="flex">
        <input
                :name="name"
                type="radio"
                ref="checkBox"
                :value="value"
                @change="check"
                v-bind="$attrs"
                class="p-2 mt-0 m-2 w-4 h-4 appearance-none outline-none focus:shadow-outline  bg-white rounded-full border-gray-300 border-2 border-white"
                :class="{'error': hasError, 'bg-gray-600': model === value, 'cursor-not-allowed opacity-25': disabled}"
        />

        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch, Prop, Ref} from "vue-property-decorator";

    @Component({
        components: {},
        inheritAttrs: false,
        props: ["hasError", "name", "checked", "value", "model"],
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
    export default class UiRadioButton extends Vue {
        @Prop()
        private model: any;

        @Prop()
        private value?: string;

        @Prop()
        private name?: string;

        @Prop()
        private hasError?: boolean;

        @Ref()
        private checkBox?: any;

        private disabled?: boolean;

        public mounted() {
            // @ts-ignore
            this.checkBox.checked = this.model == this.value;
            this.disabled = this.checkBox.disabled;
        }

        @Watch('model')
        public updateChecked() {
            // @ts-ignore
            this.$refs.checkBox.checked = this.model == this.value;
        }

        public check() {
            // @ts-ignore
            this.$emit("change", this.$refs.checkBox.value);
        }
    }
</script>

<style scoped lang="scss">
</style>