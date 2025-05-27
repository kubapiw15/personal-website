<template>
    <div class="layout panelLayout">
      <ul class="notificationContainer">
        <PanelNotification
        v-for="notification in notificationStore.notifications"
        :key="notification.id"
        :text="notification.text"
        :type="notification.type"
        ></PanelNotification>
      </ul>
      <div class="modalContainer"
        :class="{modalContainer_active: modalStore.modals.length > 0}"
        @click.self="modalStore.resetModals()"
      >
        <PanelModalComponent
        v-for="(modal, index) in modalStore.modals"
        key="modal.id"
        :modal="modal"
        ></PanelModalComponent>
      </div>
        <PanelSidebar />
        <div class="pageContainer">
            <NuxtPage/>
        </div>
    </div>
</template>

<script setup>

const modalStore = useModalStore();
const notificationStore = useNotificationStore();

const loaded = ref(false)

onMounted(()=>{
    loaded.value = true
})

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
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no orientation=portrait'
    }
  ]
});

</script>

<style>
    body {
        margin: 0;
        overflow: hidden;
        font-family: "Montserrat", sans-serif;
    }
    .panelLayout {
      background-color: var(--bg-darker);
        transition: backgroud-color 0.2s;
    }

    html {
        font-size: 15px;
    }

    .layout {
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: stretch;
        justify-content: stretch;
    }

    .pageContainer {
        display: flex;
        flex: 1;
        position: relative;
        overflow: hidden;
    }

    .notificationContainer {
      position: fixed;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      top: 0;
      left: 50%;
      width: 30%;
      z-index: 80;
      padding: 0;
      pointer-events: none;
    }

    .modalContainer {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: all 0.2s;
        pointer-events: none;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        backdrop-filter: blur(1px);
    }

    .modalContainer_active {
      pointer-events: all;
      opacity: 1;
    }

    /* width */
::-webkit-scrollbar {
  width: 1rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--low-contrast);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(80, 80, 80);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #6b6b6b;
}

    @media screen and (min-width: 3000px){
        html {
            font-size: 30px;
        }
    }

    @media screen and (max-width: 1400px){
        .pageContainer {
            margin-left: 4.2rem;
        }

        .notificationContainer {
          width: 50%;
        }
    }

    @media screen and (max-width: 1000px){

        /* html {
            font-size: 18px;
        } */

        .pageContainer {
            margin-left: 0;
        }

        .notificationContainer {
          width: 90%;
          z-index: 82;
        }

        ::-webkit-scrollbar {
            display: none;
        }
    }
</style>