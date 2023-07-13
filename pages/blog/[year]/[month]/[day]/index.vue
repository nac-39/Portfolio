<template>
  <div>
    <h1>{{ year }}/{{ month }}</h1>
    <ul>
      <li v-for="article in articles" :key="article._id">
        <span>{{ article.date }}</span>
        <nuxt-link :to="getPath(article)">
          {{ article.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { getDate, getMonth, getYear, parseISO } from "date-fns"
import { Article } from "~/types/Article"

const { year, month, day } = useRoute().params
const articles = await queryContent<Article>("/articles")
  .where({ date: { $regex: `${year}-${month}-${day}T*` } })
  .find()
const getPath = (article: Article) => {
  const date = parseISO(article.date)
  const slug = article._path.split("/").pop()
  return `/blog/${getYear(date)}/${getMonth(date)}/${getDate(date)}/${slug}`
}
</script>
