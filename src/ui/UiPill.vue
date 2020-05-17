<template>
    <div v-if="status">
        <span v-if="status === 'success'"
              class="text-xs inline h-fit text-green-700 uppercase rounded-full bg-green-200 px-2 py-1"><slot/></span>
        <span v-if="status === 'failed'"
              class="text-xs inline h-fit text-red-700 uppercase rounded-full bg-red-200 px-2 py-1"><slot/></span>
        <span v-if="status === 'warning'"
              class="text-xs inline h-fit text-orange-700 uppercase rounded-full bg-orange-200 px-2 py-1"><slot/></span>
        <span v-if="status === 'normal'"
              class="text-xs inline h-fit text-blue-700 uppercase rounded-full bg-blue-200 px-2 py-1">
            <slot/>
        </span>
    </div>
    <div v-else>
        <span class="text-xs inline h-fit text-gray-800 uppercase rounded-full bg-gray-300 px-2 py-1">
            <slot/>
        </span>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";

    @Component({
        components: {},
        props: ["status"],
    })
    export default class UiPill extends Vue {

        @Prop()
        private status?: string;
    }
</script>

<style scoped type="scss">
</style>