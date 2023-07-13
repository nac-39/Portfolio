<template>
  <div class="border px-6 py-8 max-w-2xl m-0 border-text_main text-sm">
    <NuxtLink :to="getArticlePath(data.article)" class="text-sm">
      <ContentRenderer :value="data.article">
        <div>
          <div class="text-xs">
            {{ showDate }}
          </div>
          <div class="font-bold text-lg py-2">
            {{ data.article.title }}
          </div>
        </div>
        <div v-if="data.article.description">
          {{ data.article.description }}
        </div>
      </ContentRenderer>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { parseISO } from "date-fns"
import { Article } from "~/types/Article"

interface ArticleCardProps {
  article: Article
}

const data = defineProps<ArticleCardProps>()
const showDate = computed(() => {
  const date = parseISO(data.article.date)
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
})
</script>
