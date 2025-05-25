<template>
    <div class="component">
        <div class="content">  
            <h2 data-aos="fade">{{ $t('mainPage.projects1') }}</h2>
            <div class="container">

                <div class="tile" data-aos="anim-up">
                    <div class="topSection">
                        <NuxtImg class="img" src="/img/undraw_pie-chart_eo9h.svg"></NuxtImg>
                        <h3>{{ $t('mainPage.projects3') }}</h3>
                    </div>
                    <p>{{ $t('mainPage.projects3desc') }}</p>
                </div>
                <div class="tile" data-aos="anim-up">
                    <div class="topSection">
                        <NuxtImg class="img" src="/img/undraw_real-time-sync_ro77.svg"></NuxtImg>
                        <h3>{{ $t('mainPage.projects4') }}</h3>
                    </div>
                    <p>{{ $t('mainPage.projects4desc') }}</p>
                </div>
                <div class="tile" data-aos="anim-up">
                    <div class="topSection">
                        <NuxtImg class="img" src="/img/undraw_landing_rd2s.svg"></NuxtImg>
                        <h3>{{ $t('mainPage.projects2') }}</h3>
                    </div>
                    <p>{{ $t('mainPage.projects2desc') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .component {
        margin-top: 3rem;
        width: 100vw;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }

    .content {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        position: relative;
        width: calc(80% + 2rem);
        margin-top: 4rem;
    }

    .container {
        display: flex;
        justify-content: stretch;
        align-items: stretch;
        width: 100%;
        flex-wrap: wrap;
    }

    .tile {
        flex: 1;
        min-width: calc(30% - 2rem);
        margin: 1rem 1rem;
        display: flex;
        flex-direction: column;
        border-radius: 1rem;
        transition: opacity 0.2s, backdrop-filter 0.2s, transform 0.2s, background-color 0.2s;
        background-color: var(--low-contrast-60);
        backdrop-filter: blur(5rem);
        padding: 0.5rem;
        overflow: hidden;
    }

    html.light .tile {
        background-color: var(--low-contrast-30);
    }

    html.light .tile:hover {
        background-color: var(--low-contrast-60);
    }

    .tile:hover {
        background-color: var(--low-contrast-90);
    }

    .tile:nth-of-type(2){
        animation-delay: 0.2s;
    }

    .tile:nth-of-type(3){
        animation-delay: 0.4s;
    }

    h2 {
        font-size: 2rem;
        color: var(--text-main);
        transition: color 0.2s, opacity 0.2s;
        margin-bottom: 4rem;
    }

    .topSection {
        display: flex;
        justify-content: flex-end;
        position: relative;
        min-height: 8rem;
    }

    .img {
        height: 110%;
        position: absolute;
        right: 65%;
        z-index: 2;
        bottom: 0;
        transition: scale 0.2s;
    }

    .tile:hover .img {
        scale: 1.05;
    }


    h3 {
        color: var(--text-dark);
        width: 55%;
        z-index: 2;
        font-size: 1.3rem;
        font-weight: 500;
        transition: color 0.2s;
    }

    p {
        margin: 2rem 2rem 1rem 2rem;
        color: var(--text-lighter);
        font-size: 1.1rem;
    }

    @media screen and (max-width: 1400px){
        .tile {
            min-width: calc(45% - 2rem);
        }

        .content {
            width: calc(90% + 2rem);
        }

        p {
            margin: 1rem 1rem 0.5rem 1rem;
        }
    }

    @media screen and (max-width: 1000px){
        h3 {
            font-size: 1.4rem;
        }
    }

    @media screen and (max-width: 750px){
        .tile {
            min-width: calc(80% - 2rem);
        }

    }

</style>