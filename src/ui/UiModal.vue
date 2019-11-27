<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper" @click.stop>
                <div class="container m-auto">
                    <ui:card>
                        <slot></slot>
                        <template v-slot:footer>
                            <slot name="footer">

                            </slot>
                        </template>

                    </ui:card>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from "vue-property-decorator";

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
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        @apply m-auto pt-32;
        width: fit-content;
        z-index: 9999;
        vertical-align: middle;
    }

    .container {
        transition: all .3s ease;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>