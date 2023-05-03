// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
  typescript: {
    typeCheck: true
  },
  build: {
    transpile: ["vuetify"]
  },
  
  modules: [
    'nuxt-icon',
    ['unplugin-icons/nuxt', { /* options */ }],
    
  ],
  
 
});

