<template>
    <div class="ui-card-qew789bdf bg-white rounded shadow">
        <slot></slot>
        <div v-if="$slots.footer" class="bg-gray-200 p-2 rounded-b">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({
        components: {},
        props: [],
        data() {
            return {};
        }
    })
    export default class UiCard extends Vue {
    }
</script>

<style scoped lang="scss">
    .ui-card-qew789bdf {
        .card-body {
            @apply py-4 px-4;
        }
    }
</style>