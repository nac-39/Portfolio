<template>
  <a :href="url" target="_blank" rel="noopener noreferrer">
    <slot>{{ url }}</slot> <Icon name="ic:baseline-launch" />
  </a>
</template>
<script setup lang="ts">
defineProps<{
    url: string
  }>()
</script>
