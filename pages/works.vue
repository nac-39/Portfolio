<template>
  <div class="px-4 md:px-20">
    <div class="font-title text-4xl">
      Works
    </div>
    <div class="pb-12 py-12 flex shrink-0 flex-wrap">
      <div v-for="work in works" :key="work.title" class="my-4 mx-2">
        <WorkCard
          :title="work.title"
          :date="work.date"
          :img-path="work.imgPath"
          :description="work.description"
          :frameworks="work.frameworks"
          :github-url="work.githubUrl"
          :site-url="work.siteUrl"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Work } from "~/types/Works"
const { works } = await queryContent<{ works: Work[] }>("/works").findOne()
</script>
