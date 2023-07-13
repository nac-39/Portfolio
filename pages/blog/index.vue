<template>
  <div>
    <div v-for="article in articles" :key="article.title">
      <NuxtLink :to="getPath(article)">
        <h2>{{ article.title }}</h2>
      </NuxtLink>
    </div>
    {{ Object.keys(articles[0]) }}
    {{ articles[0] }}
  </div>
</template>
<script setup lang="ts">
  import { getDate, getMonth, getYear, parseISO } from "date-fns"
  import { Article } from "~/types/Article"

  const articles = await queryContent<Article>("/articles")
    .sort({ date: -1 })
    .find()

  const getPath = (article: Article) => {
    const date = parseISO(article.date)
    const slug = article._path.split("/").pop()
    return `/blog/${getYear(date)}/${getMonth(date)}/${getDate(date)}/${slug}`
  }
</script>
