// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/content"],
	content: {
		// https://content.nuxtjs.org/api/configuration
		highlight: {
			// コードハイライトを有効化する場合はテーマを設定
			theme: "one-dark-pro",
		},
	},
})
