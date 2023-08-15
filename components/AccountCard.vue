<template>
  <div
    class="border border-text_main h-32 flex items-center flex-nowrap w-full"
  >
    <div class="flex flex-col justify-center px-2">
      <Icon :name="props.icon" class="w-8 h-8" />
    </div>
    <div class="my-4 px-2">
      <div class="font-bold">
        {{ props.name }}
      </div>
      <div>
        <a class="text-text_gray break-all" :href="props.url" target="_blank">{{
          props.url
        }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  url: string
  icon: string
  type: string
}>()
</script>
