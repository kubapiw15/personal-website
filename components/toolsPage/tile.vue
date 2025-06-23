<template>
    <div class="tile" data-aos="anim-up">
        <div class="left" :style="`background-color: ${color};`" v-if="name == 'Tauri'">
            <div class="iconAlt"></div>
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
        transition: opacity 0.2s, transform 0.2s;
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
        transition: color 0.2s, opacity 0.2s;
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
        -webkit-mask: url('/img/icons/tauri.svg') no-repeat center;
        mask: url('/img/icons/tauri.svg') no-repeat center;
        transition: background-color 0.2s;
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