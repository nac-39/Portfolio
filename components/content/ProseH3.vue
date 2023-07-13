<template>
  <h3 :id="id" class="text-xl pt-6 pb-2">
    <a v-if="id && generate" :href="`#${id}`">
      <span class="text-lg text-main_light"> ### </span>
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>()
const heading = 2
const { anchorLinks } = useRuntimeConfig().public.content
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>
