import { Client, cacheExchange, fetchExchange } from "@urql/core"

export default defineNuxtPlugin(async () => {
  const urql = new Client({
    url: "https://api.github.com/graphql",
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
      const token = process.env.GITHUB_TOKEN
      return {
        headers: { authorization: token ? `Bearer ${token}` : "" }
      }
    }
  })
  const { data } = await urql
    .query(
      `
  query {
    user(login: "nac-39") {
      contributionsCollection {
        earliestRestrictedContributionDate
        latestRestrictedContributionDate
        contributionCalendar {
          totalContributions
          colors
          weeks {
            contributionDays {
              date
              weekday
              color
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
  `,
      {}
    )
    .toPromise()
  return {
    provide: {
      github: data
    }
  }
})
