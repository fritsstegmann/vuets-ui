<template>
    <div class="-mr-3 flex flex-wrap w-full">
        <div v-for="item in list" class="w-full md:w-1/2 lg:w-1/3">
            <div class="mb-3 mr-3">
                <slot :item="item"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({
        props: ['list']
    })
    export default class UiCardGrid extends Vue {
    }
</script>

<style scoped lang="scss">
</style>
