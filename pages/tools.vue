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
              <div class="left section">
                <h1>{{ $t("toolsPage.title") }}</h1>
                <p>{{ $t("toolsPage.description") }}</p>
              </div>
              <div class="right section">
                <div class="decoContainer">
                  <i class='deco bx  bx-cube'></i> 
                  <i class='deco bx  bx-cube'></i> 
                  <i class='deco bx  bx-cube'></i> 
                  <i class='deco bx  bx-cube'></i> 
                  <i class='deco bx  bx-cube'></i> 
                </div>
              </div>
            </div>
          </div>
          <ToolsPageToolsSection></ToolsPageToolsSection>
        </div>
</template>

<script setup>

const { t } = useI18n()

useSeoMeta({
  title: t('seo.toolsPage.title'),
  description: t('seo.toolsPage.description'),
  ogTitle: t('seo.toolsPage.title'),
  ogDescription: t('seo.toolsPage.description')
})

</script>

<style scoped>

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
  transition: opacity 0.2s;
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
}

.right {
  width: 40%;
  z-index: 1;
  height: 100%;
}

h1 {
  font-size: 2.5rem;
  color: var(--text-main);
  transition: color 0.2s;
}

.left p {
  color: var(--text-lighter);
  transition: color 0.2s;
  margin-top: 4rem;
  font-size: 1.1rem;
}

.deco {
  color: var(--additive);
  position: absolute;
  animation: cube infinite forwards ease-in-out;
  transform: translateX(-10%);
}

.decoContainer {
  height: 100%;
  width: 100%;
  position: relative;
}

.deco:nth-child(1) {
  font-size: 1em;
  left: 40%;
  top: 0%;
  rotate: 290deg;
  animation-delay: 0.1s;
  animation-duration: 5s;
}

.deco:nth-child(2) {
  font-size: 2em;
  right: 40%;
  top: 5%;
  rotate: 20deg;
  animation-delay: 0.2s;
  animation-duration: 6s;
}

.deco:nth-child(3) {
  font-size: 4em;
  left: 30%;
  top: 25%;
  rotate: 800deg;
  animation-delay: 0.3s;
  animation-duration: 7s;
}

.deco:nth-child(4) {
  font-size: 6em;
  right: 20%;
  top: 50%;
  rotate: 120deg;
  animation-delay: 0.4s;
  animation-duration: 8s;
}

.deco:nth-child(5) {
  font-size: 8em;
  left: 0%;
  bottom: 10%;
  rotate: 300deg;
  animation-delay: 0.5s;
  animation-duration: 9s;
}

@keyframes cube {
  0% {
    transform: translateX(-10%);
  }
  50% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(-10%);
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
    width: 95%;
  }

  .left {
    width: 80%;
  }

  .right {
    width: 50%;
    position: absolute;
    right: 0;
    top: 2rem;
  }
}

@media screen and (max-width: 1000px) {
  .cmcontainer, .back {
    position: absolute;
  }
}

</style>