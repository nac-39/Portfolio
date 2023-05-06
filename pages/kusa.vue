<template>
  <div ref="container" class="w-full h-80">
    <ClientOnly>
      <GitHubKusa
        :weeks="kusa.user.contributionsCollection.contributionCalendar.weeks"
        :client-width="clientWidth"
        :client-height="clientHeight"
      />
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
const kusa = useGitHub()
const container = ref<HTMLElement | null>(null)
const { clientHeight, clientWidth } = useWindowSize(container)
</script>
