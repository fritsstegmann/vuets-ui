<template>
    <button :class="{'btn-primary': type === 'primary','btn-outline': type === 'secondary'}" class="btn"
            @click="click">
        {{ text }}
    </button>
</template>

<script>
    export default {
        props: ['type', 'text'],
        methods: {
            click(event) {
                this.$emit('click', event);
            }
        }
    }
</script>

<style scoped lang="scss">
    .btn {
        @apply rounded py-2 px-6 shadow outline-none text-gray-400;
        &:disabled {
            cursor: not-allowed;
        }

        &:hover {
            @apply outline-none;
        }

        &:focus {
            @apply outline-none;
        }

        &:active {
            @apply outline-none;
        }

        &.btn-link {
            @apply shadow-none px-2 py-1;
            &:hover {
                @apply text-teal-600;
            }
        }

        &.btn-danger {
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

        &.btn-outline {
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