<template>
    <PanelLoading :loaded="loaded"></PanelLoading>
    <i @click="extendOptions = !extendOptions" class='bx bx-objects-horizontal-right extendOptions' ></i>
    <div class="page">
        <div class="content">
            <div class="topSection">
                <h2>Klucze rejestracyjne</h2>
            </div>
            <div class="main">
                <div class="list">
                  <ul>
                    <div class="empty" v-if="pageData.length == 0">
                      <i class='bx bx-search-alt'></i>
                      <p>Brak kluczy rejestracyjnych.</p>
                    </div>
                    <PanelRegistrationKeyComponent @update="updateHandle()" v-for="code in pageData" :key="code.id" :code="code"></PanelRegistrationKeyComponent>
                  </ul>
                </div>
                <div class="options" :class="{optionsExtended: extendOptions}">
                    <h3>Grupa uprawnień</h3>
                    <select v-model="queryData.pgroup">
                        <option v-if="permissionsStore.permissions.accounts && permissionsStore.permissions.main" v-for="group in Object.keys(groupsStore.groups).filter(e => !groupsStore.groups[e].permissions.main)" :key="groupsStore.groups[group].id" :value="groupsStore.groups[group].id">{{ groupsStore.groups[group].groupname }}</option>
                        <option  v-if="permissionsStore.permissions.accounts && !permissionsStore.permissions.main" v-for="group in Object.keys(groupsStore.groups).filter(e => !(groupsStore.groups[e].permissions.main || groupsStore.groups[e].permissions.accounts))" :key="groupsStore.groups[group].id" :value="groupsStore.groups[group].id">{{ groupsStore.groups[group].groupname }}</option>
                    </select>
                    <button @click="generateHandle()" class="add">
                        <i class='bx bx-plus-circle'></i>
                        <p>Wygeneruj klucz</p>
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

const pageData = ref([])
const config = useRuntimeConfig()
const extendOptions = ref(false)
const permissionsStore = usePermissionsStore()
const notificationStore = useNotificationStore()
const apiUrl = config.public.apiUrl
const groupsStore = useGroupsStore()
const loaded = ref(false)

const queryData = ref({
    pgroup: 0
})

onBeforeMount(async () => {
    try {
      const user = await usePanelUser()
      if (permissionsStore.permissions['accounts'] == 0) {
        navigateTo("/panel");
        notificationStore.addNotification(`Brak odpowiednich uprawnień.`, "error")
      }

      const data = ref();
      data.value = await $fetch(`${apiUrl}/panel/getRegistrationCodes.php`, {
        method: "POST",
        credentials: 'include'
      });
      if(data.value == 'no_permission'){
            navigateTo("/panel")
            notificationStore.addNotification(`Brak odpowiednich uprawnień.`, "error")
        }
      pageData.value = data.value

      loaded.value = true
    } catch (error) {
      console.error('Błąd podczas ładowania danych:', error);
    }
})

async function generateHandle(){
    const data = ref()
    let formData = new FormData()
    formData.append("pgroup", queryData.value.pgroup)
    data.value = await $fetch(`${apiUrl}/panel/addRegistrationCode.php`, {
        method: "POST",
        credentials: 'include',
        body: formData
    });
    if(data.value == 'no_permission'){
        navigateTo("/panel")
        notificationStore.addNotification(`Brak odpowiednich uprawnień.`, "error")
    } else if(data.value.success){
      extendOptions.value = false
      data.value = await $fetch(`${apiUrl}/panel/getRegistrationCodes.php`, {
        method: "POST",
        credentials: 'include'
      });
      if(data.value == 'no_permission'){
            navigateTo("/panel")
            notificationStore.addNotification(`Brak odpowiednich uprawnień.`, "error")
        }
      pageData.value = data.value
    } else {
        notificationStore.addNotification("Wystąpił błąd.", "error")
        console.error(data.value)
        navigateTo("/panel")
    }
}

async function updateHandle(){
  const data = ref()
    data.value = await $fetch(`${apiUrl}/panel/getRegistrationCodes.php`, {
        method: "POST",
        credentials: 'include'
      });
      if(data.value == 'no_permission'){
            navigateTo("/panel")
            notificationStore.addNotification(`Brak odpowiednich uprawnień.`, "error")
        }
      pageData.value = data.value
}

definePageMeta({
    layout: "panel",
  });
  
  useSeoMeta({
    title: `${config.public.name} - Kody rejestracyjne`,
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
    width: 80%;
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

  .options .add {
    background-color: var(--low-contrast);
    color: var(--text-light);
    border-radius: 0.5rem;
    font-size: 1.2rem;
    border: none;
    display: flex;
    align-items: center;
    padding: 0rem 1rem;
    margin-top: 1rem;
    width: 90%;
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;
  }

  .options .add:hover {
    color: var(--text-main);
  }

  .options .add i {
    font-size: 2rem;
    margin-right: 1rem;
    color: rgb(32, 135, 219);
  }

  .list {
    flex: 6;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    border-top: solid 0.1rem var(--low-contrast);
    overflow-x: auto;
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

  .main {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: stretch;
    margin-top: 2rem;
    overflow: hidden;
  }

  .list ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    width: 100%;
    padding-block: 0.5rem;
    padding-inline: 0.3rem;
    box-sizing: border-box;
  }

  .extendOptions {
    display: none;
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