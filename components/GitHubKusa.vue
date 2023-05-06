<template>
  <div ref="container" />
</template>
<script setup lang="ts">
import { KusaWeek } from "~/types/GitHub"

const props = defineProps<{
    weeks: KusaWeek[]
    clientWidth: number
    clientHeight: number
  }>()
const container: Ref<HTMLElement | null> = ref(null)
onMounted(() => {
  if (!props.weeks) {
    return
  }
  const { init } = useKusa(
    container,
    props.clientWidth,
    props.clientHeight,
    props.weeks
  )
  init()
})
</script>
