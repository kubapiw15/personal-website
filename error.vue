<template>
    <div class="page">
        <div class="content">
            <div class="left section">
                <h1>{{ $t(`error.${error.statusCode == 404 ? "404" : "other"}.title`) }}</h1>
                <p class="info">{{ $t(`error.${error.statusCode == 404 ? "404" : "other"}.info`) }}</p>
                <div class="errorBox">
                    <div class="error">
                        <h2>{{ error.statusCode }}</h2>
                        <p class="errorMessage">{{ error.message }}</p>
                    </div>
                    <NuxtLink class="link" :to="'/'">{{ $t('error.return') }}</NuxtLink>
                </div>
            </div>
            <div class="right section">
                <NuxtImg class="image" alt="error image" :src="`/errorimg/${random}.svg`"></NuxtImg>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>

const random = Math.floor(Math.random() * 13)+1

const error = useError()


    onMounted(()=>{
        window.scrollTo(0, 0)
    })

useSeoMeta({
    title: error.value.statusCode
})

</script>

<style scoped>

    .page {
        height: auto;
        width: 100vw;
        background-color: var(--bg);
        display: flex;
        justify-content: stretch;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
    }

    .content {
        width: 70vw;
        min-height: 100vh;
        max-height: 100vh;
        height: 100vh;
        flex: 1;
        display: flex;
        box-sizing: border-box;
        padding-block: 8vh;
        overflow-x: hidden;
        align-items: stretch;
    }

    .section {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }

    h1 {
        font-size: 3rem;
        color: var(--text-main);
        margin-bottom: 2rem;
        font-weight: 600;
    }

    .info {
        color: var(--text-light);
        font-size: 1.1rem;
    }

    .image {
        width: 90%;
    }

    .left {
        width: 60%;
    }

    .right {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        overflow: hidden;
    }

    .errorBox {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 10vh;
    }

    h2 {
        margin: 0;
        color: var(--text-light);
        font-size: 2rem;
    }

    .errorMessage {
        margin: 0;
        color: var(--low-contrast);
        text-align: right;
    }

    .error {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        border-right: solid 0.1rem var(--additive);
        padding-right: 2rem;
        margin-right: 2rem;
        overflow: hidden;
    }

    .link {
        text-decoration: none;
        color: var(--text-lighter);
        background-color: var(--low-contrast-30);
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        border: solid 0.1rem transparent;
        transition: border 0.2s, background-color 0.2s;
        min-width: max-content;
    }

    .link:hover {
        background-color: transparent;
        border: solid 0.1rem var(--low-contrast-30);
    }

    @media screen and (max-width: 1400px){

        .content {
            width: 85vw;
        }

        .image {
            width: 95%;
        }
    }

    @media screen and (max-width: 1000px){
        h1 {
            margin-top: 5rem;
            font-size: 2.5rem;
            text-align: center;
        }

        .info {
            font-size: 1rem;
            margin-top: 0;
        }

        .errorBox {
            /* margin-top: 4rem; */
            justify-content: center;
        }

        .content {
            flex-direction: column;
            align-items: center;
            width: 95vw;
            box-sizing: border-box;
            justify-content: stretch;
            padding: 0;
        }

        .left {
            width: 100%;
            align-items: center;
            height: max-content;
        }

        .right {
            width: 100%;
            height: auto;
            flex: 1;
            /* transform: translateX(30%); */
            box-sizing: border-box;
            padding-top: 1rem;
            align-items: stretch;
            justify-content: stretch;
            padding: 3rem;
        }

        .image {
            width: auto;
            height: auto;
            flex: 1;
        }
    }

</style>