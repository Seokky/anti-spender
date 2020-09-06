const colors = require('vuetify/es5/util/colors').default
require('dotenv').config()

module.exports = {
  mode: 'spa',
  telemetry: false,
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [],
  components: true,
  plugins: [
    './plugins/icons.js',
    './plugins/vc-donut.js',
    './plugins/SnackbarsManager.js'
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],
  styleResources: {
    scss: ['./assets/styles/variables.scss']
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/auth'
  ],
  serverMiddleware: [
    '~/server/api/index.js',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/styles/vuetify-variables.scss'],
    theme: {
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: '#d44f45',
          success: '#5aad5d'
        },
        light: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#d44f45',
          info: '#2196F3',
          success: '#5aad5d',
          warning: '#FFC107',
        }
      }
    }
  },
  auth: {
    strategies: {
      google: {
        client_id: process.env.GOOGLE_CLIENT_ID,
      },
    }
  },
  vue: {
    config: {
      devServer: {
        clientLogLevel: 'silent'
      }
    }
  },
  build: {
    hotMiddleware: {
      client: {
        overlay: false
      }
    },
  }
}
