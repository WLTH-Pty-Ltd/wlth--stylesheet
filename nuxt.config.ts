// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    './app/assets/css/reset.css',
    './app/assets/css/colors.css',
    './app/assets/css/utilities.css',
    './app/assets/css/fonts.css',
    './app/assets/css/buttons.css'
  ]
})
