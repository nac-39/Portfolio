import { Ref } from "vue"

const clientWidth: Ref<number> = ref(0)
const clientHeight: Ref<number> = ref(0)
const targetDom: Ref<HTMLElement | null> = ref(null)

export const useWindowSize = (containerRef: Ref<HTMLElement>) => {
  onMounted(() => {
    targetDom.value = containerRef.value
    if (!targetDom.value) {
      return
    }
    clientWidth.value = targetDom.value.clientWidth
    clientHeight.value = targetDom.value.clientHeight
    window.addEventListener("resize", updateWindowSize)
  })
  const updateWindowSize = () => {
    if (!targetDom.value) {
      return
    }
    clientWidth.value = targetDom.value.clientWidth
    clientHeight.value = targetDom.value.clientHeight
  }
  return {
    clientWidth,
    clientHeight
  }
}
