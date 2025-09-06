<template>
    <div class="page">
        <div class="cmcontainer">
            <ColorMode></ColorMode>
          </div>
          <NuxtLink class="back" :to="$localePath('/')">
            <i class='bx  bx-chevron-left'  ></i> 
            <p>{{ $t("toolsPage.return") }}</p>
          </NuxtLink>  
          <div class="header">
            <div class="content">
                <div class="section left">
                    <h1>{{ $t('contactPage.title') }}</h1>
                    <p>{{ $t("contactPage.description") }}</p>
                </div>
                <div class="section right">
                  <NuxtImg class="img" alt="decoration image" src="/img/undraw/undraw_talking-on-the-phone.svg"></NuxtImg>
                </div>
            </div>
        </div>
        <ContactSection></ContactSection>
    </div>
</template>

<script setup>


const { t } = useI18n()

const { domain } = useRuntimeConfig().public


useSeoMeta({
  title: `${domain} | ${t('seo.contactPage.title')}`,
  description: t('seo.contactPage.description'),
  ogTitle: `${domain} | ${t('seo.contactPage.title')}`,
  ogDescription: t('seo.contactPage.description')
})


    import AOS from 'aos'

    onMounted(()=>{
        window.scrollTo(0, 0)
        setTimeout(() => {
            AOS.refresh()
        }, 0);
    })

</script>

<style lang="scss" scoped>


.page {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--bg);
    transition: background-color 0.2s;
    width: 100vw;
}

.cmcontainer {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
}

.back {
  position: fixed;
  left: 0;
  top: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  color: var(--text-light);
  transition: color 0.2s;
  text-decoration: none;
  z-index: 10;
  overflow: hidden;
}

.back:hover {
  color: var(--text-lighter);
}

.back i {
  font-size: 1.7rem;
  margin-right: 0.2rem;
  transition: transform 0.2s;
}

.back p {
  margin: 0;
  font-size: 0.9rem;
  pointer-events: none;
  overflow: hidden;
  white-space: nowrap;
}

.back:hover i {
  transform: translateX(-0.3rem);
}

.header {
  width: 100vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 2rem 5rem;
  position: relative;
  overflow: hidden;
  border-bottom: solid 0.1rem var(--low-contrast-30);
}

.content {
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
}
.left {
  width: 60%;
  z-index: 2;
  box-sizing: border-box;
  padding-right: 3rem;
}

h1 {
  font-size: 2.5rem;
  color: var(--text-main);
  transition: color 0.2s;
  font-weight: 600;
}

.left p {
  color: var(--text-lighter);
  transition: color 0.2s;
  margin-top: 4rem;
  font-size: 1.1rem;
}

.right {
  width: 40%;
  z-index: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.img {
  position: absolute;
  height: 80%;
}

@media screen and (max-width: 1400px){
  .content {
    width: 80%;
  }

  .back p {
    display: none;
  }
}

@media screen and (max-width: 1000px){
  .back p {
    font-size: 1rem;
    display: flex;
  }

  .content {
    width: 90%;
    max-width: 600px;
  }

  .cmcontainer, .back {
    position: absolute;
  }

  .left {
    width: 80%;
    margin-right: 0;
  }

  .right {
    width: 20%;
  }

  .img {
    right: 0;
    bottom: auto;
    transform: translateX(50%);
    animation: none;
    height: 60%;
    width: auto;
  }
}

</style>