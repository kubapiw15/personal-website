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
                    <h1>{{ $t('projectsPage.title') }}</h1>
                    <p>{{ $t("projectsPage.description") }}</p>
                </div>
                <div class="section right">
                  <NuxtImg class="img" alt="decoration image" src="/img/undraw/undraw_smartphone.svg"></NuxtImg>
                  <NuxtImg class="img" alt="decoration image" src="/img/undraw/undraw_user-account.svg"></NuxtImg>
                  <NuxtImg class="img" alt="decoration image" src="/img/undraw/undraw_data-analysis.svg"></NuxtImg>
                </div>
            </div>
        </div>
        <ProjectsPageProjectsSection></ProjectsPageProjectsSection>
    </div>
</template>

<script setup>

const { t } = useI18n()

const { domain } = useRuntimeConfig().public

useSeoMeta({
  title: `${domain} | ${t('seo.projectsPage.title')}`,
  description: t('seo.projectsPage.description'),
  ogTitle: `${domain} | ${t('seo.projectsPage.title')}`,
  ogDescription: t('seo.projectsPage.description')
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
  padding-block: 2rem;
  position: relative;
  overflow: hidden;
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
  transform: translateY(0.5rem);
  animation: updown infinite ease-in-out;
}

.img:nth-child(1){
  width: 6rem;
  bottom: 0;
  right: 20%;
  animation-delay: 0s;
  animation-duration: 8s;
  z-index: 3;
}

.img:nth-child(2){
  width: 12rem;
  left: 0;
  animation-delay: 1s;
  animation-duration: 8s;
  z-index: 2;
}

.img:nth-child(3){
  width: 15rem;
  right: 0;
  top: 1rem;
  animation-delay: 2s;
  animation-duration: 8s;
}

@keyframes updown {
  0% {
    transform: translateY(0.5rem);
  }
  50% {
    transform: translateY(-0.5rem);
  }
  100% {
    transform: translateY(0.5rem);
  }
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

  .img:nth-child(2), .img:nth-child(3) {
    display: none;
  }

  .img:nth-child(1) {
    right: 0;
    bottom: auto;
    transform: translateX(50%);
    animation: none;
    height: 60%;
    width: auto;
  }
}

</style>