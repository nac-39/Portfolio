<template>
  <main class="max-w-3xl md:m-auto p-4">
    <div class="text-sm py-2">
      {{ showDate }}
    </div>
    <div>
      <h1 class="text-4xl pt-2 pb-8 font-semibold">{{ article.title }}</h1>
      <article
        class="prose leading-7 markdown-body"
        style="color-scheme: light"
      >
        <ContentRenderer :value="article" class="space-y-2" />
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
import { parseISO } from "date-fns"
import { Article } from "~/types/Article"

const { slug } = useRoute().params

const article = await queryContent<Article>("/articles")
  .where({ _path: `/articles/${slug}` })
  .findOne()

const showDate = computed(() => {
  const date = parseISO(article.date)
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
})
</script>
