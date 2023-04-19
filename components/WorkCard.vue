<template>
  <a :href="siteUrl" class="block border border-text_main sm:w-80">
    <nuxt-img
      v-if="imgPath"
      :src="imgPath"
      class="aspect-[16/9] border-b border-text_main"
    />
    <div class="mt-2">
      <div class="flex items-center flex-wrap justify-between mx-2">
        <span class="text-lg font-bold">
          {{ title }}
        </span>
        <span class="text-sm min-w-max">
          {{ date }}
        </span>
      </div>
      <div class="text-sm prose m-2">
        {{ description }}
      </div>
      <div class="flex m-2 flex-wrap">
        <div
          v-for="framework in frameworks"
          :key="framework.name"
          class="flex p-1"
        >
          <FrameworkTag
            :name="framework.name"
            :icon="framework.icon"
            :url="framework.url"
          />
        </div>
      </div>
    </div>
    <div class="flex text-sm">
      <a
        v-if="githubUrl"
        :href="githubUrl"
        class="border-t w-full border-text_main text-center"
      >
        <Icon name="mdi:github" class="w-5 h-5" />
        GitHub
      </a>
    </div>
  </a>
</template>
<script setup lang="ts">
import type { FrameworkTag } from "~/types/Skills"
defineProps<{
    title: string
    date: string
    imgPath?: string
    description: string
    frameworks?: FrameworkTag[]
    githubUrl?: string
    siteUrl?: string
  }>()
</script>
