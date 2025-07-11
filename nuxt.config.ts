// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/colors.css', '@/assets/css/animations.css', '@/assets/icons/boxicons.min.css', '@/assets/icons/boxicons-brands.min.css', 'aos/dist/aos.css'],

  devServer: {
    port: 443,
    host: '192.168.0.241',
    https: true
  },

  runtimeConfig: {
    public: {
      domain: "kubapiw.dev"
    }
  },

  modules: ['@nuxtjs/color-mode', '@nuxtjs/google-fonts', '@nuxtjs/i18n', '@vueuse/nuxt', '@nuxt/image', '@pinia/nuxt'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage',
    storageKey: 'kubapiw-color-mode'
  },
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600],
    },
    display: 'swap',
    // poniżej opcjonalne, ale zalecane
    preload: true,
    preconnect: true,
    download: true, // jeśli chcesz osadzić lokalnie (zalecane przy produkcji)
    inject: true
  },
  
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', file: 'en.js'},
      { code: 'pl', language: 'pl-PL', file: 'pl.js'}
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true, // Zapamiętuje język w cookie
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false, // Przekierowuje, jeśli język przeglądarki różni się od domyślnego
      fallbackLocale: 'en' // Język domyślny, jeśli przeglądarka ma nieobsługiwany język
    }
  },
    nitro: {
    routeRules: {
      "/_nuxt/**": {
        headers: {
          "cache-control": "public, max-age=604800, immutable"
        }
      },
      "/img/**": {
        headers: {
          "cache-control": "public, max-age=604800, immutable"
        }
      }
    }
  }
})