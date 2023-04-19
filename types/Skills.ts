export type FrameworkTag = {
  icon: string
  name: string
  url?: string
}
export type Skill = {
  name: string
  icon?: string
  description: string
  frameworks?: FrameworkTag[]
}

export type Skills = {
  skills: {
    title: string
    skills: Skill[]
  }[]
}
export type FieldSkills = {
  fieldname: string
  skills: Skill[]
}
