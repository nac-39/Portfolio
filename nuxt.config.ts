// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css"],
  modules: ["@nuxt/content", "nuxt-icon"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      // コードハイライトを有効化する場合はテーマを設定
      theme: "one-dark-pro"
    }
  }
})
