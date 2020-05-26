<template>
    <button
            v-bind="$attrs"
            ref="button"
            :class="{
                'py-1 px-2': isXs,
                'py-5 px-8': isLg,
                'py-2 px-4': isSm,
                'py-3 px-6': isNormal,
                'bg-gray-800 text-gray-100 hover:bg-gray-600': type === 'primary' || type === 'p',
                'bg-gray-100 text-gray-800 hover:bg-gray-300': type === 'secondary' || type === 's',
                'bg-transparent px-2 py-1 shadow-none border-none hover:underline': type === 'link' || type === 'l',
                'bg-red-700 text-gray-100 hover:bg-red-500': type === 'destructive' || type === 'd',
                'cursor-not-allowed opacity-25': disabled,
                [className]: hasClassName,
            }"
            class="focus:shadow-outline font-semibold leading-none rounded shadow outline-none"
            v-on="$listeners"
    >
        <slot/>
    </button>
</template>

<script lang="ts">
    import {Component, Ref, Vue} from "vue-property-decorator";
    import {Observable} from "rxjs";

    @Component({
        inheritAttrs: false,
        props: ['type', 'lg', 'sm', 'xs', 'className'],
        data() {
            return {
                disabled: false
            }
        }
    })
    export default class UiButton extends Vue {
        get isLg() {
            return this.$props.lg !== undefined;
        }
        get isSm() {
            return this.$props.sm !== undefined;
        }
        get isXs() {
            return this.$props.xs !== undefined;
        }
        get isNormal() {
            return !this.isLg && !this.isSm && !this.isXs;
        }
        get hasClassName() {
            return this.$props.className !== undefined;
        }

        @Ref()
        private button?: any;

        private disabled?: boolean;

        mounted() {
            this.disabled = this.button.disabled;
        }

        $eventToObservable(evtName: string): Observable<{ name: string, msg: any }> {
            const vm = this
            const evtNames = Array.isArray(evtName) ? evtName : [evtName]

            return new Observable<{ name: string, msg: any }>(observer => {
                // @ts-ignore
                const eventPairs = evtNames.map((name: string) => {
                    const callback = (msg: any) => observer.next({name, msg})
                    if (name !== 'change') {
                        if (this.button !== undefined && this.button !== null) {
                            this.button.addEventListener(name, callback)
                        } else {
                            vm.$on(name, callback)
                        }
                    } else {
                        vm.$on(name, callback)
                    }
                    return {name, callback}
                })
                return () => {
                    // Only remove the specific callback
                    eventPairs.forEach((pair: any) => vm.$off(pair.name, pair.callback))
                }
            })
        }
    }
</script>

<style scoped lang="scss">
</style>