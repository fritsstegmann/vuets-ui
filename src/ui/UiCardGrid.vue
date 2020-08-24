<template>
  <div class="-mr-3 flex flex-wrap w-full">
    <div v-for="item in list" class="w-full md:w-1/2 lg:w-1/3" :key="item">
      <div class="mb-3 mr-3">
        <slot :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['list']
}
</script>
