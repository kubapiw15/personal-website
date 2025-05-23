<template>
    <div class="component">
        <h1>{{$t('mainPage.welcome1')}} <span class="additive">{{$t('mainPage.welcome2')}}</span></h1>
        <div class="more">
            <p>{{ $t('mainPage.more') }}</p>
            <div class="animation">
                <div class="scroll"></div>
                <!-- TODO shadow inset -->
                <i class='bx bx-chevrons-down' ></i>
            </div>
        </div>
        <IconDeco v-for="icon in icons" :key="icon" :icon="icon"></IconDeco>
    </div>
</template>

<script setup>

const icons = ref([])

const iconList = [
    'bx-wrench',
    'bx-wifi',
    'bx-user',
    'bxl-javascript',
    'bxl-vuejs',
    'bx-nuxt-js',
    'bx-vercel',
    'bxl-php',
    'bxl-html5',
    'bxl-css3',
    'bxl-git',
    'bxl-visual-studio',
    'bxs-invader',
    'bx-code-alt',
    'bx-code',
    'bx-code-curly',
    'bx-message-dots',
    'bx-mouse-alt',
    'bx-credit-card-alt',
    'bx-search',
    'bx-data',
    'bx-qr',
    'bx-bracket',
    'bx-bug-alt',
    'bxs-component',
]

onMounted(()=>{
    setInterval(() => {
        icons.value.push(iconList[Math.floor(Math.random() * iconList.length)])
        setTimeout(() => {
            icons.value.shift()
        }, 5500);
    }, 200);
})

</script>

<style scoped>
    .component {
        margin-top: 3rem;
        width: 100vw;
        height: calc(100vh - 3rem);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        overflow: hidden;
    }

    .additive {
        color: var(--additive);
    }

    h1 {
        color: var(--text-main);
        font-size: 3rem;
        transition: color 0.2s;
        margin-top: -5rem;
    }

    .more {
        margin: 5rem 0 0 0;
        animation: fade linear forwards;
        animation-timeline: scroll(root block);
        animation-range: exit 0% exit 20%;
    }

    .more p {
        font-size: 1.1rem;
        color: var(--text-light);
        transition: color 0.2s;
        opacity: 0;
        animation: reveal 0.5s forwards 1s;
    }

    .animation {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        animation: reveal 0.5s forwards 1.5s;
        margin-top: 2rem;
    }

    .scroll {
        border: solid 0.2rem var(--lower-contrast);
        width: 1rem;
        height: 3rem;
        border-radius: 0.5rem;
        transition: border 0.2s;
    }

    .animation i {
        color: var(--additive);
        position: absolute;
        font-size: 1.5rem;
        animation: scroll 3s infinite forwards;
    }

    @keyframes scroll {
        0% {
            transform: translateY(-50%);
            opacity: 0;
        }
        30% {
            transform: translateY(0%);
            opacity: 1;
        }
        60%, 100% {
            transform: translateY(50%);
            opacity: 0;
        }
    }



    @keyframes reveal {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

        @keyframes fade {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

    @media screen and (max-width: 1000px){
        .more p {
            font-size: 1.3rem;
        }

        .more {
            margin: 3rem 0 0 0;
        }

        .more i {
            scale: 1.2;
        }

        .scroll {
            scale: 1.3;
        }

        .component {
            margin-top: 0;
            height: calc(100vh - 5rem);
        }

        h1 {
            text-align: center;
            padding: 0 1rem;
        }
    }
</style>