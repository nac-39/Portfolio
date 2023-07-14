<template>
  <header v-if="isMd">
    <nav class="flex justify-end">
      <div class="flex flex-col items-start">
        <Icon
          :name="burgerIcon"
          class="w-10 h-10 p-1"
          @click.prevent="onClickHamburger"
        />
        <div
          v-show="isOpen"
          class="flex flex-col justify-center bg-bg border z-50 fixed top-10 right-0 h-screen w-screen"
        >
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-text_main font-bold text-center py-8 font-title w-full h-14 p-2 odd:border"
            @click.prevent="onClickHamburger"
          >
            {{ link.text }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
  <header v-else class="bg-bg_light/80 h-12 backdrop-blur-sm sticky top-0 z-50">
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
const isOpen = ref(false)
const burgerIcon = computed(() => {
  return isOpen.value ? "mdi:close" : "mdi:hamburger-menu"
})
const isMd = ref(false)
onMounted(() => {
  window.addEventListener("resize", () => {
    isMd.value = window.innerWidth < 768
  })
  isMd.value = window.innerWidth < 768
})
onUnmounted(() => {
  window.removeEventListener("resize", () => {
    isMd.value = window.innerWidth < 768
  })
})

const onClickHamburger = () => {
  if (isOpen.value) {
    isOpen.value = false
  } else {
    isOpen.value = true
  }
}

const links = ref([
  { to: "/", text: "Home" },
  { to: "/skills", text: "Skills" },
  { to: "/works", text: "Works" },
  { to: "/blog", text: "Blog" },
])
</script>
