<template>
  <div class="w-full block relative m-h-1">
    <div class="bg-gray-300 rounded-full" @mouseenter="mouseEnter" @mouseout="mouseOut">
      <div v-if="progress < 100"
           class="h-2 bar bg-gray-600 rounded-full"
           :style="{'width': progress + '%'}"></div>
      <div v-if="progress === 100 || progress === '100'"
           class="h-2 bar bg-green-600 rounded-full w-full"></div>
    </div>
    <div
      v-show="showToolTip && canDisplayToolTip"
      :style="{'left': left + 'px'}"
      class="mt-1 absolute px-2 z-10 tooltip text-sm text-center border-gray-500 border-solid border bg-gray-100 text-gray-600 inline-block rounded">
      {{ progress }}%
    </div>
  </div>
</template>

<script>
export default {
    props: ['progress', 'tooltip'],
    data() {
        return {
            left: 0,
            showToolTip: false
        }
    },
    methods: {
        canDisplayToolTip() {
            return this.$props.tooltip !== undefined
        },
        mouseEnter(event) {
            this.left = (event.target.clientWidth / 2) - 20
            this.showToolTip = true
        },
        mouseOut() {
            setTimeout(() => {
                this.showToolTip = false
            }, 1200)
        }
    }
}
</script>

<style scoped lang="scss">
</style>
