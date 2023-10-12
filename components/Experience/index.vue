<template>
  <div class="relative h-full">
    <div class="flex h-full justify-center">
      <div class="flex flex-col items-center h-full absolute right-24 left-0">
        <div
          class="bg-slate-50 rounded-full w-4 h-4 border-main_darkest border-4"
        />
        <div class="bg-main_darkest w-1 h-full" />
      </div>
      <div class="flex flex-col space-y-4 items-end z-10">
        <ExperienceCard
          v-for="ex in experiences"
          :key="ex.title"
          :period="ex.period"
          :title="ex.title"
          :description="ex.description"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ experiences: Experience[] }>()
</script>
