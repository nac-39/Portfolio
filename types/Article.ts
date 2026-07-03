import { ParsedContent } from "@nuxt/content/dist/runtime/types"

export interface Article extends ParsedContent {
  title: string
  date: string
  description?: string
  image?: string
  tags?: string[] | string
  categories?: string[] | string
}
