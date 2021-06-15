const isDev = process.env.NODE_ENV !== 'production'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Торти Обухів',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/media.css' }
    ]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // 'static/css/style.css',
    // 'static/css/media.css',
  ],
  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#3B8070',
  //   background: 'white'
  // },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/imageSrc.js',
    {src: '~plugins/Vuelidate'},
    {src: '~plugins/vue-datepicker', mode: 'client'},
    { src: '~~/plugins/vue-lazy-load.js' },
    { src: '~~/plugins/vue-modal.js', mode: 'client' },
  ],

  // server: {
  //   port: 3000,
  //   host: '192.168.0.101',
  //   timing: false
  // },
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/moment',
    '@nuxtjs/pwa'
  ],

  pwa: {
    manifest: {
      name: process.env.BASE_URL,
      lang: 'ua',
      theme_color: '#000000',
      description: process.env.BASE_URL
    }
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-vuex-localstorage', {
      ...(isDev && {
        mode: 'debug'
      }),
      localStorage: ['cart'] //  If not entered, “localStorage” is the default value
    }],
    '@nuxtjs/toast',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    dev: true
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  sitemap: {
    hostname: process.env.BASE_URL,
    exclude: ['/cart', '/order'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
    routes: [
      '/products/1',
      '/products/2',
      '/products/3',
      '/products/4',
    ],
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseUrl: process.env.BASE_API_URL
  },
  toast: {
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
        name: 'custom',
        path: '/constructor',
        props: true,
        component: resolve(__dirname, 'pages/constructor/index.vue')
         },
        {
          name: 'diatery',
          path: '/cart',
          props: true,
          component: resolve(__dirname, 'pages/cart.vue')
        },

      )
    },
    prefetchLinks: false,
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
  },

  env: {
    baseUrl: process.env.BASE_API_URL || 'http://localhost:8080'
  }
}
