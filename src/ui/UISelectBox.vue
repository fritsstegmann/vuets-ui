<template>
    <div>
        <slot name="label">
            <div v-if="label" class="text-sm text-gray-600">{{ label }}</div>
        </slot>
        <input type="hidden" :value="model">
        <input type="text"
               class="duration-700 z-0 leading-none rounded px-3 py-2 outline-none focus:shadow-outline transition ease-in-out"
               :class="{
                    'border-gray-300 border-2 bg-white': !inCard && !hasSelected,
                    'bg-gray-100 border-2': !inCard && hasSelected,
                    'bg-gray-200 border-gray-200 focus:bg-white focus:text-gray-800': inCard && !hasSelected,
                    'bg-gray-200 border-gray-300 focus:bg-white focus:text-gray-800': inCard && hasSelected,
                }"
               :value="selectedOption ? selectedOption.label : ''"
               @click.stop.prevent="showList = !showList">
        <slot></slot>
        <div class="mt-4 z-10 fixed bg-white overflow-hidden shadow-lg rounded-lg">
            <ul v-if="options.length > 0 && showList">
                <li v-for="option in options" :value="option.value" :key="option.value">
                    <a class="p-4 block cursor-pointer hover:bg-gray-300" @click.stop.prevent="selectOption(option)">
                        {{ option.label }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        model: {
            required: true
        },
        label: {
            required: true
        },
        card: {
            required: false
        }
    },
    model: {
        prop: 'model',
        event: 'input'
    },
    computed: {
        hasSelected() {
            return this.selectedOption !== null
        },
        inCard() {
            return this.$props.card !== undefined
        }
    },
    provide() {
        return {
            selectOptions: this.options
        }
    },
    inheritAttrs: false,
    data() {
        return {
            options: [],
            showList: false,
            selectedOption: null
        }
    },
    watch: {
        options() {
            for (let option in Object.keys(this.options)) {
                option = this.options[option]

                if (option.value === this.model) {
                    this.selectedOption = option
                    return
                }
            }
        }
    },
    mounted() {
    },
    methods: {
        selectOption(selectedOption) {
            this.selectedOption = selectedOption
            this.showList = false

            this.$emit('input', this.selectedOption.value)
        }
    }
}
</script>

<style scoped lang="scss">
</style>
