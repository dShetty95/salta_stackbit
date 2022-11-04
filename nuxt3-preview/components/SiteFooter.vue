<script lang="ts" setup>
</script>

<template>
  <footer class="sitefooter text-center pb-2">
    <!-- You should put on the file in `~/public/` if path start with '/' -->
    <div class="my-3">
      &copy;
      {{ new Date().getFullYear() }}
      <a :href="$config.TEAM_WEBSITE_URL" target="_blank">{{ $config.TEAM_NAME }}</a>
    </div>
    <div class="version text-sm text-300 text-right mr-4">
      <p>{{ $config.APP_NAME }}</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.sitefooter {
  background-color: var(--surface-800);
  color: var(--surface-50);

  a {
    color: var(--surface-50);
  }
  a:hover {
    color: opacity(0.8);
  }

  .version,
  .version a {
    color: var(--surface-300);
  }
}
</style>
