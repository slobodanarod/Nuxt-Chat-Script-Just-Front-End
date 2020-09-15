
export default {

  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal', /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server', /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, {
      hid: 'description', name: 'description', content: process.env.npm_package_description || ''
    }],
    script: [
      { src: 'http://cdn.724chat.com/js/jquery.min.js' },
      { src: 'http://cdn.724chat.com/js/datepicker.min.js' },
      { src: 'http://cdn.724chat.com/js/i18n/datepicker.en.js' },
      { src: 'http://cdn.724chat.com/vendor/bootstrap/js/bootstrap.bundle.min.js' },
      { src: 'http://cdn.724chat.com/vendor/OwlCarousel/owl.carousel.js' },
      { src: 'http://cdn.724chat.com/js/custom1.js' },],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', href: '/favicon.ico' }]
  }, /*
  ** Global CSS
  */
  css: ['~/assets/css/responsive.css', '~/assets/css/style.css', '~/assets/vendor/bootstrap/css/bootstrap.min.css', '~/assets/vendor/fontawesome-free/css/all.min.css', '~/assets/vendor/OwlCarousel/assets/owl.carousel.css', '~/assets/vendor/OwlCarousel/assets/owl.theme.default.min.css',], /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/timeago.js' },
    { src: '~/plugins/firebase.js' }
  ], /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true, /*
  ** Nuxt.js dev-modules
  */
  buildModules: [], /*
  ** Nuxt.js modules
  */
  modules: [// Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://admin.724chat.com/',
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'http://admin.724chat.com/',
      pathRewrite: {
        '^/api': '/'
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {},

}
