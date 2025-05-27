<template>
    <div class="loadingScreen" :class="{loaded: loaded}">
        <div class="loadingContainer">
            <div class="loadingItem"></div>
            <div class="loadingItem"></div>
            <div class="loadingItem"></div>
            <div class="loadingItem"></div>
            <div class="loadingItem"></div>
            <div class="loadingItem"></div>
            <div class="loadingItem"></div>
            <div class="loadingItem"></div>
            <div class="loadingItem"></div>
            <div class="loadingItem"></div>
        </div>
        <div class="help">
            <p :class="{ show: text1 }">Ładowanie trwa za długo?</p>
            <p :class="{ show: text2 }">Sprawdź swoje połączenie internetowe.</p>
        </div>
    </div>
  </template>
  
  <script setup>
  const { loaded } = defineProps(["loaded"]);
  const text1 = ref(false)
  const text2 = ref(false)

  onMounted(()=>{
        setTimeout(()=>{
            text1.value = true
        }, 3000)
        setTimeout(()=>{
            text2.value = true
        }, 3500)
    })
  </script>
  
  <style scoped>
  .loadingScreen {
    height: 100vh;
    width: 100vw;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 20;
    opacity: 1;
    background-color: rgb(243, 243, 243);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'montserrat', sans-serif;
  }
  
  .loaded {
    opacity: 0;
    pointer-events: none;
    
    transition: opacity 0.5s;
  }

  .v-enter-active,
    .v-leave-active {
      transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }

    .help {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 2rem;
    }

    .help p {
        margin: 0.4rem;
        font-size: 1.2rem;
        color: rgb(50, 50, 50);
        opacity: 0;
        transition-duration: 0.5s;
    }

    .help p:nth-of-type(1){
        font-size: 1.5rem;
    }

    .help p.show {
        opacity: 1;
    }

    .loadingContainer {
        height: 0;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin-bottom: 5vh;
        z-index: 200;
    }

    .loadingItem {
    width: 2vh;
    height: 0%;
    /* background-color: rgb(129, 145, 219); */
    background-color: rgb(100, 100, 100);
    margin: 0.1vh;
    animation: loading 3s infinite;
    filter: drop-shadow(0 0 0.5vh rgba(71, 83, 247, 0.1));
}

.loadingItem:nth-child(1) {
    animation-delay: 1000ms;
}

.loadingItem:nth-child(2) {
    animation-delay: 1100ms;
}

.loadingItem:nth-child(3) {
    animation-delay: 1200ms;
}

.loadingItem:nth-child(4) {
    animation-delay: 1300ms;
}

.loadingItem:nth-child(5) {
    animation-delay: 1400ms;
}

.loadingItem:nth-child(6) {
    animation-delay: 1500ms;
}

.loadingItem:nth-child(7) {
    animation-delay: 1600ms;
}

.loadingItem:nth-child(8) {
    animation-delay: 1700ms;
}

.loadingItem:nth-child(9) {
    animation-delay: 1800ms;
}

.loadingItem:nth-child(10) {
    animation-delay: 1900ms;
}

@keyframes loading {
    0% {
        height: 0vh;
        transform: translate(0%);
    }
    15% {
        height: 4vh;
        transform: translate(0%);
    }
    30%{
        height: 4vh;
        transform: translateY(100%);
    }
    45%{
        height: 0vh;
        transform: translateY(100%);
    }
    60%{
        height: 0vh;
        transform: translate(0%);
    }
    100% {
        height: 0vh;
        transform: translate(0%);
    }
}
  </style>