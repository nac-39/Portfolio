export const useGitHub = () => {
  const { $github } = useNuxtApp()
  const github = useState("github", () => $github)
  return github
}
