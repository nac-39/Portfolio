<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: "",
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
})
</script>

<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="text-main_dark hover:underline"
  >
    <slot />
  </NuxtLink>
</template>
