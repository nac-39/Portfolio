<template>
  <div>{{ year }}/{{ month }}/{{ day }}/{{ slug }}</div>
  <div>
    <h1>{{ article.title }}</h1>
    <ContentRenderer :value="article" />
  </div>
</template>

<script setup lang="ts">
  import { Article } from "~/types/Article"
  const { year, month, day, slug } = useRoute().params
  const article = await queryContent<Article>("/articles")
    .where({ _path: `/articles/${slug}` })
    .findOne()
</script>
