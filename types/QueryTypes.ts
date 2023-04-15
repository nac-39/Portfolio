import type { ParsedContent } from "@nuxt/content/dist/runtime/types"

export interface General extends ParsedContent {
  title: string
  subtitle: string
  links: {
    label: string
    url: string
    icon: string
  }[]
}

interface Affiliation {
  name: string
  url?: string
}

export interface About extends ParsedContent {
  affiliations: Affiliation[]
  selfIntroduction: string
}
