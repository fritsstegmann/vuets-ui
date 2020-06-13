<template>
    <div class="p-4 flex justify-between" slot="footer">
        <div>
            {{ text }}
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class UiCardFooter extends Vue {
        @Prop({default: ""})
        private text!: string | null;
    }
</script>

<style scoped lang="scss">
</style>
