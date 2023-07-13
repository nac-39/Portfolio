<template>
  <main class="max-w-3xl md:m-auto p-4">
    <div class="font-title text-4xl pb-12">
      Blog / {{ year }}
    </div>
    <div class="space-y-4">
      <div v-for="article in articles" :key="article.title">
        <ArticleCard :article="article" />
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { Article } from "~/types/Article"

const { year } = useRoute().params
const articles = await queryContent<Article>("/articles")
  .where({ date: { $regex: `${year}-*` } })
  .sort({ date: -1 })
  .find()
</script>
