<template>
  <div>
    <div class="px-4 md:px-20">
      <div class="flex items-center space-x-4 flex-wrap my-72">
        <h1 class="font-title text-text_main font-bold text-hero min-w-max">
          {{ title }}
        </h1>
        <h2 class="font-title text-text_main font-bold text-4xl min-w-max">
          {{ subtitle }}
        </h2>
      </div>
    </div>
    <div class="bg-main_dark text-text_white px-4 md:px-20 py-4 md:py-8">
      <h2 class="font-title text-4xl">
        About
      </h2>
      <div class="space-y-4 max-w-lg pt-4">
        <div>
          <div class="font-bold mb-2">
            所属
          </div>
          <ul class="list-disc list-inside text-sm">
            <li v-for="affiliation in affiliations" :key="affiliation.name">
              <ExternalLink v-if="affiliation.url" :url="affiliation.url">
                {{ affiliation.name }}
              </ExternalLink>
              <span v-else>{{ affiliation.name }}</span>
            </li>
          </ul>
        </div>

        <div>
          <div class="font-bold mb-2">
            自己紹介
          </div>
          <div class="whitespace-pre-wrap text-sm break-words prose">
            {{ selfIntroduction }}
          </div>
        </div>
        <div>
          <div class="font-bold mb-2">
            リンク
          </div>
          <div v-for="link in links" :key="link.url" class="text-sm">
            <ExternalLink
              :url="link.url"
              class="inline-flex items-center space-x-1"
            >
              <Icon :name="link.icon" class="w-6 h-6" />
              <span>{{ link.label }}</span>
            </ExternalLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { About, General } from "~/types/QueryTypes"
const { affiliations, selfIntroduction } = await queryContent<About>(
  "/about",
).findOne()
const { title, subtitle, links } = await queryContent<General>(
  "/general",
).findOne()
</script>
