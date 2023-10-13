<template>
  <div class="flex h-full justify-center">
    <div class="flex flex-col items-end z-10">
      <ExperienceCard
        v-for="ex in experiences"
        :key="ex.title"
        :period="ex.period"
        :title="ex.title"
        :description="ex.description"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ experiences: Experience[] }>()
</script>
