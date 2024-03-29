// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
        prefix: "og: http://ogp.me/ns#",
      },
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:title", content: "nac-39's portfolio" },
        { property: "og:site_name", content: "nac-39.com" },
        { property: "og:description", content: "nac-39's portfolio" },
        { property: "og:image", content: "/img/ogp.png" },
      ],
    },
  },
  css: ["@/assets/css/tailwind.css", "@/assets/css/markdown.css"],
  modules: ["@nuxt/content", "nuxt-icon", "@nuxt/image"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      // コードハイライトを有効化する場合はテーマを設定
      theme: "github-light",
    },
    markdown: {
      remarkPlugins: ["remark-math"],
      rehypePlugins: ["rehype-mathjax"],
    },
  },
})
