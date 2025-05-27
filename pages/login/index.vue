<template>
    <div class="appcontainer">
      <PanelLoadingScreen :loaded="loaded"></PanelLoadingScreen>
        <div class="app" :class="{app_register: !login}">
            <PanelLoginForm @switchPage="switchPage()"></PanelLoginForm>
            <PanelRegisterForm @switchPage="switchPage()"></PanelRegisterForm>
            
            <PanelCurtain></PanelCurtain>
        </div>
    </div>
</template>

<script setup>
const login = ref(true);

const loaded = ref(false)

const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;

onBeforeMount(async () => {
  try {
    const data = ref();
    data.value = await $fetch(`${apiUrl}/panel/getuser.php`, {
      method: 'GET',
      credentials: 'include',
    });
    if(toRaw(data.value)["id"] != ''){
      navigateTo("/panel")
    } else {
      loaded.value = true
    }

  } catch (error) {
    console.error('Błąd podczas ładowania danych:', error);
  }
});

definePageMeta({
  layout: "login",
});

useSeoMeta({
  title: "Logowanie - Nazwa Firmy",
  description: "[description]",
  ogTitle: "[og:title]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
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
  ]
});

const switchPage = () => {
  login.value = !login.value;
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.appcontainer {
    height: 100vh;
    width: 100vw;
    background: url(../../public/img/email-pattern.png) center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden
}
.app {
  padding: 0;
  margin: 0;
  
  font-family: "Montserrat", sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(255, 255, 255);
  height: 80vh;
  width: 120vh;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10vh rgba(0, 0, 0, 0.13);
  display: flex;
  transform: translateX(0vw);
  transition: transform 0.2s;
}

@media screen and (max-width: 1400px){
    .app {
        height: 90vh;
        width: 135vh;
    }
}

@media screen and (max-width: 1000px){
    .app {
        height: calc(100vh - 50px);
        width: 200vw;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(1px);
    }

    .app_register {
        transform: translateX(-100vw);
    }
}
</style>