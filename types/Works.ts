import { FrameworkTag } from "./Skills"
export type Work = {
  name: string
  startDate?: string
  endDate?: string
  description: string
  frameworks: FrameworkTag[]
  githubUrl: string
  siteUrl: string
}
