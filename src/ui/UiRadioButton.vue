<template>
    <div class="flex">
        <input
                :name="name"
                :checked="checked"
                type="radio"
                ref="checkBox"
                :value="value"
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
    div {
        input {
            position: absolute !important;
            visibility: hidden !important;
            display: none !important;
            height: 0 !important;
            width: 0 !important;
            padding: 0 !important;
        }

        input[type="radio"]:checked ~ .check {
            @apply bg-gray-700 border-gray-500;
        }

        .check {
            @apply mt-1 w-4 h-4 rounded-full border-2 border-solid border-gray-500 relative bg-white items-center;
            cursor: pointer;
        }
    }
</style>