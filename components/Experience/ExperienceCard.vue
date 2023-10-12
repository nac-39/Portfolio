<template>
  <div class="flex items-center">
    <div class="m-4">
      {{ period }}
    </div>
    <div
      class="bg-slate-50 rounded-full w-4 h-4 border-main_darkest border-4"
    />
    <div class="bg-main_darkest h-1 w-8" />
    <div class="border-main_darkest border-4 w-64">
      <div class="text-lg font-bold m-2">
        {{ title }}
      </div>
      <div class="text-sm m-2">
        <div v-if="description">
          {{ description }}
        </div>
        <slot v-else />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  period: string
  title: string
  description?: string
}>()
</script>
