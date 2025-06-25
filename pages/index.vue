<template>
        <div class="page">
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <PersonalSection></PersonalSection>
            <ToolsSection></ToolsSection>
            <ContactSection></ContactSection>
        </div>
</template>

<script setup>

const { t } = useI18n()
const { domain } = useRuntimeConfig().public

useSeoMeta({
  title: `${domain} - ${t('seo.mainPage.title')}`,
  description: t('seo.mainPage.description'),
  ogTitle: `${domain} - ${t('seo.mainPage.title')}`,
  ogDescription: t('seo.mainPage.description')
})

definePageMeta({
    keepalive: true,
})

</script>

<style scoped>

.page {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--bg);
    transition: background-color 0.2s;
}


</style>