// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/colors.css', 'boxicons/css/boxicons.min.css'],

  devServer: {
    port: 433,
    host: '192.168.0.241',
    https: true
  },

  modules: ['@nuxtjs/color-mode', '@nuxtjs/google-fonts', '@nuxtjs/i18n'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage',
    storageKey: 'nuxt-color-mode'
  },
  googleFonts: {
    families: {
      "Poppins": true
    }
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', file: 'en.js'},
      { code: 'pl', language: 'pl-PL', file: 'pl.js'}
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
    strategy: 'prefix_and_default'
  },
  app: {
    head: {

    }
  }
})