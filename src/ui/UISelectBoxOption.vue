<script>
export default {
    functional: true,
    props: {
        value: {
            required: true
        },
        label: {
            required: true
        }
    },
    inject: ['selectOptions'],
    mounted() {
        this.selectOptions.push({
            value: this.value,
            label: this.label
        })
    }
}
</script>
