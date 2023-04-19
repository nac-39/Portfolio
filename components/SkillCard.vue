<template>
  <div class="flex">
    <div class="prose text-text_main">
      <div class="text-lg font-bold">
        <Icon v-if="icon" :name="icon" class="w-5 h-5" />
        {{ name }}
      </div>
      <p class="">
        {{ description }}
      </p>
    </div>
  </div>
  <div v-if="frameworks" class="flex">
    <div class="flex space-x-2">
      <FrameworkTag
        v-for="framework in frameworks"
        :key="framework.name"
        :name="framework.name"
        :icon="framework.icon"
        :url="framework.url"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { FrameworkTag } from "~/types/Skills"
defineProps<{
    name: string
    icon?: string
    description: string
    frameworks?: FrameworkTag[]
  }>()
</script>
