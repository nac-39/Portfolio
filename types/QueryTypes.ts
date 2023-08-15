import type { ParsedContent } from "@nuxt/content/dist/runtime/types"
import type { LinkTag } from "./About"

export interface General extends ParsedContent {
  title: string
  subtitle: string
  links: LinkTag[]
}

interface Affiliation {
  name: string
  url?: string
}

export interface About extends ParsedContent {
  affiliations: Affiliation[]
  selfIntroduction: string
}
