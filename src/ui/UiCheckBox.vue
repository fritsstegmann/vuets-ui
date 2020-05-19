<template>
    <div class="flex">
        <input
                :name="name"
                type="checkbox"
                ref="checkBox"
                @change="check"
                class="p-1 mt-1 m-2 w-4 h-4 appearance-none bg-white rounded outline-none focus:shadow-outline border-2 border-gray-300"
                :class="{'error': hasError, 'bg-gray-600': model}"
        />
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from "vue-property-decorator";

    @Component({
        components: {},
        inheritAttrs: false,
        props: ["hasError", "name", "model"],
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
        private name?: string;

        @Prop()
        private hasError?: boolean;

        public check() {
            // @ts-ignore
            this.$emit("change", this.$refs.checkBox.checked);
        }
    }
</script>

<style scoped lang="scss">
</style>