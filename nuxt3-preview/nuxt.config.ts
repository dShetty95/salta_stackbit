import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,  
  target: 'server',
    typescript: {
      shim: false,
    },
    css: [
      'primeflex/primeflex.min.css',
      'primeflex/themes/saga-blue.css',
      'primeicons/primeicons.css',
      'prism-themes/themes/prism-vsc-dark-plus.min.css',
      'assets/scss/custom-primeflex.scss',
      'assets/scss/reboot.scss',
      'assets/scss/team-theme.scss',
    ],
    plugins: [{ src: 'prismjs/prism.js', mode: 'server' }],
  
    runtimeConfig: {
      private: {
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
        CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
        CONTENTFUL_PREVIEW_TOKEN: process.env.CONTENTFUL_PREVIEW_TOKEN,
        CONTENTFUL_CONTENT_KEY: process.env.CONTENTFUL_CONTENT_KEY,
        DEV_MODE: process.env.NODE_ENV !== 'production'
      },
      public: {
        compression: true,
        DEFAULT_LANGUAGE: 'en',
        HOST: process.env.NODE_ENV === 'http://localhost:3000',
        APP_NAME: 'Salta POC',
        SITE_TITLE: 'SaltaPOC',
        SITE_TOP_DESCRIPTION:
          'NCOI',
        TEAM_NAME: 'Salta Powered By Stackbit',
        // TEAM_WEBSITE_URL: 'https://www.stackbit.com',
        TEAM_STATEMENT: 'Hello World',
        // TEAM_LOGO_IMAGE_ON_FOOTER: '/images/logo-white-bg_transparent-w240.png',
        // TEAM_LOGO_BLACK: '/images/longrun-logo-black-600x315.png',
        // GITHUB_ORGANIZATION_URL: 'https://github.com/longrun',
        // GA_ID: process.env.GA_ID,
        // GA_APP_NAME: 'LongRun Blog',
      },
    },
    head: {
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8',
    },
    buildModules: [
      [
        '@nuxt-modules/compression',
        {
          algorithm: 'brotliCompress',
          success: () => {
            console.log('compression success')
          },
        },
      ],
    ], 

})
