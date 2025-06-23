<template>
    <NuxtLayout></NuxtLayout>
</template>

<script setup>

    
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
        user-select: none;
        width: 100vw;
        overflow-x: hidden;
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
            font-size: 24px;
        }
    }
</style>