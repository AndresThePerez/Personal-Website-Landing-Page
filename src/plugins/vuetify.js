import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import { createVuetify, ThemeDefinition } from 'vuetify'


const myCustomLightTheme = {
    light: {
        primary: '#f9004d',
        success: '#3EB75E',
        accent: '#FF7F5C',
        teal: '#26B0A1',
        warning: '#FF8F3C',
        error: '#FF585A',
        cyan: '#42D3D5',
    }
}

export default createVuetify({
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      },
      icons: {
        iconfont: 'mdi', 
    },
    }
  })