<template>
  <NuxtPicture
    format="avif,webp,jpg,png"
    :src="refinedSrc"
    :alt="alt"
    :width="width"
    :height="height"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
})

const refinedSrc = computed(() => {
  return props.src
})
</script>

<style scoped>
picture {
  width: fit-content;
}
</style>
