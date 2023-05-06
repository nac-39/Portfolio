import { Client, cacheExchange, fetchExchange } from "@urql/core"
import { KusaWeek } from "~/types/GitHub"

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
      github: data as {
        user: {
          contributionsCollection: {
            contributionCalendar: {
              totalContributions: number
              colors: string[]
              weeks: KusaWeek[]
            }
          }
        }
      }
    }
  }
})
