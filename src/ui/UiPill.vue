<template>
    <div v-if="status">
        <span v-if="status === 'success'"
              class="text-xs inline h-fit text-green-700 rounded-full bg-green-200 px-2 py-1">
            <slot/>
        </span>
        <span v-if="status === 'failed'"
              class="text-xs inline h-fit text-red-700 rounded-full bg-red-200 px-2 py-1">
            <slot/>
        </span>
        <span v-if="status === 'warning'"
              class="text-xs inline h-fit text-orange-700 text-leading-none rounded-full bg-orange-200 px-2 py-1">
            <slot/>
        </span>
        <span v-if="status === 'normal'"
              class="text-xs inline h-fit text-blue-700 rounded-full bg-blue-200 px-2 py-1">
            <slot/>
        </span>
    </div>
    <div v-else>
        <span class="text-xs inline h-fit text-gray-800 rounded-full bg-gray-300 px-2 py-1">
            <slot/>
        </span>
    </div>
</template>

<script>
    export default {
        props: ["status"],
    }
</script>
