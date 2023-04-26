// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#F5B700",
            primaryVariant: "#f7e643",
            secondary: "#235789",
            secondaryVariant: "#2A86DE",
            black: "#000000",
            gray: "#c2c5c5",
            white: "#ffffff",
          }
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})