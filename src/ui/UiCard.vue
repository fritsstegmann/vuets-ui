<template>
    <div class="bg-white rounded m-auto overflow-hidden shadow">
        <slot name="header">
            <UiCardHeader slot="header" :title="title" :sub-title="subTitle"></UiCardHeader>
        </slot>
        <slot></slot>
        <template v-if="hasFooterSlot">
            <div class="bg-gray-200 p-0 m-0">
                <slot name="footer"></slot>
            </div>
        </template>
    </div>
</template>

<script>
    import UiCardHeader from "./UiCardHeader.vue";

    export default {
        components: {UiCardHeader},
        props: ['title', 'subTitle'],
        data() {
            return {};
        },
        computed: {
            hasFooterSlot() {
                return this.$slots['footer']
            }
        }
    }
</script>

<style scoped lang="scss">
</style>