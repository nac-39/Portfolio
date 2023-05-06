<template>
  <ClientOnly>
    {{ kusa }}
  </ClientOnly>
</template>
<script setup lang="ts">
const kusa = useGitHub()
</script>
