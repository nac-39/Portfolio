<template>
  <div class="px-4 md:px-20">
    <div class="font-title text-4xl pb-12">
      Blog / {{ year }} / {{ month }} / {{ day }}
    </div>
    <div class="space-y-4">
      <div v-for="article in articles" :key="article.title">
        <ArticleCard :article="article" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Article } from "~/types/Article"

const { year, month, day } = useRoute().params
const articles = await queryContent<Article>("/articles")
  .where({ date: { $regex: `${year}-${month}-${day}T*` } })
  .find()
</script>
