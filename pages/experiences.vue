<template>
  <main class="max-w-3xl md:m-auto p-4">
    <div class="font-title text-4xl">
      Experiences
    </div>
    <Experience :experiences="experiences" class="my-12" />
  </main>
</template>
<script setup lang="ts">
import { Experience as ExperienceType } from "~/types/Experience"
const { experiences } = await queryContent<{ experiences: ExperienceType[] }>(
  "/experiences",
).findOne()
</script>
