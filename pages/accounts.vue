<template>
  <main class="max-w-3xl md:m-auto p-4">
    <div class="font-title text-4xl">
      Accounts
    </div>
    <div class="mt-12 pb-12">
      <div class="text-xl font-bold my-4">
        Contact
      </div>
      <div class="space-y-2 mb-8">
        <AccountCard
          v-for="link in links.filter((l) => l.type == 'contact')"
          :key="link.name"
          :icon="link.icon"
          :name="link.name"
          :url="link.url"
        />
      </div>
      <div class="text-xl font-bold my-4">
        Account
      </div>
      <div class="space-y-2">
        <AccountCard
          v-for="link in links.filter((l) => l.type == 'account')"
          :key="link.name"
          :icon="link.icon"
          :name="link.name"
          :url="link.url"
        />
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import type { General } from "~/types/QueryTypes"

const { links } = await queryContent<General>("/general").findOne()
</script>
