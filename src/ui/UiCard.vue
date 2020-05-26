<template>
    <div class="bg-white rounded m-auto overflow-hidden shadow">
        <slot name="header">
            <div class="p-4" v-if="title">
                <div class="font-bold">{{ title }}</div>
                <div class="text-sm text-gray-700" v-if="subTitle">{{ subTitle }}</div>
            </div>
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

    @Component({
        components: {},
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