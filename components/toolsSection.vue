<template>
    <div class="component">
        <div class="content">
            <div class="left section">
                <h2 data-aos="anim-left">{{ $t('mainPage.tools1') }} <span class="additive">{{ $t('mainPage.tools2') }}</span></h2>
                <div class="box">
                    <p data-aos="anim-up">{{ $t('mainPage.tools3') }}</p>
                        <nuxt-link data-aos="anim-up" class="link" :to="$localePath('tools')">{{ $t('mainPage.tools4') }}</nuxt-link>
                </div>
            </div>
            <div class="right section" data-aos="fade">
                <div class="tileContainer">
                    <Tile
                    icon="bxl bx-html5"
                    color="#E34F26"
                    text="HTML"
                    ></Tile>
                    <Tile
                    icon="bxl bx-css3"
                    color="#1572B6"
                    text="CSS"
                    ></Tile>
                    <Tile
                    icon="bxl bx-javascript"
                    color="#F7DF1E"
                    text="JS"
                    ></Tile>
                    <Tile
                    icon="bxl bx-php"
                    color="#777BB4"
                    text="PHP"
                    ></Tile>
                    <Tile
                    icon="bxl bx-my-sql"
                    color="#F29111"
                    text="MySQL"
                    ></Tile>
                    <Tile
                    icon="bxl bx-vuejs"
                    color="#42B883"
                    text="Vue.js"
                    ></Tile>
                    <Tile
                    icon="bxl bx-nuxt-js"
                    color="#00DC82"
                    text="Nuxt.js"
                    ></Tile>
                    <Tile
                    icon="bxl bx-vite-js"
                    color="#646CFF"
                    text="Vite.js"
                    ></Tile>
                    <Tile
                    icon="bx bx-chart-spline"
                    color="#FF6384"
                    text="Chart.js"
                    ></Tile>
                    <Tile
                    icon="bxl bx-boxicons"
                    color="#6c00e3"
                    text="Boxicons"
                    ></Tile>
                    <Tile
                    icon="bxl bx-tailwind-css"
                    color="#0EA5E9"
                    text="Tailwind"
                    ></Tile>
                    <Tile
                    icon="bxl bx-vercel"
                    color="#9CA3AF"
                    text="Vercel"
                    ></Tile>
                    <Tile
                    icon="bxl bx-nodejs"
                    color="#339933"
                    text="Node.js"
                    ></Tile>
                    <Tile
                    icon="bxl bx-express-js"
                    color="#303030"
                    text="Express.js"
                    ></Tile>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

    .component {
        margin-top: 7rem;
        width: 100vw;
        overflow: hidden;
        display: flex;
        justify-content: center;
        border-top: solid 0.1rem var(--low-contrast-30);
        transition: border 0.2s;
    }

    .content {
        display: flex;
        justify-content: stretch;
        align-items: center;
        position: relative;
        width: 70%;
        margin-top: 5rem;
        overflow: hidden
    }

    .additive {
        color: var(--additive);
    }

    .section {
        flex: 1;
        width: 50%;
    }

    .right {
        display: flex;
        justify-content: center;
        align-items: center;
        
        mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, black 30%, black 70%, rgba(0, 0, 0, 0) 100%);
        max-height: 90vh;
        transition: opacity 0.5s;
    }

    h2 {
        color: var(--text-main);
        transition: color 0.2s, opacity 0.5s, transform 0.5s;
        font-size: 2.2rem;
        line-height: 5rem;
        margin-bottom: 3rem;
    }

    p {
        font-size: 1.1rem;
        color: var(--text-lighter);
        flex: 6;
        transition: color 0.2s, opacity 0.5s, transform 0.5s;
    }

    .box {
        display: flex;
        justify-content: stretch;
        align-items: center;
    }

    .link {
        background-color: var(--low-contrast-30);
        margin-inline: 2rem;
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

    .tileContainer {
        /* background-color: red; */
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 80%;
    }

    @media screen and (max-width: 1400px){
        .content {
            width: 90%;
        }

        h2 {
            line-height: 4rem;
            font-size: 2rem;
        }

        p {
            margin-top: 0;
            font-size: 1.1rem;
        }

        .box {
            flex-direction: column;
            align-items: flex-start;
        }

        .link {
            margin-top: 2rem;
            margin-left: 0;
        }
    }

    @media screen and (max-width: 1000px){

        h2 {
            margin-left: 0;
        }

        .section {
            width: 100%;
        }

        .right {
            position: absolute;
            top: 18rem;
            bottom: 0
        }

        .box {
            align-items: center;
            margin-left: 0
        }

        .link {
            margin-block: 15rem 20rem;
            margin-inline: 0;
            z-index: 2;
            font-size: 1.4rem;
            padding: 1.5rem 3rem;
            backdrop-filter: blur(1rem);
            background-color: var(--low-contrast-15);
            border: solid 0.1rem var(--low-contrast-30);
        }

        .link:hover {
            background-color: var(--low-contrast-30);
        }

        .tileContainer {
            width: 100%;
            justify-content: center;
            opacity: 0.3;
        }

    }

</style>