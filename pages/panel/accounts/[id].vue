<template>
    <PanelLoading :loaded="loaded"></PanelLoading>
    <div class="page">
        <div class="content" v-if="pageData != 'empty' && pageData">
            <div class="main">
              <div class="box general">
                <i :style="`color: ${pgroup.color};`" class='bx bxs-user-circle'></i>
                <div class="block">
                  <div class="username">{{ pageData.username }}</div>
                  <div class="email">{{ pageData.email || "Brak adresu e-mail" }}</div>
                </div>
                <div class="id">ID konta: {{ pageData.id }}</div>
                <div class="created">Utworzono: {{ `${String(created.getHours()).padStart(2, '0')}:${String(created.getMinutes()).padStart(2, '0')} ${String(created.getDate()).padStart(2, '0')}-${String(created.getMonth() + 1).padStart(2, '0')}-${created.getFullYear()}` }}</div>
              </div>
              <div v-if="pageData.lastlogin" class="box lastlogin">
                <i class='bx bx-log-in-circle'></i>
                <p v-if="pageData.lastlogin != ''">Ostatnie logowanie: {{ `${String(lastlogin.getHours()).padStart(2, '0')}:${String(lastlogin.getMinutes()).padStart(2, '0')} ${String(lastlogin.getDate()).padStart(2, '0')}-${String(lastlogin.getMonth() + 1).padStart(2, '0')}-${lastlogin.getFullYear()}` }}</p>
              </div>
              <div v-else class="box lastlogin">
                <i class='bx bx-log-in-circle icon_red'></i>
                <p>Użytkownik nie logował się do systemu</p>
              </div>
              <div class="box pgroup">
                <div class="block">
                  <p class="label">Grupa uprawnień:</p>
                  <select v-if="canEdit" class="groupname"
                  v-model="pageData.pgroup"
                  >
                    <option v-if="canEdit && permissionsStore.permissions.main" v-for="group in Object.keys(groupsStore.groups).filter(e => !groupsStore.groups[e].permissions.main)" :key="groupsStore.groups[group].id" :value="groupsStore.groups[group].id">{{ groupsStore.groups[group].groupname }}</option>
                    <option  v-if="canEdit && !permissionsStore.permissions.main" v-for="group in Object.keys(groupsStore.groups).filter(e => !(groupsStore.groups[e].permissions.main || groupsStore.groups[e].permissions.accounts))" :key="groupsStore.groups[group].id" :value="groupsStore.groups[group].id">{{ groupsStore.groups[group].groupname }}</option>
                  </select>
                  <div class="groupname" v-if="!canEdit && groupsStore.groups.find(e => e.id == unref(user).pgroup)">{{ groupsStore.groups.find(e => e.id == unref(user).pgroup)['groupname'] }}</div>
                </div>
                <div class="permissions">
                  <div v-for="permission in Object.keys(pgroup.permissions).filter(e => e != 'main')" :key="permission" class="item" :class="{denied: pgroup.permissions[permission] == 0, granted: pgroup.permissions[permission] == 1}">
                    <i v-if="pgroup.permissions[permission] == 1" class='bx bx-check-circle' ></i>
                    <i v-else class='bx bx-x-circle'></i>
                    <p class="name">{{ staticNames.permissions[permission][0] }}</p>
                  </div>
                </div>
              </div>
              <div class="options" v-if="canEdit">
                <button class="option remove show"
                @click="removeHandle()"
                @mouseleave="removeSafety = false"
                >
                  <i class='bx bxs-user-x'></i>
                    <p v-if="!removeSafety">Usuń użytkownika</p>
                    <p v-if="removeSafety">Na pewno?</p>
                </button>
                <button :class="{show: JSON.stringify(initialData) !== JSON.stringify(pageData)}" class="option refresh"
                @click="pageData = JSON.parse(JSON.stringify(initialData))"
                >
                  <i class='bx bx-refresh'></i>
                  <p>Resetuj zmiany</p>
                </button>
                <button :class="{show: JSON.stringify(initialData) !== JSON.stringify(pageData)}" class="option save"
                @click="updateHandle()"
                >
                  <i class='bx bx-save'></i>
                  <p>Zapisz ustawienia</p>
                </button>
              </div>
            </div>
            <div class="logs" v-if="permissionsStore.permissions['logs'] == 1">
              <h2>Ostatnie działania użytkownika</h2>
              <div class="logsContainer">
                <LogComponent
                v-for="log in logs"
                :log="log"
                :key="log"
                :notarget="true"
                ></LogComponent>
                <div v-if="logs.length == 0" class="empty">
                        <i class='bx bxs-file-find' ></i>
                        <p>Nie znaleziono wyników.</p>
                      </div>
              </div>
            </div>
        </div>
        <div class="backup" v-if="pageData && pageData == `empty`">
          <i class='bx bxs-user-pin'></i>
          <p>Nie znaleziono użytkownika</p>
          <NuxtLink class="link" to="/panel/accounts">Powrót</NuxtLink>
        </div>
    </div>
</template>

<script setup>

import { staticNames } from '~/data/staticNames';

    const pageData = ref({'id': '', 'username': '','email': "", 'lastlogin': '', 'pgroup': '', 'created': ''});
    const initialData = ref()
    const loaded = ref(false)
    const removeSafety = ref(false)
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const permissionsStore = usePermissionsStore();
    const notificationStore = useNotificationStore();
    const groupsStore = useGroupsStore()
    const pgroup = ref({"id": '',"groupname":"","color":"","permissions":{"main":0,"edit":0,"logs":0,"accounts":0}})
    const logs = ref([])
    const user = ref({"id": '', "username": '','email': "", "pgroup": '', "perms":{"main":0,"edit":0,"logs":0,"accounts":0}})
    let canEdit
    const route = useRoute();

    const lastlogin = computed(() => {
        return new Date(pageData.value.lastlogin);
    })
    const created = computed(() => {
        return new Date(pageData.value.created);
    })

    onBeforeMount(async () => {
    try {
      const data = ref();
      user.value = await usePanelUser()
      if (permissionsStore.permissions['accounts'] == 0) {
        navigateTo("/panel");
        notificationStore.addNotification(`Brak odpowiednich uprawnień.`, "error")
      }

      let formData = new FormData();
      formData.append('id', route.params.id);
      formData.append('target', "");
      formData.append('group', "");

      data.value = await $fetch(`${apiUrl}/panel/getAccounts.php`, {
        method: 'POST',
        credentials: 'include',
        body: formData
      });

      if(data.value == "no_permission"){
        navigateTo("/panel")
        notificationStore.addNotification(`Brak odpowiednich uprawnień.`, "error")
      }

      if(data.value != 0){
        pageData.value = data.value[0];
        initialData.value = JSON.parse(JSON.stringify(pageData.value))
        
        pgroup.value = groupsStore.groups.find(e => e.id == pageData.value.pgroup)

        if(permissionsStore.permissions['logs'] == 1) {
          formData = new FormData()
          formData.append("user", pageData.value.id)
          formData.append("target", '')
          formData.append("action", '')
          formData.append("from", '')
          formData.append("to", '')
          formData.append("count", 30)
          data.value = await $fetch(`${apiUrl}/panel/getLogs.php`, {
            method: "POST",
            credentials: 'include',
            body: formData
          })
          if(data.value == 'no_permission') {
            navigateTo("/panel")
            notificationStore.addNotification(`Brak odpowiednich uprawnień.`, "error")
          }
          logs.value = data.value
        }

        watch(pageData, ()=>{
          if(loaded){
            pgroup.value = groupsStore.groups[Object.keys(groupsStore.groups).find(e => groupsStore.groups[e].id == pageData.value.pgroup)]
          }
        }, {deep: true})
      } else {
        pageData.value = 'empty'
      }

    canEdit = computed(() => {
      if(pgroup.value == '' || pageData.value.id == unref(user.value).id || pgroup.value.permissions.main){
        return false;
      } else if(permissionsStore.permissions["main"]){
        return true;
      } else if(permissionsStore.permissions["accounts"]){
        return !(pgroup.value.permissions.accounts || pgroup.value.permissions.main)
      }
      return false;
    })

        loaded.value = true
    
    } catch (error) {
      console.error('Błąd podczas ładowania danych:', error);
    }
  });

  const removeHandle = async ()=>{
    if(!removeSafety.value) {
      removeSafety.value = true
    } else {
      const data = ref();
      let formData = new FormData()
      formData.append("id", pageData.value.id);
      data.value = await $fetch(`${apiUrl}/panel/deleteAccount.php`, {
        method: "POST",
        credentials: 'include',
        body: formData
      })
      if(data.value == 'no_permission'){
        notificationStore.addNotification("Brak odpowiednich uprawnień.", "error")
        navigateTo("/panel")
      } else if(data.value['success']) {
        notificationStore.addNotification(`Pomyślnie usunięto konto.`, "success")
        navigateTo("/panel/accounts")
      } else {
        notificationStore.addNotification("Wystąpił błąd.", "error")
        navigateTo("/panel")
      }
    }
  }

  const updateHandle = async ()=>{
    const data = ref()
    let formData = new FormData;
    formData.append("id", pageData.value.id)
    formData.append("pgroup", pgroup.value.id)
    data.value = await $fetch(`${apiUrl}/panel/updateAccount.php`, {
      method: "POST",
      credentials: 'include',
      body: formData
    })
    if(data.value == "no_permission"){
      notificationStore.addNotification("Brak odpowiednich uprawnień.", "error")
      navigateTo("/panel")
    } else if(data.value['success']){
      initialData.value = JSON.parse(JSON.stringify(pageData.value))
    } else {
        notificationStore.addNotification("Wystąpił błąd.", "error")
        navigateTo("/panel")
      }
  }

  definePageMeta({
    layout: "panel",
  });
  
  useSeoMeta({
    title: `${config.public.name} - Szczegóły konta`,
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
    width: 90%;
    height: 100%;
    display: flex;
    align-items: stretch;
    flex-direction: row;
    justify-content: stretch;
  }

  .main {
    flex: 5;
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    overflow-y: auto;
  }

  .block {
    display: flex;
    align-items: center;
  }

  .logs {
    flex: 3;
  }

  .box {
    background-color: var(--low-contrast);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 1rem;
    border-radius: 1rem;
    margin-top: 0.5rem;
  }

  .box:first-of-type {
    margin-top: 0;
  }

  .box.general {
    position: relative;
    background-color: var(--bg-lighter);
  }

  .box.general .id {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 1rem;
    color: var(--intermediate);
    opacity: 0.8;
  }

  .box.general .created {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 1rem;
    color: var(--intermediate);
    opacity: 0.8;
  }

  .box.general i {
    font-size: 10rem;
    opacity: 0.8;
  }

  .box.general .block {
    margin-block: 1rem;
    flex-direction: column;
  }

  .box.general .username {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-main);
    margin-bottom: 0.5rem;
  }

  .box.general .email {
    color: var(--intermediate);
    font-size: 1.3rem;
  }

  .box.lastlogin {
    flex-direction: row;
    padding: 0.8rem;
    background-color: transparent;
  }

  .box.lastlogin i {
    font-size: 2.5rem;
    color: rgb(70, 135, 255);
    opacity: 0.8;
    margin-right: 1rem;
  }

  .box.lastlogin p {
    margin: 0;
    font-size: 1.1rem;
    color: var(--text-light);
  }

  .icon_red {
    color: rgb(255, 50, 50) !important;
  }

  .box.pgroup .label {
    font-size: 1.1rem;
    color: var(--text-main);
    margin-right: 0.5rem;
  } 

  .box.pgroup .groupname {
    font-size: 1.1rem;
    color: var(--text-main);
    background-color: var(--higher-contrast);
    padding: 1rem 0.5rem;
    border-radius: 0.5rem;
    outline: none;
    border: none;
  } 

  .permissions {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 2rem 0 1rem 0;
  }

  .permissions .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    width: 10rem;
    border-radius: 1rem;
  }

  .denied {
    color: rgb(255, 51, 51);
    background-color: rgba(255, 51, 51, 0.1);
  }

  .granted {
    color: rgb(26, 172, 26);
    background-color: rgba(26, 172, 26, 0.1);
  }

  .item i {
    font-size: 4rem;
  }

  .item .name {
    font-size: 1rem;
    color: inherit;
    text-align: center;
    font-weight: bolder;
  }

  .options {
    width: 100%;
    box-sizing: border-box;
    margin-top: 0.5rem;
    align-items: stretch;
    justify-content: stretch;
    display: flex;
  }

  .option {
    flex: 1;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    outline: none;
    border: none;
    border-radius: 1rem;
    box-sizing: border-box;
    padding: 1rem 1rem;
    cursor: pointer;
    transition-duration: 0.2s;
    border: solid 0.3rem transparent;
    opacity: 0;
    pointer-events: none;
  }

  .option i {
    font-size: 2rem;
    margin-right: 1rem;
  }

  .option p {
    font-size: 1.2rem;
    margin: 0;
  }

  .option:first-of-type {
    margin-left: 0;
  }

  .option.remove {
    background-color: rgba(255, 51, 51, 0.2);
    color: rgb(255, 51, 51);
  }

  .option.remove:hover {
    border: solid 0.3rem rgba(255, 57, 57, 0.2);
    background-color: transparent;
  }

  .option.refresh {
    background-color: rgba(52, 133, 255, 0.2);
    color: rgb(52, 133, 255);
  }

  .option.refresh:hover {
    border: solid 0.3rem rgba(52, 133, 255, 0.2);
    background-color: transparent;
  }

  .option.save {
    background-color: rgba(26, 172, 26, 0.2);
    color: rgb(26, 172, 26);
  }

  .option.save:hover {
    border: solid 0.3rem rgba(26, 172, 26, 0.2);
    background-color: transparent;
  }

  .show {
    opacity: 1;
    pointer-events: all;
  }

  .logs {
    display: flex;
    align-items: stretch;
    box-sizing: border-box;
    padding-block: 1rem;
    flex-direction: column;
  }

  .logsContainer {
    overflow-y: auto;
    box-sizing: border-box;
    flex: 1;
    padding-block: 5%;
    padding-inline: 0.3rem;
  }

  h2 {
    color: var(--text-main);
    font-size: 1.5rem;
    text-align: center;
    font-weight: normal;
    margin-bottom: 1rem;
  }

  .empty {
    margin-block: 5rem;
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

  .backup {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.backup p {
    color: var(--intermediate);
    font-size: 2rem;
    margin-top: 2rem;
    transition-duration: 0.2s;
    text-align: center;
  }

.backup i {
  color: rgb(197, 47, 47);
  font-size: 12rem;
}

.backup .link {
  text-decoration: none;
  color: var(--intermediate);
  font-size: 1.2rem;
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 10rem;
  border: 0.15rem solid var(--intermediate);
  transition-duration: 0.2s;
  margin-top: 2rem;
}

.backup .link:hover {
  box-shadow: 0 0 1rem var(--text-dark-5);
  color: var(--text-main);
}

  @media screen and (max-width: 1400px){
    .content {
      width: 95%;
      flex-direction: column;
      height: auto;
      overflow-y: auto;
      justify-content: flex-start;
    }

    .main {
      overflow: visible;
      margin-bottom: 2rem;
    }

    .logs {
      height: 90vh;
      padding-inline: 2rem;
    }
  }

  @media screen and (max-width: 1000px){
    .content {
      width: 100%;
      height: calc(100% - 50px);
    }

    .main {
      padding: 0.5rem;
    }

    .box.general {
      padding-bottom: 3rem;
    }

    .logs {
      padding: 0.5rem;
    }

    .logsContainer {
      padding-inline: 0;
    }

    .options {
      flex-direction: column;
    }

    .option {
      margin-inline: 0;
      margin-bottom: 0.5rem;
    }

    .permissions {
      flex-direction: column;
    }

    .permissions .item {
      width: auto;
      flex-direction: row;
      margin-bottom: 0.5rem;
    }

    .permissions .item i {
      font-size: 3.5rem;
      margin-right: 1rem;
    }

    .box.lastlogin {
      padding: 1rem 0rem;
    }

    .box.lastlogin p {
      font-size: 1rem;
    }
  }
</style>