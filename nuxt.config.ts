// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
  typescript: {
    typeCheck: true
  },
  build: {
    transpile: ["vuetify"]
  },
  runtimeConfig: {
    public: {
      apiUrl: "https://parkalert.onrender.com",
      prodUrl: "https://park-alert-website.vercel.app",
      googleClientId: "570071154891-0df5iht4ftdihlvtjsg14idh0hq04gkj.apps.googleusercontent.com"
    }
  }
});
