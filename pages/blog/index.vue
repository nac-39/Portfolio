<template>
  <main class="max-w-3xl md:m-auto p-4">
    <div class="font-title text-4xl pb-12">Blog</div>
    <div class="space-y-4">
      <ArticleCard
        v-for="article in articles"
        :key="article.title"
        :article="article"
        class="m-auto"
      />
    </div>
  </main>
</template>
<script setup lang="ts">
import { Article } from "~/types/Article"

const articles = await queryContent<Article>("/articles")
  .sort({ date: -1 })
  .find()
</script>
