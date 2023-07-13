<template>
  <main class="max-w-3xl md:m-auto p-4">
    <div class="font-title text-4xl">
      Skills
    </div>
    <div class="pb-12">
      <div v-for="skill in skills" :key="skill.title" class="my-16">
        <h2 class="text-xl font-bold">
          {{ skill.title }}
        </h2>
        <div v-for="s in skill.skills" :key="s.name" class="my-2">
          <SkillCard
            :name="s.name"
            :icon="s.icon"
            :description="s.description"
            :frameworks="s.frameworks"
          />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import type { Skills } from "~/types/Skills"
const { skills } = await queryContent<Skills>("/skills").findOne()
</script>
