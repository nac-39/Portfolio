import { format, isValid, parseISO } from "date-fns"
import { Article } from "~/types/Article"

export const parseArticleDate = (dateString: string) => {
  const normalizedDateString = dateString
    .trim()
    .replace(/^(\d{4}-\d{2}-\d{2}) (\d):/, "$1 0$2:")
  const date = parseISO(normalizedDateString)
  return isValid(date) ? date : new Date(normalizedDateString)
}

export const getArticlePath = (article: Article) => {
  const date = parseArticleDate(article.date)
  const slug = article._path?.split("/").pop()
  return `/blog/${format(date, "yyyy/M/d")}/${slug}`
}
