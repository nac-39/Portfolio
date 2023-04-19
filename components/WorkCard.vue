<template>
  <div>
    <div class="border border-text_main sm:w-80">
      <nuxt-img v-if="imgPath" :src="imgPath" class="aspect-[16/9]" />
      <div class="p-2">
        <div class="flex items-center justify-between space-x-2">
          <span class="text-lg font-bold">
            {{ title }}
          </span>
          <span class="text-sm">
            {{ date }}
          </span>
        </div>
        <div class="text-sm prose mt-2">
          {{ description }}
        </div>
        <div class="flex py-2 flex-wrap">
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
    </div>
    <div class="flex text-sm">
      <a
        v-if="githubUrl"
        :href="githubUrl"
        :class="siteUrl ? ' border-l-0 basis-1/2' : 'w-full'"
        class="border border-t-0 border-text_main text-center"
      >
        GitHub
      </a>
      <a
        v-if="siteUrl"
        :href="siteUrl"
        :class="githubUrl ? ' border-l-0 basis-1/2' : 'w-full'"
        class="border border-t-0 border-text_main text-center"
      >
        Site
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { FrameworkTag } from "~/types/Skills"
defineProps<{
    title: string
    date: string
    imgPath?: string
    description: string
    frameworks: FrameworkTag[]
    githubUrl?: string
    siteUrl?: string
  }>()
</script>
