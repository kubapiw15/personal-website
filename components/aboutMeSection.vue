<template>
    <div class="component">
        <div class="content">
            <div class="photo" data-aos="fade"></div>
            <div class="about">
                <h2 data-aos="anim-left">
                    {{ $t('mainPage.about1') }} <span class="additive">{{ $t('mainPage.about2') }}</span>
                </h2>
                <h2 data-aos="anim-left">
                    {{ $t('mainPage.about3') }} <span class="additive">{{ $t('mainPage.about4') }}</span> {{ $t('mainPage.about5') }}
                </h2>
                <div class="buttons">
                    <nuxt-link data-aos="anim-up" class="link" to="">{{ $t('mainPage.about6') }}</nuxt-link>
                    <nuxt-link data-aos="anim-up" class="link" to="">{{ $t('mainPage.about7') }}</nuxt-link>
                </div>
            </div>
            <div class="examples">

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
        display: flex;
        justify-content: center;
        overflow: hidden;
    }

    .content {
        display: flex;
        justify-content: stretch;
        align-items: flex-start;
        position: relative;
        width: 80%;
        padding-bottom: 1rem;
    }

    .photo {
        background-color: var(--low-contrast-30);
        height: 40rem;
        width: 30rem;
        border-radius: 2rem;
        margin: 3rem 8rem 3rem 0rem;
        position: relative;
        z-index: 1;
        transition: opacity 0.5s, background-color 0.2s;
        backdrop-filter: blur(5rem);
        
        border: solid 0.10rem var(--low-contrast-30);
    }

    .about {
        margin-top: 4rem;
        flex: 1;
    }

    h2 {
        transition: color 0.2s, transform 0.5s, opacity 0.5s;
        color: var(--text-main);
        font-size: 2.5em;
        margin: 0;
        line-height: 6rem;
    }

    .additive {
        white-space: nowrap;
        transition: color 0.2s;
        color: var(--additive);
    }

    .buttons {
        margin-top: 5rem;
    }

    .link {
        font-size: 1.2rem;
        padding: 1rem 2.5rem;
        border-radius: 10rem;
        cursor: pointer;
        display: inline-block;
        transition: opacity 0.2s, transform 0.2s, border 0.2s, background-color 0.2s, color 0.2s;
        margin-block: 0.5rem;
        white-space: nowrap;
    }

    .link:nth-child(1){
        margin-right: 2rem;
        color: var(--text-main);
        border: solid 0.10rem var(--low-contrast-30);
        background-color: var(--low-contrast-30);
        
        backdrop-filter: blur(1rem);
    }

    .link:nth-child(2){
        color: var(--text-main);
        background-color: var(--additive);
        text-shadow: 0 0 1.5rem var(--bg);
        border: solid 0.10rem var(--additive);
    }

    .link:nth-child(1):hover {
        background-color: var(--low-contrast-60);
    }

    .link:nth-child(2):hover {
        border: solid 0.10rem var(--additive-active);
        background-color: var(--additive-active);
    }



    @media screen and (max-width: 1400px){
        .content {
            width: 90%;
        }

        h2 {
            font-size: 2rem;
            line-height: 5rem;
        }

        .shadow {
            left: 0;
            transform: translateX(-45%);
        }

        .photo {
            width: 25rem;
            height: 35rem;
            margin-right: 5rem;
        }
    }

    @media screen and (max-width: 1000px){


        .photo {
            position: absolute;
            z-index: 1;
            background-color: gray;
            backdrop-filter: none;
            margin: 0;
            right: 0;
            width: calc(50%);
            margin-top: 4rem;
            height: 85%;
        }

        .about {
            z-index: 2;
        }

        h2:nth-of-type(1) {
            width: 50%;
        }

        h2:nth-of-type(2){
            width: 50%;
        }

        
        .buttons {
            margin-top: 3rem;
            width: 50%;
        }
    }

    @media screen and (max-width: 500px){
        .photo {
            right: -4rem;
            width: calc(50% + 8rem);
        }

        h2:nth-of-type(2){
            margin-top: 2rem;
            font-size: 1.5rem;
            width: 80%;
            line-height: 4rem;
        }

    }
</style>