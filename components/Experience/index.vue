<template>
  <div class="flex h-full justify-center">
    <div class="flex flex-col items-end z-10">
      <ExperienceCard v-for="ex in experiences" :key="ex.title" v-bind="ex" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { Experience } from "~/types/Experience"
defineProps<{ experiences: Experience[] }>()
</script>
