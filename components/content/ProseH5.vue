<template>
  <h2 :id="id" class="text-lg pt-6 pb-2">
    <a v-if="id && generate" :href="`#${id}`">
      <span class="text-base text-main_light"> ##### </span>
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>()
const heading = 2
const { anchorLinks } = useRuntimeConfig().public.content
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>
