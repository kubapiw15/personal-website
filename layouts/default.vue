<template>
    <div class="layout">
        <NuxtPage></NuxtPage>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">

const { locale, locales } = useI18n()
const route = useRoute()
const siteUrl = 'https://kubapiw.dev'

const updateSeo = () => {
  const pathWithoutPrefix = route.fullPath.replace(/^\/(pl|en)/, '')

  const canonical = `${siteUrl}/${locale.value}${pathWithoutPrefix}`

  const alternates = locales.value.map(l => ({
    rel: 'alternate',
    hreflang: l.code,
    href: `${siteUrl}/${l.code}${pathWithoutPrefix}`,
    key: `alternate-${l.code}`  // <- klucz do nadpisania
  }))

  useHead({
    link: [
      { rel: 'canonical', href: canonical },
      ...alternates
    ]
  })
}

updateSeo()

watch([() => route.fullPath, () => locale.value], () => {
  updateSeo()
}, { immediate: true })
</script>

<style scoped>

    .layout {
        width: 100vw;
        display: flex;
        align-items: stretch;
        justify-content: stretch;
        flex-direction: column;
    }

</style>