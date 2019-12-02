<template>
    <transition name="modal-qew789bdf">
        <div class="modal-mask-qew789bdf">
            <div class="modal-wrapper" @click.stop>
                <div class="container m-auto">
                    <ui-card>
                        <slot></slot>
                        <template v-slot:footer>
                            <slot name="footer"></slot>
                        </template>
                    </ui-card>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        components: {},
        props: [],
        data() {
            return {
                showModal: false
            };
        }
    })
    export default class UiModal extends Vue {
        public close() {
            this.$emit("close");
        }
    }
</script>

<style scoped lang="scss">
    .modal-mask-qew789bdf {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;

        .modal-wrapper {
            @apply m-auto pt-32;
            width: fit-content;
            z-index: 9999;
            vertical-align: middle;
        }

        .container {
            transition: all .3s ease;
        }
    }

    .modal-qew789bdf-enter {
        opacity: 0;
    }

    .modal-qew789bdf-leave-active {
        opacity: 0;
    }

    .modal-qew789bdf-enter .modal-qew789bdf-container,
    .modal-qew789bdf-leave-active .modal-qew789bdf-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>