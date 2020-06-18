<template>
    <div class="relative">
        <input type="hidden" v-model="model"/>
        <div class="flex">
            <input type="text" class="mt-2 form-input" :class="{'bg-gray-200': hasSelected}" v-model="name"
                   @focus="showList = true">
            <div v-if="hasSelected" class="-ml-8" style="margin-top: 1.1rem;">
                <a @click.prevent="removeSelected"
                   class="text-gray-600 fill-current cursor-pointer hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                        <path d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/>
                    </svg>
                </a>
            </div>
        </div>
        <div class="mt-4 fixed bg-white shadow-lg rounded-lg" v-if="results.length > 0 && showList">
            <a @click.prevent="selectItem(result.name)" class="p-4 block cursor-pointer hover:bg-gray-300"
               v-for="result in results">
                {{ result.name }}
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            list: {
                type: Array,
                required: true,
            },
            model: {
                type: Array,
                required: true,
            },
        },
        model: {
            prop: 'model',
            event: 'input',
        },
        data() {
            return {
                name: '',
                results: [],
                hasSelected: false,
                showList: false,
            }
        },
        watch: {
            name() {
                if (this.name.length > 2) {
                    this.$emit('search', this.name);
                }
            }
        },
        methods: {
            selectItem(name) {
                for (let index in this.results) {
                    if (this.results.hasOwnProperty(index)) {
                        const result = this.results[index];

                        if (result.name === name) {
                            this.$emit('input', result.value);
                            this.name = result.name;
                            this.hasSelected = true;
                            this.showList = false;
                            break;
                        }
                    }
                }
            },
            removeSelected() {
                this.hasSelected = false;
                this.name = "";
                this.$emit('input', null);
            }
        }
    }
</script>
