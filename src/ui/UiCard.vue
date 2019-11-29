<template>
    <div class="card">
        <slot></slot>
        <div v-if="$slots.footer" class="card-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: [],
        methods: {
        }
    }
</script>

<style scoped lang="scss">
    .card {
        @apply bg-white rounded shadow;

        &.card-active {
            @apply border-teal-500 border-2 border-solid;
        }

        .card-body {
            @apply py-4 px-4;
        }

        .card-footer {
            @apply bg-gray-200 p-2 rounded-b;
            .btn {
                @apply  text-gray-600;
                &.btn-danger {
                    @apply text-red-600;
                }
            }
        }

    }
</style>