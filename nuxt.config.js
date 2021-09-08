/* eslint-disable */
const path = require('path')

require('dotenv').config() // Using .env in nuxt.config.js requires this
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'server',
  /*
   ** Nuxt server
   ** See https://nuxtjs.org/api/configuration-server
   */
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || `0.0.0.0`,
    /*
     ** Nuxt timing api
     ** See https://nuxtjs.org/api/configuration-server/#using-timing-api
     */
    timing: false,
  },
  /*
   ** Nuxt root directory
   ** See https://nuxtjs.org/api/configuration-srcdir
   */
  srcDir: '',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.TITLE || ' ',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

    link: [{ rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com/css2?family=Titan+One&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar
   */
  loading: '~/components/common/Loading.vue',
  layoutTransition: {
    // Is "layout" by default
    name: 'fade',
    mode: 'out-in',
  },
  pageTransition: {
    // Is "page" by default
    name: 'slide-fade',
    mode: 'out-in',
  },
  /*
   ** Global CSS
   */
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/animate.css/all.min.css', '~/assets/scss/main.scss'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/element-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['@nuxtjs/dotenv', { path: './' }],
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab'],
          },
        ],
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API,
  },
  /**
   * Tailwindcss module configuration
   * See https://tailwindcss.nuxtjs.org/options
   */
  tailwindcss: {
    jit: true,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining'],
    },
    extend(config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: '@toast-ui/vue-editor',
      })
    },
    // extend(config, ctx) {
    //   const alias = (config.resolve.alias = config.resolve.alias || {})
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       use: ['raw-loader'],
    //       options: {
    //         fix: true,
    //       },
    //     })
    //   }
    //   config.node = {
    //     fs: 'empty',
    //   }
    // },
  },
}
