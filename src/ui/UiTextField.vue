<template>
    <div>
        <slot name="label">
            <div v-if="label" class="ml-1 text-sm text-gray-600"
                 :class="{
                        'text-green-800': status === 'success',
                        'text-red-800': status === 'error',
                    }"
            >{{ label }}</div>
        </slot>
        <div class="relative">
            <input
                    :name="name"
                    :type="getType"
                    v-bind="$attrs"
                    v-model="model" @keyup="$emit('change', model)"
                    class="disabled:cursor-not-allowed rounded border-gray-300 px-3 py-2 border-2 outline-none focus:shadow-outline transition ease-in-out"
                    :class="{
                        'bg-gray-200 border-none focus:bg-white focus:text-gray-800': inCard,
                        'border-green-500 text-green-800 bg-green-200': status === 'success',
                        'border-red-500 text-red-800 bg-red-200': status === 'error',
                        [className]: hasClassName
                    }"
            />
            <span v-if="hasSuffix"
                  class="mt-3 cursor-pointer mr-2 w-5 h-5 fill-current leading-none absolute right-0 top-0">
                <slot name="suffix"></slot>
            </span>
            <slot name="hint">
                <div
                    v-if="hint"
                    class="ml-1 text-xs text-gray-600"
                    :class="{
                        'text-green-800': status === 'success',
                        'text-red-800': status === 'error',
                    }"
                >
                    {{ hint }}
                </div>
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component<UiTextField>({
        components: {},
        inheritAttrs: false,
        data() {
            return {}
        },
        model: {
            prop: "model",
            event: "change",
        },
        props: ['model', 'card', 'status', 'label', 'hint', 'className', 'type'],
    })
    export default class UiTextField extends Vue {
        get hasSuffix() {
            return this.$slots.suffix;
        }

        get hasClassName() {
            return this.$props.className !== undefined;
        }

        get inCard() {
            return this.$props.card !== undefined;
        }

        get getType() {
            return this.$props.type || 'text';
        }
    }
</script>

<style scoped lang="scss">
</style>
