<template>
    <button
            :class="{
                'btn-primary': type === 'primary',
                'btn-secondary': type === 'secondary',
                'btn-link': type === 'link',
                'btn-destructive': type === 'destructive',
            }"
            class="btn-qew789bdf focus:shadow-outline rounded py-2 px-6 shadow outline-none" @click="click">
        <slot/>
    </button>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from "vue-property-decorator";

    @Component({
        components: {},
        props: ['type'],
        data() {
            return {};
        }
    })
    export default class UiButton extends Vue {

        @Prop({default: "primary"})
        private type?: string;

        @Emit()
        public click() {

        }
    }
</script>

<style scoped lang="scss">
    .btn-qew789bdf {
        &:disabled {
            cursor: not-allowed;
        }

        &.btn-link {
            @apply shadow-none px-2 py-1;
            &:hover {
                @apply text-teal-600;
            }
        }

        &.btn-destructive {
            @apply text-red-600;
        }

        &.btn-primary {
            @apply bg-gray-800 text-gray-200;
            &:disabled {
                cursor: not-allowed;
            }

            &:hover {
                @apply outline-none bg-gray-600;
            }

            &:focus {
                @apply outline-none shadow-outline;
                &:active {
                    @apply shadow-none;
                }
            }

            &:active {
                @apply outline-none bg-gray-600 shadow-none;
            }
        }

        &.btn-secondary {
            @apply border-gray-600 border-solid border text-gray-600 shadow-none;
            &:disabled {
                cursor: not-allowed;
            }

            &:hover {
                @apply outline-none border-gray-800 text-gray-800;
            }

            &:focus {
                @apply outline-none shadow-outline;
                &:active {
                    @apply shadow-none;
                }
            }

            &:active {
                @apply outline-none bg-gray-400;
            }
        }
    }

</style>