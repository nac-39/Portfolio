<template>
  <footer
    class="bg-main_darkest text-text_white flex justify-center flex-col items-center py-4 space-y-2"
  >
    <div class="text-sm flex space-x-4">
      <a v-for="link in links" :key="link.url" :href="link.url">
        <Icon :name="link.icon" class="w-6 h-6" />
      </a>
    </div>
    <div class="text-sm">
      {{ thisYear }}@{{ title }}
    </div>
  </footer>
</template>
<script setup lang="ts">
import type { General } from "~/types/QueryTypes"
const { links, title } = await queryContent<General>("/general").findOne()
const thisYear = new Date().getFullYear()
</script>
