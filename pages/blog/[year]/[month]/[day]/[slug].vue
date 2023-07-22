<template>
  <main class="max-w-2xl m-auto p-4">
    <div class="text-sm my-2">
      {{ showDate }}
    </div>
    <div>
      <h1 class="text-4xl mt-8 mb-16 font-semibold">
        {{ article.title }}
      </h1>
      <article class="leading-7 markdown-body" style="color-scheme: light">
        <ContentRenderer :value="article" />
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
