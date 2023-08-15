<template>
  <img v-if="imageURL" :src="imageURL">
  <button v-else class="hover:bg-gray-300" @click="handleClick">
    {{ props.buttonText ?? "Show QR Code" }}
  </button>
</template>
<script setup lang="ts">
const props = defineProps<{
  buttonText?: string
  encodeText: string
  size?: number
}>()

const imageURL = ref<string | null>(null)

const handleClick = async () => {
  imageURL.value = await getQRCode(props.encodeText)
}

const getQRCode = async (text: string) => {
  const size = props.size ? String(props.size) : "200"
  const qr: Blob = await $fetch(
    `https://chart.googleapis.com/chart?cht=qr&chs=${size}x${size}&chl=${encodeURI(
      text,
    )}`,
  )
  return URL.createObjectURL(qr)
}
</script>
