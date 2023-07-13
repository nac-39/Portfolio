<template>
  <header class="bg-bg_light/80 h-12 backdrop-blur-sm sticky top-0 z-50">
    <nav class="flex justify-end space-x-2 mr-2 items-center h-full">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="text-text_main font-bold font-title"
      >
        {{ link.text }}
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
const links = ref([
  { to: "/", text: "Home" },
  { to: "/skills", text: "Skills" },
  { to: "/works", text: "Works" },
  { to: "/blog", text: "blog" }
])
</script>
