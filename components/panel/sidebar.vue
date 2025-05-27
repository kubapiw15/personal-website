<template>
    <div class="foldButton" @click="sidebarFold = !sidebarFold" :class="{foldButton_folded: sidebarFold}">
        <i class='bx bx-menu-alt-left'></i>
        <!-- TODO Blackout przy rozwijaniu menu w wersji na średnie ekrany -->
    </div>
    <div class="container" :class="{container_folded: sidebarFold}">
        <div class="sidebar">
            <div class="row">
                <button class="logout" @click="logout()">
                    <i class='bx bx-log-out'></i>
                    <p>Wyloguj się</p>
                </button>
                <div class="theme" @click="switchTheme()">
                    <i class='bx bx-sun'></i>
                    <i class='bx bxs-moon' ></i>
                </div>
            </div>
            <nav>
                <ul>
                    <li class="home">
                        <NuxtLink @click="closeSidebar" :to="`/panel`" class="link link_content">
                            <i class='bx bx-home-alt' ></i>
                            <h2>Strona Główna</h2>
                        </NuxtLink>
                    </li>
                    <li class="logs" v-if="permissionsStore.permissions['logs'] == 1">
                        <NuxtLink @click="closeSidebar" :to="`/panel/logs`" class="link link_content">
                            <i class='bx bx-notepad'></i>
                            <h2>Dziennik</h2>
                        </NuxtLink>
                    </li>
                    <li class="stats" v-if="permissionsStore.permissions['logs'] == 1">
                        <NuxtLink @click="closeSidebar" :to="`/panel/stats`" class="link link_content">
                            <i class='bx bx-line-chart' ></i>
                            <h2>Statystyki</h2>
                        </NuxtLink>
                    </li>
                    <li class="accounts" v-if="permissionsStore.permissions['accounts'] == 1">
                        <NuxtLink @click="closeSidebar" :to="`/panel/accounts`" class="link link_content">
                            <i class='bx bx-group'></i>
                            <h2>Użytkownicy</h2>
                        </NuxtLink>
                    </li>
                    <li class="registration" v-if="permissionsStore.permissions['accounts'] == 1">
                        <NuxtLink @click="closeSidebar" :to="`/panel/registration`" class="link link_content">
                            <i class='bx bxs-key'></i>
                            <h2>Rejestracja</h2>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup>

const permissionsStore = usePermissionsStore();

const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;
const colorMode = useColorMode()
const sidebarFold = ref(true)

const closeSidebar = ()=>{
    if(window.matchMedia('(max-width: 1400px)').matches){
        sidebarFold.value = true;
    }
}


const switchTheme = () => {
    if(colorMode.preference == "dark"){
        colorMode.preference = "light"
        // localStorage.setItem("nuxt-color-mode", "light")
    } else {
        colorMode.preference = "dark"
        // localStorage.setItem("nuxt-color-mode", "dark")
    }
    // window.location.reload();
}

const logout = async () => {
  try {
    await $fetch(`${apiUrl}/panel/logout.php`, {
      method: 'GET',
      credentials: 'include',
    });
    navigateTo("/login");
  } catch (error) {
    console.error("Logout error:", error);
  }
};

</script>

<style scoped>

    .theme {
        background-color: var(--low-contrast);
        padding: 0.5rem;
        margin: 2rem;
        border-radius: 10rem;
        position: relative;
        height: 3rem;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition-duration: 0.2s;
    }

    .theme:hover {
        box-shadow: 0 0 1rem var(--text-dark-10);
    }

    .theme i {
        margin: 0.5rem;
        color: var(--text-main);
        position: absolute;
        font-size: 1.5rem;
        transition-duration: 0.2s;
    }

    .theme .bxs-moon {
        transform: translateY(-30%);
        opacity: 0;
    }

    html.dark .theme .bx-sun {
        transform: translateY(30%);
        opacity: 0;
    }

    html.dark .theme .bxs-moon {
        transform: translateY(0%);
        opacity: 1;
    }

    .foldButton {
        display: none;
    }

    nav {
        width: 100%;
    }

    nav ul {
        list-style: none;
        width: 100%;
        padding: 0;
        margin: 0;
    }

    nav ul li {
        padding: 0;
        margin: 0;
        display: flex;
        position: relative;
    }

    .link {
        width: 100%;
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: flex-start;
        padding: 1.2rem;
        position: relative;
        transition: box-shadow 0.2s;
        text-decoration: none;
    }

    li::before {
        content: "";
        position: absolute;
        pointer-events: none;
        width: 60%;
        height: 0.1px;
        left: 50%;
        top: 0%;
        transform: translate(-50%, -50%);
        background-color: var(--low-contrast);
        transition-duration: 0.2s;
    }

    li:nth-of-type(1)::before {
        display: none
    }

    .link i {
        padding: 0;
        margin: 0;
        font-size: 1.8rem;
        margin-right: 1.3rem;
    }

    .link h2 {
        padding: 0;
        margin: 0;
        font-size: 1.2rem;
        color: var(--text-light);
        font-weight: 500;
        transition: transform 0.2s;
    }

    .link:hover {
        box-shadow: 0 0 2rem var(--text-dark-5);
    }

    .link:hover h2 {
        transform: translateX(0.25rem);
    }
    
    li.home i {
        color: rgb(8, 175, 204);
        text-shadow: 0 0 1rem rgba(8, 175, 204, 0.2);
    }

    li.articles i {
        color: rgb(91, 102, 248);
        text-shadow: 0 0 1rem rgba(91, 102, 248, 0.2);
    }

    li.newarticle i {
        color: rgb(17, 187, 54);
        text-shadow: 0 0 1rem rgba(17, 187, 54, 0.2);
    }

    li.logs i {
        color: rgb(221, 134, 3);
        text-shadow: 0 0 1rem rgba(221, 134, 3, 0.2);
    }

    li.stats i {
        color: rgb(147, 45, 206);
        text-shadow: 0 0 1rem rgba(147, 45, 206, 0.2);
    }

    li.accounts i {
        color: rgb(219, 54, 32);
        text-shadow: 0 0 1rem rgba(219, 54, 32, 0.2);
    }
    li.registration i {
        color: rgb(219, 91, 32);
        text-shadow: 0 0 1rem rgba(219, 91, 32, 0.2);
    }

    .container {
        height: 100vh;
        width: 15rem;
        background-color: var(--bg-darker);
        position: relative;
        overflow: hidden;
        box-shadow: 0 0 3rem var(--text-dark-10);
        display: flex;
        align-items: flex-start;
        transition: width 0.2s, background-color 0.2s, transform 0.2s, backdrop-filter 0.2s;
        z-index: 90;
    }
    .sidebar {
        position: relative;
        height: 100%;
        width: 15rem;
        min-width: 15rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition-duration: 0.2s;
    }

    .logout {
        border: none;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        box-shadow: 0 0 1rem var(--text-dark-10);
        display: flex;
        align-items: center;
        padding: 1.2rem;
        cursor: pointer;
        transition-duration: 0.2s;
        background-color: var(--bg-darker);
        z-index: 2;
    }

    .logout:hover {
        background-color: rgb(216, 47, 47);
    }

    .logout:hover i {
        color: var(--bg-darker);
    }

    .logout:hover p {
        color: var(--bg-darker);
    }

    .logout i {
        padding: 0;
        margin: 0;
        font-size: 1.8rem;
        margin-right: 1.2rem;
        color: rgb(216, 47, 47);
        text-shadow: 0 0 1rem rgba(216, 47, 47, 0.2);
        transition-duration: 0.2s;
    }

    .logout p {
        padding: 0;
        margin: 0;
        font-size: 1rem;
        color: var(--text-main);
        letter-spacing: 0.1rem;
        transition-duration: 0.2s;
    }

    @media screen and (max-width: 1400px){
        .container {
            position: fixed;
            background-color: var(--bg-darker-80);
            backdrop-filter: blur(10px);
        }
        .theme {
            padding: 0.2rem;
            margin: 4.7rem 0.4rem 0.5rem 0.4rem;
            transform: translateX(calc(0rem - 0% + 0rem));
        }

        .container_folded .theme {
            transform: translateX(calc(-7.5rem + 50% + 0.4rem));
        }
        .container.container_folded {
            width: 4.2rem;
            background-color: var(--bg-darker);
            backdrop-filter: blur(0px);
        }
        .container_folded li::before {
            width: 100%;
        }

        .foldButton {
            position: fixed;
            z-index: 91;
            width: 4.2rem;
            height: 4.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            margin: 0;
            font-size: 2rem;
            color: var(--text-main);
            transform: translateX(calc(15rem - 100%));
            transition-duration: 0.2s;
            cursor: pointer;
        }

        .foldButton i {
            transition-duration: 0.2s;
        }

        .foldButton:hover i {
            transform: translateX(-10%);
        }

        .foldButton_folded {
            transform: translateX(calc(0rem - 0%));
        }
        nav {
            padding-bottom: 5rem;
        }
    }

    @media screen and (max-width: 1000px){
        .container {
            width: 100vw;
            height: 100vh;
            left: 0;
            top: 0;
            transform: translateX(0%);
            backdrop-filter: none;
            background-color: var(--bg-darker);
            box-shadow: none;
        }

        .sidebar {
            width: 100vw;
            align-items: center;
            height: calc(100vh - 60px);
        }
        .container.container_folded {
            width: 100vw;
            transform: translateX(-100%);
        }

        .foldButton {
            transform: translateX(calc(100vw - 100%));
        }

        .foldButton_folded {
            transform: translateX(calc(0vw - 0%));
        }

        .theme {
            padding: 0.2rem;
            margin: 4rem 0.4rem 0.8rem 0.4rem;
            transform: translateX(0%);
        }

        .theme:hover {
            box-shadow: none;
        }

        .container_folded .theme {
            transform: translateX(0%);
        }

        li::before {
            width: 90%;
        }

        .link {
            justify-content: center;
        }

        .row {
            display: flex;
            align-items: center;
        }

        .logout {
            all: unset;
            background-color: var(--low-contrast);
            padding: 0.2rem;
            margin: 4rem 0.4rem 0.8rem 0.4rem;
            border-radius: 10rem;
            height: 3rem;
            width: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition-duration: 0.2s;
        }

        .logout p {
            display: none;
        }

        .logout i {
            all: unset;
            margin: 0.5rem;
            color: rgb(216, 47, 47);
            font-size: 1.5rem;
            transition-duration: 0.2s;
        }

        nav {
            padding-bottom: 0;
        }

    }
</style>