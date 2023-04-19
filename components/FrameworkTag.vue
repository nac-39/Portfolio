<template>
  <a
    v-if="url"
    :href="url"
    target="_brank"
    rel="noopener noreferrer"
    class="flex items-center h-7"
  >
    <span class="h-5 w-5 my-1 ml-1 flex items-center justify-center">
      <Icon :name="icon" class="h-4 w-4" />
    </span>
    <span class="text-text_main text-sm p-1">{{ name }}</span>
  </a>
  <span v-else class="flex items-cent h-7">
    <span class="h-5 w-5 m-1 flex items-center justify-center">
      <Icon :name="icon" class="h-4 w-4" />
    </span>
    <span class="text-text_main text-sm p-1">{{ name }}</span>
  </span>
</template>
<script setup lang="ts">
defineProps<{ icon: string; name: string; url?: string }>()
</script>
