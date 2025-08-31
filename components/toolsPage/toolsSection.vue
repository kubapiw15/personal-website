<template>
    <div class="component">
        <div class="content">
            <div class="section basics">
                <h2 class="h2" data-aos="fade">{{ $t('toolsPage.title1') }}</h2>
                <div class="tileContainer">
                    <ToolsPageTile
                    name="HTML"
                    icon="bxl bx-html5"
                    color="#E34F26"
                    :description="t('toolsPage.html')"
                    link="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    ></ToolsPageTile>
                    <ToolsPageTile
                    name="CSS"
                    icon="bxl bx-css3"
                    color="#1572B6"
                    :description="t('toolsPage.css')"
                    link="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    ></ToolsPageTile>
                    <ToolsPageTile
                    name="JavaScript"
                    icon="bxl bx-javascript"
                    color="#F7DF1E"
                    :description="t('toolsPage.js')"
                    link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    ></ToolsPageTile>
                    <ToolsPageTile
                    name="Node.js"
                    icon="bxl bx-nodejs"
                    color="#339933"
                    :description="t('toolsPage.nodejs')"
                    link="https://nodejs.org/"
                    ></ToolsPageTile>
                    <ToolsPageTile
                    name="PHP"
                    icon="bxl bx-php"
                    color="#777BB4"
                    :description="t('toolsPage.php')"
                    link="https://www.php.net/"
                    ></ToolsPageTile>
                    <ToolsPageTile
                    name="SQL"
                    icon="bx bx-database-alt"
                    color="#CC2927"
                    :description="t('toolsPage.sql')"
                    link="https://developer.mozilla.org/en-US/docs/Glossary/SQL"
                    ></ToolsPageTile>
                </div>
            </div>
            <div class="section frameworks">
                <h2 class="h2" data-aos="fade">{{ $t('toolsPage.title2') }}</h2>
                <div class="tileContainer">
                    <ToolsPageTile
                    name="Vue.js"
                    icon="bxl bx-vuejs"
                    color="#42B883"
                    :description="t('toolsPage.vuejs')"
                    link="https://vuejs.org/"
                    ></ToolsPageTile>
                    <ToolsPageTile
                    name="Nuxt.js"
                    icon="bxl bx-nuxt-js"
                    color="#00DC82"
                    :description="t('toolsPage.nuxtjs')"
                    link="https://nuxt.com/"
                    ></ToolsPageTile>
                    <ToolsPageTile
                    name="Tauri"
                    icon=""
                    color="#F6AD55"
                    :description="t('toolsPage.tauri')"
                    link="https://v2.tauri.app/"
                    ></ToolsPageTile>
                    <ToolsPageTile
                    name="Express.js"
                    icon="bxl bx-express-js"
                    color="#303030"
                    :description="t('toolsPage.expressjs')"
                    link="https://expressjs.com/"
                    ></ToolsPageTile>
                </div>
            </div>
            <div class="section libraries">
                <h2 class="h2" data-aos="fade">{{ $t('toolsPage.title3') }}</h2>
                <div class="tileContainer">
                    <ToolsPageTile
                    name="Boxicons"
                    icon="bxl bx-boxicons"
                    color="#6c00e3"
                    :description="t('toolsPage.boxicons')"
                    link="https://boxicons.com/"
                    ></ToolsPageTile>
                    <ToolsPageTile
                    name="Google Fonts"
                    icon=""
                    color="#4285F4"
                    :description="t('toolsPage.googlefonts')"
                    link="https://fonts.google.com/"
                    ></ToolsPageTile>
                    <ToolsPageTile
                    name="AOS.js"
                    icon="bx bx-chevron-down-circle"
                    color="#3F51B5"
                    :description="t('toolsPage.aos')"
                    link="https://michalsnik.github.io/aos/"
                    ></ToolsPageTile>
                    <ToolsPageTile
                    name="ScrollMotion"
                    icon=""
                    color="#203579"
                    :description="t('toolsPage.scrollmotion')"
                    link="https://scrollmotion.kubapiw.dev/"
                    ></ToolsPageTile>
                    <ToolsPageTile
                    name="PDFMake"
                    icon="bx bxs-file"
                    color="#D32F2F"
                    :description="t('toolsPage.pdfmake')"
                    link="https://www.npmjs.com/package/pdfmake"
                    ></ToolsPageTile>
                    <ToolsPageTile
                    name="Chart.js"
                    icon=""
                    color="#FF6384"
                    :description="t('toolsPage.chartjs')"
                    link="https://www.chartjs.org/"
                    ></ToolsPageTile>
                    <ToolsPageTile
                    name="Tailwind"
                    icon="bxl bx-tailwind-css"
                    color="#0EA5E9"
                    :description="t('toolsPage.tailwind')"
                    link="https://tailwindcss.com/"
                    ></ToolsPageTile>
                    <ToolsPageTile
                    name="Pinia"
                    icon=""
                    color="#FFD859"
                    :description="t('toolsPage.pinia')"
                    link="https://pinia.vuejs.org/"
                    ></ToolsPageTile>
                    <ToolsPageTile
                    name="I18n"
                    icon=""
                    color="#41B883"
                    :description="t('toolsPage.i18n')"
                    link="https://vue-i18n.intlify.dev/"
                    ></ToolsPageTile>
                    <ToolsPageTile
                    name="Vite PWA"
                    icon="bxl bx-vite-js"
                    color="#646CFF"
                    :description="t('toolsPage.vitepwa')"
                    link="https://vite-pwa-org.netlify.app/"
                    ></ToolsPageTile>

                    <!-- TODO undraw -->
                    <!-- TODO vuedraggable -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const { t } = useI18n()

</script>

<style scoped>
    .component {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border-top: solid 0.1rem var(--low-contrast-30); */
        transition: border-top 0.2s;
    }

    .content {
        width: calc(60% + 2rem);
        height: 100%;
    }

    .section {
        width: 100%;
        padding-block: 2rem 5rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
    }

    .section::before {
        position: absolute;
        content: "";
        width: 100vw;
        height: 1px;
        background-color: var(--low-contrast-30);
        transition: background-color 0.2s;
    }

    .h2 {
        color: var(--text-main);
        font-size: 1.7rem;
        margin-block: 4rem;
        transition: opacity 0.5s, color 0.2s;
        font-weight: 600;
    }

    .tileContainer {
        display: flex;
        align-items: stretch;
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 1400px){
        .content {
            width: calc(80% + 2rem);
        }
    }

    @media screen and (max-width: 1000px){
        .content {
            width: 95%;
        }

        .tileContainer {
            flex-direction: column;
            align-items: center;
        }
    }

</style>