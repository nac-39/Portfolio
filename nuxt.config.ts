// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = "https://nac-39.com"
const defaultTitle = "nac-39's portfolio"
const defaultDescription = "nac-39's portfolio"
const defaultOgpImage = `${siteUrl}/img/ogp.png`

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl,
    },
  },
  app: {
    head: {
      title: defaultTitle,
      titleTemplate: titleChunk =>
        titleChunk && titleChunk !== defaultTitle
          ? `${titleChunk} | ${defaultTitle}`
          : defaultTitle,
      htmlAttrs: {
        lang: "ja",
        prefix: "og: http://ogp.me/ns#",
      },
      meta: [
        {
          key: "description",
          name: "description",
          content: defaultDescription,
        },
        { key: "og:type", property: "og:type", content: "website" },
        { key: "og:title", property: "og:title", content: defaultTitle },
        {
          key: "og:site_name",
          property: "og:site_name",
          content: "nac-39.com",
        },
        {
          key: "og:description",
          property: "og:description",
          content: defaultDescription,
        },
        { key: "og:image", property: "og:image", content: defaultOgpImage },
        { key: "og:image:width", property: "og:image:width", content: "1268" },
        { key: "og:image:height", property: "og:image:height", content: "881" },
        {
          key: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        { key: "twitter:title", name: "twitter:title", content: defaultTitle },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: defaultDescription,
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: defaultOgpImage,
        },
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
