<template>
    <div class="tile" data-aos="anim-up">
        <div class="left" :style="`background-color: ${color};`" v-if="['Tauri', 'Google Fonts', 'ScrollMotion', 'Chart.js', 'Pinia', 'I18n'].includes(name)">
            <div class="iconAlt iconTauri" v-if="name == 'Tauri' "></div>
            <div class="iconAlt iconGoogleFonts" v-if="name == 'Google Fonts' "></div>
            <div class="iconAlt iconScrollMotion" v-if="name == 'ScrollMotion' "></div>
            <div class="iconAlt iconChartJs" v-if="name == 'Chart.js' "></div>
            <div class="iconAlt iconPinia" v-if="name == 'Pinia' "></div>
            <div class="iconAlt iconI18n" v-if="name == 'I18n' "></div>
        </div>
        <div class="left" :style="`background-color: ${color};`" v-else>
            <i class="icon" :class="icon"></i>
        </div>
        <div class="right">
            <a :href="link" class="name" target="_blank">{{ name }}</a>
            <p class="description">{{ description }}</p>
        </div>
    </div>
</template>

<script setup>

const { icon, name, description, color, link } = defineProps(['icon', 'name', 'description', 'color', 'link'])

</script>

<style scoped>

    .tile {
        border-radius: 0.5rem;
        display: flex;
        justify-content: stretch;
        align-items: stretch;
        margin: 1rem;
        width: calc(100% / 2 - 2rem);
        box-sizing: border-box;
        overflow: hidden;
        transition: opacity 0.5s, transform 0.5s;
        box-shadow: 0 0 5rem transparent;
    }

    .description {
        margin: 0;
        font-size: 1rem;
        color: var(--text-light);
        transition: color 0.2s;
        margin-top: 0.2rem;
    }

    .name {
        color: var(--text-main);
        font-size: 1.5rem;
        line-height: 3rem;
        transition: color 0.2s;
        font-weight: 500;
        text-decoration: none;
    }
    
    .left {
        display: flex;
        justify-items: center;
        align-items: center;
        padding-inline: 0.5rem;
    }

    .right {
        flex: 1;
        padding: 1rem;
        border-radius: 0 0.5rem 0.5rem 0;
        transition: border 0.2s, background-color 0.2s;
        background-color: var(--low-contrast-15);
        border: solid 0.1rem transparent;
        border-left: solid 0.1rem transparent;
    }

    .tile:hover .right {
        background-color: transparent;
        border: solid 0.1rem var(--low-contrast-30);
        border-left: solid 0.1rem transparent;
    }

    .icon {
        color: var(--bg);
        font-size: 3rem;
        width: 3rem;
        transition: color 0.2s;
        fill: currentColor;
    }

    .iconAlt {
        width: 3rem;
        height: 3rem;
        background-color: var(--bg);
        transition: background-color 0.2s;
    }

    .iconTauri {
        -webkit-mask: url('/img/icons/tauri.svg') no-repeat center;
        mask: url('/img/icons/tauri.svg') no-repeat center;
    }

    .iconGoogleFonts {
        -webkit-mask: url('/img/icons/googlefonts.svg') no-repeat center;
        mask: url('/img/icons/googlefonts.svg') no-repeat center;
    }

    .iconScrollMotion {
        -webkit-mask: url('/img/logo.svg') no-repeat center;
        mask: url('/img/logo.svg') no-repeat center;
    }

    .iconChartJs {
        -webkit-mask: url('/img/icons/chartjs.svg') no-repeat center;
        mask: url('/img/icons/chartjs.svg') no-repeat center;
    }

    .iconPinia {
        -webkit-mask: url('/img/icons/pinia.svg') no-repeat center;
        mask: url('/img/icons/pinia.svg') no-repeat center;
    }

    .iconI18n {
        -webkit-mask: url('/img/icons/i18n.svg') no-repeat center;
        mask: url('/img/icons/i18n.svg') no-repeat center;
    }

    @media screen and (max-width: 1000px){
        .tile {
            margin-inline: 0;
            width: 100%;
            max-width: 600px;
            height: max-content;
        }

    }

</style>