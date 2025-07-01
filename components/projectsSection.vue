<template>
    <div class="component">
        <div class="content">  
            <div class="left section">
                <h2 class="h2" data-aos="fade">{{ $t('mainPage.projects1') }}</h2>
                <p data-aos="anim-left" class="desc">{{ $t('mainPage.projects2') }}</p>
                <NuxtLink data-aos="anim-up" class="link">{{ $t('mainPage.projectsLink') }}</NuxtLink>
            </div>
            <div class="right section">
                <div class="tile" data-aos="anim-up">
                    <div class="imgContainer">
                        <NuxtImg alt="personal app" class="img" src="/img/undraw_landing.svg"></NuxtImg>
                    </div>
                    <div class="box">
                        <h3>{{ $t('mainPage.projects3') }}</h3>
                    </div>
                </div>
                <div class="tile" data-aos="anim-up">
                    <div class="imgContainer">
                        <NuxtImg alt="pie chart" class="img" src="/img/undraw_pie-chart.svg"></NuxtImg>
                    </div>
                    <div class="box">
                        <h3>{{ $t('mainPage.projects4') }}</h3>
                    </div>
                </div>
                <div class="tile" data-aos="anim-up">
                    <div class="imgContainer">
                        <NuxtImg alt="custom app" class="img" src="/img/undraw_real-time-sync.svg"></NuxtImg>
                    </div>
                    <div class="box">
                        <h3>{{ $t('mainPage.projects5') }}</h3>
                    </div>
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
        justify-content: stretch;
        align-items: stretch;
        width: 70%;
        margin-top: 4rem;
    }

    .section {
        height: 100%;
    }

    .left {
        width: 50%;
    }

    .right {
        width: 50%;
        box-sizing: border-box;
        padding-left: 3rem;
    }

    .h2 {
        font-size: 2.2rem;
        color: var(--text-main);
        transition: color 0.2s, opacity 0.5s;
        margin-bottom: 3rem;
    }

    .desc {
        color: var(--text-lighter);
        font-size: 1.1rem;
        margin-bottom: 3rem;
        transition: color 0.2s, opacity 0.5s, transform 0.5s;
    }

    .link {
        background-color: var(--low-contrast-30);
        font-size: 1.1rem;
        padding: 1rem 2.5rem;
        border-radius: 20rem;
        color: var(--text-main);
        transition: color 0.2s, background-color 0.2s, opacity 0.5s, transform 0.5s;
        cursor: pointer;
        text-decoration: none;
    }

    .link:hover {
        background-color: var(--low-contrast-60);
    }

    .tile {
        flex: 1;
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: stretch;
        border-radius: 1rem;
        transition: opacity 0.5s, backdrop-filter 0.2s, transform 0.5s, background-color 0.2s, border 0.2s;
        background-color: var(--low-contrast-30);
        backdrop-filter: blur(5rem);
        overflow: hidden;
        border: solid 0.1rem var(--low-contrast-30);
    }

    .tile:hover {
        background-color: var(--low-contrast-60);
    }


    h3 {
        color: var(--text-dark);
        z-index: 2;
        font-size: 1.3rem;
        font-weight: 500;
        transition: color 0.2s;
    }

    .tile p {
        color: var(--text-lighter);
        font-size: 1.1rem;
    }

    .box {
        display: flex;
        flex: 1;
        padding: 0.5rem 0.5rem 0.5rem 2rem;
    }

    .imgContainer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        overflow: hidden;
        height: 10rem;
        width: 7rem;
    }

    .img {
        height: 95%;
    }

    @media screen and (max-width: 1400px){

        .content {
            width: 90%;
        }
    }

    @media screen and (max-width: 1000px){
        .content {
            flex-direction: column;
        }

        .right {
            padding: 0;
            padding-top: 2rem;
        }

        .imgContainer {
            height: 7rem;
            width: 5rem;
        }

        .section {
            width: 100%;
        }
    }

</style>