import { FrameworkTag } from "./Skills"
export type Work = {
  title: string
  date: string
  imgPath?: string
  description: string
  frameworks?: FrameworkTag[]
  githubUrl?: string
  siteUrl?: string
}
