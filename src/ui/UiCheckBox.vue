<template>
    <div class="flex">
        <input
                :name="name"
                :checked="model === true"
                type="checkbox"
                ref="checkBox"
                :class="{'error': hasError}"
        />

        <div class="check" @click="check()"></div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from "vue-property-decorator";

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
    div {
        input {
            position: absolute !important;
            visibility: hidden !important;
            display: none !important;
            height: 0 !important;
            width: 0 !important;
            padding: 0 !important;
        }

        input[type="checkbox"]:checked ~ .check {
            @apply bg-gray-400 border-gray-600;
        }

        .check {
            @apply w-4 h-4 rounded border-2 border-solid border-gray-500 relative bg-white items-center;
            cursor: pointer;
        }
    }
</style>