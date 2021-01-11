import pkg from './package'
import axios from 'axios'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { name: 'yandex-verification', content: 'KEY' },
      // { name: 'google-site-verification', content: 'KEY' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/scss/main.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/app-components.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-key'
    // }],
    // ['@nuxtjs/yandex-metrika', {
    //   id: 'key',
    //   clickMap: true,
    //   trackLinks: true
    // }]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: [
      'vue',
      'axios'
    ],
    extend(config, ctx) {
    }
  },
  // generate config
  generate: {
    routes() {
      return axios.get('https://blog-nuxt-95e46-default-rtdb.firebaseio.com/posts.json')
        .then(res => {
          // Get ID
          const postsArray = []
          for (let key in res.data) {
            postsArray.push({...res.data[key], id: key})
          }
          // Routes
        return postsArray.map(post => {
          return '/blog/' + post.id
        })
      })
    }
  }
}
