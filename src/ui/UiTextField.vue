<template>
    <div>
        <slot name="label">
            <div v-if="label" class="ml-1 text-sm text-gray-600"
                 :class="{
                        'text-green-800': status === 'success',
                        'text-red-800': status === 'error',
                        'cursor-not-allowed opacity-25': disabled,
                    }"
            >{{ label }}
            </div>
        </slot>
        <div class="relative">
            <input
                    ref="componentRef"
                    :name="name"
                    :type="getType"
                    v-bind="$attrs"
                    @input="$emit('change', $event.target.value)"
                    class="duration-700 leading-none rounded border-gray-300 px-3 py-2 border-2 outline-none focus:shadow-outline transition ease-in-out"
                    :class="{
                        'bg-gray-200 border-none focus:bg-white focus:text-gray-800': inCard,
                        'border-green-500 text-green-800 bg-green-200': status === 'success',
                        'border-red-500 text-red-800 bg-red-200': status === 'error',
                        'cursor-not-allowed opacity-25': disabled,
                        [className]: hasClassName
                    }"
            />
            <span v-if="hasSuffix"
                  class="mt-3 cursor-pointer mr-4 leading-loose w-4 h-4 fill-current absolute right-0 top-0">
                    <slot name="suffix"></slot>
            </span>
            <slot name="hint">
                <div
                        v-if="hint"
                        class="ml-1 text-xs text-gray-600"
                        :class="{
                        'text-green-800': status === 'success',
                        'text-red-800': status === 'error',
                        'cursor-not-allowed opacity-25': disabled,
                    }"
                >
                    {{ hint }}
                </div>
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Ref, Vue} from "vue-property-decorator";
    import {Observable} from 'rxjs';

    @Component<UiTextField>({
        components: {},
        inheritAttrs: false,
        data() {
            return {
                disabled: false,
            }
        },
        model: {
            event: "change",
        },
        props: ['card', 'status', 'label', 'hint', 'className', 'type'],
    })
    export default class UiTextField extends Vue {

        @Ref()
        private componentRef?: any;

        get hasSuffix() {
            return this.$slots.suffix;
        }

        get hasClassName() {
            return this.$props.className !== undefined;
        }

        get inCard() {
            return this.$props.card !== undefined;
        }

        get getType() {
            return this.$props.type || 'text';
        }

        private disabled?: boolean;

        mounted() {
            this.disabled = this.componentRef.disabled;
        }

        $eventToObservable(evtName: string): Observable<{ name: string, msg: any }> {
            const vm = this
            const evtNames = Array.isArray(evtName) ? evtName : [evtName]

            return new Observable<{ name: string, msg: any }>(observer => {
                // @ts-ignore
                const eventPairs = evtNames.map((name: string) => {
                    const callback = (msg: any) => observer.next({name, msg})
                    if (name !== 'change') {
                        if (this.componentRef !== undefined && this.componentRef !== null) {
                            this.componentRef.addEventListener(name, callback)
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
