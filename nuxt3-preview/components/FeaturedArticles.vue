<script lang="ts" setup>
import { contentChangeEmitter } from "~~/utils/emitter";

const { data, refresh } = await useAsyncData('entries', async (nuxtApp) => {
  const { $contentfulClient } = nuxtApp
  return await $contentfulClient.getEntries({
    order: '-sys.createdAt',
    limit: 10,
  })
},{initialCache: false})

contentChangeEmitter.on('change', () => {
  refresh();
})

const items = data.value.items

const { $assertion } = useNuxtApp()
$assertion.assertEntries(items)

const config = useRuntimeConfig()
useHead({
  title: config.public.TEAM_STATEMENT,
  meta: [
    { hid: 'description', name: 'description', content: config.public.SITE_TOP_DESCRIPTION },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:title', property: 'og:title', content: config.public.SITE_TITLE },
    { hid: 'og:description', property: 'og:description', content: config.public.SITE_TOP_DESCRIPTION },
    { hid: 'og:url', property: 'og:url', content: `${config.public.HOST}` },
  ],
})
</script>

<template>
  <main class="featured-articles m-0 p-3">
    <div class="grid">
      <article v-for="(entry, i) in items" :key="entry.sys.id" :class="['col-12', i > 0 ? 'md:col-6' : undefined]"
        class="mb-5">
        <h1 v-if="i === 0" class="text-3xl">
          <a :href="`/article/${entry.fields.slug}`">
            {{ entry.fields.title }}
          </a>
        </h1>
        <h2 v-else class="text-2xl">
          <a :href="`/article/${entry.fields.slug}`">
            {{ entry.fields.title }}
          </a>
        </h2>
        <a class="img" :href="`/article/${entry.fields.slug}`">
          <img :src="`${entry.fields.coverArt.fields.file.url}?fm=webp`" :alt="entry.fields.coverArt.fields.title"
            class="max-w-full border-round" :loading="i > 0 ? 'lazy' : undefined" />
        </a>

      </article>
    </div>
  </main>
</template>

<style scoped lang="scss">
.featured-articles {
  background-color: var(--surface-0);
}
</style>
