import { getDate, getMonth, getYear, parseISO } from "date-fns"
import { Article } from "~/types/Article"

export const getArticlePath = (article: Article) => {
  const date = parseISO(article.date)
  const slug = article._path?.split("/").pop()
  return `/blog/${getYear(date)}/${getMonth(date)}/${getDate(date)}/${slug}`
}
