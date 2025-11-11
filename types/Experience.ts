import { FrameworkTag } from "./Skills"

export type Experience = {
  period: string
  title: string
  description?: string
  frameworks?: FrameworkTag[]
}
