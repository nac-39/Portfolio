<template>
  <div class="flex items-center">
    <div class="m-4 w-32">
      {{ period }}
    </div>
    <div
      class="bg-slate-50 rounded-full w-4 h-4 border-main_darkest border-4 z-10"
    />
    <div class="relative h-full">
      <div class="h-full bg-main_darkest w-1 absolute right-1.5" />
    </div>
    <div class="bg-main_darkest h-1 w-8" />
    <div class="border-main_darkest border-4 w-64 mt-2 mb-2">
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
