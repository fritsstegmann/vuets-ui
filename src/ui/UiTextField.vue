<template>
  <div>
    <slot name="label">
      <div v-if="label" class="text-sm text-gray-600"
           :class="{
                        'text-green-800': status === 'success',
                        'text-red-800': status === 'error',
                        'cursor-not-allowed opacity-25': disabled,
                    }"
      >{{ label }}
      </div>
    </slot>
    <div class="relative z-0">
      <input
          ref="componentRef"
          :name="name"
          :type="getType"
          v-bind="$attrs"
          @input="$emit('change', $event.target.value)"
          class="
            duration-700
            z-0 leading-none rounded border-gray-300 px-3
            py-2 border-2 outline-none focus:shadow-outline transition ease-in-out"
          :class="{
                        'bg-gray-200 border-none focus:bg-white focus:text-gray-800': inCard,
                        'border-green-500 text-green-800 bg-green-200': status === 'success',
                        'border-red-500 text-red-800 bg-red-200': status === 'error' || hasError,
                        'cursor-not-allowed opacity-25': isDisabled,
                        [className]: hasClassName
                    }"
      />
      <span v-if="hasSuffix"
            class="mt-3 cursor-pointer mr-4 leading-loose
            w-4 h-4 fill-current absolute right-0 top-0">
                    <slot name="suffix"></slot>
            </span>
      <slot name="hint">
        <div
            v-if="hint || hasError"
            class="text-xs text-gray-600"
            :class="{
                        'text-green-800': status === 'success',
                        'text-red-800': status === 'error' || hasError,
                        'cursor-not-allowed opacity-25': disabled,
                    }"
        >
          <template v-if="hint">
            {{ hint }}
          </template>
          <template v-if="hasError">
            {{ error }}
          </template>
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
    components: {},
    inheritAttrs: false,
    model: {
        event: 'change'
    },
    props: [
        'card',
        'status',
        'label',
        'hint',
        'className',
        'type',
        'name',
        'disabled',
        'error'
    ],
    computed: {
        hasSuffix() {
            return this.$slots.suffix
        },
        hasError() {
            return this.$props.error
        },
        isDisabled() {
            return typeof this.disabled !== 'undefined' && this.disabled !== false
        },
        hasClassName() {
            return this.$props.className !== undefined
        },
        inCard() {
            return this.$props.card !== undefined
        },
        getType() {
            return this.$props.type || 'text'
        }
    }
}
</script>
