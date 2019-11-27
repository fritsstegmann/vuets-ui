<template>
    <div v-if="status">
        <span v-if="status === 'success'"
              class="text-xs inline h-fit text-green-800 rounded-full bg-green-100 px-2 py-1">{{ text }}</span>
        <span v-if="status === 'warning'"
              class="text-xs inline h-fit text-orange-800 rounded-full bg-orange-100 px-2 py-1">{{ text }}</span>
        <span v-if="status === 'normal'"
              class="text-xs inline h-fit text-blue-800 rounded-full bg-blue-100 px-2 py-1">{{ text }}</span>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";

    @Component({
        components: {},
        props: ["text", "status", "innerStatus"],
    })
    export default class UiPill extends Vue {
        @Prop()
        private text?: string;

        @Prop()
        private status?: string;
    }
</script>

<style scoped type="scss">
</style>