<template>
  <PanelLoading :loaded="loaded"></PanelLoading>
    <div class="page">
    <div class="deco"></div>
    <div class="deco"></div>
    <div class="deco"></div>
    <div class="deco"></div>
      <div class="content">
        <section class="left">
          <h1>Zarządzaj swoją stroną</h1>
          <h2>Szybko i bez zbędnych przeszkód</h2>
        </section>
        <section class="right">
          <NuxtLink
          class="option"
          v-if="permissionsStore.permissions['logs'] == 1"
          to="/panel/logs"
          >
            <i class='bx bx-book-bookmark'></i>
            <h3>Sprawdź dziennik</h3>
            <p>Nie utrać kontroli nad swoją stroną. Dzięki dostępowi do dziennika zdarzeń nic Cie nie ominie.</p>
          </NuxtLink>
          <NuxtLink
          class="option"
          >
            <i class='bx bx-question-mark'></i>
            <h3>To prostsze niż myślisz</h3>
            <p>Potrzebujesz pomocy? Przejdź do poradnika i korzystaj z pełni możliwości oferowanych przez panel.</p>
          </NuxtLink>
        </section>
      </div>
    </div>
</template>

<script setup>

const permissionsStore = usePermissionsStore()

const loaded = ref(false)

const config = useRuntimeConfig();

onBeforeMount(async () => {
const user = await usePanelUser()
setTimeout(() => {
  loaded.value = true
}, 0);
});

definePageMeta({
  layout: "panel",
});

useHead({
  htmlAttrs: {
    lang: "pl",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.ico",
    },
  ],
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    }
  ]
});

useSeoMeta({
  title: `${config.public.name} - Strona Główna`,
  description: "[description]",
  ogTitle: "[og:title]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
});

</script>

<style scoped>
    .page {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color: var(--bg-darker);
        transition-duration: 0.2s;
        position: relative;
    }

    .content {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      z-index: 2;
    }

    section.left {
      height: 100%;
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      box-sizing: border-box;
      padding: 8rem 0 0 6rem;
    }

    h1 {
      font-size: 4rem;
      text-shadow: 0 0 2rem var(--text-dark-10);
      color: rgb(94, 135, 211);
    }

    h2 {
      font-weight: 400;
      font-size: 2rem;
      color: var(--text-light);
      letter-spacing: 0.1rem;
    }

    section.right {
      width: 40%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      box-sizing: border-box;
      padding-block: 2rem;
    }

    .option {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      flex-direction: column;
      width: 28rem;
      height: 18rem;
      box-shadow: 0 0 2rem var(--text-dark-10);
      border-radius: 2rem;
      overflow: hidden;
      position: relative;
      padding: 1rem;
      box-sizing: border-box;
      margin-block: 1rem;
      cursor: pointer;
      transition: all 0.2s, opacity 0.5s !important;
      text-decoration: none;
      backdrop-filter: blur(5px);
    }

    .option:nth-of-type(1):hover {
      background-color: rgba(88, 132, 228, 0.2);
    }

    .option:nth-of-type(2):hover {
      background-color: rgba(228, 163, 88, 0.2);
    }

    .option:nth-of-type(3):hover {
      background-color: rgba(228, 88, 88, 0.2);
    }

    .option i {
      position: absolute;
      left: -15%;
      top: 0;
      font-size: 18rem;
      z-index: 1;
      transition-duration: 0.4s;
    }

    .option:hover i {
      scale: 1.05;
    }

    .option:nth-of-type(1) i {
      color: rgba(88, 132, 228, 0.2);
    }
    .option:nth-of-type(2) i {
      color: rgba(228, 163, 88, 0.2);
    }

    .option:nth-of-type(3) i {
      color: rgba(228, 88, 88, 0.2);
    }
    
    .option h3 {
      margin: 2rem 2rem 1rem 0;
      font-size: 1.8rem;
      color: var(--text-light);
      z-index: 2;
      text-align: right;
    }

    .option p {
      z-index: 2;
      color: var(--text-light);
      font-size: 1.3rem;
    }

    .deco {
      position: absolute;
      opacity: 0.05;
      background-color: var(--intermediate);
      border-radius: 3rem;
      z-index: 1;
    }

    .deco:nth-of-type(1) {
      height: 18rem;
      width: 30rem;
      bottom: -2rem;
      left: -5rem;
      animation: deco1 8s infinite;
    }

    .deco:nth-of-type(2) {
      height: 28rem;
      width: 40rem;
      top: 2rem;
      left: 70%;
      transform: translateX(-50%);
      animation: deco2 15s infinite;
    }

    .deco:nth-of-type(3) {
      height: 13rem;
      width: 20rem;
      bottom: 5rem;
      right: 2rem;
      animation: deco3 10s infinite;
    }

    .deco:nth-of-type(4) {
      height: 13rem;
      width: 30rem;
      top: -3rem;
      left: 10%;
      animation: deco4 10s infinite;
    }

    @keyframes deco1 {
      0% {
        scale: 1;
      }
      20%, 40% {
        scale: 1.3;
      }
      60%, 100% {
        scale: 1;
      }
    }

    @keyframes deco2 {
      0% {
        width: 40rem;
      }
      10%, 60% {
        width: 30rem;
      }
      70%, 100% {
        width: 40rem;
      }
    }

    @keyframes deco3 {
      0% {
        transform: translateX(0rem);
      }
      10%, 40% {
        transform: translateX(-5rem);
      }
      50%, 100% {
        transform: translateX(0rem);
      }
    }

    @keyframes deco4 {
      0% {
        height: 13rem;
      }
      10%, 80% {
        height: 15rem;
      }
      90%, 100% {
        height: 13rem;
      }
    }

    @media screen and (max-width: 1400px){
      section.left {
        padding: 4rem 0 0 4rem;
      }
    }

    @media screen and (max-width: 1000px){

      .page {
        overflow-y: auto;
        height: 100%;
      }

      .content {
        /* height: calc(100% - 50px); */
        height: auto;
        flex-direction: column;
        padding-bottom: 50px;
      }

      section.left {
        width: 100%;
        height: auto;
        padding: 4rem 0.5rem 0.5rem 0.5rem;
        overflow: visible;
      }

      .deco {
        display: none;
      }

      h1 {
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 1.5rem
      }

      section.right {
        width: 100%;
        height: auto;
        display: flex;
        overflow: visible
      }

      .option {
        width: 90%;
        backdrop-filter: none;
      }
    }
    
</style>