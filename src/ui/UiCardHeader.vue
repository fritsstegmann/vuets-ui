<template>
    <div class="p-4" v-if="title" slot="header">
        <div class="flex justify-between">
            <div>
                <div class="font-bold">{{ title }}</div>
                <div class="text-sm text-gray-700" v-if="subTitle">{{ subTitle }}</div>
            </div>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class UiCardHeader extends Vue {

        @Prop({default: null})
        private title!: string | null;

        @Prop({default: null})
        private subTitle!: string | null;
    }
</script>

<style scoped lang="scss">
</style>
