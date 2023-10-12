<template>
  <main class="max-w-3xl md:m-auto p-4 h-screen">
    <div class="font-title text-4xl">
      Experiences
    </div>
    <Experience :experiences="experiences" />
  </main>
</template>
<script setup lang="ts">
const experiences = [
  {
    period: "2021/04~",
    title: "株式会社ほげほげ",
    description: "フロントエンドエンジニア",
  },
  {
    period: "2021/04~",
    title: "株式会社ほげほげ",
    description: "フロントエンドエンジニア",
  },
  {
    period: "2021/04 ~ 2023/08",
    title: "株式会社ほげほげ",
    description: "フロントエンドエンジニア",
  },
]
</script>
