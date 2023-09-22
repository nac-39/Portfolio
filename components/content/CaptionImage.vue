<template>
  <figure class="caption-image__figure">
    <slot />
    <figcaption class="text-xs text-center text-text_gray">
      <slot name="caption" />
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
defineProps({
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
  caption: {
    type: String,
    default: "",
  },
})
</script>

<style scoped>
.caption-image__figure :deep(p) {
  /* Nuxt Contentによって生成される<p>に対応する */
  display: flex;
  justify-content: center;
}
</style>
