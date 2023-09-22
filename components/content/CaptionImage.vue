<template>
  <figure>
    <slot />
    <figcaption class="text-xs text-center text-text_gray">
      <div>
        <slot name="caption" />
      </div>
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
