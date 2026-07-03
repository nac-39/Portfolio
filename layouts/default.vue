<template>
  <div>
    <div class="bg-bg_light min-h-screen">
      <UiHeader />
      <slot />
    </div>
    <UiFooter />
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const {
  public: { siteUrl },
} = useRuntimeConfig()
const currentUrl = computed(() => new URL(route.path, siteUrl).toString())

useHead(() => ({
  link: [
    {
      rel: "canonical",
      href: currentUrl.value,
    },
  ],
  meta: [
    {
      key: "og:url",
      property: "og:url",
      content: currentUrl.value,
    },
  ],
}))
</script>
