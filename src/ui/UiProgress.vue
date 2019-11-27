<template>
    <div class="w-full block relative">
        <div class="bg-gray-500 rounded-full" @mouseenter="mouseEnter" @mouseout="mouseOut">
            <div v-if="progress < 100"
                 class="h-2 bar bg-blue-500 rounded-full"
                 :style="{'width': progress + '%'}"></div>
            <div v-if="progress === 100"
                 class="h-2 bar bg-green-500 rounded-full w-full"></div>
        </div>
        <div
                v-show="showToolTip"
                :style="{'left': left + 'px'}"
                class="mt-1 absolute px-2 tooltip text-sm text-center border-gray-500 border-solid border bg-gray-100 text-gray-600 inline-block rounded">
            {{ progress }}%
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({
        components: {},
        props: ["progress"],
        data() {
            return {};
        }
    })
    export default class UiProgress extends Vue {

        @Prop({default: 0})
        private progress?: number;

        public showToolTip: boolean = false;
        public left: number = 0;

        public mouseEnter(event: any) {
            this.left = (event.target.clientWidth / 2) - 20;
            this.showToolTip = true;
        }

        public mouseOut() {
            setTimeout(() => {
                this.showToolTip = false;
            }, 2000);
        }
    }
</script>

<style scoped lang="scss">

</style>