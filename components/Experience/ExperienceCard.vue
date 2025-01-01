<template>
  <div class="flex items-center">
    <div
      class="bg-slate-50 rounded-full w-4 h-4 border-main_darkest border-4 z-10"
    />
    <div class="relative h-full">
      <div class="h-full bg-main_darkest w-1 absolute right-1.5" />
    </div>
    <div class="bg-main_darkest h-1 w-8" />
    <div class="border-main_darkest border-4 sm:w-80 w-64 mt-2 mb-2">
      <div class="flex items-center flex-wrap m-2">
        <div class="text-lg font-bold mr-2">
          {{ title }}
        </div>
        <div class="text-xs">
          {{ period }}
        </div>
      </div>
      <div class="text-sm m-2">
        <div v-if="description">
          {{ description }}
        </div>
        <slot v-else />
      </div>
      <div v-if="frameworks" class="mx-2 mb-2 flex overflow-scroll">
        <FrameworkTag
          v-for="fw in frameworks"
          :key="fw.name"
          :icon="fw.icon"
          :name="fw.name"
          :url="fw.url"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Experience } from "~/types/Experience"
defineProps<Experience>()
</script>
