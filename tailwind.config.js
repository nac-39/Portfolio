/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      colors: {
        bg_light: "#E7F0F2",
        bg: "#D9ECF0",
        bg_dark: "#A9C9D0",
        main_light: "#7AC4DA",
        main: "#4AB8D9",
        main_dark: "#0374A6",
        main_darkest: "#1F4B64",
        text_main: "#121212",
        text_gray: "#424242",
        text_white: "#E7F0F2"
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
        title: ["Schibsted Grotesk", "sans-serif"]
      },
      fontSize: {
        hero: "6rem"
      }
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/aspect-ratio")
    ]
  }
}
