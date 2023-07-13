<template>
  <div class="sm:flex flex-row sm:space-x-4">
    <Icon v-if="icon" :name="icon" class="w-20 h-20 basis-20 shrink-0" />
    <div class="grow">
      <div class="prose text-text_main">
        <div class="text-lg font-bold">
          {{ name }}
        </div>
        <p class="text-sm max-w-xl">
          {{ description }}
        </p>
      </div>
      <div v-if="frameworks" class="flex mt-2">
        <div class="flex space-x-2 flex-nowrap">
          <FrameworkTag
            v-for="framework in frameworks"
            :key="framework.name"
            :name="framework.name"
            :icon="framework.icon"
            :url="framework.url"
          />
        </div>
      </div>
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
