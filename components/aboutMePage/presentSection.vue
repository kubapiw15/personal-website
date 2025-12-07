<template>
    <div class="section">
        <div class="content">
            <h2>{{ $t('aboutmePage.current') }}</h2>
            <div class="list">
                <div class="tileContainer">
                    <div class="tile" data-aos="anim-left">
                        <div class="left">
                            <div class="shadow" style="background-color: var(--additive);"></div>
                            <h3>{{ $t('aboutmePage.current2') }}</h3>
                            <p>{{ $t('aboutmePage.current3') }}</p>
                        </div>
                    </div>
                    <div class="tile" data-aos="anim-left">
                        <div class="left">
                            <div class="shadow" style="background-color: var(--additive2);"></div>
                            <h3>{{ $t('aboutmePage.current4') }}</h3>
                            <p>{{ $t('aboutmePage.current5') }}</p>
                        </div>
                    </div>
                </div>
                <div class="right" data-aos="fade">
                    <NuxtImg class="img" src="/img/undraw/undraw_mcp-server_2.svg"></NuxtImg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { NuxtImg } from '#components';



</script>

<style lang="scss" scoped>

.section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 5rem;
    width: 100%;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;

    h2 {
        color: var(--text-main);
        transition: color 0.2s, opacity 0.5s !important;
        font-size: 2rem;
        margin-block: 3rem 5rem;
    }

    .list {
        width: 100%;
        display: flex;
        align-items: center;

        .tileContainer {

            display: flex;
            flex-direction: column;
            width: 60%;

                    .tile {
                        display: flex;
                        flex-direction: row;
                        align-items: stretch;
                        margin-block: 0.5rem;

                        .left {
                            width: 100%;
                            background-color: var(--bg-light);
                            border: solid 0.1rem var(--low-contrast-30);
                            padding: 1rem;
                            border-radius: 0.5rem;
                            position: relative;
                            display: flex;
                            justify-content: center;
                            flex-direction: column;
                            overflow: hidden;
                            transition: background-color 0.2s, border 0.2s;

                            h3 {
                                color: var(--text-main);
                                font-size: 1.3rem;
                                z-index: 2;
                                transition: color 0.2s;
                            }

                            p {
                                color: var(--text-lighter);
                                z-index: 2;
                                transition: color 0.2s;
                            }

                            .shadow {
                                width: 60rem;
                                height: 60rem;
                                border-radius: 50%;
                                transform: translateX(-50%);
                                position: absolute;
                                mask-image: radial-gradient(closest-side, rgba(0, 0, 0, 0.1) 0%, transparent 100%);
                                display: none;
                                transition: background-color 0.2s;
                            }
                        }
                    }
        }

        .right {
            width: 40%;
            box-sizing: border-box;
            padding-left: 5rem;

            .img {
                width: 125%;
            }
        }


    }
}

@media screen and (max-width: 1400px){
    .content {
        width: 90%;
    }
}

@media screen and (max-width: 1000px){
    .list .right {
        display: none;
    }

   .content .list .tileContainer {
        width: 100%;
    }
}

</style>