export type LinkTag = {
  name: string
  icon: string
  label: string
  url: string
  type: "contact" | "account"
}

export type About = {
  affiliations: string[]
  selfIntroduction: string
  links: LinkTag[]
}
