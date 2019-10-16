
const pkg = require('./package')

export default {
  generate: {
		fallback: true
	},
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
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
  /*
  ** Customize the progress-bar color
  */
 loading: '~/components/loading.vue',
  /*
  ** Global CSS
  */
  css: [
    'reset-css', // 上記でインスールしていれば
    '~/assets/scss/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-sass-resources-loader', '~/assets/scss/_variables.scss']
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
    /*  head: {
    link: [
        { rel: 'stylesheet', href: 'https://unpkg.com/nes.css@0.0.2/css/nes.min.css' },
        { rel: 'stylesheet', href: 'https://unpkg.com/nes.css/css/nes.min.css' },
    ]
  }*/

}
