// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  compatibilityDate: '2024-11-05',
  nitro: {
    preset: 'netlify'
  }
});