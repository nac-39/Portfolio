<template>
  <h1 :id="id" class="text-4xl pt-6 pb-2">
    <span class="text-2xl text-main_light">
      #
    </span>
    <a v-if="id && generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>()
const heading = 1
const { anchorLinks } = useRuntimeConfig().public.content
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>
