<template>
    <div class="flex">
        <input
                :name="name"
                type="radio"
                ref="checkBox"
                :value="value"
                @change="check"
                class="p-1 mt-1 m-2 w-4 h-4 appearance-none outline-none focus:shadow-outline  bg-white rounded-full border-gray-300 border-2 border-white"
                :class="{'error': hasError, 'bg-gray-600': model === value}"
        />

        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch, Prop} from "vue-property-decorator";

    @Component({
        components: {},
        props: ["hasError", "name", "checked", "value", "model"],
        model: {
            prop: "model",
            event: "change"
        },
        data() {
            return {};
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

        public mounted() {
            // @ts-ignore
            this.$refs.checkBox.checked = this.model == this.value;
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