<template>
    <PanelLoading :loaded="pageData"></PanelLoading>
    <i @click="extendOptions = !extendOptions" class='bx bx-objects-horizontal-right extendOptions' ></i>
    <div class="page">
        <div class="content">
            <div class="topSection">
                <h2>Konta użytkowników panelu</h2>
            </div>
            <div class="main">
                <div class="list">
                  <ul>
                    <PanelUserComponent :account="account" v-for="account in pageData" :key="account.id"></PanelUserComponent>
                      <div v-if="pageData == 0" class="empty">
                        <i class='bx bxs-user-account' ></i>
                        <p>Nie znaleziono wyników.</p>
                      </div>
                  </ul>
                </div>
                <div class="options" :class="{options_extended: extendOptions}">
                  <p>Opcje wyszukiwania</p>
                  <input type="text" placeholder="ID / login" v-model="queryData.target">
                  <input type="text" placeholder="Grupa" v-model="queryData.group">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

  const pageData = ref();
  const notificationStore = useNotificationStore()
  const queryData = ref({
    target: "",
    group: ""
  })
  const extendOptions = ref(false);

  const permissionsStore = usePermissionsStore();
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;
  
  onBeforeMount(async () => {
    try {
      const data = ref();
      const user = await usePanelUser()
      if (permissionsStore.permissions['accounts'] == 0) {
        navigateTo("/panel");
      }

      const formData = new FormData();
      formData.append('target', "");
      formData.append('group', "");
      formData.append('id', "");

      data.value = await $fetch(`${apiUrl}/panel/getAccounts.php`, {
        method: 'POST',
        credentials: 'include',
        body: formData
      });

      if(data.value == 'no_permission'){
        notificationStore.addNotification("Brak odpowiednich uprawnień.", "error")
        navigateTo("/panel")
      }

      pageData.value = data.value;

    } catch (error) {
      console.error('Błąd podczas ładowania danych:', error);
    }

    
  });

  let updateTimeout;

  async function updateAccounts(){
    let formData = new FormData();
    formData.append('target', queryData.value.target);
    formData.append('group', queryData.value.group);
    formData.append('id', "");
    const data = ref();
    data.value = await $fetch(`${apiUrl}/panel/getAccounts.php`, {
      method: 'POST',
      credentials: 'include',
      body: formData
    });
    if(data.value == "no_permission"){
        navigateTo("/panel")
        notificationStore.addNotification(`Brak odpowiednich uprawnień.`, "error")
      } else {
        pageData.value = data.value
      }
  }

  watch(queryData.value, () => {
    clearTimeout(updateTimeout)
    updateTimeout = setTimeout(()=>{
      updateAccounts()
    }, 1000)
  })

    definePageMeta({
    layout: "panel",
  });
  
  useSeoMeta({
    title: `${config.public.name} - Konta użytkowników`,
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
    align-items: stretch;
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

  .main {
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    flex: 1;
    padding-top: 2rem;
    box-sizing: border-box;
    overflow: hidden;
  }
  .list {
    flex: 1;
    display: flex;
    border-top: 0.1rem solid var(--low-contrast);
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    overflow-y: auto;
  }

  .list ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 0;
    flex: 1;
    box-sizing: border-box;
  }

  .options {
    width: 20rem;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0.5rem;
  }
  .options p {
    color: var(--text-main);
    font-size: 1.2rem;
    margin-block: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .options input {
    background-color: var(--low-contrast);
    border: none;
    outline: none;
    font-size: 1.2rem;
    padding: 1rem 2rem;
    box-sizing: border-box;
    margin-block: 0.2rem;
    border-radius: 10rem;
    color: var(--text-light);
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

    .main {
      flex-direction: column-reverse;
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

    .options input {
      margin-inline: 1rem;
    }

    .options_extended {
      opacity: 1;
      pointer-events: all;
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
  }
</style>