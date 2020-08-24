<template>
    <div class="p-4 flex justify-between" slot="footer">
        <div>
            {{ text }}
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['text']
}
</script>
