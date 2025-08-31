<template>
    <NuxtLayout></NuxtLayout>
    <LoadingScreen  :loaded="loaded" ></LoadingScreen>
</template>
<!-- TODO LOADING SCREEN -->

<script setup>

const loaded = ref(false)
    
    const { t, locale } = useI18n()

    useHead(() => ({
    htmlAttrs: {
        lang: locale.value
    }
    }))

    import AOS from 'aos'

    onMounted(()=>{
        setTimeout(() => {
            AOS.init({
                once: true
            });
        }, 0);
        loaded.value = true
    })

</script>

<style>

    html {
        font-size: 16px;
    }

    body {
        font-family: "poppins", sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* background-color: var(--bg); */
        transition: background-color 0.2s;
        padding: 0;
        margin: 0;
        width: 100vw;
        overflow-x: hidden;
    }

    i {
        user-select: none;
    }

    p, h1, h2, h3, h4, h5 {
        cursor: default;
    }

    @media screen and (max-width: 1400px){
        html {
            font-size: 15px;
        }
    }

    @media screen and (max-width: 1000px){
        html {
            font-size: 12px;
        }
    }

    @media screen and (min-width: 2500px){
        html {
            font-size: 28px;
        }
    }
</style>