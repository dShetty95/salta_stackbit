import { defineNuxtPlugin } from '#app'

// for dev
import { createClient } from 'contentful'

// for SSR, SSG
import contentful from 'contentful'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const createClientFunc = process.env.NODE_ENV === 'development' ? createClient : contentful.createClient
  const client = createClientFunc({
    space: config.private.CONTENTFUL_SPACE_ID,
    accessToken: config.private.DEV_MODE ?  config.private.CONTENTFUL_PREVIEW_TOKEN : config.private.CONTENTFUL_ACCESS_TOKEN,
    host: config.private.DEV_MODE ? 'preview.contentful.com' : 'cdn.contentful.com'
  })

  nuxtApp.provide('contentfulClient', client)
})
