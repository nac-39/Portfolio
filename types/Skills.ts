export type FrameworkTag = {
  iconUrl: string
  name: string
  officialSiteLink?: string
}
export type Skill = {
  name: string
  iconUrl?: string
  description: string
  frameworks: FrameworkTag[]
}

export type FieldSkills = {
  fieldname: string
  skills: Skill[]
}
