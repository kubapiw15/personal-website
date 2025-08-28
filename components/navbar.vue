<template>
    <div class="component" :class="{navbar_scrolled: y > 0}">
        <div class="content">
            <nav>
                <nuxt-link class="link" :to="$localePath('/aboutme')">{{ $t('mainPage.navbar1') }}</nuxt-link>
                <nuxt-link class="link" :to="$localePath('/projects')">{{ $t('mainPage.navbar2') }}</nuxt-link>
                <nuxt-link class="link" :to="$localePath('/contact')">{{ $t('mainPage.navbar3') }}</nuxt-link>
                <nuxt-link class="link" :to="$localePath('/tools')">{{ $t('mainPage.navbar4') }}</nuxt-link>
                <!-- <nuxt-link class="link" :to="$localePath('/sandbox')">{{ $t('mainPage.navbar5') }}</nuxt-link> -->
            </nav>
            <div class="colormode" @click="switchColorMode()">
                <i class='bx bx-sun'></i>
                <i class='bx bx-moon' ></i>
            </div>
        </div>
    </div>
</template>

<script setup>

    const { y } = useScroll(window)
    
    const colorMode = useColorMode()
    const switchColorMode = ()=>{
        colorMode.value == 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark'
    }
</script>

<style scoped>
    .component {
        width: 100vw;
        position: fixed;
        transition: border-bottom 0.2s, background-color 0.2s;
        z-index: 2;
        border-bottom: transparent solid 0.1rem;
        
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
        text-decoration: none;
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
        font-size: 1.6rem;
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

    .navbar_scrolled {
        background-color: rgba(var(--bg-rgb), 0.7);
        border-bottom: var(--lower-contrast) solid 0.1rem;
        backdrop-filter: blur(1rem);
    }

    @media screen and (max-width: 1400px){
        .colormode {
            right: 0;
        }
        .link {
            font-size: 1rem;
        }
    }

    @media screen and (max-width: 1000px){
        
        .navbar_scrolled {
            background-color: transparent;
            border-bottom: transparent solid 0.1rem;
        }
        
        
        .component {
            position: absolute;
            z-index: 2;
        }

        .content {
            align-items: flex-start;
        }
        nav {
            flex-wrap: wrap;
            width: calc(100% - 5rem);
            position: relative;
            padding-top: 0.5rem;
        }

        .colormode {
            height: 5rem;
            width: 5rem;
            box-sizing: border-box;
            position: static;
        }

        .link {
            padding: 0.8rem 1rem;
            width: 50%;
            box-sizing: border-box;
        }

        .link::after {
            display: none;
        }
    }
</style>