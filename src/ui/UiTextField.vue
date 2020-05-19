<template>
    <div>
        <div class="relative">
            <input
                    :name="name"
                    type="text"
                    v-model="model" @keyup="$emit('change', model)"
                    class="rounded border-2 border-gray-300 px-2 pl-2 py-1 outline-none focus:shadow-outline"
                    :class="{'bg-gray-200 border-none focus:bg-white': inCard}"
            />
            <span v-if="hasSuffix" class="mt-2 cursor-pointer mr-2 w-5 h-5 fill-current leading-none absolute right-0 top-0">
                <slot name="suffix"></slot>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component<UiTextField>({
        components: {},
        data() {
            return {}
        },
        model: {
            prop: "model",
            event: "change",
        },
        props: ['model', 'card'],
    })
    export default class UiTextField extends Vue {
        get hasSuffix() {
            return this.$slots.suffix;
        }
        get inCard() {
            return this.$props.card !== undefined;
        }
    }
</script>

<style scoped lang="scss">
</style>
