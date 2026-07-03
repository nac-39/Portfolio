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
import { Article } from "~/types/Article"

const { slug } = useRoute().params

const article = await queryContent<Article>("/articles")
  .where({ _path: `/articles/${slug}` })
  .findOne()

const {
  public: { siteUrl },
} = useRuntimeConfig()
const defaultDescription = "nac-39's portfolio"
const defaultOgpImage = "/img/ogp.png"
const articleDescription = computed(
  () => article.description || defaultDescription,
)
const articleUrl = computed(() =>
  new URL(getArticlePath(article), siteUrl).toString(),
)
const articleImage = computed(() => {
  const image = article.image || defaultOgpImage
  return new URL(image, siteUrl).toString()
})
const articlePublishedTime = computed(() => {
  const date = parseArticleDate(article.date)
  return Number.isNaN(date.getTime()) ? article.date : date.toISOString()
})
const articleTags = computed(() => {
  if (Array.isArray(article.tags)) {
    return article.tags
  }
  return article.tags ? [article.tags] : []
})

const showDate = computed(() => {
  const date = parseArticleDate(article.date)
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
})

useHead(() => ({
  title: article.title,
  meta: [
    {
      key: "description",
      name: "description",
      content: articleDescription.value,
    },
    {
      key: "og:type",
      property: "og:type",
      content: "article",
    },
    {
      key: "og:title",
      property: "og:title",
      content: article.title,
    },
    {
      key: "og:description",
      property: "og:description",
      content: articleDescription.value,
    },
    {
      key: "og:url",
      property: "og:url",
      content: articleUrl.value,
    },
    {
      key: "og:image",
      property: "og:image",
      content: articleImage.value,
    },
    {
      key: "article:published_time",
      property: "article:published_time",
      content: articlePublishedTime.value,
    },
    {
      key: "twitter:title",
      name: "twitter:title",
      content: article.title,
    },
    {
      key: "twitter:description",
      name: "twitter:description",
      content: articleDescription.value,
    },
    {
      key: "twitter:image",
      name: "twitter:image",
      content: articleImage.value,
    },
    ...articleTags.value.map(tag => ({
      key: `article:tag:${tag}`,
      property: "article:tag",
      content: tag,
    })),
  ],
}))
</script>
