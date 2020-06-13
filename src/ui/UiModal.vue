<template>
    <div class="relative">
        <div class="fixed inset-0 z-30 cursor-default opacity-50 bg-black"></div>
        <div class="fixed inset-0 flex z-40 min-h-screen content-center items-center justify-center items-center"
             @click.prevent="closeModal">
            <div class="bg-white rounded m-auto overflow-hidden shadow-lg" @click.stop="">
                <slot name="header">
                    <div class="font-bold p-4" v-if="title">{{ title }}</div>
                </slot>
                <slot></slot>
                <template v-if="hasFooterSlot">
                    <div class="bg-gray-200">
                        <slot name="footer"></slot>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        components: {},
        props: ['title'],
        data() {
            return {
                showModal: false
            };
        }
    })
    export default class UiModal extends Vue {

        get hasFooterSlot() {
            return !!this.$slots['footer']
        }

        public closeModal() {
            this.$emit("close");
        }
    }
</script>

<style scoped lang="scss">
</style>