<script lang="ts" setup>
import upperFirst from 'lodash.upperfirst'
import camelCase from 'lodash.camelcase'

/**
 * Define props
 */

interface Props {
  createdAt: string
  category: string
}

// TODO
const props = withDefaults(defineProps<Props>(), {})

// ----------------------------------------------------------------------------

const categoryTitle = props.category && props.category !== '__hide__' ? upperFirst(camelCase(props.category)) : null
const createdAt = useLocaleDate(new Date(props.createdAt))
</script>

<template>
  <aside class="card">
    <div class="flex align-content-center card-container">
      <div class="align-items-center ml-2 pt-1 text-700">
        <time class="text-sm" datetime="props.createdAt">{{ createdAt }}</time>

        <label
          v-if="categoryTitle"
          class="bg-primary-gradieht border-round-md text-sm font-normal text-white py-1 px-2 w-min ml-2"
        >
          {{ categoryTitle }}
        </label>
      </div>
    </div>
  </aside>
</template>
