<template>
    <UiBreadCrumb :breadcrumbs="breadcrumbs">
        <router-link slot-scope="{breadcrumb}"
                     class="hover:text-gray-900 font-bold text-gray-700 mr-3"
                     :to="breadcrumb.path"
        >
            {{ breadcrumb.title }}
        </router-link>
    </UiBreadCrumb>
</template>
<script>
import UiBreadCrumb from './UiBreadCrumb.vue'

export default {
    components: {UiBreadCrumb},
    props: {
        breadcrumbs: {
            type: Array,
            required: true
        }
    },
    computed: {
        getParentList() {
            return this.breadcrumbs.slice(0, this.breadcrumbs.length - 1)
        },
        getCurrentPageTitle() {
            return this.breadcrumbs[this.breadcrumbs.length - 1].title
        }
    }
}
</script>
