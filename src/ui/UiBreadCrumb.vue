<template>
    <div>
        <span v-for="breadcrumb in getParentList">
            <slot :breadcrumb="breadcrumb"></slot>
        </span>
        <span>{{ getCurrentPageTitle }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            breadcrumbs: {
                type: Array,
                required: true,
                default: [],
            }
        },
        computed: {
            getParentList() {
                return this.breadcrumbs.slice(0, this.breadcrumbs.length - 1);
            },
            getCurrentPageTitle() {
                return this.breadcrumbs[this.breadcrumbs.length - 1].title;
            }
        }
    }
</script>
