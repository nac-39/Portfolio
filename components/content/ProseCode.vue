<template>
  <div class="p-2">
    <div class="flex justify-between w-full sticky">
      <span v-if="filename" class="font-mono"> {{ filename }} </span>
      <span v-else />
      <div class="flex space-x-0.5">
        <button
          class="text-slate-100 bg-slate-400 px-2 h-full"
          title="Copy code"
          @click="copyCode"
        >
          <Icon name="mdi:clipboard-outline" />
        </button>
        <span class="text-slate-100 bg-slate-400 px-2 h-full">
          {{ language }}
        </span>
      </div>
    </div>
    <div class="overflow-x-auto">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: ""
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  }
})

const copyCode = () => {
  if (navigator.clipboard) {
    // navigator.clipboardが使えるか判定する
    return navigator.clipboard.writeText(props.code).then(function () {
      // クリップボードへ書きむ
    })
  } else {
    document.execCommand("copy") // クリップボードにコピーする
  }
}
</script>

<style>
code {
  counter-reset: line-number;
}
div.line {
  counter-increment: line-number;
  display: list-item;
  padding-left: 1rem;
  margin-left: 1rem;
}
div.line::marker {
  content: counter(line-number);
  color: #aaa;
}
</style>
