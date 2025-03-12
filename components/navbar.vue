<template>
    <div class="component">
        <div class="content">
            <nav>
                <nuxt-link class="link" to="">{{ $t('mainPage.navbar1') }}</nuxt-link>
                <nuxt-link class="link" to="">{{ $t('mainPage.navbar2') }}</nuxt-link>
                <nuxt-link class="link" to="">{{ $t('mainPage.navbar3') }}</nuxt-link>
                <nuxt-link class="link" to="">{{ $t('mainPage.navbar4') }}</nuxt-link>
                <nuxt-link class="link" to="">{{ $t('mainPage.navbar5') }}</nuxt-link>
            </nav>
            <div class="colormode" @click="switchColorMode()">
                <i class='bx bx-sun'></i>
                <i class='bx bx-moon' ></i>
            </div>
        </div>
    </div>
</template>

<script setup>
    
    const colorMode = useColorMode()
    const switchColorMode = ()=>{
        colorMode.value == 'dark' ? colorMode.value = 'light' : colorMode.value = 'dark'
    }
</script>

<style scoped>
    .component {
        width: 100%;
        position: fixed;
        /* border-bottom: var(--low-contrast) solid 0.1rem; */
        transition: border-bottom 0.2s;
        /* box-shadow: 0 0 1rem var(--low-contrast-30); */
    }

    .content {
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav {
        display: flex;
        justify-content: space-between;
    }

    .link {
        font-size: 1.1rem;
        color: var(--text-light);
        padding: 1.25rem 2.5rem;
        transition: color 0.2s;
        cursor: pointer;
        position: relative;
    }

    .link::after {
        content: "";
        position: absolute;
        right: 0;
        left: auto;
        bottom: 0;
        width: 0%;
        height: 0.125rem;
        background-color: var(--text-light);
        transition: color 0.2s, width 0.8s cubic-bezier(.14,1.02,.34,.96);
    }

    .link:hover::after {
        width: 100%;
        left: 0;
        right: auto;
    }

    .link:hover {
        color: var(--text-main);
    }

    .colormode {
        position: absolute;
        right: 10vw;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        height: 100%;
        aspect-ratio: 1;
        cursor: pointer;
    }
    .colormode i {
        color: var(--low-contrast);
        position: absolute;
        font-size: 2rem;
        transition: color 0.2s, transform 0.2s, opacity 0.2s;
    }

    .colormode:hover i {
        color: var(--additive);
    }

    html.dark .colormode i:nth-child(1) {
        transform: translateY(50%);
        opacity: 0;
    }

    html.light .colormode i:nth-child(2){
        transform: translateY(-50%);
        opacity: 0;
    }
</style>