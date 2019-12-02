<template>
    <div class="flex">
        <input
                :name="name"
                :checked="model === true"
                type="checkbox"
                ref="checkBox"
                :class="{'error': hasError}"
        />
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Component, Watch, Prop, Vue} from "vue-property-decorator";

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
    export default class UiCheckBox extends Vue {

        @Prop()
        private model: any;

        @Prop()
        private value?: string;

        @Prop()
        private name?: string;

        @Prop()
        private hasError?: boolean;

        @Watch('model')
        public updateChecked() {
            // @ts-ignore
            this.$refs.checkBox.checked = !this.$refs.checkBox.checked;
        }

        public check() {
            // @ts-ignore
            this.$emit("change", !this.$refs.checkBox.checked);
        }
    }
</script>

<style scoped lang="scss">
</style>