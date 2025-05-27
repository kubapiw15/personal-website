<template>
    <PanelLoading :loaded="pageData"></PanelLoading>
    <i @click="extendOptions = !extendOptions" class='bx bx-objects-horizontal-right extendOptions' ></i>
    <div class="page">
        <div class="content">
            <div class="topSection">
                <h2>Dziennik zdarzeń</h2>
            </div>
            <div class="main">
                <div class="list" ref="list">
                    <ul>
                      <PanelLogComponent v-for="element in pageData" :key="element" :log="element"></PanelLogComponent>
                      <div v-if="pageData != 0" class="loader" ref="loader">
                      </div>
                      <div v-if="pageData == 0" class="empty">
                        <i class='bx bxs-file-find' ></i>
                        <p>Nie znaleziono wyników.</p>
                      </div>
                    </ul>
                </div>
                <div class="options" :class="{optionsExtended: extendOptions}">
                  <h3>Opcje wyszukiwania</h3>
                  <input type="text" class="queryUser" placeholder="Użytkownik:" v-model="queryData.user">
                  <input type="text" class="queryTarget" placeholder="Cel:" v-model="queryData.target">
                  <select class="queryAction" v-model="queryData.action">
                    <option value="">Wszystkie zdarzenia</option>
                    <option v-for="event in Object.keys(staticNames.events)" :key="event" :value="event">{{ staticNames.events[event][0] }}</option>
                  </select>
                  <div class="inputContainer">
                    <label for="from">Od:</label>
                    <input id="from" type="date" class="queryFrom" placeholder="Od:" v-model="queryData.from">
                  </div>
                  <div class="inputContainer">
                    <label for="to">Do:</label>
                    <input id="to" type="date" class="queryTo" placeholder="Do:" v-model="queryData.to">
                  </div>
                  <div class="reset"
                  :class="{show: queryData.user != '' || queryData.action != '' || queryData.target != '' || queryData.from != '' || queryData.to != ''}"
                  @click="reset()">
                    <i class='bx bx-reset'></i>
                    <p>Resetuj filtry</p>
                  </div>
                </div>
            </div>
            <div class="footer">
              <p v-if="pageData">Pobrano ostatnie {{ pageData.length }} zdarzeń</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { staticNames } from '~/data/staticNames';


    const pageData = ref()
    const extendOptions = ref(false)
    const queryData = ref({
        user: "",
        action: "",
        target: "",
        from: "",
        to: "",
        count: "50"
    })

    const updated = ref(false)
    const loader = ref()
    const list = ref()

    const notificationStore = useNotificationStore()
  const permissionsStore = usePermissionsStore();
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;
  let observer
  
  onBeforeMount(async () => {
    try {
      const user = await usePanelUser()
      if (permissionsStore.permissions['logs'] == 0) {
        navigateTo("/panel");
        notificationStore.addNotification(`Brak odpowiednich uprawnień.`, "error")
      }

      const data = ref()
      let formData = new FormData
      formData.append("user", queryData.value.user)
      formData.append("target", queryData.value.target)
      formData.append("action", queryData.value.action)
      formData.append("from", queryData.value.from)
      formData.append("to", queryData.value.to)
      formData.append("count", queryData.value.count)

      data.value = await $fetch(`${apiUrl}/panel/getLogs.php`, {
        method: "POST",
        credentials: "include",
        body: formData
      })

      if(data.value == 'no_permission'){
        navigateTo("/panel")
        notificationStore.addNotification(`Brak odpowiednich uprawnień.`, "error")
      }

      pageData.value = toRaw(data.value)
      updated.value = true

      observer = new IntersectionObserver(entries => {
        entries.forEach(async entry => {
          
          if(entry.isIntersecting && updated.value){
            await nextTick()
            observer.unobserve(loader.value)
            loader.value.style.display = 'none'
            queryData.value.count = (parseInt(queryData.value.count) + 50).toString();
            await updateLogs()
            setTimeout(() => {
              if(pageData.value.length == queryData.value.count){
                loader.value.style.display = 'flex'
              }
            }, 0);
            setTimeout(() => {
            }, 1);
          }
        })
      })

      observer.observe(loader.value)

    } catch (error) {
      console.error('Błąd podczas ładowania danych:', error);
    }

    
  });

  let updateTimeout;

  const updateLogs = async () => {
    let formData = new FormData
    formData.append("user", queryData.value.user)
    formData.append("target", queryData.value.target)
    formData.append("action", queryData.value.action)
    formData.append("from", queryData.value.from)
    formData.append("to", queryData.value.to)
    formData.append("count", queryData.value.count)
    const data = ref()
    data.value = await $fetch(`${apiUrl}/panel/getLogs.php`, {
      method: "POST",
      credentials: "include",
      body: formData
    })
      if(data.value == "no_permission"){
        navigateTo("/panel")
        notificationStore.addNotification(`Brak odpowiednich uprawnień.`, "error")
      } else {
        pageData.value = data.value
        await nextTick()
        if(pageData.value != 0){
          observer.observe(loader.value)
          if(pageData && pageData.value.length  == queryData.value.count){
            loader.value.style.display = 'flex'
          }
        }
      }
  }

  const reset = ()=>{
    queryData.value.user = ""
    queryData.value.action = ""
    queryData.value.target = ""
    queryData.value.from = ""
    queryData.value.to = ""
    setTimeout(() => {
    queryData.value.count = 50
    }, 1000);
  }

Object.keys(queryData.value).filter(e => e != 'count').forEach(key => {
  watch(()=>queryData.value[key], async() => {
    clearTimeout(updateTimeout)
    updateTimeout = setTimeout(async()=>{
      queryData.value.count = '50'
      updateLogs()
      list.value.scrollTop = 0
    }, 1000)
  })
})
  
    definePageMeta({
    layout: "panel",
  });
  
  useSeoMeta({
    title: `${config.public.name} - Dziennik zdarzeń`,
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
  }
  
  .content {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: stretch;
  }

  .topSection {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 5rem;
    align-items: center;
  }

  h2 {
    color: var(--text-main);
    font-weight: 500;
    font-size: 2rem;
    
    transition: color 0.2s;
  }

  .list {
    flex: 5;
    width: 100%;
    overflow-y: auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    border-top: solid 0.1rem var(--low-contrast);
    box-sizing: border-box;
  }

  .list ul {
    width: 100%;
    height: auto;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    padding-block: 0.5rem;
    padding-inline: 0.3rem;
  }

  .main {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    margin-top: 2rem;
    overflow: hidden;
  }

  .options {
    height: 100%;
    flex: 2;
    display: flex;
    align-items: center;
    flex-direction: column;
    
  }

  .options h3 {
    color: var(--text-main);
    font-weight: 400;
    transition-duration: 0.2s;
  }

  .options input {
    background-color: var(--low-contrast);
    color: var(--text-light);
    font-size: 1.2rem;
    padding: 1rem;
    width: 90%;
    border: none;
    border-radius: 5rem;
    margin-block: 0.2rem;
    box-sizing: border-box;
    outline: none;
    transition-duration: 0.2s;
  }

  .options select {
    background-color: var(--low-contrast);
    color: var(--text-light);
    font-size: 1.2rem;
    padding: 1rem;
    width: 90%;
    border: none;
    border-radius: 5rem;
    margin-block: 0.2rem;
    box-sizing: border-box;
    outline: none;
    transition-duration: 0.2s;
  }

  .options .inputContainer {
    width: 90%;
    justify-content: stretch;
    display: flex;
  }

  .options label {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    margin-right: 0.5rem;
    color: var(--text-light);
    transition-duration: 0.2s;
  }

  .options .inputContainer input {
    width: auto;
    flex: 1;
  }

  .footer {
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-bottom: 1rem;
    color: var(--intermediate);
  }

  .footer p {
    margin-inline: 0.5rem;
  }

  .footer select {
    font-size: 1rem;
    color: var(--text-main);
    background-color: var(--low-contrast);
    border: none;
    outline: none;
    padding: 0.2rem;
    border-radius: 0.5rem;
  }

  .extendOptions {
    display: none;
  }

  .empty {
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .empty p {
    color: var(--intermediate);
    font-size: 1.5rem;
    margin-top: 2rem
  }

  .empty i {
    color: rgb(197, 47, 47);
    font-size: 8rem;
  }

  .reset {
    background-color: var(--low-contrast);
    color: var(--text-light);
    font-size: 1.2rem;
    padding: 1rem;
    width: 90%;
    border: none;
    border-radius: 5rem;
    margin-block: 0.2rem;
    box-sizing: border-box;
    outline: none;
    transition-duration: 0.2s;
    display: flex;
    align-items: center;
    justify-content: start;
    cursor: pointer;
    pointer-events: none;
    opacity: 0;
  }

  .reset:hover {
    background-color: rgb(197, 47, 47);
  }

  .reset i {
    margin-right: 1rem;
  }

  .reset p {
    margin: 0;
  }

  .show {
    opacity: 1;
    pointer-events: all;
  }

  .loader {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 2rem;
  }

  .loader i {
    font-size: 3rem;
    color: var(--intermediate);
    animation: loader 2s infinite ease-in-out, loader2 3s infinite linear;
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(720deg);
    }
  }

  @keyframes loader2 {
    0% {
      rotate: 0deg;
    }
    100% {
      rotate: 360deg;
    }
  }


  @media screen and (max-width: 1400px){
        .content {
          width: 90%;
        }
    }

  @media screen and (max-width: 1000px){
    .content {
      width: 95%;
      height: calc(100% - 50px);
    }

    .options {
      position: fixed;
      z-index: 80;
      opacity: 0;
      top: 0;
      left: 0;
      transition: opacity 0.2s;
      pointer-events: none;
      height: 100vh;
      width: 100vw;
      background-color: var(--bg-darker);
      box-sizing: border-box;
      padding-top: 5rem;
    }

    .extendOptions {
      display: flex;
      position: fixed;
      right: 0.35rem;
      top: 0.35rem;
      height: 3.5rem;
      width: 3.5rem;
      font-size: 2rem;
      background-color: var(--low-contrast);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      color: var(--text-light);
      z-index: 81;
      cursor: pointer;
    }

    .options.optionsExtended {
      opacity: 1;
      pointer-events: all;
    }
  }
</style>