<template>
  <div id="app">
    <div class="bg-bg_light min-h-screen">
      <UiHeader />
      <slot />
    </div>
    <UiFooter />
  </div>
</template>
<script setup lang="ts">
const router = useRouter()
const currentPath = computed(
  () => `https://nac-39.github.io/Portfolio${router.currentRoute.value.path}`
)
useHead({
  meta: [
    {
      hid: "og:url",
      property: "og:url",
      content: currentPath.value
    }
  ]
})
</script>
