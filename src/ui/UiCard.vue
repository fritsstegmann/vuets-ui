<template>
    <div class="bg-white rounded m-auto overflow-hidden shadow">
        <slot name="header">
            <UiCardHeader slot="header" :title="title" :subtitle="subTitle"></UiCardHeader>
        </slot>
        <slot></slot>
        <template v-if="hasFooterSlot">
            <div class="bg-gray-200 p-0 m-0">
                <slot name="footer"></slot>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import UiCardHeader from "./UiCardHeader.vue";

    @Component({
        components: {UiCardHeader},
        props: ['title', 'subTitle'],
        data() {
            return {};
        }
    })
    export default class UiCard extends Vue {
        get hasFooterSlot() {
            return !!this.$slots['footer']
        }
    }
</script>

<style scoped lang="scss">
</style>